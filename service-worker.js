importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
 
if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);

  workbox.precaching.precacheAndRoute([
    { url: '/', revision: '1' },
    { url: '/index.html', revision: '1' },
    { url: '/pages/navigation/nav.html', revision: '1' },
    { url: '/css/materialize.min.css', revision: '1' },
    { url: '/js/materialize.min.js', revision: '1' },
    { url: '/js/script.js', revision: '1' },
    { url : '/manifest.json', revision: '1'},
    { url : '/js/api/apikey.js', revision: '1'},  
    { url : '/js/api/apisquad.js', revision: '1'},
    { url : '/js/api/apileague.js', revision: '1'},
    { url : '/js/database/dbpwa.js', revision: '1'},
    { url : '/js/database/dbleague.js', revision: '1'},
    { url : '/js/database/dbsquad.js', revision: '1'},  
    { url : '/js/database/idb.js', revision: '1'},
    { url : '/js/template/materialize.min.js', revision: '1'},
    { url : '/js/template/nav.js', revision: '1'},
    { url : '/pages/menu/about.html', revision: '1'},
    { url : '/pages/menu/item.html', revision: '1'},
    { url : '/pages/menu/league.html', revision: '1'},
    { url : '/pages/menu/squad.html', revision: '1'},  
    { url : '/pages/detail/savedleague.html', revision: '1'},
    { url : '/pages/detail/savedsquad.html', revision: '1'},
    { url : '/pages/detail/savedplayer.html', revision: '1'},  
    { url : '/images/icon.png', revision: '1'}, 
    { url : '/images/pwa192.png', revision: '1'},
    { url : '/images/pwa512.png', revision: '1'}, 
]);

workbox.routing.registerRoute(
  new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'pages'
    })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
          new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
          }),
      ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  workbox.strategies.staleWhileRevalidate()
)

self.addEventListener('push', function (event) {
  var body;
  if (event.data) {
      body = event.data.text();
  } else {
      body = 'Push message no payload';
  }
  var options = {
      body: body,
      icon: 'images/icon.png',
      vibrate: [100, 50, 100],
      data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
      }
  };
  event.waitUntil(
      self.registration.showNotification('Push Notification', options)
  );
});