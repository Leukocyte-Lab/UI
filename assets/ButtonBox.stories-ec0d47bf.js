import{s as A,w as K,a as Q,d as F,b as Z,e as M,n as W,g as X,u as s,f as Y,o as g,i as ee,t as te,m as oe,j as B,k as ae,l as _,p as b,q as re}from"./vue.esm-bundler-d31c4c1e.js";import{I as ne}from"./offline-bc0b506d.js";var se=Object.defineProperty,le=Object.defineProperties,ce=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,v=(o,e,t)=>e in o?se(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,ue=(o,e)=>{for(var t in e||(e={}))ie.call(e,t)&&v(o,t,e[t]);if(y)for(var t of y(e))de.call(e,t)&&v(o,t,e[t]);return o},pe=(o,e)=>le(o,ce(e));function me(o,e){var t;const a=A();return K(()=>{a.value=o()},pe(ue({},e),{flush:(t=e==null?void 0:e.flush)!=null?t:"sync"})),Q(a)}const G=F({__name:"BaseLink",props:{link:{},external:{type:Boolean,default:void 0}},setup(o){const e=o,t=me(()=>e.external??/^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(e.link||""));return(a,r)=>(g(),Z(Y(e.link?s(t)?"a":"RouterLink":"div"),W(X(e.link?{[s(t)?"href":"to"]:e.link,...s(t)?{target:"_blank",rel:"noopener noreferrer"}:{}}:{})),{default:M(()=>[ee(a.$slots,"default")]),_:3},16))}});G.__docgenInfo={exportName:"default",displayName:"BaseLink",description:"",tags:{},props:[{name:"link",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/UI/UI/src/components/base/BaseLink.vue"]};const fe=o=>{const e=A(o),t=()=>e.value;return t.set=a=>{e.value=a},t.update=a=>{e.value=a(e.value)},t.mutate=a=>{a(e.value),te(e)},t},ge=(o,e=300)=>{const t=fe(!1);let a;return{clicked:t,onClick:f=>{t()?(f.preventDefault(),f.stopPropagation()):o==null||o.call({},f),t.set(!0),globalThis.clearTimeout(a),a=globalThis.setTimeout(()=>{t.set(!1)},e)}}},H=F({__name:"ButtonBox",props:{label:{},icon:{},link:{},disabled:{type:Boolean,default:!1},variant:{default:"rounded"},level:{default:"primary"}},setup(o){const e=o,{clicked:t,onClick:a}=ge(r=>{e.disabled&&(r.preventDefault(),r.stopPropagation())});return(r,f)=>(g(),Z(G,oe({ref:"wrapperRef$",link:e.link,class:[r.$style["button-container"],r.$style.behavior,r.$style[e.variant],r.$style[e.level],e.disabled?[r.$style.disabled]:[r.$style.clickable],{[r.$style.clicked]:s(t)()}],"aria-disabled":e.disabled,"aria-label":e.label,onClick:s(a)},e.disabled?{disabled:""}:{},{role:"button",tabindex:"0"}),{default:M(()=>[e.label?(g(),B("span",{key:0,class:_([r.$style["button-content"]])},ae(e.label),3)):b("",!0),e.icon?(g(),B("span",{key:1,class:_([r.$style["button-icon"]])},[re(s(ne),{icon:e.icon},null,8,["icon"])],2)):b("",!0)]),_:1},16,["link","class","aria-disabled","aria-label","onClick"]))}}),Be="_behavior_dfygt_1",_e="_clickable_dfygt_1",be="_disabled_dfygt_4",ye="_draggable_dfygt_7",ve="_loading_dfygt_10",ke="_rounded_dfygt_14",xe="_secondary_dfygt_14",$e="_rect_dfygt_14",Pe="_clicked_dfygt_22",he="_square_dfygt_37",we="_circle_dfygt_37",Se={behavior:Be,clickable:_e,disabled:be,draggable:ye,loading:ve,"button-container":"_button-container_dfygt_14",rounded:ke,secondary:xe,rect:$e,clicked:Pe,square:he,circle:we,"button-icon":"_button-icon_dfygt_70","button-content":"_button-content_dfygt_86"},Re=(o,e)=>{const t=o.__vccOpts||o;for(const[a,r]of e)t[a]=r;return t},Ce={$style:Se},J=Re(H,[["__cssModules",Ce],["__scopeId","data-v-2ff2237b"]]);H.__docgenInfo={exportName:"default",displayName:"ButtonBox",description:"",tags:{},props:[{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"variant",defaultValue:{func:!1,value:"'rounded'"}},{name:"level",defaultValue:{func:!1,value:"'primary'"}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/button/ButtonBox.vue"]};const Ve={title:"Components / Element / ButtonBox",component:J,tags:["autodocs"],argTypes:{label:{control:"text",description:"Button label (optional)"},link:{control:"text",description:"Button link (optional)"},icon:{control:"text",description:"Button icon (optional)"},disabled:{control:"boolean",description:"Button disabled (optional)",defaultValue:!1},variant:{control:"select",description:"Button variant (optional)",options:["rounded","square","circle","rect"],defaultValue:"rounded"},level:{control:"radio",description:"Button level (optional)",options:["primary","secondary"],defaultValue:"primary"},onClick:{action:"clicked"}}},n=o=>({components:{ButtonBox:J},setup(){return{args:o}},template:'<ButtonBox v-bind="args" />'}),l=n.bind({});l.args={label:"Button",link:"https://ui.argushack.com",icon:"fa6-solid:arrow-right",variant:"rounded",level:"primary",disabled:!1};const c=n.bind({});c.args={label:"View Docs",level:"primary",variant:"rounded",icon:""};const i=n.bind({});i.args={label:"View Docs",level:"secondary",variant:"rounded",icon:""};const d=n.bind({});d.args={label:"Back to Project",icon:"fa6-solid:door-closed",variant:"rect",level:"primary"};const u=n.bind({});u.args={label:"Back to Project",icon:"fa6-solid:door-closed",variant:"rect",level:"secondary"};const p=n.bind({});p.args={label:"Full Report Download",icon:"fa6-solid:file-arrow-down",variant:"square"};const m=n.bind({});m.args={icon:"fa6-solid:plus",variant:"circle"};var k,x,$;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...($=(x=l.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var P,h,w;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(w=(h=c.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var S,R,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var O,D,V;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(V=(D=d.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var I,q,E;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(E=(q=u.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var j,N,T;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(T=(N=p.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var z,L,U;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    ButtonBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonBox v-bind="args" />'
})`,...(U=(L=m.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};const Ie=["DefaultRoundedButtonBox","PrimaryRoundedButtonBox","SecondaryRoundedButtonBox","PrimaryRectButtonBox","SecondaryRectButtonBox","SquareButtonBox","CircleButtonBox"];export{m as CircleButtonBox,l as DefaultRoundedButtonBox,d as PrimaryRectButtonBox,c as PrimaryRoundedButtonBox,u as SecondaryRectButtonBox,i as SecondaryRoundedButtonBox,p as SquareButtonBox,Ie as __namedExportsOrder,Ve as default};
//# sourceMappingURL=ButtonBox.stories-ec0d47bf.js.map
