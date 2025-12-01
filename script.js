
document.addEventListener("DOMContentLoaded", ()=>{
  const depSel = document.getElementById("departamento");
  DEPARTAMENTOS.forEach(d=>{
    const o=document.createElement("option");
    o.value=d; o.textContent=d;
    depSel.appendChild(o);
  });

  const escInput = document.getElementById("escuela");
  const dl = document.getElementById("lista");

  depSel.addEventListener("change", ()=>{
    dl.innerHTML="";
    escInput.value="";
    LISTA_ESCUELAS.filter(e=>e.depto===depSel.value)
      .forEach(e=>{
        const o=document.createElement("option");
        o.value=e.label; dl.appendChild(o);
      });
  });

  document.getElementById("guardar").addEventListener("click", ()=>{
    alert("Guardado localmente");
  });
});
