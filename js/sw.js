const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
    '/portfolio/', // Corrigindo o caminho raiz
    '/portfolio/index.html',
    '/portfolio/css/style.css',
    '/portfolio/js/main.js',
    '/portfolio/img/logo.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache).catch(error => {
                    console.error('Erro ao adicionar arquivos ao cache:', error);
                });
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});