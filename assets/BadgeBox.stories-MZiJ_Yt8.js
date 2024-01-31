import{i as h,q as E,v as F,F as i,H as L,A as o,D as n,O as g,P as W,I as u,Q as w,J as m}from"./vue.esm-bundler-SihWJJBJ.js";import{_ as A}from"./BaseLink-UuMkZ9SB.js";import{_ as H}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-CU740m_c.js";const I=h({__name:"BadgeBox",props:{label:{},content:{},delimiter:{},color:{default:"default"},variant:{default:"capsule"},link:{}},setup(p){L(a=>({"2fdbeaa8":`"${e.delimiter}"`}));const e=p;return(a,J)=>(o(),E(A,{link:e.link,class:i([a.$style["badge-container"],a.$style[e.variant],a.$style[`color-${e.color}`]])},{default:F(()=>[e.label?(o(),n("label",{key:0,class:i(a.$style["badge-label"])},[e.delimiter&&e.variant==="capsule"?(o(!0),n(g,{key:0},W(e.label.split(e.delimiter),(N,P)=>(o(),n("span",{key:P},u(N),1))),128)):(o(),n(g,{key:1},[w(u(e.label),1)],64))],2)):m("",!0),e.content?(o(),n("p",{key:1,class:i(a.$style["badge-content"])},u(e.content),3)):m("",!0)]),_:1},8,["link","class"]))}}),M="_tab_136j3_17",U="_capsule_136j3_122",q={"badge-container":"_badge-container_136j3_1","color-default":"_color-default_136j3_9",tab:M,"color-cyan":"_color-cyan_136j3_20","color-blue":"_color-blue_136j3_37","color-green":"_color-green_136j3_54","color-orange":"_color-orange_136j3_71","color-red":"_color-red_136j3_88","color-purple":"_color-purple_136j3_105",capsule:U,"badge-label":"_badge-label_136j3_129","badge-content":"_badge-content_136j3_129"},z={$style:q},D=H(I,[["__cssModules",z],["__scopeId","data-v-48f4a666"]]);I.__docgenInfo={exportName:"default",displayName:"BadgeBox",description:"",tags:{},props:[{name:"variant",defaultValue:{func:!1,value:"'capsule'"}},{name:"color",defaultValue:{func:!1,value:"'default'"}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/badge/BadgeBox.vue"]};const X={title:"Components / Element / BadgeBox",component:D,tags:["autodocs"],argTypes:{label:{control:"text",description:"Badge label"},content:{control:"text",description:"Badge content (optional)"},delimiter:{control:"text",description:"Badge delimiter, only applied on label (optional)"},color:{control:"select",description:"Badge color (optional)",options:["default","cyan","blue","green","orange","red","purple"],defaultValue:"default"},variant:{control:"radio",description:"Badge variant (optional)",options:["capsule","tab"],defaultValue:"capsule"},link:{control:"text",description:"Badge link (optional)"}}},d=p=>({components:{BadgeBox:D},setup(){return{args:p}},template:'<BadgeBox v-bind="args" />'}),t=d.bind({});t.args={label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"default"};const r=d.bind({});r.args={label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"purple"};const s=d.bind({});s.args={label:"T1071.001",variant:"capsule",delimiter:".",color:"purple"};const l=d.bind({});l.args={content:"Web Protocols",variant:"capsule",color:"purple"};const c=d.bind({});c.args={label:"ArgusHack",content:"172.17.43.169",variant:"tab",color:"cyan"};var B,_,b;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(b=(_=t.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var x,f,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,k,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var j,$,T;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(T=($=l.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var V,O,S;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(S=(O=c.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};const Y=["DefaultBadgeBox","CapsuleBadgeBox","CapsuleLabelOnlyBadgeBox","CapsuleContentOnlyBadgeBox","TabBadgeBox"];export{r as CapsuleBadgeBox,l as CapsuleContentOnlyBadgeBox,s as CapsuleLabelOnlyBadgeBox,t as DefaultBadgeBox,c as TabBadgeBox,Y as __namedExportsOrder,X as default};
