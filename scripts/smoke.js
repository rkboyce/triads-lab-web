import http from 'http';
import {promisify} from 'util';
const get = (path)=>new Promise((res,rej)=>{
  http.get({host:'127.0.0.1',port:5173,path},(r)=>{
    const {statusCode}=r; let data=''; r.on('data',c=>data+=c); r.on('end',()=>res({statusCode,body:data}));
  }).on('error',rej);
});
(async()=>{
  try{
    console.log('Checking / ...');
    const root = await get('/');
    console.log('/ status',root.statusCode);
    // check root body for expected content and absence of Vite overlay errors
    if (root.statusCode!==200) { console.error('Root returned', root.statusCode); process.exit(2); }
    if (!root.body.includes('Boyce Lab')){ console.error('Root body missing expected content'); process.exit(2); }
    if (root.body.includes('Failed to load url') || root.body.includes('vite') && root.body.includes('overlay')){
      console.error('Vite overlay errors detected in root HTML'); process.exit(2);
    }
    console.log('Smoke test passed');
  }catch(e){ console.error('Smoke test error',e); process.exit(2); }
})();
