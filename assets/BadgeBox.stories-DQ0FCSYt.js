import{d as h,c as f,w as k,n as r,u as j,o as a,a as o,b as v,I as x,e as u,F as g,r as C,t as m,f as w}from"./iframe-BzixaBTs.js";import{_ as T}from"./BaseLink-Cu_QksKe.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBBnzm7U.js";const _=h({__name:"BadgeBox",props:{label:{},content:{},icon:{},delimiter:{},color:{default:"default"},variant:{default:"capsule"},link:{}},setup(y){j(n=>({v701c0127:`"${e.delimiter}"`}));const e=y;return(n,D)=>(a(),f(T,{class:r([n.$style["badge-container"],n.$style[e.variant],n.$style[`color-${e.color}`]]),link:e.link},{default:k(()=>[e.label?(a(),o("label",{key:0,class:r([n.$style["badge-label"],n.$style.wrapper,n.$style.flex,n.$style.horizontal])},[e.icon?(a(),f(v(x),{key:0,class:r(n.$style.icon),icon:e.icon},null,8,["class","icon"])):u("",!0),e.delimiter&&e.variant==="capsule"?(a(!0),o(g,{key:1},C(e.label.split(e.delimiter),(b,B)=>(a(),o("span",{key:B},m(b),1))),128)):(a(),o(g,{key:2},[w(m(e.label),1)],64))],2)):u("",!0),e.content?(a(),o("p",{key:1,class:r(n.$style["badge-content"])},m(e.content),3)):u("",!0)]),_:1},8,["class","link"]))}}),$="_wrapper_1f8j3_1",P="_flex_1f8j3_12",W="_horizontal_1f8j3_48",I="_wrap_1f8j3_1",V="_vertical_1f8j3_60",O="_grid_1f8j3_72",S="_tab_1f8j3_92",N="_capsule_1f8j3_225",z="_icon_1f8j3_240",L={wrapper:$,flex:P,"col-1":"_col-1_1f8j3_12","col-2":"_col-2_1f8j3_15","col-3":"_col-3_1f8j3_18","col-4":"_col-4_1f8j3_21","col-5":"_col-5_1f8j3_24","col-6":"_col-6_1f8j3_27","col-7":"_col-7_1f8j3_30","col-8":"_col-8_1f8j3_33","col-9":"_col-9_1f8j3_36","col-10":"_col-10_1f8j3_39","col-11":"_col-11_1f8j3_42","col-12":"_col-12_1f8j3_45",horizontal:W,wrap:I,vertical:V,grid:O,"badge-container":"_badge-container_1f8j3_78","color-default":"_color-default_1f8j3_86",tab:S,"color-cyan":"_color-cyan_1f8j3_99","color-blue":"_color-blue_1f8j3_120","color-green":"_color-green_1f8j3_141","color-orange":"_color-orange_1f8j3_162","color-red":"_color-red_1f8j3_183","color-purple":"_color-purple_1f8j3_204",capsule:N,"badge-label":"_badge-label_1f8j3_232","badge-content":"_badge-content_1f8j3_232",icon:z},E={$style:L},R=q(_,[["__cssModules",E],["__scopeId","data-v-ffce24ce"]]);_.__docgenInfo={exportName:"default",displayName:"BadgeBox",type:1,props:[{name:"label",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"content",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"icon",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"delimiter",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"color",global:!1,description:"",tags:[],required:!1,type:"Color | undefined",declarations:[],schema:{kind:"enum",type:"Color | undefined",schema:["undefined",'"default"','"blue"','"purple"','"cyan"','"green"','"orange"','"red"']},default:'"default"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"Variant | undefined",declarations:[],schema:{kind:"enum",type:"Variant | undefined",schema:["undefined",'"capsule"','"tab"']},default:'"capsule"'},{name:"link",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"variant",type:"Variant",description:"",declarations:[],schema:{kind:"enum",type:"Variant",schema:['"capsule"','"tab"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"enum",type:"Color",schema:['"default"','"blue"','"purple"','"cyan"','"green"','"orange"','"red"']}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"link",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"icon",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"content",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"delimiter",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/badge/BadgeBox.vue"};const U={title:"Components / Element / BadgeBox",component:R,tags:["autodocs"],argTypes:{label:{control:"text",description:"Badge label"},content:{control:"text",description:"Badge content (optional)"},delimiter:{control:"text",description:"Badge delimiter, only applied on label (optional)"},color:{control:"select",description:"Badge color (optional)",options:["default","cyan","blue","green","orange","red","purple"],defaultValue:"default"},variant:{control:"radio",description:"Badge variant (optional)",options:["capsule","tab"],defaultValue:"capsule"},link:{control:"text",description:"Badge link (optional)"}}},t={args:{label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"default"}},s={args:{label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"purple"}},l={args:{label:"T1071.001",content:"Web Protocols",icon:"fa6-solid:skull",delimiter:".",variant:"capsule",color:"purple"}},i={args:{label:"T1071.001",variant:"capsule",delimiter:".",color:"purple"}},c={args:{label:"T1071.001",icon:"fa6-solid:skull",variant:"capsule",delimiter:".",color:"purple"}},d={args:{content:"Web Protocols",variant:"capsule",color:"purple"}},p={args:{label:"ArgusHack",content:"172.17.43.169",variant:"tab",color:"cyan"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    content: 'Web Protocols',
    delimiter: '.',
    variant: 'capsule',
    color: 'default'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    content: 'Web Protocols',
    delimiter: '.',
    variant: 'capsule',
    color: 'purple'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    content: 'Web Protocols',
    icon: 'fa6-solid:skull',
    delimiter: '.',
    variant: 'capsule',
    color: 'purple'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    variant: 'capsule',
    delimiter: '.',
    color: 'purple'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'T1071.001',
    icon: 'fa6-solid:skull',
    variant: 'capsule',
    delimiter: '.',
    color: 'purple'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Web Protocols',
    variant: 'capsule',
    color: 'purple'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'ArgusHack',
    content: '172.17.43.169',
    variant: 'tab',
    color: 'cyan'
  }
}`,...p.parameters?.docs?.source}}};const G=["DefaultBadgeBox","CapsuleBadgeBox","CapsuleBadgeBoxWithIcon","CapsuleLabelOnlyBadgeBox","CapsuleLabelOnlyBadgeBoxWithIcon","CapsuleContentOnlyBadgeBox","TabBadgeBox"];export{s as CapsuleBadgeBox,l as CapsuleBadgeBoxWithIcon,d as CapsuleContentOnlyBadgeBox,i as CapsuleLabelOnlyBadgeBox,c as CapsuleLabelOnlyBadgeBoxWithIcon,t as DefaultBadgeBox,p as TabBadgeBox,G as __namedExportsOrder,U as default};
