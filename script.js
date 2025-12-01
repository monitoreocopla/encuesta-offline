
document.addEventListener("DOMContentLoaded", () => {

  // DNI solo números
  document.querySelectorAll("[data-dni='1']").forEach(el => {
    el.addEventListener("input", () => {
      el.value = el.value.replace(/\D/g, "");
    });
  });

  // Email estructura válida
  document.querySelectorAll("[data-mail='1']").forEach(el => {
    el.addEventListener("input", () => {
      const v = el.value.trim();
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      el.classList.toggle("input-error", v && !ok);
    });
  });

  // Guardar y avanzar
  document.getElementById("btn-01-next").addEventListener("click", () => {
    const data = {
      timestamp: new Date().toISOString(),
      nombre: document.getElementById("nombre").value,
      dni: document.getElementById("dni").value,
      email: document.getElementById("email").value,
      cargo: document.getElementById("Q8").value
    };

    const prev = JSON.parse(localStorage.getItem("encuesta_respuestas") || "[]");
    prev.push(data);
    localStorage.setItem("encuesta_respuestas", JSON.stringify(prev));

    document.getElementById("screen-01").hidden = true;
    document.getElementById("screen-final").hidden = false;
  });
});
