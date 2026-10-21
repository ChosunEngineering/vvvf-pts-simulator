// PTS 운전실 재구성 — 오프라인 캐시 (© 2026 이한주)
const CACHE='pts-cab-95d0e859';
const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png','icon.svg'];
const CDN=['https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js','https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js'];
const VOICES=["aud/Changbae.json", "aud/Duckchun.json", "aud/Seoyoon.json", "aud/Changsu.json", "aud/BongJin.json", "aud/SeoHyeon.json", "aud/SoonBok.json"];
self.addEventListener('install',e=>{ e.waitUntil((async()=>{ const c=await caches.open(CACHE); await c.addAll(CORE); await Promise.all(CDN.map(u=>c.add(u).catch(()=>{}))); await self.skipWaiting(); })()); });
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('pts-cab-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
  // 목소리 파일은 뒤에서 천천히 받아 둔다(오프라인 대비)
  caches.open(CACHE).then(c=>VOICES.reduce((p,u)=>p.then(()=>c.match(u).then(r=>r||c.add(u).catch(()=>{}))),Promise.resolve())); });
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=> r || fetch(e.request).then(res=>{ if(res && (res.ok||res.type==='opaque')){ const cp=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); } return res; }).catch(()=>caches.match('index.html')))); });
