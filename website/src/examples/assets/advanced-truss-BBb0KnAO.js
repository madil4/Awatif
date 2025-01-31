import{v as a,a as pe}from"./styles-DwJTuBfT.js";import{d as re,a as ue}from"./deform-B-eAhHgU.js";import"./mesh-B0HOrEU_.js";import{p as ce}from"./parameters-sV09_VRh.js";function B(l,t,u,f,g,v,m,d=0){const n=Math.round(l/t);let c=[],h=[],W=[],T=[],w=[];for(let e=0;e<n+1;e++){const I=e*t,p=(m-v)/l,s=v+p*I;c.push([d+I,0,s])}for(let e=0;e<n+1;e++){const I=e*t,p=(g-f)/l,s=f+p*I,y=(m-v)/l,S=v+y*I;c.push([d+I,0,S+s]),W.push(c.length-1)}if(u===1)for(let e=0;e<n;e++)h.push([e,e+1],[n+1+e,n+1+e+1],[e,n+1+e],[e,n+1+e+1]),T.push(h.length-3,h.length-4),w.push(h.length-1,h.length-2);if(u===2)for(let e=0;e<n;e++)h.push([e,e+1],[n+1+e,n+1+e+1],[e,n+1+e],[e+1,n+1+e]),T.push(h.length-3,h.length-4),w.push(h.length-1,h.length-2);if(u===3)for(let e=0;e<n;e++)h.push([e,e+1],[n+1+e,n+1+e+1],[e,n+1+e],[e,n+1+e+1],[e+1,n+1+e]),T.push(h.length-4,h.length-5),w.push(h.length-1,h.length-2,h.length-3);return h.push([n,2*n+1]),w.push(h.length-1),{nodes:c,elements:h,topNodesIndices:W,chordsIndices:T,websIndices:w}}const r={span:{value:a.state(20),min:1,max:20,label:"Span (m)",folder:"Geometry"},spacing:{value:a.state(2.5),min:1,max:5,label:"Spacing (m)",folder:"Geometry"},webType:{value:a.state(1),min:1,max:3,step:1,label:"Web type",folder:"Geometry"},trimType:{value:a.state(1),min:1,max:3,step:1,label:"Trim type",folder:"Geometry"},leftHeight:{value:a.state(2.5),min:1,max:10,step:.1,label:"Left height (m)",folder:"Geometry"},midHeight:{value:a.state(2.5),min:1,max:10,step:.1,label:"Mid height (m)",folder:"Geometry"},rightHeight:{value:a.state(2.5),min:1,max:10,step:.1,label:"Right height (m)",folder:"Geometry"},leftOffset:{value:a.state(0),min:0,max:10,step:.1,label:"Left offset (m)",folder:"Geometry"},midOffset:{value:a.state(5),min:0,max:10,step:.1,label:"Mid offset (m)",folder:"Geometry"},rightOffset:{value:a.state(0),min:0,max:10,step:.1,label:"Right offset (m)",folder:"Geometry"},supportType:{value:a.state(1),min:1,max:2,step:1,label:"Support type",folder:"Supports"},uniformLoad:{value:a.state(300),min:0,max:1e3,step:1,label:"Uniform load (KN/m)",folder:"Loads"},chordsArea:{value:a.state(50),min:1,max:100,step:1,label:"Chords area (cm2)",folder:"Sections & Materials"},chordsElasticity:{value:a.state(10),min:1,max:250,step:1,label:"Chords elasticity (gpa)",folder:"Sections & Materials"},websArea:{value:a.state(50),min:1,max:100,step:1,label:"Webs area (cm2)",folder:"Sections & Materials"},websElasticity:{value:a.state(10),min:1,max:250,step:1,label:"Webs elasticity (gpa)",folder:"Sections & Materials"}},Y=a.state([]),Z=a.state([]),_=a.state({}),$=a.state({}),ee=a.state({}),te=a.state({});a.derive(()=>{let l=r.span.value.val,t=r.spacing.value.val;const u=r.webType.value.val,f=r.trimType.value.val,g=r.leftHeight.value.val,v=r.midHeight.value.val,m=r.rightHeight.value.val,d=r.leftOffset.value.val,n=r.midOffset.value.val,c=r.rightOffset.value.val,h=r.supportType.value.val,W=r.uniformLoad.value.val,T=r.chordsArea.value.val*1e-4,w=r.chordsElasticity.value.val*1e6,e=r.websArea.value.val*1e-4,I=r.websElasticity.value.val*1e6;let p=[],s=[],y=[],S=[],b=[],M=[];if(t=l/Math.round(l/t),Math.abs(v-.5*(g+m))>.3||Math.abs(n-.5*(d+c))>.3){l=l/2,t=l/Math.round(l/t);const o=Math.round((l-2*t)/t),i=f>=2&&o>=1,A=(g-v)/l,C=g-A*t,x=(d-n)/l,K=d-x*t,{nodes:O,elements:U,topNodesIndices:k,chordsIndices:le,websIndices:ne}=B(i?l-t:l,t,u,i?C:g,v,i?K:d,n,i?t:0);p.push(...O),s.push(...U),S.push(...k),b.push(...le),M.push(...ne);const Q=(v-m)/l,V=(n-c)/l;let q=u;u===1&&(q=2),u===2&&(q=1);const{nodes:z,elements:oe,topNodesIndices:ae,chordsIndices:he,websIndices:ie}=B(i?l-2*t:l-t,t,q,v-Q*t,i?m+Q*t:m,n-V*t,i?c+V*t:c,l+t);if(b.push(...F(he,s.length)),M.push(...F(ie,s.length)),s.push(...de(oe,p.length)),S.push(...F(ae,p.length)),p.push(...z),i){p.push([0,0,f==3?g+d:d],[2*l,0,f==3?m+c:c]),S.push(p.length-2,p.length-1);const H=(o+1+1)*2,X=(o+1)*2,R=H+X;s.push([0,R],[o+2,R],[H+o,R+1],[H+X-1,R+1]),b.push(s.length-1,s.length-2,s.length-3,s.length-4)}const D=Math.round(i?(l-1*t)/t:l/t),G=D,E=(D+1)*2,N=(D+1)*2-1,L=N+D+1;if(u===1&&(s.push([G,E],[N,L],[N,E]),b.push(s.length-3,s.length-2),M.push(s.length-1)),u===2&&(s.push([G,E],[N,L],[G,L]),b.push(s.length-3,s.length-2),M.push(s.length-1)),u===3&&(s.push([G,E],[N,L],[G,L],[N,E]),b.push(s.length-4,s.length-3),M.push(s.length-2,s.length-1)),i){const H=O.length+z.length;y.push(H,H+1)}else h===1?y.push(0,O.length+z.length/2-1):y.push(O.length/2,O.length+z.length-1)}else{const o=Math.round((l-2*t)/t),i=f>=2&&o>=1,A=(g-m)/l,C=(d-c)/l,{nodes:x,elements:K,topNodesIndices:O,chordsIndices:U,websIndices:k}=B(i?l-2*t:l,t,u,i?g-A*t:g,i?m+A*t:m,i?d-C*t:d,i?c+C*t:c,i?t:0);p.push(...x),s.push(...K),S.push(...O),b.push(...U),M.push(...k),i&&(p.push([0,0,f==3?g+d:d],[l,0,f==3?m+c:c]),S.push(p.length-2,p.length-1),s.push([0,(o+1)*2],[o+1,(o+1)*2],[o,(o+1)*2+1],[o*2+1,(o+1)*2+1]),b.push(s.length-1,s.length-2,s.length-3,s.length-4)),i?y.push(x.length,x.length+1):h===1?y.push(0,x.length/2-1):y.push(x.length/2,x.length-1)}const J={supports:new Map(y.map(o=>[o,[!0,!0,!0,!0,!0,!0]])),loads:new Map(S.map(o=>[o,[0,0,-W*t,0,0,0]]))},j={elasticities:new Map([...b.map(o=>[o,w]),...M.map(o=>[o,I])]),areas:new Map([...b.map(o=>[o,T]),...M.map(o=>[o,e])])},P=re(p,s,J,j),se=ue(p,s,j,P);Y.val=p,Z.val=s,_.val=J,$.val=j,ee.val=P,te.val=se});document.body.append(ce(r),pe({structure:{nodes:Y,elements:Z,nodeInputs:_,elementInputs:$,deformOutputs:ee,analyzeOutputs:te},settingsObj:{deformedShape:!0,loads:!1}}));function de(l,t){return l.map(([u,f])=>[u+t,f+t])}function F(l,t){return l.map(u=>u+t)}
