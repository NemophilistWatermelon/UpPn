import{_ as r}from"./index.30031dc4.js";import{o as t,f as o,g as s,q as v,u as x,r as i,t as c,F as $,v as g,w as B,x as _,y as n}from"./vendor.de3d28b0.js";import{T}from"./index.ab919888.js";const R={name:"PhClockLight"},k={width:"1em",height:"1em",viewBox:"0 0 256 256"},C=s("path",{fill:"currentColor",d:"M128 230a102 102 0 1 1 102-102a102.2 102.2 0 0 1-102 102Zm0-192a90 90 0 1 0 90 90a90.1 90.1 0 0 0-90-90Zm62 90a6 6 0 0 0-6-6h-50V72a6 6 0 0 0-12 0v56a6 6 0 0 0 6 6h56a6 6 0 0 0 6-6Z"},null,-1),b=[C];function w(a,d,l,m,p,u){return t(),o("svg",k,b)}var y=r(R,[["render",w]]);const L=v({name:"BlogItem",components:{Clock:y,Title:T},setup(){return{mdRouter:x({BlogRoute:[{path:"bar",name:"self",text:"\u60CA\u5446! ",time:"Feb 19",readTime:"1min"}]})}}}),V={class:"max-full mt-3"},j={class:"post-item"},F={class:"other"},N={class:"readTime"};function Z(a,d,l,m,p,u){const h=i("Title"),f=i("RouterLink");return t(),o("div",V,[c(h,{title:"Blogs"}),(t(!0),o($,null,g(a.mdRouter.BlogRoute,e=>(t(),o("div",j,[c(f,{to:"/posts/"+e.path},{default:B(()=>[_(n(e.text),1)]),_:2},1032,["to"]),s("div",F,[s("span",null,[_(n(e.time)+" \xB7 ",1),s("span",N,n(e.readTime),1)])])]))),256))])}var E=r(L,[["render",Z],["__scopeId","data-v-33821f13"]]);export{E as default};
