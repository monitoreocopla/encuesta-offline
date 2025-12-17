/**********************
 * Utilidades
 **********************/
function norm(str) {
  return (str || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/**********************
 * Mostrar pantallas
 **********************/
function mostrarPantalla(id) {
  document.querySelectorAll(".screen").forEach(sec => {
    sec.hidden = sec.id !== "pantalla-" + id;
  });
}

/**********************
 * Esperar a que exista un elemento
 **********************/
function whenExists(selector, callback, tries = 0) {
  const el = document.querySelector(selector);
  if (el) {
    callback(el);
  } else if (tries < 100) {
    setTimeout(() => whenExists(selector, callback, tries + 1), 50);
  } else {
    console.error("No se encontró:", selector);
  }
}

/**********************
 * Departamentos
 **********************/
function poblarDepartamentos() {
  whenExists("#departamento", select => {
    if (!window.DEPARTAMENTOS || !DEPARTAMENTOS.length) {
      console.error("DEPARTAMENTOS no disponible");
      return;
    }

    // evitar duplicados
    if (select.options.length > 1) return;

    DEPARTAMENTOS.forEach(dep => {
      const opt = document.createElement("option");
      opt.value = dep;
      opt.textContent = dep;
      select.appendChild(opt);
    });
  });
}

/**********************
 * Escuelas por departamento
 **********************/
function configurarEscuelas() {
  whenExists("#departamento", selDep => {
    whenExists("#escuela", inputEscuela => {
      whenExists("#lista-escuelas", datalist => {
        whenExists("#cue_anexo", cueInput => {

          inputEscuela.disabled = true;

          selDep.addEventListener("change", () => {
            datalist.innerHTML = "";
            inputEscuela.value = "";
            cueInput.value = "";

            if (selDep.value) {
              inputEscuela.disabled = false;
              inputEscuela.placeholder = "Escribí nombre o número de escuela";
            } else {
              inputEscuela.disabled = true;
            }
          });

          inputEscuela.addEventListener("input", () => {
            const texto = norm(inputEscuela.value);
            const dep = selDep.value;
            datalist.innerHTML = "";
            cueInput.value = "";

            if (!dep || texto.length < 3) return;

            LISTA_ESCUELAS
              .filter(e =>
                e.depto === dep &&
                norm(e.label).includes(texto)
              )
              .slice(0, 30)
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

        });
      });
    });
  });
}

/**********************
 * Turno (desplegable)
 **********************/
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

/**********************
 * Validaciones
 **********************/
function configurarValidaciones() {
  document.querySelectorAll("[data-dni]").forEach(el => {
    el.addEventListener("input", () => {
      el.value = el.value.replace(/\D/g, "");
    });
  });

  document.querySelectorAll("[type='email']").forEach(el => {
    el.addEventListener("blur", () => {
      if (el.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) {
        alert("El correo electrónico no tiene un formato válido");
        el.focus();
      }
    });
  });
}

/**********************
 * Navegación por cargo
 **********************/
function irDesdeDatos() {
  const cargo = document.getElementById("q8")?.value;

  if (!cargo) {
    alert("Seleccioná tu cargo para continuar");
    return;
  }

  if (cargo === "Director/a" || cargo === "Vicedirector/a") {
    mostrarPantalla("directivos");
  } else if (cargo === "Docente de grado") {
    mostrarPantalla("docentes");
  } else if (cargo === "Directivo con grado a cargo" || cargo === "Personal único") {
    mostrarPantalla("dir-grado");
  } else {
    mostrarPantalla("evaluacion");
  }
}

function volverAEvaluacion() {
  mostrarPantalla("evaluacion");
}

/**********************
 * Guardar respuestas
 **********************/
function recolectarRespuestas() {
  const data = {};
  document.querySelectorAll("input, select, textarea").forEach(el => {
    if (!el.name && !el.id) return;
    const key = el.name || el.id;

    if (el.type === "radio") {
      if (el.checked) data[key] = el.value;
    } else if (el.type === "checkbox") {
      if (!data[key]) data[key] = [];
      if (el.checked) data[key].push(el.value);
    } else {
      data[key] = el.value;
    }
  });

  data.fecha = new Date().toISOString();
  return data;
}

function guardarRespuestas() {
  const prev = JSON.parse(localStorage.getItem("respuestas_encuesta") || "[]");
  prev.push(recolectarRespuestas());
  localStorage.setItem("respuestas_encuesta", JSON.stringify(prev));
}

/**********************
 * Inicialización FORZADA
 **********************/
setTimeout(() => {
  // mostrar pantalla inicial
  mostrarPantalla("datos");

  poblarDepartamentos();
  configurarEscuelas();
  poblarTurno();
  configurarValidaciones();

  // botones
  document.getElementById("btn-datos-siguiente")
    ?.addEventListener("click", irDesdeDatos);

  document.querySelectorAll(".siguiente-evaluacion")
    .forEach(b => b.addEventListener("click", volverAEvaluacion));

  document.getElementById("btn-evaluacion-finalizar")
    ?.addEventListener("click", () => {
      guardarRespuestas();
      mostrarPantalla("final");
    });

}, 0);

