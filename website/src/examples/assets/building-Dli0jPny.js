import"./styles-DxBPS_-X.js";import{t as b}from"./template-HBS6mgCl.js";const A={width:{value:18,min:10,max:20,step:2},breadth:{value:12,min:10,max:20,step:2},height:{value:12,min:4,max:20,step:2},xSpan:{value:6,min:2,max:20,step:2},ySpan:{value:6,min:2,max:20,step:2},zSpan:{value:4,min:2,max:20,step:2},spacing:{value:1,min:.5,max:5,step:.5},mainDirX:{value:!0,label:"toggle direction"}};function L(m){const z=[],a=[];let u=m.width.value,f=m.breadth.value,d=m.height.value,s=m.xSpan.value,i=m.ySpan.value,h=m.zSpan.value;const g=m.mainDirX.value;let l=m.spacing.value;s>u&&(s=u),i>f&&(i=f),h>d&&(h=d);let r=1,p=1;const c=Math.round(d/h+1);g?(l>s&&(l=s),s=Math.round(s/l)*l,u=Math.round(u/l)*l,r=Math.round(u/l+1),p=Math.round(f/i+1)):(l>i&&(l=i),i=Math.round(i/l)*l,f=Math.round(f/l)*l,p=Math.round(f/l+1),r=Math.round(u/s+1));let o=new Array(r).fill(0).map(()=>new Array(p).fill(0).map(()=>Array(c).fill(0))),M=0;for(let e=0;e<r;e++)for(let t=0;t<p;t++)for(let n=0;n<c;n++){o[e][t][n]=M;const v=0,x=2,y=0;g?z.push([e*l>u?(e-1)*l+v:e*l+v,t*i>f?(t-1)*i+x:t*i+x,n*h>d?(n-1)*h+y:n*h+y]):z.push([e*s>u?(e-1)*s+v:e*s+v,t*l>f?(t-1)*l+x:t*l+x,n*h>d?(n-1)*h+y:n*h+y]),M++}const S=[];for(let e=0;e<r;e++)for(let t=0;t<p;t++)for(let n=0;n<c-1;n++)g?(e*l%s==0||e*l%u==0)&&(a.push([o[e][t][n],o[e][t][n+1]]),S.push(a.length-1)):(t*l%i==0||t*l%f==0)&&(a.push([o[e][t][n],o[e][t][n+1]]),S.push(a.length-1));const D=[],X=[],w=[],B=[];if(g){for(let e=0;e<r-1;e++)for(let t=0;t<p;t++)for(let n=1;n<c;n++)a.push([o[e][t][n],o[e+1][t][n]]),D.push(a.length-1);for(let e=0;e<r;e++)for(let t=0;t<p-1;t++)for(let n=1;n<c;n++)a.push([o[e][t][n],o[e][t+1][n]]),w.push(a.length-1)}else{for(let e=0;e<r;e++)for(let t=0;t<p-1;t++)for(let n=1;n<c;n++)a.push([o[e][t][n],o[e][t+1][n]]),X.push(a.length-1);for(let e=0;e<r-1;e++)for(let t=0;t<p;t++)for(let n=1;n<c;n++)a.push([o[e][t][n],o[e+1][t][n]]),B.push(a.length-1)}return{nodes:z,elements:a}}b({parameters:A,onParameterChange:L,settings:{nodes:!1}});
