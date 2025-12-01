# Encuesta offline – PWA (versión conectada al Excel)

Esta versión:

- Usa los departamentos de la pregunta de departamento definidos en la hoja `formulario`.
- Usa las escuelas reales de la hoja `escuelas` (nombre, número y CUE-Anexo).
- Filtra las escuelas por departamento.
- Guarda el CUE-Anexo en un campo oculto.
- Aplica lógica de navegación según el cargo.
- Valida en vivo DNI (solo números) y correo electrónico.
- Guarda todas las respuestas en `localStorage` bajo la clave `encuesta_respuestas`.
- Incluye service worker y manifest para funcionar offline.

Los nombres de sección y los textos visibles *no* muestran códigos de pregunta ni números de sección.
