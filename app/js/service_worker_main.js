'use strict'

const CACHE_NAME = 'cache-v1';
// The files we want to cache
const resourceList = [
  '/',
  'index.html',
  'css/style-portable.min.css',
  'js/adapter.min.js',
  'js/polyfill.js',
  'js/aruco.min.js',
  'js/cv.min.js',
  'js/detector-dispositif.min.js?v=2',
  'js/jsQR.min.js',
  'js/peer.min.js',
  'js/fullscreen.js',
  'css/img/QCMCam-logobig.png',
  'css/img/128px/if_user_error_66911.png',
  'css/img/128px/if_user_accept_66906.png',
  'css/img/128px/if_user_info_66913.png',
  'css/img/128px/stats.png',
  'css/img/128px/if_bullet_accept_66697.png',
  'css/img/128px/if_arrow_right_66681.png',
  'css/img/128px/photo.png',
  'css/img/128px/notphoto.png',
  'css/img/128px/if_user_search_66914.png',
  'css/img/128px/gnome-session-switch.png',
  'css/img/Ellipsis-2.6s-100px.gif',
  'apple-icon-72x72.png',
  'apple-icon-144x144.png',
  'favicon-32x32.png',
  'favicon-96x96.png',
  'img/ms-icon-144x144.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(resourceList);
  }));
});

function addToCache(cacheName, resourceList) {
  caches.open(cacheName).then(cache => {
    return cache.addAll(resourceList);
  });
}

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request);
  }));
});