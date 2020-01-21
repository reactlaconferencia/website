const path = require('path');
const withOffline = require('next-offline');

module.exports = withOffline({
  workboxOpts: {
    swDest: path.join(__dirname, "./public/service-worker.js"),
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 3 * 24 * 60 * 60,
          }
        }
      }
    ]
  },
})