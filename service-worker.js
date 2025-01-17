self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('ai-education-hub-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/manifest.json',
                'icon-192x192.png',
                'icon-512x512.png',
                // Add more resources you want to cache
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
