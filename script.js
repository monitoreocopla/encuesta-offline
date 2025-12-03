// populate departamentos
document.addEventListener("DOMContentLoaded", ()=>{
  const dep = document.getElementById("departamento");
  DEPARTAMENTOS.forEach(d=>{
    const op=document.createElement("option");
    op.value=d; op.textContent=d;
    dep.appendChild(op);
  });

  const escInput = document.getElementById("escuela");
  dep.addEventListener("change", ()=>{
    escInput.disabled = dep.value === "";
    escInput.value="";
  });
});
