import{d as P,E as S,J as z,y as v,C as g,x as N,u as r,v as p,B as w,z as A,A as U,f as b}from"./vue.esm-bundler-8e095e32.js";import{I as R}from"./offline-1558d706.js";import{u as W}from"./event-9f36d46e.js";import{t as j}from"./toPairs-b861805d.js";import{o as J}from"./omit-8d08310d.js";import{s as K}from"./signal-02c5e95f.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./_getNative-8563e77a.js";import"./_overRest-43b776eb.js";const O=(a,o)=>{var t;if(o){const s=(t=j(J(a,"valid")).find(([l,n])=>n&&o[l]))==null?void 0:t[0];return s?o[s]??null:null}return null},G=["for"],q=P({__name:"TextField",props:{value:{default:""},label:{},placeholder:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},type:{default:"text"},name:{},autocomplete:{default:"off"},autofocus:{type:Boolean},maxlength:{},minlength:{},pattern:{},size:{},spellcheck:{type:Boolean,default:!1},tabindex:{},inputmode:{},invalidMessage:{},modelValue:{}},emits:["update:modelValue"],setup(a,{emit:o}){const t=a,{onTrigger:s}=W(e=>{t.disabled?(e.preventDefault(),e.stopPropagation()):(f(),o("update:modelValue",e.target.value))},{flush:"post"}),l=S(),n=K(""),f=()=>{var e;return n.set(l.value?(e=l.value)!=null&&e.validity.valid?"":O(l.value.validity,t.invalidMessage??{})??l.value.validationMessage:"")};return z(()=>{f()}),(e,x)=>(b(),v("div",{class:p(e.$style["textfield-container"])},[g("input",N({ref_key:"inputRef$",ref:l,class:[e.$style["textfield-input"]]},t,{onInput:x[0]||(x[0]=(...C)=>r(s)&&r(s)(...C))}),null,16),r(n)()?(b(),v("label",{key:0,for:t.name,class:p([e.$style["textfield-label"]])},[w(r(R),{class:p([e.$style["textfield-label--icon"]]),icon:"fa6-solid:circle-xmark"},null,8,["class"]),g("span",{class:p([e.$style["textfield-label--value"]])},A(r(n)()),3)],10,G)):U("",!0)],2))}}),H={"textfield-container":"_textfield-container_39k6e_1","textfield-input":"_textfield-input_39k6e_7","textfield-label":"_textfield-label_39k6e_37","textfield-label--icon":"_textfield-label--icon_39k6e_52","textfield-label--value":"_textfield-label--value_39k6e_56"},Q={$style:H},E=L(q,[["__cssModules",Q],["__scopeId","data-v-642119bf"]]);q.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"value",defaultValue:{func:!1,value:"''"}},{name:"type",defaultValue:{func:!1,value:"'text'"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"readonly",defaultValue:{func:!1,value:"false"}},{name:"spellcheck",defaultValue:{func:!1,value:"false"}},{name:"autocomplete",defaultValue:{func:!1,value:"'off'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/textfield/TextField.vue"]};const ne={title:"Components / Element / TextField",component:E,tags:["autodocs"],argTypes:{type:{control:"select",description:"TextField type (optional)",options:["text","password","email","number","tel","url","search","date","time","datetime-local","month","week","color"],defaultValue:"text"},value:{control:"text",description:"TextField value"},label:{control:"text",description:"TextField label (optional)"},name:{control:"text",description:"TextField name (optional)"},placeholder:{control:"text",description:"TextField placeholder (optional)"},disabled:{control:"boolean",description:"TextField disabled (optional)"},readonly:{control:"boolean",description:"TextField readonly (optional)"},required:{control:"boolean",description:"TextField required (optional)"},spellcheck:{control:"boolean",description:"TextField spellcheck (optional)"},autofocus:{control:"boolean",description:"TextField autofocus (optional)"},autocomplete:{control:"select",description:"TextField autocomplete (optional)",options:["on","off"],defaultValue:"off"},size:{control:"number",description:"TextField size (optional)"},maxlength:{control:"number",description:"TextField maxlength (optional)"},minlength:{control:"number",description:"TextField minlength (optional)"},pattern:{control:"text",description:"TextField pattern (optional)"},tabindex:{control:"number",description:"TextField tabindex (optional)"},inputmode:{control:"select",description:"TextField inputmode (optional)",options:["none","text","decimal","numeric","tel","search","email","url"],defaultValue:"text"},invalidMessage:{control:"object",description:"TextField invalid message (optional)"},"onUpdate:modelValue":{action:"update"}}},m=a=>({components:{TextField:E},setup(){return{args:a}},template:'<TextField v-model="args.value" v-bind="args" />'}),i=m.bind({});i.args={placeholder:"Placeholder",value:"Default Value",label:"Label",required:!1,disabled:!1,readonly:!1,type:"text"};const d=m.bind({});d.args={value:"Default Value",disabled:!0};const u=m.bind({});u.args={value:"256.256.256.256",pattern:"^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}$",required:!0};const c=m.bind({});c.args={value:"256.256.256.256",pattern:"^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}$",required:!0,invalidMessage:{patternMismatch:"Invalid IP Address",valueMissing:"IP Address is required"}};var T,F,y;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    TextField
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextField v-model="args.value" v-bind="args" />'
})`,...(y=(F=i.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var _,h,V;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    TextField
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextField v-model="args.value" v-bind="args" />'
})`,...(V=(h=d.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var k,I,M;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    TextField
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextField v-model="args.value" v-bind="args" />'
})`,...(M=(I=u.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var $,B,D;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    TextField
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextField v-model="args.value" v-bind="args" />'
})`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const re=["DefaultTextField","DisabledTextField","InvalidTextField","InvalidWithCustomErrorMessageTextField"];export{i as DefaultTextField,d as DisabledTextField,u as InvalidTextField,c as InvalidWithCustomErrorMessageTextField,re as __namedExportsOrder,ne as default};
//# sourceMappingURL=TextField.stories-36d31d61.js.map
