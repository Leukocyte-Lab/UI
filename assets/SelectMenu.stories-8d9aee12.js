import{d as _e,E as ke,J as Ae,c as C,a as Pe,v as o,f as s,y as p,C as Z,z as B,A as h,G as W,u as m,F as D}from"./vue.esm-bundler-8e095e32.js";import{I as V}from"./offline-1558d706.js";import{s as I}from"./signal-02c5e95f.js";import{b as $e,a as we,m as N,s as T,p as Ge,f as Ce}from"./parser-81884ae7.js";import{B as Be}from"./ButtonBox-5afbf75b.js";import{C as De}from"./CardBox-76a3dd71.js";import{f as Ue}from"./fromPairs-e099444b.js";import{i as Ze,t as We}from"./toPairs-b861805d.js";import{b as Ve,o as Ie}from"./omit-8d08310d.js";import{d as Ne}from"./delay-5862c55b.js";import{c as Oe}from"./index-dd65cc8d.js";import{_ as qe}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-042e6b4d.js";import"./_getNative-8563e77a.js";import"./BaseLink-78389557.js";import"./event-9f36d46e.js";import"./_overRest-43b776eb.js";function He(a,r,e,l){for(var u=-1,y=a==null?0:a.length;++u<y;){var S=a[u];r(l,S,e(S),a)}return l}function Ee(a,r,e,l){return $e(a,function(u,y,S){r(l,u,e(u),S)}),l}function je(a,r){return function(e,l){var u=Ze(e)?He:Ee,y=r?r():{};return u(e,a,we(l),y)}}var Fe=Object.prototype,ze=Fe.hasOwnProperty,Le=je(function(a,r,e){ze.call(a,e)?a[e].push(r):Ve(a,e,[r])});const Re=Le,Je=["onClick"],Se=_e({__name:"SelectMenu",props:{options:{},fields:{},value:{},groupBy:{},label:{},multiple:{type:Boolean,default:!1},modelValue:{}},emits:["update:modelValue"],setup(a,{emit:r}){const e=a,l=ke(),u=Oe(()=>Ue(We(Re(e.options,e.groupBy??"")).map(([t,n])=>[t==="undefined"?"":t,n.map(c=>I({...c,selected:!!(e.multiple?N(e.value,e.fields.key).includes(T(c,e.fields.key)):T(c,e.fields.key)===T(e.value,e.fields.key))}))]))),y=I(!1),S=()=>{l.value&&Ne(()=>{const{scrollHeight:t,clientHeight:n}=l.value;console.log(t,n),y.set(t>n+1)},30)},fe=t=>{t.update(n=>({...n,selected:!n.selected})),e.multiple?r("update:modelValue",Ce(N(u.value,n=>n.map(c=>c()).filter(c=>c.selected)))):r("update:modelValue",t())},Me=()=>{e.multiple?r("update:modelValue",[]):r("update:modelValue",{})};return Ae(()=>{S()}),(t,n)=>(s(),C(De,{class:o([t.$style["menu-container"],{[t.$style.classify]:e.groupBy}]),radius:"var(--agh-ref-border-radius-500)"},{default:Pe(()=>[e.label||e.multiple?(s(),p("header",{key:0,class:o(t.$style["menu-header"])},[Z("h1",{class:o(t.$style.title)},B(e.label),3),e.multiple?(s(),C(Be,{key:0,class:o(t.$style.button),label:"Clear Selection",icon:"fa6-solid:eraser",variant:"text",onClick:n[0]||(n[0]=c=>Me())},null,8,["class"])):h("",!0)],2)):h("",!0),Z("div",{ref_key:"wrapperRef$",ref:l,class:o([t.$style["menu-wrapper"],{[t.$style.overflowed]:m(y)()}])},[(s(!0),p(D,null,W(m(u),(c,U)=>(s(),p("div",{key:U,class:o([t.$style["menu-group"],{[t.$style.classify]:e.groupBy}])},[U?(s(),p("label",{key:0,class:o(t.$style["menu-group-label"]),name:""},B(U),3)):h("",!0),(s(!0),p(D,null,W(c,(v,Te)=>(s(),p("div",{key:`option-${Te}`,class:o([t.$style["menu-option"],t.$style.behavior,t.$style.clickable,{[t.$style.selected]:v().selected,[t.$style.multiple]:e.multiple}]),onClick:G=>fe(v)},[e.multiple?(s(),C(m(V),{key:0,class:o(t.$style["menu-option-icon"]),icon:v().selected?"fa6-solid:square-check":"fa6-regular:square"},null,8,["class","icon"])):h("",!0),e.fields.icon?(s(),C(m(V),{key:1,class:o(t.$style["menu-option-icon"]),icon:m(T)(v(),e.fields.icon)},null,8,["class","icon"])):h("",!0),Z("div",{class:o(t.$style["menu-option-group"])},[e.fields.title?h("",!0):(s(),p("p",{key:0,class:o(t.$style["menu-field"])},B(m(T)(v(),e.fields.key)),3)),(s(!0),p(D,null,W(m(Ie)(e.fields,["key","icon"]),G=>(s(),p(D,{key:`option-field-${G}`},[G?(s(),p("p",{key:0,class:o(t.$style["menu-field"])},B(m(Ge)(v(),G)),3)):h("",!0)],64))),128))],2)],10,Je))),128))],2))),128))],2)]),_:1},8,["class","radius"]))}}),Ke="_behavior_1k2c6_1",Qe="_clickable_1k2c6_1",Xe="_disabled_1k2c6_4",Ye="_draggable_1k2c6_7",xe="_loading_1k2c6_10",et="_classify_1k2c6_29",tt="_title_1k2c6_47",at="_button_1k2c6_50",rt="_overflowed_1k2c6_77",st="_hover_1k2c6_91",ot="_selected_1k2c6_95",nt="_multiple_1k2c6_99",lt={behavior:Ke,clickable:Qe,disabled:Xe,draggable:Ye,loading:xe,"menu-container":"_menu-container_1k2c6_14",classify:et,"menu-header":"_menu-header_1k2c6_32",title:tt,button:at,"menu-wrapper":"_menu-wrapper_1k2c6_53",overflowed:rt,"menu-option":"_menu-option_1k2c6_81",hover:st,selected:ot,multiple:nt,"menu-field":"_menu-field_1k2c6_102","menu-option-group":"_menu-option-group_1k2c6_108","menu-group":"_menu-group_1k2c6_122","menu-group-label":"_menu-group-label_1k2c6_144"},it={$style:lt},ve=qe(Se,[["__cssModules",it],["__scopeId","data-v-a9811877"]]);Se.__docgenInfo={exportName:"default",displayName:"SelectMenu",description:"",tags:{},props:[{name:"multiple",defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["Array"],elements:[{name:"ObjectLike"}]}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/menu/SelectMenu.vue"]};const Pt={title:"Components / Element / Menu / SelectMenu",component:ve,tags:["autodocs"],argTypes:{options:{control:"object",description:"Data to be displayed in the menu."},value:{control:"object",description:"The value of the selected option."},multiple:{control:"boolean",description:"Whether the menu allows multiple selections."}}},i=a=>({components:{SelectMenu:ve},setup(){return{args:a}},template:'<SelectMenu v-model="args.value" v-bind="args" />'}),d=i.bind({});d.args={options:[{name:"APT-38",description:"APT-38 is a threat group that has been attributed to the North Korean government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-39",description:"APT-39 is a threat group that has been attributed to the Iranian government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Nginx Techniques",description:"Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Apache Techniques",description:"Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}],fields:{key:"name",title:"{{ $.name }}"},multiple:!1};const f=i.bind({});f.args={...d.args,value:{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}};const M=i.bind({});M.args={...d.args,value:{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},fields:{key:"name",title:"{{ $.name }}",content:"{{ $.recentlyUsed | date : yyyy/MM/dd HH:mm }}"}};const _=i.bind({});_.args={...f.args,groupBy:"category"};const k=i.bind({});k.args={...M.args,groupBy:"category"};const b=i.bind({});b.args={...d.args,value:[{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Apache Techniques"}],label:"Playbook",multiple:!0};const g=i.bind({});g.args={...b.args,value:[{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Apache Techniques"}],fields:{key:"name",title:"{{ $.name }}",content:"{{ $.recentlyUsed | date : yyyy/MM/dd HH:mm }}"},multiple:!0};const A=i.bind({});A.args={...b.args,multiple:!0,groupBy:"category"};const P=i.bind({});P.args={...g.args,multiple:!0,groupBy:"category"};const $=i.bind({});$.args={...g.args,options:[...g.args.options,{name:"APT-41",description:"APT-41 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-42",description:"APT-42 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-43",description:"APT-43 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-44",description:"APT-44 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-45",description:"APT-45 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}],multiple:!0,groupBy:"category"};const w=i.bind({});w.args={options:[{action:"Sort by Time",direction:"Latest First",icon:"fa6-solid:arrow-down-wide-short"},{action:"Sort by Time",direction:"Oldest First",icon:"fa6-solid:arrow-up-wide-short"},{action:"Sort by Name",direction:"Ascending (A to Z)",icon:"fa6-solid:arrow-down-a-z"},{action:"Sort by Name",direction:"Descending (Z to A)",icon:"fa6-solid:arrow-up-z-a"}],fields:{key:"direction",title:"{{ $.action }}",content:"{{ $.direction }}",icon:"icon"}};var O,q,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    SelectMenu
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectMenu v-model="args.value" v-bind="args" />'
})`,...(H=(q=d.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var E,j,F;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    SelectMenu
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectMenu v-model="args.value" v-bind="args" />'
})`,...(F=(j=f.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var z,L,R;M.parameters={...M.parameters,docs:{...(z=M.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    SelectMenu
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectMenu v-model="args.value" v-bind="args" />'
})`,...(R=(L=M.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var J,K,Q;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    SelectMenu
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectMenu v-model="args.value" v-bind="args" />'
})`,...(Q=(K=_.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,x;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  components: {
    SelectMenu
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectMenu v-model="args.value" v-bind="args" />'
})`,...(x=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:x.source}}};var ee,te,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
  components: {
    SelectMenu
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectMenu v-model="args.value" v-bind="args" />'
})`,...(ae=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,se,oe;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
  components: {
    SelectMenu
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectMenu v-model="args.value" v-bind="args" />'
})`,...(oe=(se=g.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,le,ie;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  components: {
    SelectMenu
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectMenu v-model="args.value" v-bind="args" />'
})`,...(ie=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,ce,pe;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
  components: {
    SelectMenu
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectMenu v-model="args.value" v-bind="args" />'
})`,...(pe=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,de,ge;$.parameters={...$.parameters,docs:{...(me=$.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
  components: {
    SelectMenu
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectMenu v-model="args.value" v-bind="args" />'
})`,...(ge=(de=$.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var ye,he,be;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
  components: {
    SelectMenu
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectMenu v-model="args.value" v-bind="args" />'
})`,...(be=(he=w.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};const $t=["DefaultSelectMenu","SingleSelectMenu","SingleWithSubtitleSelectMenu","GroupSingleSelectMenu","GroupWithSubtitleSingleSelectMenu","MultiSelectMenu","MultiWithSubtitleSelectMenu","GroupMultiSelectMenu","GroupWithSubtitleMultiSelectMenu","GroupOverflowWithSubtitleMultiSelectMenu","IconWithSubtitleSelectMenu"];export{d as DefaultSelectMenu,A as GroupMultiSelectMenu,$ as GroupOverflowWithSubtitleMultiSelectMenu,_ as GroupSingleSelectMenu,P as GroupWithSubtitleMultiSelectMenu,k as GroupWithSubtitleSingleSelectMenu,w as IconWithSubtitleSelectMenu,b as MultiSelectMenu,g as MultiWithSubtitleSelectMenu,f as SingleSelectMenu,M as SingleWithSubtitleSelectMenu,$t as __namedExportsOrder,Pt as default};
//# sourceMappingURL=SelectMenu.stories-8d9aee12.js.map
