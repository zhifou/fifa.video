const __vite__fileDeps=["assets/index-NwVrXK4b.js","assets/index-DtjFe9kJ.js","assets/index-Dpx07GPy.css","assets/index-DzpmpVJ1.js","assets/index-GHnX3O5W.js","assets/index-Cfz0wL7K.css","assets/index-DIYivKoz.js","assets/index-CIpM_MMc.js","assets/index-CSBz3Lpr.js","assets/iconBase-CcL6YhNZ.js","assets/index-Bbd0Edbg.css","assets/index-D4snLD-E.js","assets/index--QlT_tZv.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as s,j as e,r as t,_ as r}from"./index-DtjFe9kJ.js";const o=t.lazy(()=>r(()=>import("./index-NwVrXK4b.js"),__vite__mapDeps([0,1,2,3,4,5]))),_=t.lazy(()=>r(()=>import("./index-DIYivKoz.js"),__vite__mapDeps([6,1,2]))),n=t.lazy(()=>r(()=>import("./index-CIpM_MMc.js"),__vite__mapDeps([7,1,2,3,8,9,10]))),i=t.lazy(()=>r(()=>import("./index-D4snLD-E.js"),__vite__mapDeps([11,1,2,9,12]))),p=[{path:"/",children:[{path:"/",element:e.jsx(o,{})},{path:"/:year",element:e.jsx(_,{})},{path:"/:year/:matchId",element:e.jsx(n,{})}]},{path:"*",element:e.jsx(i,{})}],c=()=>{const a=s(p);return e.jsx(t.Suspense,{fallback:null,children:a})};export{c as default,p as routes};