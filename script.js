/*************************
 * Utilidades
 *************************/
function norm(str) {
  return (str || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/*************************
 * Mostrar pantallas
 *************************/
function mostrarPantalla(id) {
  document.querySelectorAll(".screen").forEach(sec => {
    sec.hidden = sec.id !== "pantalla-" + id;
  });
}

/*************************
 * Esperar a que exista un elemento
 *************************/
function whenExists(selector, callback) {
  const el = document.querySelector(selector);
  if (el) {
    callback(el);
  } else {
    setTimeout(() => whenExists(selector, callback), 50);
  }
}

/*************************
 * Departamentos
 *************************/
function poblarDepartamentos() {
  whenExists("#departamento", select => {
    if (!window.DEPARTAMENTOS || !DEPARTAMENTOS.length) return;

    if (select.options.length > 1) return;

    DEPARTAMENTOS.forEach(dep => {
      const opt = document.createElement("option");
      opt.value = dep;
      opt.textContent = dep;
      select.appendChild(opt);
    });
  });
}

/*************************
 * Turno (desplegable)
 *************************/
function poblarTurno() {
  whenExists("#turno", select => {
    if (select.options.length > 1) return;

    ["Mañana", "Tarde", "Jornada completa", "Vespertino", "Otro"].forEach(t => {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      select.appendChild(opt);
    });
  });
}

/*************************
 * Inicialización
 *************************/
setTimeout(() => {
  mostrarPantalla("datos");
  poblarDepartamentos();
  poblarTurno();
}, 0);
