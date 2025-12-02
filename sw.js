// Service Worker mínimo para evitar cache viejo
// Siempre carga los archivos nuevos del servidor

self.addEventListener("install", event => {
  // Activa inmediatamente
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  // Toma control sin esperar
  clients.claim();
});

// No intercepta fetch → el navegador siempre usa archivos nuevos
// Esto evita que queden versiones viejas guardadas
