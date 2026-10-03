import Form from "./Form";import {getDb} from "@/lib/db";export const dynamic="force-dynamic";
export default function P(){const d=getDb();const s=d.settings;return <section><div className="wrap"><p className="kick">Contacto</p><h1>Hablemos de tu <em>web.</em></h1>
<div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:40}}><div><p>✉️ {s.email}</p><p>📞 {s.telefono}</p><p>📍 {s.direccion}</p><p className="mut" style={{marginTop:14}}>Cuéntame qué necesitas y te respondo en menos de 24 horas.</p></div>
<Form servicios={d.services.filter((x:any)=>x.visible).map((x:any)=>x.name)}/></div></div></section>}
