import{C as Sr}from"./CardBox-a8rDCqoj.js";import"./string-CdhieEss.js";import"./vue.esm-bundler-ci6tbuJ3.js";import"./BaseLink-Dp3waMOx.js";import"./index-DNcykg7C.js";import"./event-cXbWrp7s.js";import"./signal-C2s2wdtQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Vr={title:"Components / Element / CardBox",component:Sr,tags:["autodocs"],argTypes:{link:{control:"text",description:"Card link (optional)"},color:{control:"select",description:"Card color (optional)",options:["default","cyan","blue","green","orange","red"],defaultValue:"default"},variant:{control:"radio",description:"Card variant (optional)",options:["metallic","flat","dash"],defaultValue:"metallic"},purpose:{control:"radio",description:"Card purpose (optional)",options:["container","box"],defaultValue:"box"},strokeWeight:{control:"radio",description:"Card stroke weight (optional)",options:["bold","normal","thin"]},radius:{control:"text",description:"Card radius (optional), default `var(--agh-ref-border-radius-500)` when `purpose` is `container`, otherwise `var(--agh-ref-border-radius-300)`"},hasStroke:{control:"boolean",description:"Card stroke (optional)",defaultValue:!0},clickable:{control:"boolean",description:"Is card clickable (optional)",defaultValue:!1},active:{control:"boolean",description:"Is card active (optional)",defaultValue:!1}},parameters:{slots:{default:{template:`
          <div style="padding: 1em;">
            <h1>This is a CardBox</h1>
            <br />
            <p>Put something inside the slot to see it !</p>
          </div>
        `}}}},o={args:{variant:"metallic",purpose:"box",color:"default",hasStroke:!0,clickable:!1,strokeWeight:"normal"}},r={args:{...o.args}},a={args:{...o.args,variant:"flat"}},e={args:{...o.args,variant:"dash"}},s={args:{...r.args,color:"cyan"}},t={args:{...a.args,color:"cyan"}},n={args:{...e.args,color:"cyan"}},c={args:{...r.args,color:"blue"}},l={args:{...a.args,color:"blue"}},d={args:{...e.args,color:"blue"}},i={args:{...r.args,color:"green"}},u={args:{...a.args,color:"green"}},p={args:{...e.args,color:"green"}},g={args:{...r.args,color:"orange"}},m={args:{...a.args,color:"orange"}},C={args:{...e.args,color:"orange"}},x={args:{...r.args,color:"red"}},B={args:{...a.args,color:"red"}},f={args:{...e.args,color:"red"}};var D,h,b;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'metallic',
    purpose: 'box',
    color: 'default',
    hasStroke: true,
    clickable: false,
    strokeWeight: 'normal'
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,F,M;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...DefaultCardBox.args
  }
}`,...(M=(F=r.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var y,k,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...DefaultCardBox.args,
    variant: 'flat'
  }
}`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var O,G,R;e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...DefaultCardBox.args,
    variant: 'dash'
  }
}`,...(R=(G=e.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var V,w,W;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'cyan'
  }
}`,...(W=(w=s.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var E,I,T;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...FlatDefaultCardBox.args,
    color: 'cyan'
  }
}`,...(T=(I=t.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var _,P,j;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...DashDefaultCardBox.args,
    color: 'cyan'
  }
}`,...(j=(P=n.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var q,z,A;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'blue'
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var H,J,K;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...FlatDefaultCardBox.args,
    color: 'blue'
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,N,Q;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...DashDefaultCardBox.args,
    color: 'blue'
  }
}`,...(Q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'green'
  }
}`,...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...FlatDefaultCardBox.args,
    color: 'green'
  }
}`,...(rr=($=u.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var ar,er,or;p.parameters={...p.parameters,docs:{...(ar=p.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    ...DashDefaultCardBox.args,
    color: 'green'
  }
}`,...(or=(er=p.parameters)==null?void 0:er.docs)==null?void 0:or.source}}};var sr,tr,nr;g.parameters={...g.parameters,docs:{...(sr=g.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'orange'
  }
}`,...(nr=(tr=g.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var cr,lr,dr;m.parameters={...m.parameters,docs:{...(cr=m.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    ...FlatDefaultCardBox.args,
    color: 'orange'
  }
}`,...(dr=(lr=m.parameters)==null?void 0:lr.docs)==null?void 0:dr.source}}};var ir,ur,pr;C.parameters={...C.parameters,docs:{...(ir=C.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  args: {
    ...DashDefaultCardBox.args,
    color: 'orange'
  }
}`,...(pr=(ur=C.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};var gr,mr,Cr;x.parameters={...x.parameters,docs:{...(gr=x.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'red'
  }
}`,...(Cr=(mr=x.parameters)==null?void 0:mr.docs)==null?void 0:Cr.source}}};var xr,Br,fr;B.parameters={...B.parameters,docs:{...(xr=B.parameters)==null?void 0:xr.docs,source:{originalSource:`{
  args: {
    ...FlatDefaultCardBox.args,
    color: 'red'
  }
}`,...(fr=(Br=B.parameters)==null?void 0:Br.docs)==null?void 0:fr.source}}};var Dr,hr,br;f.parameters={...f.parameters,docs:{...(Dr=f.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  args: {
    ...DashDefaultCardBox.args,
    color: 'red'
  }
}`,...(br=(hr=f.parameters)==null?void 0:hr.docs)==null?void 0:br.source}}};const wr=["DefaultCardBox","MetallicDefaultCardBox","FlatDefaultCardBox","DashDefaultCardBox","MetallicCyanCardBox","FlatCyanCardBox","DashCyanCardBox","MetallicBlueCardBox","FlatBlueCardBox","DashBlueCardBox","MetallicGreenCardBox","FlatGreenCardBox","DashGreenCardBox","MetallicOrangeCardBox","FlatOrangeCardBox","DashOrangeCardBox","MetallicRedCardBox","FlatRedCardBox","DashRedCardBox"];export{d as DashBlueCardBox,n as DashCyanCardBox,e as DashDefaultCardBox,p as DashGreenCardBox,C as DashOrangeCardBox,f as DashRedCardBox,o as DefaultCardBox,l as FlatBlueCardBox,t as FlatCyanCardBox,a as FlatDefaultCardBox,u as FlatGreenCardBox,m as FlatOrangeCardBox,B as FlatRedCardBox,c as MetallicBlueCardBox,s as MetallicCyanCardBox,r as MetallicDefaultCardBox,i as MetallicGreenCardBox,g as MetallicOrangeCardBox,x as MetallicRedCardBox,wr as __namedExportsOrder,Vr as default};
