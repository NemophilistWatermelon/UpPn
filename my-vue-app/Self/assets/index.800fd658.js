import{r as f,o as h,c as v,a as E,b as y,N as u,d as l,e as g,i as L}from"./vendor.de3d28b0.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};P();var x=(i,t)=>{const o=i.__vccOpts||i;for(const[n,e]of t)o[n]=e;return o};const O={};function b(i,t){const o=f("router-view");return h(),v(o)}var A=x(O,[["render",b]]);const j="modulepreload",p={},R="/",a=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${R}${n}`,n in p)return;p[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":j,e||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),e)return new Promise((_,m)=>{s.addEventListener("load",_),s.addEventListener("error",m)})})).then(()=>t())};var D={path:"/udpn",name:"udpn",component:()=>a(()=>import("./index.26c05ada.js"),["assets/index.26c05ada.js","assets/index.8d808993.css","assets/vendor.de3d28b0.js"])},I={path:"/blog",name:"blog",component:()=>a(()=>import("./index.c9885ce9.js"),["assets/index.c9885ce9.js","assets/index.403aa083.css","assets/vendor.de3d28b0.js","assets/index.272024c4.js","assets/index.cfac4728.css"])},T={path:"/project",name:"project",component:()=>a(()=>import("./index.c1cf498f.js"),["assets/index.c1cf498f.js","assets/index.8c9b970a.css","assets/index.272024c4.js","assets/index.cfac4728.css","assets/vendor.de3d28b0.js"])};const k=()=>a(()=>import("./index.55262b4d.js"),["assets/index.55262b4d.js","assets/index.57a3b913.css","assets/vendor.de3d28b0.js"]);var N=[{path:"/",component:k,redirect:"/index",children:[{path:"/index",name:"index",meta:{title:"\u9996\u9875"},component:()=>a(()=>import("./index.47fad470.js"),["assets/index.47fad470.js","assets/index.14a2f80b.css","assets/vendor.de3d28b0.js"])},D,I,T,{path:"/posts/:md",component:()=>a(()=>import("./template.d27bf649.js"),["assets/template.d27bf649.js","assets/template.a31c6928.css","assets/vendor.de3d28b0.js"])}]}];const d=E({history:y(),routes:N});u.configure({showSpinner:!1});d.beforeEach((i,t,o)=>{u.start(),o()});d.afterEach(()=>{u.done()});const V=l({state(){return{menu:[]}},mutations:{updateMenu(i,t){i.menu=t}},actions:{UPDATE_MENU({commit:i},t){i("updateMenu",t)}}});var w=l({modules:{menu:V}});const c=g(A);c.use(d);c.use(w);c.use(L);c.mount("#app");export{x as _,a};
