import{P as c,v as u,a as f}from"./styles-DxBPS_-X.js";function p(e,l){const i=document.createElement("div"),s=new c({title:"Parameters",container:i}),n=v(e),a=new Map;return i.setAttribute("id","parameters"),a.set("root",s),Object.entries(e).forEach(([o,t])=>{var d;t.folder&&!a.get(t.folder)&&a.set(t.folder,s.addFolder({title:t.folder})),(d=a.get(t.folder??"root"))==null||d.addBinding(n,o,{min:t.min||0,max:t.max||50,step:t.step||.5,label:t.label||o})}),s.on("change",o=>{o.last||l(o)}),i}const v=e=>Object.entries(e).reduce((l,[i,s])=>(l[i]=s.value,l),{});function m({parameters:e,onParameterChange:l,settings:i}){const s=(l==null?void 0:l(e??{}))??{},n={nodes:u.state(s.nodes??[]),elements:u.state((s==null?void 0:s.elements)??[]),analysisInputs:u.state((s==null?void 0:s.analysisInputs)??{}),analysisOutputs:u.state((s==null?void 0:s.analysisOutputs)??{})},a=f({structure:n,settingsObj:i});if(document.body.appendChild(a),e&&l){const o=p(e,t=>{e[t.target.key].value=t.value;const d=l(e);n.nodes&&(n.nodes.val=d.nodes??[]),n.elements&&(n.elements.val=d.elements??[]),n.analysisInputs&&(n.analysisInputs.val=d.analysisInputs??{}),n.analysisOutputs&&(n.analysisOutputs.val=d.analysisOutputs??{})});document.body.appendChild(o)}}export{m as t};
