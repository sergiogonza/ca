import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import {approvedProfiles,getProfiles} from "../lib/storage"

const categories=["Todas","Diseño","Tecnología","Hogar","Construcción","Arquitectura","Transporte","Eventos","Marketing","Educación","Otros"]
const Page=styled.div`max-width:1240px;margin:0 auto;padding:38px 20px 80px`
const Hero=styled.section`padding:70px 0 36px;text-align:center`
const Eyebrow=styled.div`font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#8e95a5;margin-bottom:18px`
const H1=styled.h1`font-size:clamp(58px,10vw,116px);line-height:.88;letter-spacing:-.055em;margin:0 0 24px`
const Lead=styled.p`max-width:760px;margin:0 auto 30px;color:#b9bec9;font-size:18px;line-height:1.7`
const Search=styled.div`display:grid;grid-template-columns:1fr 220px;gap:10px;max-width:900px;margin:0 auto;@media(max-width:700px){grid-template-columns:1fr}`
const Input=styled.input`width:100%;padding:17px 18px;background:#171a22;color:#fff;border:1px solid #2a2f3a;border-radius:12px;outline:none`
const Pills=styled.div`display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin:24px 0 48px`
const Pill=styled.button`border:1px solid #313743;border-radius:999px;padding:9px 13px;cursor:pointer;background:${p=>p.active?"#b6f4dc":"#171a22"};color:${p=>p.active?"#111":"#d9dce3"}`
const Grid=styled.div`display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;@media(max-width:960px){grid-template-columns:repeat(2,minmax(0,1fr))}@media(max-width:640px){grid-template-columns:1fr}`
const Card=styled.article`background:#171a22;border:1px solid #242936;border-radius:18px;padding:22px`
const Cat=styled.div`color:#9fe7d0;font-size:12px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px`
const Name=styled.h3`font-size:27px;letter-spacing:-.035em;margin:0 0 8px`
const Desc=styled.p`color:#b9bec9;line-height:1.6;min-height:76px`
const Tags=styled.div`display:flex;gap:7px;flex-wrap:wrap;margin:16px 0`
const Tag=styled.span`border:1px solid #343a46;border-radius:999px;padding:7px 9px;font-size:12px;color:#d8dbe2`
const Actions=styled.div`display:flex;gap:8px;a{flex:1;text-align:center;text-decoration:none;padding:12px;border-radius:10px;font-weight:700}.wa{background:#b6f4dc;color:#111}.ig{background:#222633;color:#fff}`
const CTA=styled.section`margin-top:70px;background:#b6f4dc;color:#111;border-radius:20px;padding:36px;display:grid;grid-template-columns:1fr auto;gap:28px;align-items:center;@media(max-width:700px){grid-template-columns:1fr}a{background:#111;color:#fff;text-decoration:none;padding:14px 18px;border-radius:10px;font-weight:700}`

export default function HomePage(){
  const[profiles,setProfiles]=React.useState([])
  const[search,setSearch]=React.useState("")
  const[city,setCity]=React.useState("")
  const[category,setCategory]=React.useState("Todas")
  React.useEffect(()=>setProfiles(approvedProfiles(getProfiles())),[])
  const q=search.toLowerCase().trim(),c=city.toLowerCase().trim()
  const filtered=profiles.filter(p=>{const hay=[p.displayName,p.businessName,p.headline,p.description,p.category,p.city,(p.skills||[]).join(" ")].join(" ").toLowerCase();return(!q||hay.includes(q))&&(!c||(p.city||"").toLowerCase().includes(c))&&(category==="Todas"||p.category===category)})
  return <Layout>
    <Page>
      <Hero><Eyebrow>Talento · Oficios · Servicios</Eyebrow><H1>Camellando</H1><Lead>Encuentra personas que saben hacerlo. Busca por oficio, habilidad, categoría o ciudad y contacta directamente.</Lead><Search><Input placeholder="Diseño web, plomería, acarreos..." value={search} onChange={e=>setSearch(e.target.value)}/><Input placeholder="Ciudad" value={city} onChange={e=>setCity(e.target.value)}/></Search></Hero>
      <Pills>{categories.map(item=><Pill key={item} active={category===item} onClick={()=>setCategory(item)}>{item}</Pill>)}</Pills>
      <h2>Personas que están camellando</h2><p style={{color:"#8e95a5",marginTop:-6,marginBottom:22}}>{filtered.length} perfiles publicados</p>
      <Grid>{filtered.map(p=><Card key={p.id}><Cat>{p.category} · {p.city}</Cat><Name>{p.businessName||p.displayName}</Name><Desc>{p.headline}</Desc><Tags>{(p.skills||[]).map(s=><Tag key={s}>{s}</Tag>)}{p.remoteAvailable?<Tag>Remoto</Tag>:null}</Tags><Actions>{p.whatsapp?<a className="wa" href={"https://wa.me/"+p.whatsapp.replace(/\D/g,"")+"?text="+encodeURIComponent("Hola, vi tu perfil en Camellando y me interesa tu trabajo.")} target="_blank" rel="noreferrer">WhatsApp</a>:null}{p.instagram?<a className="ig" href={"https://instagram.com/"+p.instagram.replace("@","")} target="_blank" rel="noreferrer">Instagram</a>:null}</Actions></Card>)}</Grid>
      <CTA><div><Eyebrow style={{color:"#111"}}>¿Sabes hacer algo?</Eyebrow><h2 style={{fontSize:40,letterSpacing:"-.04em",margin:"0 0 8px"}}>Publica tu talento.</h2><p style={{margin:0,lineHeight:1.6}}>Crea tu perfil y deja que otros te encuentren.</p></div><a href="/publicar">Crear mi perfil</a></CTA>
    </Page>
  </Layout>
}
