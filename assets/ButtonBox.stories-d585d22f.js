import{s as A,w as K,a as Q,d as F,b as Z,e as M,n as W,g as X,u as s,f as Y,o as B,i as ee,t as oe,m as te,j as b,k as ae,l as f,p as g,q as re}from"./vue.esm-bundler-d31c4c1e.js";import{I as ne}from"./offline-bc0b506d.js";var se=Object.defineProperty,le=Object.defineProperties,ce=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,y=(t,e,o)=>e in t?se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,de=(t,e)=>{for(var o in e||(e={}))ie.call(e,o)&&y(t,o,e[o]);if(v)for(var o of v(e))ue.call(e,o)&&y(t,o,e[o]);return t},pe=(t,e)=>le(t,ce(e));function me(t,e){var o;const a=A();return K(()=>{a.value=t()},pe(de({},e),{flush:(o=e==null?void 0:e.flush)!=null?o:"sync"})),Q(a)}const G=F({__name:"BaseLink",props:{link:{},external:{type:Boolean,default:void 0}},setup(t){const e=t,o=me(()=>e.external??/^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(e.link||""));return(a,r)=>(B(),Z(Y(e.link?s(o)?"a":"RouterLink":"div"),W(X(e.link?{[s(o)?"href":"to"]:e.link,...s(o)?{target:"_blank",rel:"noopener noreferrer"}:{}}:{})),{default:M(()=>[ee(a.$slots,"default")]),_:3},16))}});G.__docgenInfo={exportName:"default",displayName:"BaseLink",description:"",tags:{},props:[{name:"link",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/UI/UI/src/components/base/BaseLink.vue"]};const Be=t=>{const e=A(t),o=()=>e.value;return o.set=a=>{e.value=a},o.update=a=>{e.value=a(e.value)},o.mutate=a=>{a(e.value),oe(e)},o},_e=(t,e=300)=>{const o=Be(!1);let a;return{clicked:o,onClick:_=>{o()||t==null||t.call({},_),o.set(!0),globalThis.clearTimeout(a),a=globalThis.setTimeout(()=>{o.set(!1)},e)}}},H=F({__name:"ButtonBox",props:{label:{},icon:{},link:{},disabled:{type:Boolean,default:!1},variant:{default:"rounded"},level:{default:"primary"}},setup(t){const e=t,{clicked:o,onClick:a}=_e();return(r,_)=>(B(),Z(G,te({ref:"wrapperRef$",link:e.link,class:[r.$style["button-container"],r.$style.behavior,r.$style[e.variant],r.$style[e.level],e.disabled?[r.$style.disabled]:[r.$style.clickable],{[r.$style.clicked]:s(o)()}],"aria-disabled":e.disabled,"aria-label":e.label,onClick:s(a)},e.disabled?{disabled:""}:{},{role:"button",tabindex:"0"}),{default:M(()=>[e.label?(B(),b("span",{key:0,class:f([r.$style["button-content"]])},ae(e.label),3)):g("",!0),e.icon?(B(),b("span",{key:1,class:f([r.$style["button-icon"]])},[re(s(ne),{icon:e.icon},null,8,["icon"])],2)):g("",!0)]),_:1},16,["link","class","aria-disabled","aria-label","onClick"]))}}),be="_behavior_1mi2m_1",fe="_clickable_1mi2m_1",ge="_disabled_1mi2m_4",ve="_draggable_1mi2m_7",ye="_loading_1mi2m_10",ke="_rounded_1mi2m_14",xe="_secondary_1mi2m_14",$e="_rect_1mi2m_14",he="_clicked_1mi2m_22",Pe="_square_1mi2m_37",we="_circle_1mi2m_37",Se={behavior:be,clickable:fe,disabled:ge,draggable:ve,loading:ye,"button-container":"_button-container_1mi2m_14",rounded:ke,secondary:xe,rect:$e,clicked:he,square:Pe,circle:we,"button-icon":"_button-icon_1mi2m_70","button-content":"_button-content_1mi2m_86"},Re=(t,e)=>{const o=t.__vccOpts||t;for(const[a,r]of e)o[a]=r;return o},Ce={$style:Se},J=Re(H,[["__cssModules",Ce],["__scopeId","data-v-999fb603"]]);H.__docgenInfo={exportName:"default",displayName:"ButtonBox",description:"",tags:{},props:[{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"variant",defaultValue:{func:!1,value:"'rounded'"}},{name:"level",defaultValue:{func:!1,value:"'primary'"}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/button/ButtonBox.vue"]};const Ie={title:"Components / Element / ButtonBox",component:J,tags:["autodocs"],argTypes:{label:{control:"text",description:"Button label (optional)"},link:{control:"text",description:"Button link (optional)"},icon:{control:"text",description:"Button icon (optional)"},disabled:{control:"boolean",description:"Button disabled (optional)",defaultValue:!1},variant:{control:"select",description:"Button variant (optional)",options:["rounded","square","circle","rect"],defaultValue:"rounded"},level:{control:"radio",description:"Button level (optional)",options:["primary","secondary"],defaultValue:"primary"},onClick:{action:"clicked"}},args:{label:"Button",link:"https://ui.argushack.com",icon:"fa6-solid:arrow-right",variant:"rounded",level:"primary",disabled:!1}},n=t=>({components:{ButtonBox:J},setup(){return{args:t}},template:'<ButtonBox v-bind="args" />'}),m=n.bind({}),l=n.bind({});l.args={label:"View Docs",level:"primary",variant:"rounded",icon:""};const c=n.bind({});c.args={label:"View Docs",level:"secondary",variant:"rounded",icon:""};const i=n.bind({});i.args={label:"Back to Project",icon:"fa6-solid:door-closed",variant:"rect",level:"primary"};const u=n.bind({});u.args={label:"Back to Project",icon:"fa6-solid:door-closed",variant:"rect",level:"secondary"};const d=n.bind({});d.args={label:"Full Report Download",icon:"fa6-solid:file-arrow-down",variant:"square"};const p=n.bind({});p.args={icon:"fa6-solid:plus",variant:"circle"};var k,x,$;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...($=(x=m.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var h,P,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(w=(P=l.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var S,R,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(C=(R=c.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var O,V,I;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(I=(V=i.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var q,D,E;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(E=(D=u.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var j,N,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var z,L,U;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(U=(L=p.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};const qe=["DefaultRoundedButtonBox","PrimaryRoundedButtonBox","SecondaryRoundedButtonBox","PrimaryRectButtonBox","SecondaryRectButtonBox","SquareButtonBox","CircleButtonBox"];export{p as CircleButtonBox,m as DefaultRoundedButtonBox,i as PrimaryRectButtonBox,l as PrimaryRoundedButtonBox,u as SecondaryRectButtonBox,c as SecondaryRoundedButtonBox,d as SquareButtonBox,qe as __namedExportsOrder,Ie as default};
//# sourceMappingURL=ButtonBox.stories-d585d22f.js.map
