"use client";import {useState} from "react";
const S:any={services:{t:"Servicios",f:[["name","Servicio"],["desc","Descripción"],["visible","Visible","bool"]],n:{name:"",desc:"",visible:true}},
 projects:{t:"Proyectos",f:[["name","Proyecto"],["desc","Descripción"],["url","Enlace"],["visible","Visible","bool"]],n:{name:"",desc:"",url:"",visible:true}},
 stats:{t:"Cifras",f:[["value","Valor"],["label","Texto"]],n:{value:"",label:""}}};
const L:any={nombre:"Tu nombre",rol:"Rol / profesión",tagline:"Titular principal",subtitulo:"Subtítulo",about:"Texto 'Sobre mí'",telefono:"Teléfono",whatsapp:"WhatsApp (34 + número, sin +)",email:"Email público",direccion:"Dirección"};
export default function Panel({initial}:{initial:any}){
 const [d,setD]=useState(initial);const [tab,setTab]=useState("resumen");const [m,setM]=useState("");
 const save=async()=>{const r=await fetch("/api/admin/data",{method:"PUT",body:JSON.stringify(d)});setM(r.ok?"Guardado ✓":"Error al guardar");setTimeout(()=>setM(""),2500)};
 const set=(k:string,i:number,f:string,v:any)=>setD({...d,[k]:d[k].map((x:any,j:number)=>j===i?{...x,[f]:v}:x)});
 const logout=async()=>{await fetch("/api/login",{method:"DELETE"});location.reload()};
 const T=[["resumen","Resumen"],["services","Servicios"],["projects","Proyectos"],["stats","Cifras"],["settings","Ajustes"],["messages","Mensajes"]];const s=S[tab];
 return <><div style={{display:"flex",justifyContent:"space-between"}}><h2>Panel <em>admin</em></h2><button className="btn o" style={{margin:0}} onClick={logout}>Salir</button></div>
 <div className="tabs">{T.map(([k,t])=><button key={k} className={tab===k?"on":""} onClick={()=>setTab(k)}>{t}</button>)}</div>
 {tab==="resumen"&&<div className="grid"><div className="card"><p className="kick">Servicios visibles</p><div className="stat">{d.services.filter((x:any)=>x.visible).length}</div></div><div className="card"><p className="kick">Mensajes recibidos</p><div className="stat">{d.messages.length}</div></div></div>}
 {s&&<div style={{overflowX:"auto"}}><table><thead><tr>{s.f.map((f:any)=><th key={f[0]}>{f[1]}</th>)}<th/></tr></thead><tbody>
 {d[tab].map((r:any,i:number)=><tr key={i}>{s.f.map(([k,,ty]:any)=><td key={k}>{ty==="bool"?<input type="checkbox" checked={r[k]} onChange={e=>set(tab,i,k,e.target.checked)}/>:<input value={r[k]} onChange={e=>set(tab,i,k,e.target.value)}/>}</td>)}
 <td><button onClick={()=>confirm("¿Eliminar?")&&setD({...d,[tab]:d[tab].filter((_:any,j:number)=>j!==i)})}>🗑</button></td></tr>)}</tbody></table>
 <button className="btn o" onClick={()=>setD({...d,[tab]:[...d[tab],{...s.n}]})}>+ Añadir</button></div>}
 {tab==="settings"&&<div className="card" style={{maxWidth:640}}>{Object.keys(L).map(k=><div key={k}><label>{L[k]}</label><input value={d.settings[k]||""} onChange={e=>setD({...d,settings:{...d.settings,[k]:e.target.value}})}/></div>)}</div>}
 {tab==="messages"&&d.messages.map((x:any,i:number)=><div className="card" key={i} style={{marginBottom:10}}><p className="kick">{x.servicio} · {new Date(x.fecha).toLocaleString("es")}</p><b>{x.nombre}</b> {x.empresa&&`(${x.empresa})`} <span className="mut">{x.email}</span><p>{x.mensaje}</p><button onClick={()=>setD({...d,messages:d.messages.filter((_:any,j:number)=>j!==i)})}>🗑 Quitar</button></div>)}
 {tab!=="resumen"&&<button className="btn" onClick={save}>Guardar cambios</button>} <span>{m}</span></>}
