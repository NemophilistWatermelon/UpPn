import{r as f,o as v,c as h,a as E,b as y,N as u,d,e as g,i as L}from"./vendor.d7189a63.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};P();var x=(a,t)=>{const o=a.__vccOpts||a;for(const[n,e]of t)o[n]=e;return o};const O={};function b(a,t){const o=f("router-view");return v(),h(o)}var A=x(O,[["render",b]]);const j="modulepreload",p={},R="/",i=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${R}${n}`,n in p)return;p[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":j,e||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),e)return new Promise((_,m)=>{s.addEventListener("load",_),s.addEventListener("error",m)})})).then(()=>t())};var T={path:"/udpn",name:"udpn",component:()=>i(()=>import("./index.e0ec9e73.js"),["assets/index.e0ec9e73.js","assets/index.8d808993.css","assets/vendor.d7189a63.js"])},D={path:"/blog",name:"blog",component:()=>i(()=>import("./index.75fb5cfc.js"),["assets/index.75fb5cfc.js","assets/index.bcfbe7d0.css","assets/vendor.d7189a63.js","assets/index.0a609b1a.js","assets/index.cfac4728.css"])},I={path:"/project",name:"project",component:()=>i(()=>import("./index.9d0564eb.js"),["assets/index.9d0564eb.js","assets/index.89011185.css","assets/index.0a609b1a.js","assets/index.cfac4728.css","assets/vendor.d7189a63.js"])},V={path:"/Gernerator",name:"Gernerator",component:()=>i(()=>import("./index.c15be2ac.js"),["assets/index.c15be2ac.js","assets/index.4c318ade.css","assets/json.worker.d5784901.js","assets/json.worker.41e148d5.css","assets/vendor.d7189a63.js"])},k={path:"/terminal",name:"terminal",component:()=>i(()=>import("./index.f11c07e9.js"),["assets/index.f11c07e9.js","assets/index.d7060340.css","assets/vendor.d7189a63.js"])};const N=()=>i(()=>import("./index.8679aba4.js"),["assets/index.8679aba4.js","assets/index.8e014eea.css","assets/vendor.d7189a63.js"]);var w=[{path:"/",redirect:"/index",component:N,children:[{path:"/index",name:"index",meta:{title:"\u9996\u9875"},component:()=>i(()=>import("./index.04a5bff3.js"),["assets/index.04a5bff3.js","assets/index.14a2f80b.css","assets/vendor.d7189a63.js"])},T,D,I,V,k,{path:"/posts/:md*",component:()=>i(()=>import("./template.60593299.js"),["assets/template.60593299.js","assets/template.a2422140.css","assets/vendor.d7189a63.js"])}]}];const l=E({history:y(),routes:w});u.configure({showSpinner:!1});l.beforeEach((a,t,o)=>{u.start(),o()});l.afterEach(()=>{u.done()});const S=d({state(){return{menu:[]}},mutations:{updateMenu(a,t){a.menu=t}},actions:{UPDATE_MENU({commit:a},t){a("updateMenu",t)}}});var M=d({modules:{menu:S}});const c=g(A);c.use(l);c.use(M);c.use(L);c.mount("#app");export{x as _,i as a};
