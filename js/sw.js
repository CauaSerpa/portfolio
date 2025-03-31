const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
    '/portifolio/',
    '/portifolio/index.html',
    '/portifolio/css/style.css',
    '/portifolio/js/main.js',
    '/portifolio/img/logo.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});