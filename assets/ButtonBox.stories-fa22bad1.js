import{s as T,w as G,a as H,d as L,b as U,e as F,n as J,g as K,u as p,f as Q,o as m,i as W,t as X,m as Y,j as B,k as Z,l as b,p as f,q as ee}from"./vue.esm-bundler-d31c4c1e.js";import{I as oe}from"./offline-bc0b506d.js";var te=Object.defineProperty,ae=Object.defineProperties,re=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,v=(t,e,o)=>e in t?te(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,le=(t,e)=>{for(var o in e||(e={}))ne.call(e,o)&&v(t,o,e[o]);if(g)for(var o of g(e))se.call(e,o)&&v(t,o,e[o]);return t},ce=(t,e)=>ae(t,re(e));function ie(t,e){var o;const a=T();return G(()=>{a.value=t()},ce(le({},e),{flush:(o=e==null?void 0:e.flush)!=null?o:"sync"})),H(a)}const z=L({__name:"BaseLink",props:{link:{},external:{type:Boolean}},setup(t){const e=t,o=ie(()=>e.external??/^http(s?):\/\//.test(e.link||""));return(a,r)=>(m(),U(Q(e.link?p(o)?"a":"RouterLink":"div"),J(K(e.link?{[p(o)?"href":"to"]:e.link}:{})),{default:F(()=>[W(a.$slots,"default")]),_:3},16))}});z.__docgenInfo={exportName:"default",displayName:"BaseLink",description:"",tags:{},props:[{name:"link",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/UI/UI/src/components/base/BaseLink.vue"]};const ue=t=>{const e=T(t),o=()=>e.value;return o.set=a=>{e.value=a},o.update=a=>{e.value=a(e.value)},o.mutate=a=>{a(e.value),X(e)},o},de=(t,e=300)=>{const o=ue(!1);let a;return{clicked:o,onClick:_=>{o()||t==null||t.call({},_),o.set(!0),globalThis.clearTimeout(a),a=globalThis.setTimeout(()=>{o.set(!1)},e)}}},M=L({__name:"ButtonBox",props:{label:{},icon:{},link:{},disabled:{type:Boolean,default:!1},variant:{default:"rounded"},level:{default:"primary"}},setup(t){const e=t,{clicked:o,onClick:a}=de();return(r,_)=>(m(),U(z,Y({ref:"wrapperRef$",link:e.link,class:[r.$style["button-container"],r.$style.behavior,r.$style[e.variant],r.$style[e.level],e.disabled?[r.$style.disabled]:[r.$style.clickable],{[r.$style.clicked]:p(o)()}],"aria-disabled":e.disabled,"aria-label":e.label,onClick:p(a)},e.disabled?{disabled:""}:{},{role:"button",tabindex:"0"}),{default:F(()=>[e.label?(m(),B("span",{key:0,class:b([r.$style["button-content"]])},Z(e.label),3)):f("",!0),e.icon?(m(),B("span",{key:1,class:b([r.$style["button-icon"]])},[ee(p(oe),{icon:e.icon},null,8,["icon"])],2)):f("",!0)]),_:1},16,["link","class","aria-disabled","aria-label","onClick"]))}}),pe="_behavior_1wcn7_1",me="_clickable_1wcn7_1",_e="_disabled_1wcn7_4",Be="_draggable_1wcn7_7",be="_loading_1wcn7_10",fe="_rounded_1wcn7_14",ge="_secondary_1wcn7_14",ve="_rect_1wcn7_14",ye="_clicked_1wcn7_22",ke="_square_1wcn7_36",xe="_circle_1wcn7_36",we={behavior:pe,clickable:me,disabled:_e,draggable:Be,loading:be,"button-container":"_button-container_1wcn7_14",rounded:fe,secondary:ge,rect:ve,clicked:ye,square:ke,circle:xe,"button-icon":"_button-icon_1wcn7_69","button-content":"_button-content_1wcn7_85"},$e=(t,e)=>{const o=t.__vccOpts||t;for(const[a,r]of e)o[a]=r;return o},Pe={$style:we},A=$e(M,[["__cssModules",Pe],["__scopeId","data-v-08e4c286"]]);M.__docgenInfo={exportName:"default",displayName:"ButtonBox",description:"",tags:{},props:[{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"variant",defaultValue:{func:!1,value:"'rounded'"}},{name:"level",defaultValue:{func:!1,value:"'primary'"}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/button/ButtonBox.vue"]};const Ce={title:"Components / Element / ButtonBox",component:A,tags:["autodocs"],argTypes:{label:{control:"text",description:"Button label (optional)"},icon:{control:"text",description:"Button icon (optional)"},link:{control:"text",description:"Button link (optional)"},disabled:{control:"boolean",description:"Button disabled (optional)",defaultValue:!1},variant:{control:"select",description:"Button variant (optional)",options:["rounded","square","circle","rect","file"],defaultValue:"rounded"},level:{control:"radio",description:"Button level (optional)",options:["primary","secondary"],defaultValue:"primary"},onClick:{action:"clicked"}}},n=t=>({components:{ButtonBox:A},setup(){return{args:t}},template:'<ButtonBox v-bind="args" />'}),s=n.bind({});s.args={label:"View Docs",level:"primary",variant:"rounded"};const l=n.bind({});l.args={label:"View Docs",level:"secondary",variant:"rounded"};const c=n.bind({});c.args={label:"Back to Project",icon:"fa6-solid:door-closed",variant:"rect",level:"primary"};const i=n.bind({});i.args={label:"Back to Project",icon:"fa6-solid:door-closed",variant:"rect",level:"secondary"};const u=n.bind({});u.args={label:"Full Report Download",icon:"fa6-solid:file-arrow-down",variant:"square"};const d=n.bind({});d.args={icon:"fa6-solid:plus",variant:"circle"};var y,k,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var w,$,P;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(P=($=l.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var h,S,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var O,R,I;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(I=(R=i.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var V,q,D;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(D=(q=u.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var E,j,N;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(N=(j=d.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const Oe=["PrimaryRoundedButtonBox","SecondaryRoundedButtonBox","PrimaryRectButtonBox","SecondaryRectButtonBox","SquareButtonBox","CircleButtonBox"];export{d as CircleButtonBox,c as PrimaryRectButtonBox,s as PrimaryRoundedButtonBox,i as SecondaryRectButtonBox,l as SecondaryRoundedButtonBox,u as SquareButtonBox,Oe as __namedExportsOrder,Ce as default};
//# sourceMappingURL=ButtonBox.stories-fa22bad1.js.map
