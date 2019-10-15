var cacheName = 'hello-pwa';
var filesToCache = [
  '10.100.1.143:8080//',
  '10.100.1.143:8080/index.html',
  '10.100.1.143:8080/css/style.css',
  '10.100.1.143:8080/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
