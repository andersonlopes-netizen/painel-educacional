const CACHE="v1";

self.addEventListener("install",(e)=>{

self.skipWaiting();

});

self.addEventListener("activate",(e)=>{

clients.claim();

});
