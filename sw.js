// Service Worker
const cacheName = "zaddx";
const filesToCache = [
    "/",
    "index.html",
    "./js/index.js",
    "./css/style.css"
];

self.addEventListener("install", installEvent => {
    console.log("[ServiceWorker**] Install");
    installEvent.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log("[ServiceWorker**] Caching app shell");
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});