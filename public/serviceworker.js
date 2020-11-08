const CACHE = 'CACHE';
const urlToCache = ['index.html', 'offline.html'];

var self = this;

self.addEventListener('install', e => {
	e.waitUntil(
		caches
			.open(CACHE)
			.then(cache => {
				return cache.addAll(urlToCache);
			})
			.catch(err => console.log(err)),
	);
});

self.addEventListener('fetch', e => {
	e.respondWith(
		caches.match(e.request).then(() => {
			return fetch(e.request).catch(() => caches.match('offline.html'));
		}),
	);
});

self.addEventListener('activate', e => {
	const cachelist = [];
	cachelist.push(CACHE);
	e.waitUntil(
		caches.keys().then(cacheNames => {
			Promise.all(
				cacheNames.map(cacheName => {
					if (!cachelist.includes(cacheName)) {
						return caches.delete(cacheName);
					}
				}),
			);
		}),
	);
});
