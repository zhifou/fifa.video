import{j as e}from"./index-CLPuvIDJ.js";import{M as a,W as i,a as s}from"./config-Cl1xUQtW.js";const r="_home_1bz5b_1",o={home:r},m=()=>e.jsxs("div",{className:o.home,children:[e.jsx(a,{title:"比赛直播",data:i.filter(t=>[s.unStarted,s.inprogress].includes(t.status))}),e.jsx(a,{title:"比赛回放",data:i.filter(t=>[s.finish].includes(t.status))}),e.jsx(a,{title:"历史集锦",data:i.filter(t=>[s.history,s.inprogress].includes(t.status))})]});export{m as default};