import{W as s,e as o}from"./json.worker.d5784901.js";import{_ as l}from"./index.c5c22325.js";import{O as d,E as u,o as c,a as i,m as _}from"./vendor.081c8048.js";self.MonacoEnvironment={getWorker(){return new s}};const p={props:{value:String},setup(t,{emit:a}){let e=null;const{proxy:n}=_();d(()=>t.value,r=>{r!==(e==null?void 0:e.getValue())&&e.setValue(r)}),u(()=>{e=o.create(n.$refs.editContainer,{value:t.value,readOnly:!1,language:"javascript",theme:"vs-dark",selectOnLineNumbers:!0,renderSideBySide:!1}),e.onDidChangeModelContent(()=>{const r=e==null?void 0:e.getValue();a("update:value",r)})})}},f={ref:"editContainer",class:"code-editor"};function v(t,a,e,n,r,g){return c(),i("div",f,null,512)}var h=l(p,[["render",v],["__scopeId","data-v-475b6664"]]);export{h as default};
