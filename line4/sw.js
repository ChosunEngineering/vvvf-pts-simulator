// PTS 4호선 노선 운행 — 오프라인 캐시 (© 2026 이한주)
// index.html 은 네트워크 우선(업데이트가 바로 도착), 나머지는 캐시 우선.
const CACHE='pts-line4-cf5fef8e';
const CORE=['index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png','icon.svg'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('pts-line4-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET') return;
  const u=new URL(r.url);
  const doc = r.mode==='navigate' || (u.origin===location.origin && /\/(index\.html)?$/.test(u.pathname));
  if(doc){
    e.respondWith(fetch(r).then(res=>{ if(res&&res.ok){ const cp=res.clone(); caches.open(CACHE).then(c=>c.put('index.html',cp)); } return res; }).catch(()=>caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(c=>c||fetch(r).then(res=>{ if(res&&(res.ok||res.type==='opaque')){ const cp=res.clone(); caches.open(CACHE).then(x=>x.put(r,cp)); } return res; }).catch(()=>caches.match('index.html'))));
});
