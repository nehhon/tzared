var version="v1435";this.addEventListener("install",function(e){e.waitUntil(caches.open(version).then(function(e){return e.addAll([])}))}),this.addEventListener("fetch",function(n){var e=n.request.url.split("://")[1].split("/")[0],t=n.request.url.split(".");t=t[t.length-1].toLowerCase().split("?")[0],n.request.url.split("sworker")[2]||"GET"==n.request.method&&"tza.red"==e&&"wav"!=t&&"neh3"!=t&&"txt"!=t&&"mp3"!=t&&n.respondWith(caches.match(n.request).then(function(e){return e||fetch(n.request).then(function(t){return caches.open(version).then(function(e){return e.put(n.request,t.clone()),t})})}))}),this.skipWaiting().then(function(){console.log("nv",version)}),this.addEventListener("activate",function(e){var t=[version];e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(-1===t.indexOf(e))return caches.delete(e)}))}))});