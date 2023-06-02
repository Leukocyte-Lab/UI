import{d as z,b as O,w as A,x as G,e as u,o as p,j as m,q as H,n as B,p as b,k as J}from"./vue.esm-bundler-89649b67.js";import{I as K}from"./offline-44db3cfb.js";import{u as L,_ as Q,a as W}from"./BaseLink-a1a9f589.js";const F=z({__name:"ButtonBox",props:{label:{},icon:{},link:{},disabled:{type:Boolean,default:!1},variant:{default:"rounded"},level:{default:"primary"}},setup(i){const e=i,{clicked:T,onClick:U}=L(o=>{e.disabled&&(o.preventDefault(),o.stopPropagation())});return(o,ie)=>(p(),O(Q,G({ref:"wrapperRef$",link:e.link,class:[o.$style["button-container"],o.$style.behavior,o.$style[e.variant],o.$style[e.level],e.disabled?[o.$style.disabled]:[o.$style.clickable],{[o.$style.clicked]:u(T)()}],"aria-disabled":e.disabled,"aria-label":e.label,onClick:u(U)},e.disabled?{disabled:""}:{},{role:"button",tabindex:"0"}),{default:A(()=>[e.label?(p(),m("span",{key:0,class:B([o.$style["button-content"]])},H(e.label),3)):b("",!0),e.icon?(p(),m("span",{key:1,class:B([o.$style["button-icon"]])},[J(u(K),{icon:e.icon},null,8,["icon"])],2)):b("",!0)]),_:1},16,["link","class","aria-disabled","aria-label","onClick"]))}}),X="_behavior_dfygt_1",Y="_clickable_dfygt_1",Z="_disabled_dfygt_4",ee="_draggable_dfygt_7",oe="_loading_dfygt_10",te="_rounded_dfygt_14",ae="_secondary_dfygt_14",re="_rect_dfygt_14",ne="_clicked_dfygt_22",se="_square_dfygt_37",le="_circle_dfygt_37",ce={behavior:X,clickable:Y,disabled:Z,draggable:ee,loading:oe,"button-container":"_button-container_dfygt_14",rounded:te,secondary:ae,rect:re,clicked:ne,square:se,circle:le,"button-icon":"_button-icon_dfygt_70","button-content":"_button-content_dfygt_86"},de={$style:ce},M=W(F,[["__cssModules",de],["__scopeId","data-v-2ff2237b"]]);F.__docgenInfo={exportName:"default",displayName:"ButtonBox",description:"",tags:{},props:[{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"variant",defaultValue:{func:!1,value:"'rounded'"}},{name:"level",defaultValue:{func:!1,value:"'primary'"}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/button/ButtonBox.vue"]};const Be={title:"Components / Element / ButtonBox",component:M,tags:["autodocs"],argTypes:{label:{control:"text",description:"Button label (optional)"},link:{control:"text",description:"Button link (optional)"},icon:{control:"text",description:"Button icon (optional)"},disabled:{control:"boolean",description:"Button disabled (optional)",defaultValue:!1},variant:{control:"select",description:"Button variant (optional)",options:["rounded","square","circle","rect"],defaultValue:"rounded"},level:{control:"radio",description:"Button level (optional)",options:["primary","secondary"],defaultValue:"primary"},onClick:{action:"clicked"}}},t=i=>({components:{ButtonBox:M},setup(){return{args:i}},template:'<ButtonBox v-bind="args" />'}),a=t.bind({});a.args={label:"Button",link:"https://ui.argushack.com",icon:"fa6-solid:arrow-right",variant:"rounded",level:"primary",disabled:!1};const r=t.bind({});r.args={label:"View Docs",level:"primary",variant:"rounded",icon:""};const n=t.bind({});n.args={label:"View Docs",level:"secondary",variant:"rounded",icon:""};const s=t.bind({});s.args={label:"Back to Project",icon:"fa6-solid:door-closed",variant:"rect",level:"primary"};const l=t.bind({});l.args={label:"Back to Project",icon:"fa6-solid:door-closed",variant:"rect",level:"secondary"};const c=t.bind({});c.args={label:"Full Report Download",icon:"fa6-solid:file-arrow-down",variant:"square"};const d=t.bind({});d.args={icon:"fa6-solid:plus",variant:"circle"};var g,f,_;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(_=(f=a.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var y,v,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var k,S,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var R,$,h;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(h=($=s.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var w,V,q;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var P,D,I;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,j,E;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(E=(j=d.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const be=["DefaultRoundedButtonBox","PrimaryRoundedButtonBox","SecondaryRoundedButtonBox","PrimaryRectButtonBox","SecondaryRectButtonBox","SquareButtonBox","CircleButtonBox"];export{d as CircleButtonBox,a as DefaultRoundedButtonBox,s as PrimaryRectButtonBox,r as PrimaryRoundedButtonBox,l as SecondaryRectButtonBox,n as SecondaryRoundedButtonBox,c as SquareButtonBox,be as __namedExportsOrder,Be as default};
//# sourceMappingURL=ButtonBox.stories-64f4d9f1.js.map
