self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Lasciamo che la rete faccia il suo lavoro normalmente
});
