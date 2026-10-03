import Link from "next/link";import {getDb} from "@/lib/db";export const dynamic="force-dynamic";
export default function P(){const d=getDb();return <section><div className="wrap"><p className="kick">Portfolio</p><h1>Webs que he <em>creado.</em></h1>
<div className="grid">{d.projects.filter((x:any)=>x.visible).map((x:any,i:number)=><div className="card" key={i}><span className="num">{String(i+1).padStart(2,"0")}</span><h3>{x.name}</h3><p className="mut">{x.desc}</p>
{x.url&&<a href={x.url} target="_blank" rel="noopener noreferrer" className="num">Ver web →</a>}</div>)}</div><Link href="/contacto" className="btn">Quiero la mía →</Link></div></section>}
