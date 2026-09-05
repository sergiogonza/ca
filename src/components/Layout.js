import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "@emotion/styled"

const Shell = styled.div`
  min-height:100vh;
  background:#0d0f14;
  color:#f7f7f5;
`
const Header = styled.header`
  position:sticky;
  top:0;
  z-index:20;
  backdrop-filter:blur(16px);
  background:rgba(13,15,20,.82);
  border-bottom:1px solid rgba(255,255,255,.08);
`
const Nav = styled.nav`
  max-width:1240px;
  margin:0 auto;
  padding:16px 20px;
  display:flex;
  gap:10px;
  align-items:center;
  a{color:#c7cad2;text-decoration:none;padding:10px 12px;border-radius:10px}
  a:hover{color:#fff;background:#171a22}
  .brand{margin-right:auto;color:#fff;font-weight:800;font-size:24px;letter-spacing:-.03em}
  .publish{background:#b6f4dc;color:#111!important;font-weight:700}
  @media(max-width:640px){flex-wrap:wrap;.brand{width:100%}}
`
const Footer = styled.footer`
  max-width:1240px;
  margin:60px auto 0;
  padding:28px 20px 42px;
  color:#7f8594;
  border-top:1px solid rgba(255,255,255,.08);
  font-size:13px;
`

export default function Layout({children,title="Camellando",description="Directorio de talento, oficios y servicios."}){
  return <Shell>
    <Helmet>
      <html lang="es"/>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="theme-color" content="#0d0f14"/>
    </Helmet>
    <Header>
      <Nav>
        <Link className="brand" to="/">Camellando</Link>
        <Link to="/">Explorar</Link>
        <Link className="publish" to="/publicar">Publicar</Link>
        <Link to="/admin">Admin</Link>
      </Nav>
    </Header>
    <main>{children}</main>
    <Footer>Camellando · conecta talento, oficios y servicios.</Footer>
  </Shell>
}
