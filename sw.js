/* Trainingstagebuch Rettungshundearbeit – GitHub-Paket v2.9.1.
   Bei einem Update RELEASE erhöhen. Caches bleiben auf diese App begrenzt. */
const RELEASE = '2.9.1';
const CACHE_PREFIX = `rh-tagebuch:${self.registration.scope}:`;
const CACHE_VERSION = CACHE_PREFIX + RELEASE;
const CORE = ['./', './index.html', './manifest.webmanifest', './favicon.ico',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_VERSION)
    .then(cache => cache.addAll(CORE))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys
      .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_VERSION)
      .map(key => caches.delete(key))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  // Nur eigene Dateien: Wetter und Ortsdienste bleiben normale Netzabrufe.
  if (request.method !== 'GET' || !url.href.startsWith(self.registration.scope)) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(async () => {
      const cache = await caches.open(CACHE_VERSION);
      return await cache.match(request) || await cache.match('./index.html');
    }));
    return;
  }
  // Versionsgebundene App-Dateien; erst ein neuer Worker wechselt den Bestand.
  event.respondWith(caches.open(CACHE_VERSION).then(async cache => {
    const cached = await cache.match(request);
    return cached || fetch(request);
  }));
});
