import{d as D,H as E,k as L,l as W,y as i,q as o,x as t,N as g,O as w,z as u,P as z,A as m}from"./vue.esm-bundler-d742bde4.js";import{_ as A}from"./BaseLink-ab27604b.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-879765a1.js";const N=D({__name:"BadgeBox",props:{label:{},content:{},delimiter:{},color:{default:"default"},variant:{default:"capsule"},link:{}},setup(p){const e=p;return E(a=>({"2fdbeaa8":`"${e.delimiter}"`})),(a,G)=>(o(),L(A,{link:e.link,class:i([a.$style["badge-container"],a.$style[e.variant],a.$style[`color-${e.color}`]])},{default:W(()=>[e.label?(o(),t("label",{key:0,class:i(a.$style["badge-label"])},[e.delimiter&&e.variant==="capsule"?(o(!0),t(g,{key:0},w(e.label.split(e.delimiter),(P,h)=>(o(),t("span",{key:h},u(P),1))),128)):(o(),t(g,{key:1},[z(u(e.label),1)],64))],2)):m("",!0),e.content?(o(),t("p",{key:1,class:i(a.$style["badge-content"])},u(e.content),3)):m("",!0)]),_:1},8,["link","class"]))}}),H="_tab_136j3_17",M="_capsule_136j3_122",U={"badge-container":"_badge-container_136j3_1","color-default":"_color-default_136j3_9",tab:H,"color-cyan":"_color-cyan_136j3_20","color-blue":"_color-blue_136j3_37","color-green":"_color-green_136j3_54","color-orange":"_color-orange_136j3_71","color-red":"_color-red_136j3_88","color-purple":"_color-purple_136j3_105",capsule:M,"badge-label":"_badge-label_136j3_129","badge-content":"_badge-content_136j3_129"},q={$style:U},I=F(N,[["__cssModules",q],["__scopeId","data-v-48f4a666"]]);N.__docgenInfo={exportName:"default",displayName:"BadgeBox",description:"",tags:{},props:[{name:"variant",defaultValue:{func:!1,value:"'capsule'"}},{name:"color",defaultValue:{func:!1,value:"'default'"}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/badge/BadgeBox.vue"]};const X={title:"Components / Element / BadgeBox",component:I,tags:["autodocs"],argTypes:{label:{control:"text",description:"Badge label"},content:{control:"text",description:"Badge content (optional)"},delimiter:{control:"text",description:"Badge delimiter, only applied on label (optional)"},color:{control:"select",description:"Badge color (optional)",options:["default","cyan","blue","green","orange","red","purple"],defaultValue:"default"},variant:{control:"radio",description:"Badge variant (optional)",options:["capsule","tab"],defaultValue:"capsule"},link:{control:"text",description:"Badge link (optional)"}}},d=p=>({components:{BadgeBox:I},setup(){return{args:p}},template:'<BadgeBox v-bind="args" />'}),r=d.bind({});r.args={label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"default"};const s=d.bind({});s.args={label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"purple"};const l=d.bind({});l.args={label:"T1071.001",variant:"capsule",delimiter:".",color:"purple"};const n=d.bind({});n.args={content:"Web Protocols",variant:"capsule",color:"purple"};const c=d.bind({});c.args={label:"ArgusHack",content:"172.17.43.169",variant:"tab",color:"cyan"};var B,_,b;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(b=(_=r.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var x,f,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,k,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var j,$,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(T=($=n.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var V,O,S;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(S=(O=c.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};const Y=["DefaultBadgeBox","CapsuleBadgeBox","CapsuleLabelOnlyBadgeBox","CapsuleContentOnlyBadgeBox","TabBadgeBox"];export{s as CapsuleBadgeBox,n as CapsuleContentOnlyBadgeBox,l as CapsuleLabelOnlyBadgeBox,r as DefaultBadgeBox,c as TabBadgeBox,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=BadgeBox.stories-b54290ef.js.map
