const CACHE = "hello-pwa-v3";

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE).then(cache => {

            return cache.addAll([
                "./",
                "./index.html",
                "./manifest.json",
                "./icon-192.png"
            ]);

        })

    );

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request).then(response => {

            return response || fetch(event.request);

        })

    );

});

self.addEventListener("message", event => {

    if (event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }

});


