import{d as F,F as L,k as P,l as W,E as u,q as o,C as t,J as g,O as w,K as i,R as M,I as m}from"./vue.esm-bundler-4b5d43cc.js";import{_ as U}from"./BaseLink-b8f60284.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-18ed9d8f.js";const E=F({__name:"BadgeBox",props:{label:{},content:{},delimiter:{},color:{default:"default"},variant:{default:"capsule"},link:{}},setup(p){const e=p;return L(a=>({"3363e4fe":`"${e.delimiter}"`})),(a,K)=>(o(),P(U,{link:e.link,class:u([a.$style["badge-container"],a.$style[e.variant],a.$style[`color-${e.color}`]])},{default:W(()=>[e.label?(o(),t("label",{key:0,class:u(a.$style["badge-label"])},[e.delimiter&&e.variant==="capsule"?(o(!0),t(g,{key:0},w(e.label.split(e.delimiter),(h,D)=>(o(),t("span",{key:D},i(h),1))),128)):(o(),t(g,{key:1},[M(i(e.label),1)],64))],2)):m("",!0),e.content?(o(),t("p",{key:1,class:u(a.$style["badge-content"])},i(e.content),3)):m("",!0)]),_:1},8,["link","class"]))}}),z="_tab_1y2vu_16",A="_capsule_1y2vu_121",H={"badge-container":"_badge-container_1y2vu_1","color-default":"_color-default_1y2vu_8",tab:z,"color-cyan":"_color-cyan_1y2vu_19","color-blue":"_color-blue_1y2vu_36","color-green":"_color-green_1y2vu_53","color-orange":"_color-orange_1y2vu_70","color-red":"_color-red_1y2vu_87","color-purple":"_color-purple_1y2vu_104",capsule:A,"badge-label":"_badge-label_1y2vu_128","badge-content":"_badge-content_1y2vu_128"},J={$style:H},N=q(E,[["__cssModules",J],["__scopeId","data-v-4bc87078"]]);E.__docgenInfo={exportName:"default",displayName:"BadgeBox",description:"",tags:{},props:[{name:"variant",defaultValue:{func:!1,value:"'capsule'"}},{name:"color",defaultValue:{func:!1,value:"'default'"}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/badge/BadgeBox.vue"]};const X={title:"Components / Element / BadgeBox",component:N,tags:["autodocs"],argTypes:{label:{control:"text",description:"Badge label"},content:{control:"text",description:"Badge content (optional)"},delimiter:{control:"text",description:"Badge delimiter, only applied on label (optional)"},color:{control:"select",description:"Badge color (optional)",options:["default","cyan","blue","green","orange","red","purple"],defaultValue:"default"},variant:{control:"radio",description:"Badge variant (optional)",options:["capsule","tab"],defaultValue:"capsule"},link:{control:"text",description:"Badge link (optional)"}}},d=p=>({components:{BadgeBox:N},setup(){return{args:p}},template:'<BadgeBox v-bind="args" />'}),r=d.bind({});r.args={label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"default"};const s=d.bind({});s.args={label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"purple"};const l=d.bind({});l.args={label:"T1071.001",variant:"capsule",delimiter:".",color:"purple"};const n=d.bind({});n.args={content:"Web Protocols",variant:"capsule",color:"purple"};const c=d.bind({});c.args={label:"ArgusHack",content:"172.17.43.169",variant:"tab",color:"cyan"};var B,_,b;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(b=(_=r.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var y,x,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,k,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var $,T,V;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(V=(T=n.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var O,S,I;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(I=(S=c.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Y=["DefaultBadgeBox","CapsuleBadgeBox","CapsuleLabelOnlyBadgeBox","CapsuleContentOnlyBadgeBox","TabBadgeBox"];export{s as CapsuleBadgeBox,n as CapsuleContentOnlyBadgeBox,l as CapsuleLabelOnlyBadgeBox,r as DefaultBadgeBox,c as TabBadgeBox,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=BadgeBox.stories-fc10c602.js.map
