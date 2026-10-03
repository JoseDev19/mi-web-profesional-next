import Link from "next/link";import {getDb} from "@/lib/db";export const dynamic="force-dynamic";
export default function P(){const d=getDb();return <section><div className="wrap"><p className="kick">Servicios</p><h1>Todo para tu <em>presencia online.</em></h1>
<div className="grid">{d.services.filter((x:any)=>x.visible).map((x:any,i:number)=><div className="card" key={i}><span className="num">{String(i+1).padStart(2,"0")}</span><h3>{x.name}</h3><p className="mut">{x.desc}</p></div>)}</div>
<Link href="/contacto" className="btn">Pide tu web →</Link></div></section>}
