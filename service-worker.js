self.addEventListener('install', (e) => { e.waitUntil(skipWaiting()); }); self.addEventListener('activate', (e) => { e.waitUntil(clients.claim()); });
