import{d as h,F as D,k as F,l as L,E as i,q as o,C as t,N as g,O as P,H as u,R as W,I as m}from"./vue.esm-bundler-17c66ad0.js";import{_ as H}from"./BaseLink-063a4361.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-8dec27bd.js";const S=h({__name:"BadgeBox",props:{label:{},content:{},delimiter:{},color:{default:"default"},variant:{default:"capsule"},link:{}},setup(p){const e=p;return D(a=>({c6544528:`"${e.delimiter}"`})),(a,j)=>(o(),F(H,{link:e.link,class:i([a.$style["badge-container"],a.$style[e.variant],a.$style[`color-${e.color}`]])},{default:L(()=>[e.label?(o(),t("label",{key:0,class:i(a.$style["badge-label"])},[e.delimiter&&e.variant==="capsule"?(o(!0),t(g,{key:0},P(e.label.split(e.delimiter),(N,E)=>(o(),t("span",{key:E},u(N),1))),128)):(o(),t(g,{key:1},[W(u(e.label),1)],64))],2)):m("",!0),e.content?(o(),t("p",{key:1,class:i(a.$style["badge-content"])},u(e.content),3)):m("",!0)]),_:1},8,["link","class"]))}}),U="_tab_1nyqw_16",z="_capsule_1nyqw_121",A={"badge-container":"_badge-container_1nyqw_1","color-default":"_color-default_1nyqw_8",tab:U,"color-cyan":"_color-cyan_1nyqw_19","color-blue":"_color-blue_1nyqw_36","color-green":"_color-green_1nyqw_53","color-orange":"_color-orange_1nyqw_70","color-red":"_color-red_1nyqw_87","color-purple":"_color-purple_1nyqw_104",capsule:z,"badge-label":"_badge-label_1nyqw_128","badge-content":"_badge-content_1nyqw_128"},R={$style:A},I=M(S,[["__cssModules",R],["__scopeId","data-v-fd756b25"]]);S.__docgenInfo={exportName:"default",displayName:"BadgeBox",description:"",tags:{},props:[{name:"variant",defaultValue:{func:!1,value:"'capsule'"}},{name:"color",defaultValue:{func:!1,value:"'default'"}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/badge/BadgeBox.vue"]};const X={title:"Components / Element / BadgeBox",component:I,tags:["autodocs"],argTypes:{label:{control:"text",description:"Badge label"},content:{control:"text",description:"Badge content (optional)"},delimiter:{control:"text",description:"Badge delimiter, only applied on label (optional)"},color:{control:"select",description:"Badge color (optional)",options:["default","cyan","blue","green","orange","red","purple"],defaultValue:"default"},variant:{control:"radio",description:"Badge variant (optional)",options:["capsule","tab"],defaultValue:"capsule"},link:{control:"text",description:"Badge link (optional)"}}},d=p=>({components:{BadgeBox:I},setup(){return{args:p}},template:'<BadgeBox v-bind="args" />'}),r=d.bind({});r.args={label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"default"};const s=d.bind({});s.args={label:"T1071.001",content:"Web Protocols",delimiter:".",variant:"capsule",color:"purple"};const l=d.bind({});l.args={label:"T1071.001",variant:"capsule",delimiter:".",color:"purple"};const n=d.bind({});n.args={content:"Web Protocols",variant:"capsule",color:"purple"};const c=d.bind({});c.args={label:"ArgusHack",content:"172.17.43.169",variant:"tab",color:"cyan"};var B,_,b;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(b=(_=r.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var y,x,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,k,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var w,q,$;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...($=(q=n.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var T,V,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    BadgeBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<BadgeBox v-bind="args" />'
})`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const Y=["DefaultBadgeBox","CapsuleBadgeBox","CapsuleLabelOnlyBadgeBox","CapsuleContentOnlyBadgeBox","TabBadgeBox"];export{s as CapsuleBadgeBox,n as CapsuleContentOnlyBadgeBox,l as CapsuleLabelOnlyBadgeBox,r as DefaultBadgeBox,c as TabBadgeBox,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=BadgeBox.stories-c5ee7c78.js.map
