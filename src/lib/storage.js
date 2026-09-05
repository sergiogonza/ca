export const seedProfiles=[
{id:"demo-1",displayName:"Laura",businessName:"Laura Arquitectura",headline:"Diseño arquitectónico, remodelaciones y visualización 3D",description:"Arquitectura y diseño de espacios.",category:"Arquitectura",skills:["Arquitectura","Render 3D","Remodelación"],city:"Manizales",whatsapp:"573001112233",instagram:"laura.arq",remoteAvailable:true,onsiteAvailable:true,status:"approved",createdAt:"2026-09-05T00:00:00Z"},
{id:"demo-2",displayName:"Julián",businessName:"Julián Web Studio",headline:"Páginas web, tiendas online y automatización para negocios",description:"Desarrollo web para pequeñas empresas.",category:"Tecnología",skills:["Web","E-commerce","Automatización"],city:"Pereira",whatsapp:"573002223344",instagram:"julianweb",remoteAvailable:true,onsiteAvailable:false,status:"approved",createdAt:"2026-09-05T00:00:00Z"},
{id:"demo-3",displayName:"Carlos",businessName:"Carlos Soluciones",headline:"Plomería, reparaciones y mantenimiento para hogar y negocio",description:"Soluciones para el hogar.",category:"Hogar",skills:["Plomería","Reparaciones","Mantenimiento"],city:"Manizales",whatsapp:"573004445566",instagram:"",remoteAvailable:false,onsiteAvailable:true,status:"approved",createdAt:"2026-09-05T00:00:00Z"}
]
const KEY="camellando_profiles_v2"
const browser=()=>typeof window!=="undefined"
export function getProfiles(){if(!browser())return seedProfiles;try{const raw=window.localStorage.getItem(KEY);if(!raw){window.localStorage.setItem(KEY,JSON.stringify(seedProfiles));return seedProfiles}return JSON.parse(raw)}catch{return seedProfiles}}
export function saveProfiles(items){if(browser())window.localStorage.setItem(KEY,JSON.stringify(items))}
export function addProfile(profile){const id=(typeof crypto!=="undefined"&&crypto.randomUUID)?crypto.randomUUID():"profile-"+Date.now();const item={...profile,id,status:"pending",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};saveProfiles([item,...getProfiles()]);return item}
export function updateProfile(id,patch){const items=getProfiles().map(p=>p.id===id?{...p,...patch,updatedAt:new Date().toISOString()}:p);saveProfiles(items);return items}
export function removeProfile(id){const items=getProfiles().filter(p=>p.id!==id);saveProfiles(items);return items}
export function approvedProfiles(items){return items.filter(p=>p.status==="approved")}
