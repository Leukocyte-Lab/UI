import{d as K,x as g,C as M,I as r,K as A,B as n,G as o,u as F,M as u,R as b,S as H,L as m,T as U}from"./vue.esm-bundler-C7it3AYA.js";import{I as G}from"./offline-oFLUdlrj.js";import{_ as j}from"./BaseLink-CiYBeBkj.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CxnU7RZ7.js";const z=K({__name:"BadgeBox",props:{label:{},content:{},icon:{},delimiter:{},color:{default:"default"},variant:{default:"capsule"},link:{}},setup(R){A(a=>({"216d2553":`"${e.delimiter}"`}));const e=R;return(a,ce)=>(n(),g(j,{class:r([a.$style["badge-container"],a.$style[e.variant],a.$style[`color-${e.color}`]]),link:e.link},{default:M(()=>[e.label?(n(),o("label",{key:0,class:r([a.$style["badge-label"],a.$style.wrapper,a.$style.flex,a.$style.horizontal])},[e.icon?(n(),g(F(G),{key:0,class:r(a.$style.icon),icon:e.icon},null,8,["class","icon"])):u("",!0),e.delimiter&&e.variant==="capsule"?(n(!0),o(b,{key:1},H(e.label.split(e.delimiter),(E,D)=>(n(),o("span",{key:D},m(E),1))),128)):(n(),o(b,{key:2},[U(m(e.label),1)],64))],2)):u("",!0),e.content?(n(),o("p",{key:1,class:r(a.$style["badge-content"])},m(e.content),3)):u("",!0)]),_:1},8,["class","link"]))}}),Q="_wrapper_43bac_1",X="_flex_43bac_12",Y="_horizontal_43bac_48",Z="_wrap_43bac_1",ee="_vertical_43bac_60",ae="_grid_43bac_72",ne="_tab_43bac_94",oe="_capsule_43bac_199",re="_icon_43bac_213",te={wrapper:Q,flex:X,"col-1":"_col-1_43bac_12","col-2":"_col-2_43bac_15","col-3":"_col-3_43bac_18","col-4":"_col-4_43bac_21","col-5":"_col-5_43bac_24","col-6":"_col-6_43bac_27","col-7":"_col-7_43bac_30","col-8":"_col-8_43bac_33","col-9":"_col-9_43bac_36","col-10":"_col-10_43bac_39","col-11":"_col-11_43bac_42","col-12":"_col-12_43bac_45",horizontal:Y,wrap:Z,vertical:ee,grid:ae,"badge-container":"_badge-container_43bac_78","color-default":"_color-default_43bac_86",tab:ne,"color-cyan":"_color-cyan_43bac_97","color-blue":"_color-blue_43bac_114","color-green":"_color-green_43bac_131","color-orange":"_color-orange_43bac_148","color-red":"_color-red_43bac_165","color-purple":"_color-purple_43bac_182",capsule:oe,"badge-label":"_badge-label_43bac_206","badge-content":"_badge-content_43bac_206",icon:re},se={$style:te},le=J(z,[["__cssModules",se],["__scopeId","data-v-0d16e06d"]]);z.__docgenInfo={exportName:"default",displayName:"BadgeBox",type:1,props:[{name:"color",global:!1,description:"",tags:[],required:!1,type:"Color | undefined",declarations:[],schema:{kind:"enum",type:"Color | undefined",schema:["undefined",'"default"','"cyan"','"blue"','"green"','"orange"','"red"','"purple"']},default:'"default"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"Variant | undefined",declarations:[],schema:{kind:"enum",type:"Variant | undefined",schema:["undefined",'"capsule"','"tab"']},default:'"capsule"'},{name:"link",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"label",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"content",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"icon",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"delimiter",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],events:[],slots:[],exposed:[{name:"link",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"content",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"icon",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"delimiter",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"enum",type:"Color",schema:['"default"','"cyan"','"blue"','"green"','"orange"','"red"','"purple"']}},{name:"variant",type:"Variant",description:"",declarations:[],schema:{kind:"enum",type:"Variant",schema:['"capsule"','"tab"']}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/badge/BadgeBox.vue"};const ge={title:"Components / Element / BadgeBox",component:le,tags:["autodocs"],argTypes:{label:{control:"text",description:"Badge label"},content:{control:"text",description:"Badge content (optional)"},delimiter:{control:"text",description:"Badge delimiter, only applied on label (optional)"},color:{control:"select",description:"Badge color (optional)",options:["default","cyan","blue","green","orange","red","purple"],defaultValue:"default"},variant:{control:"radio",description:"Badge variant (optional)",options:["capsule","tab"],defaultValue:"capsule"},link:{control:"text",description:"Badge link (optional)"}}},t={args:{label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"default"}},s={args:{label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"purple"}},l={args:{label:"T1071.001",content:"Web Protocols",icon:"fa6-solid:skull",delimiter:".",variant:"capsule",color:"purple"}},c={args:{label:"T1071.001",variant:"capsule",delimiter:".",color:"purple"}},i={args:{label:"T1071.001",icon:"fa6-solid:skull",variant:"capsule",delimiter:".",color:"purple"}},d={args:{content:"Web Protocols",variant:"capsule",color:"purple"}},p={args:{label:"ArgusHack",content:"172.17.43.169",variant:"tab",color:"cyan"}};var f,_,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    content: 'Web Protocols',
    delimiter: '.',
    variant: 'capsule',
    color: 'default'
  }
}`,...(y=(_=t.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var B,h,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    content: 'Web Protocols',
    delimiter: '.',
    variant: 'capsule',
    color: 'purple'
  }
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,x,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    content: 'Web Protocols',
    icon: 'fa6-solid:skull',
    delimiter: '.',
    variant: 'capsule',
    color: 'purple'
  }
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var T,q,w;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    variant: 'capsule',
    delimiter: '.',
    color: 'purple'
  }
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var $,I,W;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    icon: 'fa6-solid:skull',
    variant: 'capsule',
    delimiter: '.',
    color: 'purple'
  }
}`,...(W=(I=i.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var P,V,S;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    content: 'Web Protocols',
    variant: 'capsule',
    color: 'purple'
  }
}`,...(S=(V=d.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var O,L,N;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'ArgusHack',
    content: '172.17.43.169',
    variant: 'tab',
    color: 'cyan'
  }
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const be=["DefaultBadgeBox","CapsuleBadgeBox","CapsuleBadgeBoxWithIcon","CapsuleLabelOnlyBadgeBox","CapsuleLabelOnlyBadgeBoxWithIcon","CapsuleContentOnlyBadgeBox","TabBadgeBox"];export{s as CapsuleBadgeBox,l as CapsuleBadgeBoxWithIcon,d as CapsuleContentOnlyBadgeBox,c as CapsuleLabelOnlyBadgeBox,i as CapsuleLabelOnlyBadgeBoxWithIcon,t as DefaultBadgeBox,p as TabBadgeBox,be as __namedExportsOrder,ge as default};
