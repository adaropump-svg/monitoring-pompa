const BASE = "/monitoring-pompa/";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pump-monitor-v1").then(cache => {
      return cache.addAll([
        BASE,
        BASE + "index.html",
        BASE + "dashboard.html",
        BASE + "menu-ops.html",
        BASE + "menu-mon.html",
        BASE + "menu-hce.html",
        BASE + "data-record.html",
        BASE + "grafik.html",
        BASE + "setting.html",
        BASE + "app-setting.js",
        BASE + "assets/app-theme.css",
        BASE + "assets/icon-192.png",
        BASE + "assets/icon-512.png"
      ]);
    })
  );
});




