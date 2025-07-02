import{d as K,x as g,C as M,I as o,K as A,B as n,G as r,u as F,M as u,R as f,S as H,L as m,T as U}from"./vue.esm-bundler-ci6tbuJ3.js";import{I as G}from"./offline-ChRR0KDp.js";import{_ as j}from"./BaseLink-Dp3waMOx.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DNcykg7C.js";const z=K({__name:"BadgeBox",props:{label:{},content:{},icon:{},delimiter:{},color:{default:"default"},variant:{default:"capsule"},link:{}},setup(R){A(a=>({"701c0127":`"${e.delimiter}"`}));const e=R;return(a,ie)=>(n(),g(j,{class:o([a.$style["badge-container"],a.$style[e.variant],a.$style[`color-${e.color}`]]),link:e.link},{default:M(()=>[e.label?(n(),r("label",{key:0,class:o([a.$style["badge-label"],a.$style.wrapper,a.$style.flex,a.$style.horizontal])},[e.icon?(n(),g(F(G),{key:0,class:o(a.$style.icon),icon:e.icon},null,8,["class","icon"])):u("",!0),e.delimiter&&e.variant==="capsule"?(n(!0),r(f,{key:1},H(e.label.split(e.delimiter),(E,D)=>(n(),r("span",{key:D},m(E),1))),128)):(n(),r(f,{key:2},[U(m(e.label),1)],64))],2)):u("",!0),e.content?(n(),r("p",{key:1,class:o(a.$style["badge-content"])},m(e.content),3)):u("",!0)]),_:1},8,["class","link"]))}}),Q="_wrapper_1xahr_1",X="_flex_1xahr_12",Y="_horizontal_1xahr_48",Z="_wrap_1xahr_1",ee="_vertical_1xahr_60",ae="_grid_1xahr_72",ne="_tab_1xahr_94",re="_capsule_1xahr_199",oe="_icon_1xahr_214",te={wrapper:Q,flex:X,"col-1":"_col-1_1xahr_12","col-2":"_col-2_1xahr_15","col-3":"_col-3_1xahr_18","col-4":"_col-4_1xahr_21","col-5":"_col-5_1xahr_24","col-6":"_col-6_1xahr_27","col-7":"_col-7_1xahr_30","col-8":"_col-8_1xahr_33","col-9":"_col-9_1xahr_36","col-10":"_col-10_1xahr_39","col-11":"_col-11_1xahr_42","col-12":"_col-12_1xahr_45",horizontal:Y,wrap:Z,vertical:ee,grid:ae,"badge-container":"_badge-container_1xahr_78","color-default":"_color-default_1xahr_86",tab:ne,"color-cyan":"_color-cyan_1xahr_97","color-blue":"_color-blue_1xahr_114","color-green":"_color-green_1xahr_131","color-orange":"_color-orange_1xahr_148","color-red":"_color-red_1xahr_165","color-purple":"_color-purple_1xahr_182",capsule:re,"badge-label":"_badge-label_1xahr_206","badge-content":"_badge-content_1xahr_206",icon:oe},se={$style:te},le=J(z,[["__cssModules",se],["__scopeId","data-v-ffce24ce"]]);z.__docgenInfo={exportName:"default",displayName:"BadgeBox",type:1,props:[{name:"color",global:!1,description:"",tags:[],required:!1,type:"Color | undefined",declarations:[],schema:{kind:"enum",type:"Color | undefined",schema:["undefined",'"default"','"cyan"','"blue"','"green"','"orange"','"red"','"purple"']},default:'"default"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"Variant | undefined",declarations:[],schema:{kind:"enum",type:"Variant | undefined",schema:["undefined",'"capsule"','"tab"']},default:'"capsule"'},{name:"label",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"content",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"icon",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"delimiter",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"link",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"content",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"icon",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"delimiter",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"enum",type:"Color",schema:['"default"','"cyan"','"blue"','"green"','"orange"','"red"','"purple"']}},{name:"variant",type:"Variant",description:"",declarations:[],schema:{kind:"enum",type:"Variant",schema:['"capsule"','"tab"']}},{name:"link",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/badge/BadgeBox.vue"};const ge={title:"Components / Element / BadgeBox",component:le,tags:["autodocs"],argTypes:{label:{control:"text",description:"Badge label"},content:{control:"text",description:"Badge content (optional)"},delimiter:{control:"text",description:"Badge delimiter, only applied on label (optional)"},color:{control:"select",description:"Badge color (optional)",options:["default","cyan","blue","green","orange","red","purple"],defaultValue:"default"},variant:{control:"radio",description:"Badge variant (optional)",options:["capsule","tab"],defaultValue:"capsule"},link:{control:"text",description:"Badge link (optional)"}}},t={args:{label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"default"}},s={args:{label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"purple"}},l={args:{label:"T1071.001",content:"Web Protocols",icon:"fa6-solid:skull",delimiter:".",variant:"capsule",color:"purple"}},i={args:{label:"T1071.001",variant:"capsule",delimiter:".",color:"purple"}},c={args:{label:"T1071.001",icon:"fa6-solid:skull",variant:"capsule",delimiter:".",color:"purple"}},d={args:{content:"Web Protocols",variant:"capsule",color:"purple"}},p={args:{label:"ArgusHack",content:"172.17.43.169",variant:"tab",color:"cyan"}};var _,y,b;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    content: 'Web Protocols',
    delimiter: '.',
    variant: 'capsule',
    color: 'default'
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,x,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    content: 'Web Protocols',
    delimiter: '.',
    variant: 'capsule',
    color: 'purple'
  }
}`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var k,v,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    content: 'Web Protocols',
    icon: 'fa6-solid:skull',
    delimiter: '.',
    variant: 'capsule',
    color: 'purple'
  }
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var T,q,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    variant: 'capsule',
    delimiter: '.',
    color: 'purple'
  }
}`,...(w=(q=i.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var $,I,W;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    icon: 'fa6-solid:skull',
    variant: 'capsule',
    delimiter: '.',
    color: 'purple'
  }
}`,...(W=(I=c.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var P,V,S;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const fe=["DefaultBadgeBox","CapsuleBadgeBox","CapsuleBadgeBoxWithIcon","CapsuleLabelOnlyBadgeBox","CapsuleLabelOnlyBadgeBoxWithIcon","CapsuleContentOnlyBadgeBox","TabBadgeBox"];export{s as CapsuleBadgeBox,l as CapsuleBadgeBoxWithIcon,d as CapsuleContentOnlyBadgeBox,i as CapsuleLabelOnlyBadgeBox,c as CapsuleLabelOnlyBadgeBoxWithIcon,t as DefaultBadgeBox,p as TabBadgeBox,fe as __namedExportsOrder,ge as default};
