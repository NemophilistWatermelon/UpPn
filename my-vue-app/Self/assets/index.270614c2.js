var b=Object.defineProperty;var I=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var $=(e,s,t)=>s in e?b(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,K=(e,s)=>{for(var t in s||(s={}))R.call(s,t)&&$(e,t,s[t]);if(I)for(var t of I(s))T.call(s,t)&&$(e,t,s[t]);return e};import{o as a,f as u,g as c,F as m,v as y,y as d,E as S,G as w,x as M,D as P,r as L,t as k,c as f,H as v,s as g,J as j,K as D}from"./vendor.d7189a63.js";import{_ as h}from"./index.ffa59f0a.js";const O={name:"ReadMe.vue",props:{oHelpData:{type:[Object]}}},x=e=>(S("data-v-ea56cc90"),e=e(),w(),e),N={class:"readme-container"},V={class:"readme-subItem"},G=x(()=>c("section",{class:"summary-title"},"\u2328\uFE0F \u5FEB\u6377\u952E:",-1)),z={class:"summary-item"},F={class:"left"},W=M(" ----- "),Y={class:"right"},q={class:"readme-subItem"},J=x(()=>c("section",{class:"summary-title"},"\u{1F517}\u7ED1\u5B9A\u547D\u4EE4:",-1)),Q={class:"summary-item"},U={class:"left"},X=M(" ----- "),Z={class:"right"};function ss(e,s,t,o,n,r){return a(),u("div",N,[c("div",V,[G,(a(!0),u(m,null,y(t.oHelpData.data.fastKey,(i,_)=>(a(),u("div",z,[c("div",F,d(_),1),W,c("div",Y,d(i),1)]))),256))]),c("div",q,[J,(a(!0),u(m,null,y(t.oHelpData.data.command,(i,_)=>(a(),u("div",Q,[c("div",U,d(_),1),X,c("div",Z,d(i),1)]))),256))])])}var ts=h(O,[["render",ss],["__scopeId","data-v-ea56cc90"]]);const es={name:"Tag.vue",props:{status:{type:String},info:{type:String}}};function os(e,s,t,o,n,r){return a(),u("div",{class:P(["tag",{[t.status]:t.status}])},d(t.info),3)}var E=h(es,[["render",os],["__scopeId","data-v-174def36"]]);const ns={name:"Success.vue",components:{Tag:E},props:{info:{type:String}}},is={class:"success-info"},rs={class:"tag"},as={class:"info"};function cs(e,s,t,o,n,r){const i=L("Tag");return a(),u("div",is,[c("div",rs,[k(i,{status:"success",info:"\u547D\u4EE4\u8C03\u53D6\u6210\u529F"})]),c("div",as,d(t.info),1)])}var us=h(ns,[["render",cs],["__scopeId","data-v-67d3f434"]]);const ls={name:"Error.vue",components:{Tag:E},props:{info:{type:String}}},ds={class:"error-info"},_s={class:"tag"},hs={class:"info"};function ps(e,s,t,o,n,r){const i=L("Tag");return a(),u("div",ds,[c("div",_s,[k(i,{status:"error",info:"\u547D\u4EE4\u8C03\u53D6\u5931\u8D25"})]),c("div",hs,d(t.info),1)])}var ms=h(ls,[["render",ps],["__scopeId","data-v-3ed56086"]]);const gs={name:"Music",props:{musicId:{type:[String,Number]}}},ys=["src"];function fs(e,s,t,o,n,r){return a(),u("iframe",{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"330",height:"86",src:"//music.163.com/outchain/player?type=2&id="+t.musicId+"&auto=1&height=66"},null,8,ys)}var vs=h(gs,[["render",fs]]);const Ms={name:"MusicList",data(){return{Music:vs}},props:{searchMusicList:{type:Array}},methods:{MusicSinger(e){return e.length?e[0].name:""},onPlay(e){this.searchMusicList.forEach(s=>{s.MusicPlay=!1,s.id===e.id&&(s.MusicPlay=!0)})}}},Cs={class:"music-list"},Is={class:"song-item"},$s=["onClick"];function Ks(e,s,t,o,n,r){return a(),u("div",Cs,[(a(!0),u(m,null,y(t.searchMusicList,(i,_)=>(a(),u("div",Is,[c("div",{class:"name",onClick:p=>r.onPlay(i)},[M(d(i.name)+": ",1),c("span",null,d(r.MusicSinger(i.artists)),1)],8,$s),i.MusicPlay?(a(),f(v(n.Music),{key:0,musicId:i.id},null,8,["musicId"])):g("",!0)]))),256))])}var Ss=h(Ms,[["render",Ks],["__scopeId","data-v-28195650"]]);class ws{constructor(){this.commonMap=new Map,this.historyCommondList=[],this.teminalLogMap=new Map}static instance(s){return new this(s)}regisCommondMap(s,t,o){if(this.commonMap.set(s,o),t.alias&&t.alias.forEach(r=>{this.commonMap.set(r,o)}),t.option){let r=t.option;for(const i in r)this.commonMap.set(s,{[i]:r[i]});var n=this.commonMap.get(s);n.func=o,this.commonMap.set(s,n)}if(t.desc){var n=this.commonMap.get(s);n.desc=t.desc,this.commonMap.set(s,n)}console.log(this.commonMap,"\u6CE8\u518C")}getHistory(){return this.historyCommondList}setCommandHistory(s){this.historyCommondList.push(s)}isMap(s){return Object.prototype.toString.call(s)==="[object Object]"}runCommondBy(s,t){var r;this.setCommandHistory(s);var o=this.parseCommand(s);if(console.log({runcommand:o}),this.commonMap.get(o.start)){let i={};var n=this.commonMap.get(o.start);((r=o==null?void 0:o.option)==null?void 0:r.size)?o.option.forEach((_,p)=>{console.log({\u904D\u5386:_,index:p}),n[p]&&(i=n[p](_||""))}):(console.log(n),this.isMap(n)?n.func():i=n()),t(this.runCommondSuccess(s,i))}else t(this.runCommondError(s))}runCommondError(s){return{runCommoand:s,status:"error",info:"\u8FD0\u884C\u5931\u8D25"}}runCommondSuccess(s,t){return console.log({run:s}),Object.assign({},{runCommoand:s.start||s,status:"success",info:"\u8FD0\u884C\u6210\u529F"},t)}clearCommond(s){for(let t=0;t<s.length;t++)s[t]||(s.splice(t,1),t+=1);return s}parseCommand(s){console.log({\u89E3\u6790\u7684\u547D\u4EE4\u662F:s});var t={};const o=s.split(" "),n=this.clearCommond(o);return console.log({c:n}),n.forEach((r,i)=>{o[0]!==""&&(t.start=o[0]),r.includes("-")&&r[0]==="-"&&(t.option=t.option||new Map,t.option.set(r,o[i+1]||""))}),console.log({parseResult:t}),t}getBindCommand(){return this.commonMap}}const Ls="https://cn.bing.com/search",ks="http://cloud-music.pl-fe.cn/search?keywords=";var A={Bing:Ls,Net163Search:ks};class xs{constructor(s){this.o=s}static instance(s={}){return new this(s)}async _fetch(s,t,o){try{var n=await fetch(s,K({},t));o(n,null)}catch{o(null,n)}}async fetchMusicList(s,t){const o={method:"post"};await this._fetch(A.Net163Search+s,o,t)}}class Es{constructor(){this.rigisKey=new Map,this.rigisKeyAndOption=new Map,this.initWatchKey()}static instance(){return new this}initWatchKey(){var s=[];window.addEventListener("keydown",t=>{var o=t.key;if(s.push(o),s.length===2)if(this.isBindKey(s.join("+"))){var o=s.join("+");this.runRegisKey(o)}else s=[]}),window.addEventListener("keyup",t=>{t.key,s.length=0})}onRegisKey(s,t={},o){this.rigisKey.set(s,o),t.desc&&this.rigisKeyAndOption.set(s,{desc:t.desc})}runRegisKey(s){this.rigisKey.get(s)&&this.rigisKey.get(s)()}isBindKey(s){return!!this.rigisKey.get(s)}getBindKeys(){return this.rigisKeyAndOption}}class As{constructor(s){this.o=s,this.helpCommand={}}static instance(s={}){return new this(s)}init(s){const t=s.globalKeyService.getBindKeys(),o=s.terminal.getBindCommand();this.helpCommand={regisKey:t,terminalCommand:o}}getHelp({service:s}){return this.init(s),this.helpCommand}}const l=ws.instance(),Bs=xs.instance(),B=Es.instance(),Hs=As.instance(),bs={name:"index.vue",data(){return{ReadMe:ts,onInput:"",ErrorLog:ms,SuccessLog:us,MusicList:Ss,logInputsArr:[],historyInputsArray:[],historyLog:{runHistoryLog:[]},SYSTEM_KEY_MAP:{}}},mounted(){this.onBaseRegisCommond(),this.onListenSystemKey(),this.initSystemKeyBind()},methods:{initSystemKeyBind(){B.onRegisKey("Control+h",{desc:"\u8001\u677F\u952E"},()=>{console.log("run"),l.runCommondBy("cls",(e,s)=>{console.log({res:e}),e&&(this.logInputsArr=[])})})},onListenSystemKey(){},onBaseRegisCommond(){l.regisCommondMap("help",{desc:"\u67E5\u770B\u5E2E\u52A9"},e=>{const s=Hs.getHelp({service:{terminal:l,globalKeyService:B}});console.log(s);var t={fastKey:{},command:{}};s.regisKey.forEach((o,n)=>{t.fastKey[n]=o.desc||""}),s.terminalCommand.forEach((o,n)=>{t.command[n]=o.desc||""}),console.log(t),this.logInputsArr.push({runCommoand:this.onInput,help:{data:t}})}),l.regisCommondMap("net",{desc:"\u7F51\u6613\u4E91\u97F3\u4E50\u5E2E\u52A9\u952E",option:{"-s":e=>{console.log(e,"\u5173\u952E\u8BCD"),Bs.fetchMusicList(e,async(s,t)=>{var r;if(s){const i=await s.json();var o=l.runCommondSuccess("net - s"+e,{info:"\u83B7\u53D6\u5217\u8868\u6210\u529F"}),n=Object.assign({},o,{musicList:((r=i==null?void 0:i.result)==null?void 0:r.songs)||[]});console.log({oMusicList:n}),this.logInputsArr.push(n);return}t&&this.logInputsArr.push(l.runCommondError("net - s"+e))})}}},e=>{this.logInputsArr.push({runCommoand:this.onInput,MusicPlay:!0})}),l.regisCommondMap("bing",{desc:"\u5FC5\u5E94\u641C\u7D22\u952E",alias:["b","bi"],option:{"-s":function(e){window.open(A.Bing+"?q="+e)}}},e=>({})),l.regisCommondMap("clear",{alias:["cl","cls"]},e=>{this.logInputsArr=[]}),l.regisCommondMap("info",{alias:["i"],desc:"\u5F00\u53D1\u8005\u4FE1\u606F\u547D\u4EE4"},e=>({status:"success",info:"Autor: QinKai"})),l.regisCommondMap("history",{alias:["hs","his"],desc:"\u67E5\u770B\u5386\u53F2\u4FE1\u606F\u547D\u4EE4",option:{"-l":function(){return{info:"\u771F\u725B\u903C"}}}},e=>{var s=[];l.getHistory().forEach(t=>{s.push({commondItem:t})}),this.logInputsArr.push({runCommoand:this.onInput,runHistoryLog:s}),console.log(this.logInputsArr)})},onRegisCommon(){},onGoPageLast(){const e=400,s=this.$refs.container,t=s.scrollHeight+e;setTimeout(o=>{this.$nextTick(n=>{s.scrollTop=t,console.log(s,t)})},200)},onCommandRun(e){return new Promise((s,t)=>{l.runCommondBy(e,function(o){o.status==="success"?s(o):t(o)})})},async onEnterInput(){try{var e=await this.onCommandRun(this.onInput)}catch(s){console.log(s),this.logInputsArr.push({runCommoand:s.runCommoand,info:s.info,runStatus:s.status,runHistoryLog:[]})}finally{this.onGoPageLast(),this.onInput=""}},onInputKeyPress(e){let s=e.key;switch(console.log("press",e),s){case"Enter":this.onEnterInput();break}}}},C=e=>(S("data-v-2c31321e"),e=e(),w(),e),Rs={class:"container",ref:"container"},Ts={key:0,class:"row-log-container"},Ps={key:0,class:"history"},js=C(()=>c("div",{class:"left no-select"},"~",-1)),Ds={class:"right"},Os={class:"log-item"},Ns={class:"sub-wrap"},Vs={class:"logItem"},Gs={class:"row-input"},zs=C(()=>c("span",{class:"position no-select green"},"~",-1)),Fs=C(()=>c("span",{class:"mk-hk"},":",-1));function Ws(e,s,t,o,n,r){return a(),u("div",Rs,[n.logInputsArr.length?(a(),u("div",Ts,[(a(!0),u(m,null,y(n.logInputsArr,(i,_)=>(a(),u(m,{key:_},[i.runCommoand?(a(),u("div",Ps,[js,c("div",Ds,d(i.runCommoand),1)])):g("",!0),c("div",Os,[c("div",Ns,[i.runStatus?(a(),f(v(i.runStatus==="success"?n.SuccessLog:n.ErrorLog),{key:0,info:i.info},null,8,["info"])):g("",!0)])]),(a(!0),u(m,null,y(i.runHistoryLog,(p,H)=>(a(),u("div",{key:H,class:"log"},[c("div",Vs,d(p.commondItem),1)]))),128)),i.musicList?(a(),f(v(n.MusicList),{key:1,searchMusicList:i.musicList},null,8,["searchMusicList"])):g("",!0),i.help?(a(),f(v(n.ReadMe),{key:2,oHelpData:i.help},null,8,["oHelpData"])):g("",!0)],64))),128))])):g("",!0),c("div",Gs,[zs,Fs,j(c("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>n.onInput=i),onKeydown:s[1]||(s[1]=(...i)=>r.onInputKeyPress&&r.onInputKeyPress(...i)),autofocus:"",type:"text",class:"terminal-input"},null,544),[[D,n.onInput]])])],512)}var Qs=h(bs,[["render",Ws],["__scopeId","data-v-2c31321e"]]);export{Qs as default};