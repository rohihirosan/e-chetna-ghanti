/*
 * Copyright (c) 2026 Rohit Kumar (Teacher)
 * App: e-Chetna Ghanti - Service Worker
 * All Rights Reserved.
 */

const CACHE_NAME = 'prarthana-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './prayer.html',
  './manifest.json'
];

// इंस्टॉल इवेंट
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// फेच इवेंट
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
