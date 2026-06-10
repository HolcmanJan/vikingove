const CACHE = 'viking-oddil-v3';
const ASSETS = [
 './',
 './index.html',
 './style.css',
 './app.js',
 './manifest.json',
 './assets/havrani-kletba-role.jpg',
 './assets/hra-kral-poddany-sasek.jpg',
 './assets/kreativni-hry.png',
 './assets/mapa-fjord.png',
 './assets/mapa-poklad.png',
 './assets/plan-cth.png',
 './assets/prokleti-jarla-ragnara.jpg',
 './assets/seznam-deti.png',
 './assets/symboly.png',
 './assets/zavod-dracich-lodi.jpg'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
