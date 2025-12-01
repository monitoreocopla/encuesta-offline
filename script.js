// Normalización simple para comparaciones
function norm(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

let pantallaActual = "datos";

function mostrarPantalla(idPantalla) {
  document.querySelectorAll(".screen").forEach(sec => {
    sec.hidden = sec.id !== "pantalla-" + idPantalla;
  });
  pantallaActual = idPantalla;
}

// Validaciones en vivo: DNI y correo
function configurarValidaciones() {
  document.querySelectorAll("[data-dni='1']").forEach(el => {
    el.addEventListener("input", () => {
      const soloNumeros = el.value.replace(/\D/g, "");
      if (el.value !== soloNumeros) {
        el.value = soloNumeros;
      }
    });
  });

  document.querySelectorAll("[data-mail='1']").forEach(el => {
    el.addEventListener("input", () => {
      const texto = el.value.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (texto && !regex.test(texto)) {
        el.classList.add("input-error");
      } else {
        el.classList.remove("input-error");
      }
    });
  });
}

// Carga de departamentos desde DEPARTAMENTOS
function poblarDepartamentos() {
  const select = document.getElementById("departamento");
  DEPARTAMENTOS.forEach(dep => {
    const opt = document.createElement("option");
    opt.value = dep;
    opt.textContent = dep;
    select.appendChild(opt);
  });
}

// Autocompletado de escuelas mediante datalist
function configurarEscuelas() {
  const selDep = document.getElementById("departamento");
  const inputEscuela = document.getElementById("escuela");
  const datalist = document.getElementById("lista-escuelas");
  const cueInput = document.getElementById("cue_anexo");

  function actualizarLista() {
    datalist.innerHTML = "";
    inputEscuela.value = "";
    cueInput.value = "";
    const dep = selDep.value;
    if (!dep) return;

    const filtradas = LISTA_ESCUELAS.filter(e => e.depto === dep);
    filtradas.forEach(e => {
      const opt = document.createElement("option");
      opt.value = e.label;
      datalist.appendChild(opt);
    });
  }

  selDep.addEventListener("change", actualizarLista);

  inputEscuela.addEventListener("change", () => {
    cueInput.value = "";
    const texto = inputEscuela.value.trim();
    const dep = selDep.value;
    if (!texto || !dep) return;

    const encontrada = LISTA_ESCUELAS.find(
      e => e.depto === dep && norm(e.label) === norm(texto)
    );
    if (encontrada) {
      cueInput.value = encontrada.cue;
    }
  });
}

// Lógica de navegación según cargo
function irDesdeDatos() {
  const cargo = document.getElementById("cargo").value;
  if (!cargo) {
    alert("Por favor elegí tu cargo antes de continuar.");
    return;
  }

  if (cargo === "Director/a" || cargo === "Vicedirector/a") {
    mostrarPantalla("directivos");
    return;
  }

  if (cargo === "Docente de grado") {
    mostrarPantalla("docentes");
    return;
  }

  if (cargo === "Directivo con grado a cargo" || cargo === "Personal único") {
    mostrarPantalla("dir-grado");
    return;
  }

  // Otro pasa directo a evaluación
  mostrarPantalla("evaluacion");
}

// Desde las pantallas intermedias siempre se pasa a evaluación
function irAEvaluacion() {
  mostrarPantalla("evaluacion");
}

// Botón "Anterior" en evaluación (dinámico)
function volverDesdeEvaluacion() {
  const cargo = document.getElementById("cargo").value;

  if (cargo === "Director/a" || cargo === "Vicedirector/a") {
    mostrarPantalla("directivos");
    return;
  }

  if (cargo === "Docente de grado") {
    mostrarPantalla("docentes");
    return;
  }

  if (cargo === "Directivo con grado a cargo" || cargo === "Personal único") {
    mostrarPantalla("dir-grado");
    return;
  }

  // Otro vuelve a datos personales
  mostrarPantalla("datos");
}

// Guardado local de respuestas
function guardarRespuestas() {
  const payload = {
    timestamp: new Date().toISOString(),
    apellido: document.getElementById("apellido").value,
    nombre: document.getElementById("nombre").value,
    dni: document.getElementById("dni").value,
    correo: document.getElementById("correo").value,
    cargo: document.getElementById("cargo").value,
    departamento: document.getElementById("departamento").value,
    escuela: document.getElementById("escuela").value,
    cue_anexo: document.getElementById("cue_anexo").value,
    preg_directivos: document.getElementById("preg_directivos")?.value || "",
    preg_docentes: document.getElementById("preg_docentes")?.value || "",
    preg_dir_grado: document.getElementById("preg_dir_grado")?.value || "",
    satisfaccion: document.getElementById("satisfaccion").value,
    comentarios: document.getElementById("comentarios").value
  };

  const prev = JSON.parse(localStorage.getItem("encuesta_respuestas") || "[]");
  prev.push(payload);
  localStorage.setItem("encuesta_respuestas", JSON.stringify(prev));
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  mostrarPantalla("datos");
  configurarValidaciones();
  poblarDepartamentos();
  configurarEscuelas();

  document.getElementById("btn-datos-siguiente")
    .addEventListener("click", irDesdeDatos);

  document.getElementById("btn-directivos-siguiente")
    .addEventListener("click", irAEvaluacion);

  document.getElementById("btn-docentes-siguiente")
    .addEventListener("click", irAEvaluacion);

  document.getElementById("btn-dir-grado-siguiente")
    .addEventListener("click", irAEvaluacion);

  document.querySelector("#pantalla-directivos .secondary[data-prev='datos']")
    .addEventListener("click", () => mostrarPantalla("datos"));

  document.querySelector("#pantalla-docentes .secondary[data-prev='datos']")
    .addEventListener("click", () => mostrarPantalla("datos"));

  document.querySelector("#pantalla-dir-grado .secondary[data-prev='datos']")
    .addEventListener("click", () => mostrarPantalla("datos"));

  document.querySelector("#pantalla-evaluacion .secondary[data-prev='dinamico']")
    .addEventListener("click", volverDesdeEvaluacion);

  document.getElementById("btn-evaluacion-finalizar")
    .addEventListener("click", () => {
      guardarRespuestas();
      mostrarPantalla("final");
    });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(err => {
      console.warn("No se pudo registrar el service worker:", err);
    });
  }
});
