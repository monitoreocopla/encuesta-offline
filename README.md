# Encuesta offline – PWA

Esta versión incluye:

- Pantallas separadas:
  - Datos personales
  - Preguntas para directivos
  - Preguntas para docentes
  - Preguntas para directivos con grado a cargo y personal único
  - Evaluación del encuentro
  - Pantalla final de agradecimiento

- Lógica de navegación según el cargo:
  - Director/a y Vicedirector/a pasan por la pantalla de directivos.
  - Docente de grado pasa por la pantalla de docentes.
  - Directivo con grado a cargo y Personal único pasan por la pantalla de directivos con grado a cargo / personal único.
  - Quienes seleccionan Otro van directo de Datos personales a Evaluación.

- Validación en vivo:
  - DNI: solo números.
  - Correo electrónico: formato básico nombre@dominio.com.

- Departamento y escuela:
  - Los departamentos se cargan a partir de la hoja de escuelas.
  - Las escuelas se filtran por departamento.
  - Al seleccionar una escuela, se guarda el CUE-Anexo de manera oculta.

- Guardado local:
  - Cada respuesta se guarda en localStorage bajo la clave `encuesta_respuestas`.
  - Se registra una marca temporal (`timestamp`) al finalizar.

- PWA:
  - Service worker simple para funcionamiento offline.
  - `manifest.json` configurado con tema oscuro.
