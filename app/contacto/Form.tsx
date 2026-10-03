"use client";import {useState} from "react";
export default function Form({servicios}:{servicios:string[]}){const [s,setS]=useState("");
 async function go(e:React.FormEvent<HTMLFormElement>){e.preventDefault();const f=e.currentTarget;setS("load");
  const x=await fetch("/api/contact",{method:"POST",body:JSON.stringify(Object.fromEntries(new FormData(f)))});setS(x.ok?"ok":"err");if(x.ok)f.reset()}
 return <form onSubmit={go} className="card"><label>Nombre</label><input name="nombre" required/><label>Email</label><input name="email" type="email" required/><label>Negocio / empresa</label><input name="empresa"/>
 <label>Servicio de interés</label><select name="servicio"><option>Otro / no lo sé</option>{servicios.map(x=><option key={x}>{x}</option>)}</select>
 <label>Mensaje</label><textarea name="mensaje" rows={5} required/><button className="btn" style={{margin:0}} disabled={s==="load"}>{s==="load"?"Enviando...":"Enviar mensaje"}</button>
 {s==="ok"&&<p style={{color:"var(--a)",marginTop:12}}>¡Recibido! Te responderé pronto.</p>}{s==="err"&&<p style={{color:"#f66",marginTop:12}}>No se pudo enviar. Escríbeme por WhatsApp.</p>}</form>}
