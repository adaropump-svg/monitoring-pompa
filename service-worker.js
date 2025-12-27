self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pump-monitor-v1").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "manifest.json",
        "service-worker.js",
        "dashboard.html",
        "menu-ops.html",
        "menu-mon.html",
        "menu-hce.html",
        "data-record.html",
        "grafik.html",
        "setting.html",
        "assets/app-config.js",
        "assets/app-theme.css"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});



