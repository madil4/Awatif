import{v as e,a as l}from"./styles-DwJTuBfT.js";import{p}from"./parameters-sV09_VRh.js";import{m as v}from"./mesh-B0HOrEU_.js";const t={boundary:{value:e.state(5),min:1,max:10,step:.1,label:"Boundary point"}},a=e.state([]),s=e.state([]);e.derive(()=>{const o=e.state([[0,0],[5,0],[t.boundary.value.val,3],[8,7],[15,5],[15,0],[20,0],[20,10],[0,10],[0,0]]),n=e.state([0,1,2,3,4,5,6,7,8]),{nodes:m,elements:r}=v({points:o,polygon:n});a.val=m.val,s.val=r.val});document.body.append(p(t),l({structure:{nodes:a,elements:s}}));
