import{s as T,w as M,a as G,d as z,b as L,e as U,n as H,g as J,u as n,f as K,o as m,i as Q,t as W,m as X,j as B,k as Y,l as b,p as f,q as ee}from"./vue.esm-bundler-d31c4c1e.js";import{I as oe}from"./offline-bc0b506d.js";var te=Object.defineProperty,ae=Object.defineProperties,re=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,v=(t,e,o)=>e in t?te(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,le=(t,e)=>{for(var o in e||(e={}))ne.call(e,o)&&v(t,o,e[o]);if(g)for(var o of g(e))se.call(e,o)&&v(t,o,e[o]);return t},ce=(t,e)=>ae(t,re(e));function ie(t,e){var o;const a=T();return M(()=>{a.value=t()},ce(le({},e),{flush:(o=e==null?void 0:e.flush)!=null?o:"sync"})),G(a)}const A=z({__name:"BaseLink",props:{link:{},external:{type:Boolean,default:void 0}},setup(t){const e=t,o=ie(()=>e.external??/^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(e.link||""));return(a,r)=>(m(),L(K(e.link?n(o)?"a":"RouterLink":"div"),H(J(e.link?{[n(o)?"href":"to"]:e.link,...n(o)?{target:"_blank",rel:"noopener noreferrer"}:{}}:{})),{default:U(()=>[Q(a.$slots,"default")]),_:3},16))}});A.__docgenInfo={exportName:"default",displayName:"BaseLink",description:"",tags:{},props:[{name:"link",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/UI/UI/src/components/base/BaseLink.vue"]};const ue=t=>{const e=T(t),o=()=>e.value;return o.set=a=>{e.value=a},o.update=a=>{e.value=a(e.value)},o.mutate=a=>{a(e.value),W(e)},o},de=(t,e=300)=>{const o=ue(!1);let a;return{clicked:o,onClick:_=>{o()||t==null||t.call({},_),o.set(!0),globalThis.clearTimeout(a),a=globalThis.setTimeout(()=>{o.set(!1)},e)}}},F=z({__name:"ButtonBox",props:{label:{},icon:{},link:{},disabled:{type:Boolean,default:!1},variant:{default:"rounded"},level:{default:"primary"}},setup(t){const e=t,{clicked:o,onClick:a}=de();return(r,_)=>(m(),L(A,X({ref:"wrapperRef$",link:e.link,class:[r.$style["button-container"],r.$style.behavior,r.$style[e.variant],r.$style[e.level],e.disabled?[r.$style.disabled]:[r.$style.clickable],{[r.$style.clicked]:n(o)()}],"aria-disabled":e.disabled,"aria-label":e.label,onClick:n(a)},e.disabled?{disabled:""}:{},{role:"button",tabindex:"0"}),{default:U(()=>[e.label?(m(),B("span",{key:0,class:b([r.$style["button-content"]])},Y(e.label),3)):f("",!0),e.icon?(m(),B("span",{key:1,class:b([r.$style["button-icon"]])},[ee(n(oe),{icon:e.icon},null,8,["icon"])],2)):f("",!0)]),_:1},16,["link","class","aria-disabled","aria-label","onClick"]))}}),pe="_behavior_1mi2m_1",me="_clickable_1mi2m_1",_e="_disabled_1mi2m_4",Be="_draggable_1mi2m_7",be="_loading_1mi2m_10",fe="_rounded_1mi2m_14",ge="_secondary_1mi2m_14",ve="_rect_1mi2m_14",ye="_clicked_1mi2m_22",ke="_square_1mi2m_37",xe="_circle_1mi2m_37",$e={behavior:pe,clickable:me,disabled:_e,draggable:Be,loading:be,"button-container":"_button-container_1mi2m_14",rounded:fe,secondary:ge,rect:ve,clicked:ye,square:ke,circle:xe,"button-icon":"_button-icon_1mi2m_70","button-content":"_button-content_1mi2m_86"},he=(t,e)=>{const o=t.__vccOpts||t;for(const[a,r]of e)o[a]=r;return o},Pe={$style:$e},Z=he(F,[["__cssModules",Pe],["__scopeId","data-v-999fb603"]]);F.__docgenInfo={exportName:"default",displayName:"ButtonBox",description:"",tags:{},props:[{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"variant",defaultValue:{func:!1,value:"'rounded'"}},{name:"level",defaultValue:{func:!1,value:"'primary'"}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/button/ButtonBox.vue"]};const Ce={title:"Components / Element / ButtonBox",component:Z,tags:["autodocs"],argTypes:{label:{control:"text",description:"Button label (optional)"},link:{control:"text",description:"Button link (optional)"},icon:{control:"text",description:"Button icon (optional)"},disabled:{control:"boolean",description:"Button disabled (optional)",defaultValue:!1},variant:{control:"select",description:"Button variant (optional)",options:["rounded","square","circle","rect"],defaultValue:"rounded"},level:{control:"radio",description:"Button level (optional)",options:["primary","secondary"],defaultValue:"primary"},onClick:{action:"clicked"}},args:{label:"Button",link:"https://ui.argushack.com",icon:"fa6-solid:arrow-right",variant:"rounded",level:"primary",disabled:!1}},s=t=>({components:{ButtonBox:Z},setup(){return{args:t}},template:'<ButtonBox v-bind="args" />'}),l=s.bind({});l.args={label:"View Docs",level:"primary",variant:"rounded"};const c=s.bind({});c.args={label:"View Docs",level:"secondary",variant:"rounded"};const i=s.bind({});i.args={label:"Back to Project",icon:"fa6-solid:door-closed",variant:"rect",level:"primary"};const u=s.bind({});u.args={label:"Back to Project",icon:"fa6-solid:door-closed",variant:"rect",level:"secondary"};const d=s.bind({});d.args={label:"Full Report Download",icon:"fa6-solid:file-arrow-down",variant:"square"};const p=s.bind({});p.args={icon:"fa6-solid:plus",variant:"circle"};var y,k,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var $,h,P;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(P=(h=c.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var w,S,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var O,R,V;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(V=(R=u.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var I,q,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(D=(q=d.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var E,j,N;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(N=(j=p.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const Oe=["PrimaryRoundedButtonBox","SecondaryRoundedButtonBox","PrimaryRectButtonBox","SecondaryRectButtonBox","SquareButtonBox","CircleButtonBox"];export{p as CircleButtonBox,i as PrimaryRectButtonBox,l as PrimaryRoundedButtonBox,u as SecondaryRectButtonBox,c as SecondaryRoundedButtonBox,d as SquareButtonBox,Oe as __namedExportsOrder,Ce as default};
//# sourceMappingURL=ButtonBox.stories-3e8a61be.js.map
