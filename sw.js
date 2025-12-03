self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

// No fetch handler: siempre usa la versión más nueva del servidor
