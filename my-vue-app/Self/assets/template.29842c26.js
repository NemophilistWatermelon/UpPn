import{_ as u,a}from"./index.6a9dd05a.js";import{q as m,C as p,p as d,o as l,f as c}from"./vendor.d7189a63.js";const T={},g=function(e){this.template=`<span class="${e.name}">${e.name}</span>`},h=function(e){this.template=`<span class="${e.orginClass}">${e.orginTxt}</span>`},s=function(e){return e.name,(e==null?void 0:e.teshu)?new h(e).template:new g(e).template},f=function(){var e=["async","await","then","switch","Vue","prototype","import","from","case","log","function","console","let","const","if","else"],r=[];return e.forEach(n=>{r.push({key:n,reg:new RegExp(`${n}`,"g"),template:s({name:n})})}),r.push({key:"(",reg:/\(/g,template:s({name:"(",teshu:!0,orginTxt:"(",orginClass:"zkh"})},{key:")",reg:/\)/g,template:s({name:")",teshu:!0,orginTxt:")",orginClass:"ykh"})},{key:"{",reg:/\{/g,template:s({name:"{",teshu:!0,orginTxt:"{",orginClass:"fun_zkh"})},{key:"}",reg:/\}/g,template:s({name:"}",teshu:!0,orginTxt:"}",orginClass:"fun_zkh"})},{key:"}",reg:/\}/g,template:s({name:"}",teshu:!0,orginTxt:"}",orginClass:"fun_zkh"})},{key:".",reg:/([\.])/g,template:s({name:".",teshu:!0,orginTxt:".".match(/([\.])/g),orginClass:"dot"})}),r},E=function(e){const r=f();var n=e.match(/(?<=let).+(?=\=)|(?<=const).+(?=\=)|(?<=function).+(\s)(?=\()/ig)||[];n.forEach(t=>{e=e.replace(new RegExp(t,"g"),`<span class='bl'>${t}</span>`)});var i=e;return r.forEach(t=>{i=i.replace(t.reg,t.template)}),i};const j=m({name:"template",setup(){const e=p(),r=d();return async function(i){const t={"./Editer.vue":()=>a(()=>import("./Editer.c9650a73.js"),["assets/Editer.c9650a73.js","assets/Editer.b6d98240.css","assets/json.worker.d5784901.js","assets/json.worker.41e148d5.css","assets/index.6a9dd05a.js","assets/index.573c67a1.css","assets/vendor.d7189a63.js"]),"./JS-Async.md":()=>a(()=>import("./JS-Async.8e7e3b26.js"),[]),"./ao-li-gei.md":()=>a(()=>import("./ao-li-gei.fee22ec4.js"),[]),"./hope.md":()=>a(()=>import("./hope.a7714359.js"),[]),"./index.vue":()=>a(()=>import("./index.622d3ded.js"),["assets/index.622d3ded.js","assets/index.bcfbe7d0.css","assets/index.6a9dd05a.js","assets/index.573c67a1.css","assets/vendor.d7189a63.js","assets/index.6338f955.js","assets/index.cfac4728.css"]),"./playground.md":()=>a(()=>import("./playground.44216a4f.js"),[]),"./qian-duan-kai-fa.md":()=>a(()=>import("./qian-duan-kai-fa.add3a13a.js"),[]),"./qian-duan-zhi-lu.md":()=>a(()=>import("./qian-duan-zhi-lu.29891bbf.js"),[]),"./shang-hai-yi-qing.md":()=>a(()=>import("./shang-hai-yi-qing.cf03bda7.js"),[]),"./vue2-vs-vue3.md":()=>a(()=>import("./vue2-vs-vue3.d8f38371.js"),[]),"./zhou-ri-ri-ji.md":()=>a(()=>import("./zhou-ri-ri-ji.80e3a886.js"),[])};log({allFile:t,meta:T});const _={"./JS-Async.md":()=>a(()=>import("./JS-Async.8e7e3b26.js"),[]),"./ao-li-gei.md":()=>a(()=>import("./ao-li-gei.fee22ec4.js"),[]),"./hope.md":()=>a(()=>import("./hope.a7714359.js"),[]),"./playground.md":()=>a(()=>import("./playground.44216a4f.js"),[]),"./qian-duan-kai-fa.md":()=>a(()=>import("./qian-duan-kai-fa.add3a13a.js"),[]),"./qian-duan-zhi-lu.md":()=>a(()=>import("./qian-duan-zhi-lu.29891bbf.js"),[]),"./shang-hai-yi-qing.md":()=>a(()=>import("./shang-hai-yi-qing.cf03bda7.js"),[]),"./vue2-vs-vue3.md":()=>a(()=>import("./vue2-vs-vue3.d8f38371.js"),[]),"./zhou-ri-ri-ji.md":()=>a(()=>import("./zhou-ri-ri-ji.80e3a886.js"),[])}[`./${e.params.md}.md`]();i(await _)}(i=>{var t=E(i.html);r.value=t}),{str:r}}}),y=["innerHTML"];function v(e,r,n,i,t,o){return l(),c("div",{class:"template-container max-full",innerHTML:e.str},null,8,y)}var k=u(j,[["render",v],["__scopeId","data-v-1bbdd15a"]]);export{k as default};
