
function norm(str) {
  return (str || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function mostrarPantalla(idPantalla) {
  document.querySelectorAll(".screen").forEach(sec => {
    sec.hidden = sec.id !== "pantalla-" + idPantalla;
  });
}

function configurarValidaciones() {
  document.querySelectorAll("[data-dni='1']").forEach(el => {
    el.addEventListener("input", () => {
      const solo = el.value.replace(/\D/g, "");
      if (el.value !== solo) el.value = solo;
    });
  });

  document.querySelectorAll("[data-mail='1']").forEach(el => {
    el.addEventListener("input", () => {
      const texto = el.value.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (texto && !regex.test(texto)) el.classList.add("input-error");
      else el.classList.remove("input-error");
    });
  });
}

function poblarDepartamentos() {
  const intentar = () => {
    const select = document.getElementById("departamento");

    if (!select) {
      // todavía no existe → reintenta
      setTimeout(intentar, 50);
      return;
    }

    // evitar duplicados
    if (select.options.length > 1) return;

    if (!window.DEPARTAMENTOS || !DEPARTAMENTOS.length) {
      console.error("DEPARTAMENTOS vacío o no definido");
      return;
    }

    DEPARTAMENTOS.forEach(dep => {
      const opt = document.createElement("option");
      opt.value = dep;
      opt.textContent = dep;
      select.appendChild(opt);
    });
  };

  intentar();
}


  // Evitar duplicados
  if (select.options.length > 1) return;

  DEPARTAMENTOS.forEach(dep => {
    const opt = document.createElement("option");
    opt.value = dep;
    opt.textContent = dep;
    select.appendChild(opt);
  });
}


function configurarEscuelas() {
  const selDep = document.getElementById("departamento");
  const inputEscuela = document.getElementById("escuela");
  const datalist = document.getElementById("lista-escuelas");
  const cueInput = document.getElementById("cue_anexo");

  if (!selDep || !inputEscuela || !datalist || !cueInput || !window.LISTA_ESCUELAS) return;

  inputEscuela.disabled = true;

  selDep.addEventListener("change", () => {
    datalist.innerHTML = "";
    inputEscuela.value = "";
    cueInput.value = "";

    if (selDep.value) {
      inputEscuela.disabled = false;
      inputEscuela.placeholder = "Escribí para buscar (nombre o número)";
    } else {
      inputEscuela.disabled = true;
      inputEscuela.placeholder = "";
    }
  });

  inputEscuela.addEventListener("input", () => {
    const texto = norm(inputEscuela.value);
    const dep = selDep.value;
    datalist.innerHTML = "";
    cueInput.value = "";
    if (!dep || texto.length < 3) return;

    LISTA_ESCUELAS
      .filter(e => e.depto === dep && norm(e.label).includes(texto))
      .forEach(e => {
        const opt = document.createElement("option");
        opt.value = e.label;
        datalist.appendChild(opt);
      });
  });

  inputEscuela.addEventListener("change", () => {
    const dep = selDep.value;
    const texto = norm(inputEscuela.value);
    const encontrada = LISTA_ESCUELAS.find(
      e => e.depto === dep && norm(e.label) === texto
    );
    cueInput.value = encontrada ? encontrada.cue : "";
  });
}

function irDesdeDatos() {
  const cargoSel = document.getElementById("q8");
  if (!cargoSel) {
    mostrarPantalla("evaluacion");
    return;
  }
  const cargo = cargoSel.value;
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
  // Otro -> directo a evaluación
  mostrarPantalla("evaluacion");
}

function irAEvaluacion() {
  mostrarPantalla("evaluacion");
}

function volverDesdeEvaluacion() {
  const cargoSel = document.getElementById("q8");
  if (!cargoSel) {
    mostrarPantalla("datos");
    return;
  }
  const cargo = cargoSel.value;
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
  mostrarPantalla("datos");
}

function recolectarRespuestas() {
  const datos = {};
  const inputs = document.querySelectorAll("input, select, textarea");
  inputs.forEach(el => {
    if (!el.name && !el.id) return;
    const key = el.name || el.id;
    if (el.type === "radio") {
      if (el.checked) datos[key] = el.value;
    } else if (el.type === "checkbox") {
      if (!datos[key]) datos[key] = [];
      if (el.checked) datos[key].push(el.value);
    } else {
      datos[key] = el.value;
    }
  });
  // timestamp
  datos["fecha"] = new Date().toISOString();
  return datos;
}

function guardarRespuestas() {
  const payload = recolectarRespuestas();
  const prev = JSON.parse(localStorage.getItem("encuesta_respuestas") || "[]");
  prev.push(payload);
  localStorage.setItem("encuesta_respuestas", JSON.stringify(prev));
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarPantalla("datos");
  configurarValidaciones();
  poblarDepartamentos();
  configurarEscuelas();

  const btnDatosSig = document.getElementById("btn-datos-siguiente");
  if (btnDatosSig) btnDatosSig.addEventListener("click", irDesdeDatos);

  document.querySelectorAll(".siguiente-evaluacion").forEach(btn => {
    btn.addEventListener("click", irAEvaluacion);
  });

  document.querySelectorAll("#pantalla-directivos .secondary[data-prev='datos'], #pantalla-docentes .secondary[data-prev='datos'], #pantalla-dir-grado .secondary[data-prev='datos']").forEach(btn => {
    btn.addEventListener("click", () => mostrarPantalla("datos"));
  });

  const volverEval = document.querySelector("#pantalla-evaluacion .secondary[data-prev='dinamico']");
  if (volverEval) volverEval.addEventListener("click", volverDesdeEvaluacion);

  const btnFin = document.getElementById("btn-evaluacion-finalizar");
  if (btnFin) btnFin.addEventListener("click", () => {
    guardarRespuestas();
    mostrarPantalla("final");
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
});

// Fallback de seguridad: ejecutar siempre
setTimeout(() => {
  try {
    poblarDepartamentos();
    configurarEscuelas();
    mostrarPantalla("datos");
  } catch (e) {
    console.error("Error inicializando encuesta:", e);
  }
}, 0);

