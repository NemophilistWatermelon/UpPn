import{W as u,e as _}from"./json.worker.d5784901.js";import{_ as l}from"./index.37cd8572.js";import{I as v,B as f,o as i,f as p,h as m,p as d,r as g,t as c}from"./vendor.677ca397.js";self.MonacoEnvironment={getWorker(){return new u}};const h={props:{value:String,language:{type:String,default:"'javascript'"}},setup(r,{emit:o}){let e=null;const{proxy:t}=m();v(()=>r.value,a=>{a!==(e==null?void 0:e.getValue())&&e.setValue(a)}),f(()=>{e=_.create(t.$refs.editContainer,{value:r.value,readOnly:!1,language:r.language,theme:"vs-dark",selectOnLineNumbers:!0,renderSideBySide:!1}),e.onDidChangeModelContent(()=>{const a=e==null?void 0:e.getValue();o("update:value",a)})})}},y={ref:"editContainer",class:"code-editor"};function x(r,o,e,t,a,n){return i(),p("div",y,null,512)}var $=l(h,[["render",x],["__scopeId","data-v-b1200296"]]);const w={name:"CreateCodeMapByJson",components:{Editor:$},setup(){let r=d(`{
    "main": "\u6279\u91CF\u6492\u70B9\u4EE3\u7801",
    "\u5730\u56FE\u89E6\u53D1prop": "getMap",
    "\u6279\u91CF\u904D\u5386\u5BF9\u8C61": "data",
    "\u5750\u6807\u53C2\u6570\u662F": "coords",
    "\u6492\u70B9\u7C7B\u578B\u662F": "point",
    "\u4EA7\u751F\u5730\u56FE\u5C42\u7EA7\u662F": "point-level",
    "\u662F\u5426\u9700\u8981\u6E05\u9664\u5176\u4ED6\u56FE\u5C42": "false"
}`),o=d("23233");const e={\u6279\u91CF\u6492\u70B9\u4EE3\u7801:a=>(a.\u5730\u56FE\u89E6\u53D1prop,`
 let paramList = []

for (let i = 0; i < data; i++) {
    let item = data[i]
    let coords = item[coords]

    paramList.push({
        coords: coords,
    })
}

const param = {
    type: 'point',
    clearOld: 'false',
    operationLevel: 'point-level',
    symbol: {
        type: 'simple-fill',
        color: [255, 255, 0, 0.8],
        outline: {
            color: [0, 0, 255, 0.8],
            width: "3px"
        },
    },
    data: paramList,
}



this.$bus.$emit(getMap, (win) => {
    win._showGraphicsByDataJson(param)
})

                    `)},t=function(a){try{var n=JSON.parse(a);o.value=e[n.main](n),console.log(o.value)}catch(s){throw Error("\u9519\u8BEF"+s)}};return t(r.value),{inputVal:r,outputVal:o,onUpdate:t}}},V={class:"flex-wrap"};function C(r,o,e,t,a,n){const s=g("Editor");return i(),p("div",V,[c(s,{language:"json","onUpdate:value":t.onUpdate,class:"editor",value:t.inputVal},null,8,["onUpdate:value","value"]),c(s,{language:"javascript",class:"editor",value:t.outputVal},null,8,["value"])])}var B=l(w,[["render",C],["__scopeId","data-v-297ad07e"]]);export{B as default};
