let productos = [];
fetch('precios.csv').then(r=>r.text()).then(t=>{
 let lineas=t.trim().split('\n');
 lineas.shift();
 lineas.forEach(l=>{
  let d=l.split(',');
  productos.push({codigo:d[0].trim(),descripcion:d[1].trim(),precio:d[2].trim()});
 });
});
function buscar(){
 let q=document.getElementById('busqueda').value.toLowerCase();
 let res=document.getElementById('resultado');
 if(q.length<1){res.innerHTML='';return;}
 let f=productos.filter(p=>p.codigo.toLowerCase().includes(q) || p.descripcion.toLowerCase().includes(q));
 if(f.length==0){res.innerHTML='No encontrado';return;}
 res.innerHTML=f.map(p=>`<div style="padding:15px;background:white;margin-top:10px;border-radius:10px"><b>${p.descripcion}</b><br>Codigo: ${p.codigo}<br><b style="color:green;font-size:20px">$${p.precio}</b></div>`).join('');
}