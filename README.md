# Encuesta offline – PWA

Este paquete es una base lista para adaptar a tu encuesta real.

## Qué hace

- Multipantalla según **cargo (Q8)**:
  - 01 Datos personales: para todxs
  - 02 Directivos: solo Director/a y Vicedirector/a
  - 03 Docentes: solo Docente de grado
  - 04 Directivos con grado a cargo: Directivo con grado a cargo + Personal único
  - 05 Evaluación del encuentro: para todxs (cargo "Otro" va de 01 → 05)

- Valida en vivo:
  - **DNI**: solo números
  - **Email**: formato básico `nombre@dominio.com`

- Autocompleta **Escuela (Q7)** filtrando por **Departamento (Q5)**:
  - El usuario escribe en un `<input>` con `datalist`
  - El listado se actualiza según el departamento elegido
  - Cuando elige la escuela, se guarda el **CUE-anexo** en un campo oculto (`#cue_anexo`)

- Guarda las respuestas en `localStorage` como lista JSON (`encuesta_respuestas`)

- Funciona como **PWA offline** con `service worker` simple.

## Archivos

- `index.html`: estructura de pantallas y campos.
- `styles.css`: estilos (dark mode, campos, estados de error).
- `script.js`: lógica de navegación, validación, autocompletado y guardado local.
- `manifest.json`: manifiesto PWA.
- `sw.js`: service worker para cache offline.
- `README.md`: este archivo.

## Para adaptarlo

1. **Reemplazá el arreglo `listaEscuelas` en `script.js`** con tu JSON real:

```js
const listaEscuelas = [
  { label: "Nombre escuela", depto: "Nombre Depto", cue: "CUE-ANEXO" },
  // ...
];
```

2. Ajustá los textos de preguntas en cada pantalla (`index.html`).

3. Si querés pasar de `localStorage` a IndexedDB o a una cola de sincronización,
   podés usar `saveResponsesLocally()` como único punto de entrada para las respuestas.
