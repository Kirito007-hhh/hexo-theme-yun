/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.d171765a.css",
    "revision": "e61547f238d2617f769384effa195531"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f7a3e179.js",
    "revision": "a583dde2f2c33b69482c51e0ab27b701"
  },
  {
    "url": "assets/js/11.1ebec310.js",
    "revision": "bef0aa9cf8e6b044114ef36c2e35ba5c"
  },
  {
    "url": "assets/js/12.a3527276.js",
    "revision": "4cc2d3b4919b9f62dfcf700b3acc8faf"
  },
  {
    "url": "assets/js/13.fc17a8a2.js",
    "revision": "f2d276c2c492bb5684b96c66e9aa835a"
  },
  {
    "url": "assets/js/14.9a956568.js",
    "revision": "d285ceb5b9fc9ed11fdb2aca886c07dc"
  },
  {
    "url": "assets/js/15.87f31eae.js",
    "revision": "8c37de437134a940d78c82e333c3e262"
  },
  {
    "url": "assets/js/16.5c847f9e.js",
    "revision": "8d7dfc165bebc583c51566ea96d47736"
  },
  {
    "url": "assets/js/17.171b0067.js",
    "revision": "8ba8105eeb61e5164b810400980087bd"
  },
  {
    "url": "assets/js/18.e9123d00.js",
    "revision": "3c90a9eee1294c20d864d6db83afd205"
  },
  {
    "url": "assets/js/19.9eae49cc.js",
    "revision": "b7ddb2cafc69ae872c4083d8bf93084c"
  },
  {
    "url": "assets/js/2.2eb3bead.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/20.6d52de29.js",
    "revision": "55a3e4a5e8026b7b3e8706fe298c85d6"
  },
  {
    "url": "assets/js/3.fa8150b8.js",
    "revision": "b4a2dd5ee008fd9ef0c9261cea06c73a"
  },
  {
    "url": "assets/js/4.eaa226a5.js",
    "revision": "0587ef4b98ced9991190dd755d402ca1"
  },
  {
    "url": "assets/js/5.af35708e.js",
    "revision": "1a4bc2bdbcb9d08bf1ae4d7b1f9f0a1b"
  },
  {
    "url": "assets/js/6.ba92bbf0.js",
    "revision": "265da8bac8ac446bce5b1be1e46932ee"
  },
  {
    "url": "assets/js/7.55a0bd50.js",
    "revision": "dd816df0af4f4a9ba573fdf048b78489"
  },
  {
    "url": "assets/js/8.4cac884d.js",
    "revision": "07797e58a076229af4d1ba373875194b"
  },
  {
    "url": "assets/js/9.a050289a.js",
    "revision": "fd3200be558f6d35c863845b032489a3"
  },
  {
    "url": "assets/js/app.8ebf4398.js",
    "revision": "66702eeb387d1ec10e57af059050589b"
  },
  {
    "url": "en/guide/index.html",
    "revision": "b53b7addbc0f1c21a4b9428ea83b49a3"
  },
  {
    "url": "en/index.html",
    "revision": "6bcb62e8200eabd19b49692149bea296"
  },
  {
    "url": "guide/about.html",
    "revision": "3461e40df60d1469ba4e932cca36b33b"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "d5b31f452ce85b4b48d826b5f6b53453"
  },
  {
    "url": "guide/config.html",
    "revision": "772e551730bb2d03362649b3aea3edb2"
  },
  {
    "url": "guide/faq.html",
    "revision": "22ca9159dc5d91bb572f9d524a4a3478"
  },
  {
    "url": "guide/icon.html",
    "revision": "ad820d7a2d8c64fd422486a4def5d7a8"
  },
  {
    "url": "guide/index.html",
    "revision": "d691caecbaea0684bc701797b703a415"
  },
  {
    "url": "guide/page.html",
    "revision": "39dc49b72ca2ee40e182ed047ad0a862"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "b4f1ee0d7eb06aac75f3fec77ff1df59"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "38e1a573a6cf3ea8c54c426743e4c91f"
  },
  {
    "url": "guide/Todo.html",
    "revision": "929ddde50e0d2cb9fa70d4bab26b42c9"
  },
  {
    "url": "index.html",
    "revision": "d26787ac0531e7b58b976f6c89b820ec"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "logo.png",
    "revision": "bb35d0cf00948250fd08e4663c133e12"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
