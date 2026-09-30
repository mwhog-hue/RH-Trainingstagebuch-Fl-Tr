/* Trainingstagebuch Rettungshundearbeit – GitHub-Paket v2.9.2.
   Alle Dateien liegen im Hauptverzeichnis des Repositorys (kein Ordner „icons“).
   Bei einem Update RELEASE erhöhen. Caches bleiben auf diese App begrenzt. */
const RELEASE = '2.9.2';
const CACHE_PREFIX = `rh-tagebuch:${self.registration.scope}:`;
const CACHE_VERSION = CACHE_PREFIX + RELEASE;
const CORE = ['./', './index.html', './manifest.webmanifest'];
const OPTIONAL = ['./favicon.ico', './favicon-16.png', './favicon-32.png', './icon-192.png', './icon-512.png',
  './icon-maskable-192.png', './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_VERSION).then(async cache => {
    await cache.addAll(CORE);
    // Einzelne fehlende Symbole dürfen die Installation nicht verhindern.
    await Promise.all(OPTIONAL.map(url => cache.add(url).catch(() => null)));
  }).then(() => self.skipWaiting()));
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
    event.respondWith(fetch(request).then(response => {
      if (response.ok) { const copy = response.clone(); caches.open(CACHE_VERSION).then(c => c.put(request, copy)); }
      return response;
    }).catch(async () => {
      const cache = await caches.open(CACHE_VERSION);
      return await cache.match(request) || await cache.match('./index.html');
    }));
    return;
  }
  event.respondWith(caches.open(CACHE_VERSION).then(async cache => {
    const cached = await cache.match(request);
    if (cached) return cached;
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  }));
});
