import{_ as f}from"./index.44610b0f.js";import{g as w,v as m,s as v,r as I,o as u,f as i,h as l,z as h,F as g,w as x,D as $,t as b,j as y,E,G as q,A as k,c as S}from"./vendor.e9c8ab17.js";const A=w({name:"HardMode",setup(){var e=m({setArr:[],encouragement:["Yep! 666","\u54C7 ! \u4F60\u771F\u5389\u5BB3 \u{1F604}","\u68D2\u{1F44D}"],terrible:["\u{1F61E} \u5C0F\u4E3B\u4F60\u6253\u9519\u4E86\u54DF~","\u{1F62C} \u9000\u683C\u518D\u8BD5\u8BD5?","\u{1F625} \u53EF\u80FD\u8FD9\u4E2A\u5B57\u592A\u96BE\u4E86","\u{1F4AA}\u52A0\u6CB9~"]}),t=v([]),a=v(new Set),o=v(new Set);function s(){return!t&&!e.setArr.length?(a.value=[],!1):!0}function p(){a.value=new Set,o.value=new Set}function d(r){const c=r.target.value;e.setArr=c.split("")}function n(){if(p(),s()){var r=t.value.split("");r.forEach((c,_)=>{e.setArr[_]==c?a.value.add(_):o.value.add(_)})}}return{onRightInput:d,rightInput:e,leftInput:t,equalInputIndex:a,unoEqualInputIndex:o,onLeftInputEqual:n}}}),M=e=>(E("data-v-1d9a290f"),e=e(),q(),e),B={class:"max-full default-text height-2"},j={key:0,class:"max-full f-text-left"},z={class:"container"},C={class:"right"},K=M(()=>l("span",{class:"default-text"},"OrginText",-1)),V={class:"left"},D=M(()=>l("span",{class:"default-text"},"TargetText",-1));function H(e,t,a,o,s,p){const d=I("el-input");return u(),i(g,null,[l("div",B,h(e.unoEqualInputIndex.size?e.rightInput.terrible[Math.floor(Math.random()*(e.rightInput.terrible.length+1))]:e.rightInput.encouragement[Math.floor(Math.random()*(e.rightInput.encouragement.length+1))]),1),e.rightInput.setArr.length?(u(),i("div",j,[(u(!0),i(g,null,x(e.rightInput.setArr,(n,r)=>(u(),i("span",{class:$([[e.equalInputIndex.has(r)?"curTxt-active":"",e.unoEqualInputIndex.has(r)?"curTxt-wrong":""],"idx-item"])},h(n),3))),256))])):b("",!0),l("div",z,[l("div",C,[K,l("textarea",{class:"default-textarea",onInput:t[0]||(t[0]=(...n)=>e.onRightInput&&e.onRightInput(...n)),name:"",id:"",cols:"30",rows:"10"},null,32)]),l("div",V,[D,y(d,{class:"input-area",type:"textarea",rows:"5",modelValue:e.leftInput,"onUpdate:modelValue":t[1]||(t[1]=n=>e.leftInput=n),onInput:e.onLeftInputEqual},null,8,["modelValue","onInput"])])])],64)}var L=f(A,[["render",H],["__scopeId","data-v-1d9a290f"]]);const T={rule:{\u81EA\u7136\u7801:{a:"a | ",b:"b |",c:"c | iao",d:"d | uang",e:"e |",f:"f | en",g:"g | eng",h:"h | ang",i:"i | ch",j:"j | an",k:"k | ao",l:"l | ai",m:"m | ian",n:"n | in",o:"o | uo",p:"p | un",q:"q | iu",r:"r | uan",s:"s | ong | iong",t:"t | ue",u:"u | sh",v:"zh | v | ui",w:"w | ia | ua",x:"x | ie",y:"y | uai | ing",z:"z | ei"}}};var R={wordsMap:T};const N={class:"keyMap"},O={class:"top"},Y={class:"bottom"},F={setup(e){console.log.bind(console);const t=R.wordsMap.rule.\u81EA\u7136\u7801,a=m(Object.keys(t)),o=m(t),s=v(""),p=function(n){var r=n.key;s.value=a.includes(r)?r:""},d=function(n){s.value=""};return window.addEventListener("keydown",p),window.addEventListener("keyup",d),(n,r)=>(u(),i("div",N,[(u(!0),i(g,null,x(k(a),(c,_)=>(u(),i("div",{class:$(["pin-item",s.value===c?"pin-item-down":""]),key:_},[l("div",O,h(c),1),l("div",Y,h(k(o)[c]),1)],2))),128))]))}};var P=f(F,[["__scopeId","data-v-f5298b26"]]);const U={setup(e){const t=v(!0),a=function(){var o={true:s=>{t.value=!1},false:s=>{t.value=!0}};o[t.value]()};return(o,s)=>(u(),i(g,null,[t.value?(u(),S(P,{key:0})):b("",!0),l("button",{onClick:a},"\u5DF2\u719F\u7EC3\u9690\u85CF\u952E\u76D8")],64))}};var G=f(U,[["__scopeId","data-v-4bbbec99"]]);const J=w({name:"udpn",components:{HardMode:L,Botom:G},setup(){console.log(1212121)}}),Q={style:{"text-align":"center"}};function W(e,t,a,o,s,p){const d=I("HardMode"),n=I("Botom");return u(),i("div",Q,[y(d),y(n)])}var ee=f(J,[["render",W]]);export{ee as default};
