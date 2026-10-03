import Link from "next/link";import {getDb} from "@/lib/db";export const dynamic="force-dynamic";
export default function Home(){const d=getDb();const s=d.settings;return <>
<section className="hero"><div className="wrap"><p className="kick">{s.rol}</p><h1>{s.tagline}</h1><p className="mut" style={{maxWidth:600,marginTop:20}}>{s.subtitulo}</p>
<Link href="/contacto" className="btn">Pide tu web →</Link><Link href="/servicios" className="btn o">Ver servicios</Link>
<div className="grid" style={{marginTop:60}}>{d.stats.map((x:any,i:number)=><div key={i}><div className="stat">{x.value}</div><p className="mut">{x.label}</p></div>)}</div></div></section>
<section className="alt"><div className="wrap"><p className="kick">Servicios</p><h2>Lo que <em>hago</em> por tu negocio.</h2><p className="mut" style={{maxWidth:640,marginTop:14}}>{s.about}</p>
<div className="grid">{d.services.filter((x:any)=>x.visible).map((x:any,i:number)=><div className="card" key={i}><span className="num">{String(i+1).padStart(2,"0")}</span><h3>{x.name}</h3><p className="mut">{x.desc}</p></div>)}</div></div></section>
<section><div className="wrap"><p className="kick">Portfolio</p><h2>Proyectos <em>recientes.</em></h2><div className="grid">{d.projects.filter((x:any)=>x.visible).map((x:any,i:number)=><div className="card" key={i}><span className="num">{String(i+1).padStart(2,"0")}</span><h3>{x.name}</h3><p className="mut">{x.desc}</p></div>)}</div><Link href="/proyectos" className="btn o">Ver todos →</Link></div></section>
<section style={{textAlign:"center"}}><div className="wrap"><p className="kick">¿Tienes una idea?</p><h2>Hablemos de <em>tu web.</em></h2><Link href="/contacto" className="btn">Contactar ahora →</Link></div></section></>}
