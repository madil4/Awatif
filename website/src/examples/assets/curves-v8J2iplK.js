import{t as x,Q as y,V as u}from"./styles-uXeEfXEo.js";const S={xSpan:{value:16,min:1,max:20,step:.1,label:"xSpan (m)"},xDivisions:{value:14,min:5,max:20,step:1},ySpan:{value:5,min:1,max:10,step:.1,label:"ySpan (m)"},yDivisions:{value:3,min:1,max:5,step:1},height:{value:9,min:0,max:15,step:.1,label:"height (m)"},heightOffset:{value:0,min:-10,max:10,step:.1,label:"height offset (m)"}};function g(n){const r=n.xSpan.value,s=n.xDivisions.value,l=n.ySpan.value,a=n.yDivisions.value,h=n.height.value,m=n.heightOffset.value,c=new y(new u(0,0,0),new u(0+r/2+m,0,h),new u(0+r,0,0)),p=[],o=[];for(let t=0;t<=a;t++)p.push(...c.getPoints(s).map(e=>(e.setY(0+t*(l/a)),e.toArray())));for(let t=0;t<=(a+1)*s;t+=s+1)for(let e=0;e<s;e++)o.push([t+e,t+e+1]);for(let t=0;t<a*(s+1);t+=s+1)for(let e=0;e<s+1;e++)o.push([e+t,e+s+1+t]);const v=[...Array(a+1).keys()].map(t=>(s+1)*t),f=[...Array(a+1).keys()].map(t=>(s+1)*t+s),i={pointSupports:new Map};return v.forEach(t=>{var e;return(e=i.pointSupports)==null?void 0:e.set(t,[!0,!0,!0,!0,!0,!0])}),f.forEach(t=>{var e;return(e=i.pointSupports)==null?void 0:e.set(t,[!0,!0,!0,!0,!0,!0])}),{nodes:p,elements:o,analysisInputs:i}}x({parameters:S,onParameterChange:g});
