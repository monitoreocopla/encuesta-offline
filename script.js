// ==============================
// Datos de ejemplo de escuelas
// Reemplazá esto por tu JSON real
// ==============================
const listaEscuelas = [
  { label: "Escuela N° 1 - Depto A", depto: "Depto A", cue: "300000100-0" },
  { label: "Escuela N° 2 - Depto A", depto: "Depto A", cue: "300000200-0" },
  { label: "Escuela N° 3 - Depto B", depto: "Depto B", cue: "300000300-0" },
  { label: "Escuela N° 4 - Depto C", depto: "Depto C", cue: "300000400-0" }
];

// ==============================
// Utilidad: normalizador (acentos, mayúsculas/minúsculas)
// ==============================
function norm(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// ==============================
// Manejo de pantallas
// ==============================
let currentScreenId = "screen-01";

function showScreen(id) {
  const all = document.querySelectorAll(".screen");
  all.forEach(s => {
    if (s.id === id) {
      s.hidden = false;
    } else {
      s.hidden = true;
    }
  });
  currentScreenId = id;
}

// Lógica de navegación según cargo desde la pantalla 01
function nextFromDatosPersonales() {
  const cargo = document.getElementById("Q8").value;

  if (!cargo) {
    alert("Por favor, seleccioná tu cargo.");
    return;
  }

  // 02 - Directivos (solo Director/a y Vicedirector/a)
  if (cargo === "Director/a" || cargo === "Vicedirector/a") {
    showScreen("screen-02-directivos");
    return;
  }

  // 03 - Docentes (solo Docente de grado)
  if (cargo === "Docente de grado") {
    showScreen("screen-03-docentes");
    return;
  }

  // 04 - Directivos con grado a cargo / Personal único
  if (cargo === "Directivo con grado a cargo" || cargo === "Personal único") {
    showScreen("screen-04-dir-grado");
    return;
  }

  // "Otro" va directo a 05 - Evaluación
  showScreen("screen-05-eval");
}

// Desde pantallas intermedias, siempre se va a 05
function nextToEvalFrom(screenOrigin) {
  showScreen("screen-05-eval");
}

// Anterior desde 05 es "dinámico":
// - si cargo Director/a o Vicedirector/a → 02
// - si cargo Docente de grado → 03
// - si cargo Directivo con grado a cargo o Personal único → 04
// - si cargo Otro → 01
function prevFromEval() {
  const cargo = document.getElementById("Q8").value;

  if (cargo === "Director/a" || cargo === "Vicedirector/a") {
    showScreen("screen-02-directivos");
    return;
  }

  if (cargo === "Docente de grado") {
    showScreen("screen-03-docentes");
    return;
  }

  if (cargo === "Directivo con grado a cargo" || cargo === "Personal único") {
    showScreen("screen-04-dir-grado");
    return;
  }

  // Otro
  showScreen("screen-01");
}

// ==============================
// Validaciones en vivo: DNI y correo
// ==============================
function setupValidations() {
  // DNI: solo números
  document.querySelectorAll("[data-dni='1']").forEach(el => {
    el.addEventListener("input", () => {
      const onlyDigits = el.value.replace(/\D/g, "");
      if (el.value !== onlyDigits) {
        el.value = onlyDigits;
      }
    });
  });

  // Email: formato básico
  document.querySelectorAll("[data-mail='1']").forEach(el => {
    el.addEventListener("input", () => {
      const mail = el.value.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (mail && !regex.test(mail)) {
        el.classList.add("input-error");
      } else {
        el.classList.remove("input-error");
      }
    });
  });
}

// ==============================
// Autocompletado simple Escuela según Departamento
// usando <datalist>
// ==============================
function setupEscuelasAutocomplete() {
  const deptoSelect = document.getElementById("departamento");
  const escuelaInput = document.getElementById("escuela");
  const datalist = document.getElementById("escuelas-list");
  const cueHidden = document.getElementById("cue_anexo");

  function refreshEscuelasOptions() {
    const depto = deptoSelect.value;
    datalist.innerHTML = "";

    if (!depto) return;

    const filtradas = listaEscuelas.filter(e => e.depto === depto);
    filtradas.forEach(e => {
      const opt = document.createElement("option");
      opt.value = e.label;
      datalist.appendChild(opt);
    });
  }

  deptoSelect.addEventListener("change", () => {
    escuelaInput.value = "";
    cueHidden.value = "";
    refreshEscuelasOptions();
  });

  // Cuando cambia el valor de escuela, buscamos el CUE-Anexo
  escuelaInput.addEventListener("change", () => {
    const texto = escuelaInput.value.trim();
    const depto = deptoSelect.value;
    if (!texto || !depto) {
      cueHidden.value = "";
      return;
    }

    const posible = listaEscuelas.find(
      e => e.depto === depto && norm(e.label) === norm(texto)
    );

    // Si encontramos coincidencia exacta (normalizada), guardamos CUE
    if (posible) {
      cueHidden.value = posible.cue;
    } else {
      cueHidden.value = "";
    }
  });

  refreshEscuelasOptions();
}

// ==============================
// Guardado simple local (puede reemplazarse por IndexedDB)
// ==============================
function saveResponsesLocally() {
  const payload = {
    timestamp: new Date().toISOString(),
    nombre: document.getElementById("nombre").value,
    dni: document.getElementById("dni").value,
    email: document.getElementById("email").value,
    cargo: document.getElementById("Q8").value,
    departamento: document.getElementById("departamento").value,
    escuela: document.getElementById("escuela").value,
    cue_anexo: document.getElementById("cue_anexo").value,
    gestion_directivos: document.getElementById("gestion_directivos")?.value || "",
    preg_docentes: document.getElementById("preg_docentes")?.value || "",
    preg_dir_grado: document.getElementById("preg_dir_grado")?.value || "",
    satisfaccion: document.getElementById("satisfaccion").value,
    comentarios: document.getElementById("comentarios").value
  };

  const prev = JSON.parse(localStorage.getItem("encuesta_respuestas") || "[]");
  prev.push(payload);
  localStorage.setItem("encuesta_respuestas", JSON.stringify(prev));

  console.log("Respuesta guardada localmente:", payload);
}

// ==============================
// Inicialización
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  // Pantalla inicial
  showScreen("screen-01");

  // Validaciones
  setupValidations();

  // Autocompletar escuelas
  setupEscuelasAutocomplete();

  // Botones de navegación
  document.getElementById("btn-01-next").addEventListener("click", nextFromDatosPersonales);
  document.getElementById("btn-02-next").addEventListener("click", () => nextToEvalFrom("02"));
  document.getElementById("btn-03-next").addEventListener("click", () => nextToEvalFrom("03"));
  document.getElementById("btn-04-next").addEventListener("click", () => nextToEvalFrom("04"));

  document.getElementById("btn-05-finalizar").addEventListener("click", () => {
    saveResponsesLocally();
    showScreen("screen-final");
  });

  // Botones "Anterior" fijos que vuelven a 01 desde 02/03/04
  document.querySelectorAll("section[data-screen='02'] .secondary[data-prev='01'], section[data-screen='03'] .secondary[data-prev='01'], section[data-screen='04'] .secondary[data-prev='01']")
    .forEach(btn => {
      btn.addEventListener("click", () => showScreen("screen-01"));
    });

  // Botón "Anterior" dinámico desde evaluación
  document.querySelector("section[data-screen='05'] .secondary[data-prev='dynamic']")
    .addEventListener("click", prevFromEval);

  // Registro de Service Worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(err => {
      console.warn("No se pudo registrar el service worker:", err);
    });
  }
});
