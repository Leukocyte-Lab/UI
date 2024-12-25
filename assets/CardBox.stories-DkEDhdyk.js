import{C as yr}from"./CardBox-DQFY_QX6.js";import{S as kr}from"./string-CdhieEss.js";import"./vue.esm-bundler-CtYRyXVz.js";import"./BaseLink-b8YscPwp.js";import"./index-DuE56Lqv.js";import"./event-Hqm2-ACW.js";import"./signal-Cc5KZ7Uc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const $r=c=>Object.entries(c).map(([a,e])=>[kr.toKebabCase(a),e]).map(([a,e])=>`${typeof e=="string"?`${a}="${e}"`:e===!0?`${a}`:`:${a}="${e}"`}`).sort((a,e)=>!/^.+=".+"$/.test(a)&&/^.+=".+"$/.test(e)?1:/^.+=".+"$/.test(a)&&!/^.+=".+"$/.test(e)?-1:a.localeCompare(e)).join(`
`),Er={title:"Components / Element / CardBox",component:yr,tags:["autodocs"],argTypes:{link:{control:"text",description:"Card link (optional)"},color:{control:"select",description:"Card color (optional)",options:["default","cyan","blue","green","orange","red"],defaultValue:"default"},variant:{control:"radio",description:"Card variant (optional)",options:["metallic","flat","dash"],defaultValue:"metallic"},purpose:{control:"radio",description:"Card purpose (optional)",options:["container","box"],defaultValue:"box"},strokeWeight:{control:"radio",description:"Card stroke weight (optional)",options:["bold","normal","thin"]},radius:{control:"text",description:"Card radius (optional), default `var(--agh-ref-border-radius-500)` when `purpose` is `container`, otherwise `var(--agh-ref-border-radius-300)`"},hasStroke:{control:"boolean",description:"Card stroke (optional)",defaultValue:!0},clickable:{control:"boolean",description:"Is card clickable (optional)",defaultValue:!1},active:{control:"boolean",description:"Is card active (optional)",defaultValue:!1}}},r=c=>({components:{CardBox:yr},setup(){return{args:c}},template:`
  <CardBox ${$r(c)}>
    <div style="padding: 1em;">
      <h1>This is a CardBox</h1>
      <br />
      <p>Put something inside the slot to see it !</p>
    </div>
  </CardBox>
  `}),n={render:r,args:{variant:"metallic",purpose:"box",color:"default",hasStroke:!0,clickable:!1,strokeWeight:"normal"}},o={render:r,args:{...n.args}},s={render:r,args:{...n.args,variant:"flat"}},t={render:r,args:{...n.args,variant:"dash"}},l={render:r,args:{...o.args,color:"cyan"}},d={render:r,args:{...s.args,color:"cyan"}},p={render:r,args:{...t.args,color:"cyan"}},i={render:r,args:{...o.args,color:"blue"}},u={render:r,args:{...s.args,color:"blue"}},g={render:r,args:{...t.args,color:"blue"}},m={render:r,args:{...o.args,color:"green"}},C={render:r,args:{...s.args,color:"green"}},x={render:r,args:{...t.args,color:"green"}},B={render:r,args:{...o.args,color:"orange"}},f={render:r,args:{...s.args,color:"orange"}},D={render:r,args:{...t.args,color:"orange"}},h={render:r,args:{...o.args,color:"red"}},b={render:r,args:{...s.args,color:"red"}},S={render:r,args:{...t.args,color:"red"}};var T,F,M;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'metallic',
    purpose: 'box',
    color: 'default',
    hasStroke: true,
    clickable: false,
    strokeWeight: 'normal'
  }
}`,...(M=(F=n.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var y,k,$;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...DefaultCardBox.args
  }
}`,...($=(k=o.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var v,O,G;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...DefaultCardBox.args,
    variant: 'flat'
  }
}`,...(G=(O=s.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var R,V,w;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...DefaultCardBox.args,
    variant: 'dash'
  }
}`,...(w=(V=t.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var W,j,E;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'cyan'
  }
}`,...(E=(j=l.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var I,_,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...FlatDefaultCardBox.args,
    color: 'cyan'
  }
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var K,P,q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...DashDefaultCardBox.args,
    color: 'cyan'
  }
}`,...(q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var z,H,J;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'blue'
  }
}`,...(J=(H=i.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var L,N,Q;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...FlatDefaultCardBox.args,
    color: 'blue'
  }
}`,...(Q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...DashDefaultCardBox.args,
    color: 'blue'
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,rr,er;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'green'
  }
}`,...(er=(rr=m.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var ar,or,sr;C.parameters={...C.parameters,docs:{...(ar=C.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...FlatDefaultCardBox.args,
    color: 'green'
  }
}`,...(sr=(or=C.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var tr,nr,cr;x.parameters={...x.parameters,docs:{...(tr=x.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...DashDefaultCardBox.args,
    color: 'green'
  }
}`,...(cr=(nr=x.parameters)==null?void 0:nr.docs)==null?void 0:cr.source}}};var lr,dr,pr;B.parameters={...B.parameters,docs:{...(lr=B.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'orange'
  }
}`,...(pr=(dr=B.parameters)==null?void 0:dr.docs)==null?void 0:pr.source}}};var ir,ur,gr;f.parameters={...f.parameters,docs:{...(ir=f.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...FlatDefaultCardBox.args,
    color: 'orange'
  }
}`,...(gr=(ur=f.parameters)==null?void 0:ur.docs)==null?void 0:gr.source}}};var mr,Cr,xr;D.parameters={...D.parameters,docs:{...(mr=D.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...DashDefaultCardBox.args,
    color: 'orange'
  }
}`,...(xr=(Cr=D.parameters)==null?void 0:Cr.docs)==null?void 0:xr.source}}};var Br,fr,Dr;h.parameters={...h.parameters,docs:{...(Br=h.parameters)==null?void 0:Br.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'red'
  }
}`,...(Dr=(fr=h.parameters)==null?void 0:fr.docs)==null?void 0:Dr.source}}};var hr,br,Sr;b.parameters={...b.parameters,docs:{...(hr=b.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...FlatDefaultCardBox.args,
    color: 'red'
  }
}`,...(Sr=(br=b.parameters)==null?void 0:br.docs)==null?void 0:Sr.source}}};var Tr,Fr,Mr;S.parameters={...S.parameters,docs:{...(Tr=S.parameters)==null?void 0:Tr.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...DashDefaultCardBox.args,
    color: 'red'
  }
}`,...(Mr=(Fr=S.parameters)==null?void 0:Fr.docs)==null?void 0:Mr.source}}};const Ir=["DefaultCardBox","MetallicDefaultCardBox","FlatDefaultCardBox","DashDefaultCardBox","MetallicCyanCardBox","FlatCyanCardBox","DashCyanCardBox","MetallicBlueCardBox","FlatBlueCardBox","DashBlueCardBox","MetallicGreenCardBox","FlatGreenCardBox","DashGreenCardBox","MetallicOrangeCardBox","FlatOrangeCardBox","DashOrangeCardBox","MetallicRedCardBox","FlatRedCardBox","DashRedCardBox"];export{g as DashBlueCardBox,p as DashCyanCardBox,t as DashDefaultCardBox,x as DashGreenCardBox,D as DashOrangeCardBox,S as DashRedCardBox,n as DefaultCardBox,u as FlatBlueCardBox,d as FlatCyanCardBox,s as FlatDefaultCardBox,C as FlatGreenCardBox,f as FlatOrangeCardBox,b as FlatRedCardBox,i as MetallicBlueCardBox,l as MetallicCyanCardBox,o as MetallicDefaultCardBox,m as MetallicGreenCardBox,B as MetallicOrangeCardBox,h as MetallicRedCardBox,Ir as __namedExportsOrder,Er as default};
