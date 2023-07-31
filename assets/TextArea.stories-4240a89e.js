import{d as E,b as S,j as N,k as P,l as z,F as i,q as x,D as g,E as U,u as l,C as j,H as w,I as F,G as R}from"./vue.esm-bundler-c0ff2e30.js";import{I as G}from"./offline-09f176fb.js";import{u as H}from"./event-f2a78e4b.js";import{p as O}from"./validation-6293d765.js";import{s as J}from"./signal-81b0ef3e.js";import{C as K}from"./CardBox-0376d033.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./toPairs-87e8c6eb.js";import"./_getNative-616e87a7.js";import"./omit-3e15e306.js";import"./_overRest-88b35d06.js";import"./BaseLink-978d014b.js";import"./index-06ed5147.js";const Q=["value"],W=["for"],M=E({__name:"TextArea",props:{modelValue:{},placeholder:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},name:{},autocomplete:{default:"off"},autofocus:{type:Boolean},maxlength:{},minlength:{},size:{},spellcheck:{type:Boolean,default:!1},tabindex:{},invalidMessage:{}},emits:["update:modelValue"],setup(u,{emit:$}){const t=u,{onTrigger:p}=H(e=>{t.disabled?(e.preventDefault(),e.stopPropagation()):(m(),$("update:modelValue",e.target.value))},{flush:"post"}),o=S(),c=J(""),m=()=>{var e;return c.set(o.value?(e=o.value)!=null&&e.validity.valid?"":O(o.value.validity,t.invalidMessage??{})??o.value.validationMessage:"")};return N(()=>{m()}),(e,f)=>(x(),P(K,{class:i([e.$style["textarea-container"]]),variant:"flat",radius:"var(--agh-ref-border-radius-400)"},{default:z(()=>[g("textarea",U({ref_key:"inputRef$",ref:o,class:[e.$style["textarea-input"]]},t,{value:t.modelValue,onInput:f[0]||(f[0]=(...q)=>l(p)&&l(p)(...q))}),null,16,Q),l(c)()?(x(),j("label",{key:0,for:t.name,class:i([e.$style["textarea-label"]])},[w(l(G),{class:i([e.$style["textarea-label--icon"]]),icon:"fa6-solid:circle-xmark"},null,8,["class"]),g("span",{class:i([e.$style["textarea-label--value"]])},F(l(c)()),3)],10,W)):R("",!0)]),_:1},8,["class"]))}}),X={"textarea-container":"_textarea-container_v6fbk_1","textarea-input":"_textarea-input_v6fbk_12","icon-align--left":"_icon-align--left_v6fbk_16","icon-align--right":"_icon-align--right_v6fbk_16","textarea-label--icon":"_textarea-label--icon_v6fbk_30","textarea-label":"_textarea-label_v6fbk_30","textarea-label--value":"_textarea-label--value_v6fbk_107"},Y={$style:X},C=L(M,[["__cssModules",Y],["__scopeId","data-v-1a3f9f23"]]);M.__docgenInfo={exportName:"default",displayName:"TextArea",description:"",tags:{},props:[{name:"type",defaultValue:{func:!1,value:"'text'"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"readonly",defaultValue:{func:!1,value:"false"}},{name:"spellcheck",defaultValue:{func:!1,value:"false"}},{name:"autocomplete",defaultValue:{func:!1,value:"'off'"}},{name:"iconAlign",defaultValue:{func:!1,value:"'right'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/textarea/TextArea.vue"]};const pe={title:"Components / Element / TextArea",component:C,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"TextArea value, use by `v-model`."},label:{control:"text",description:"TextArea label (optional)"},name:{control:"text",description:"TextArea name (optional)"},placeholder:{control:"text",description:"TextArea placeholder (optional)"},disabled:{control:"boolean",description:"TextArea disabled (optional)"},readonly:{control:"boolean",description:"TextArea readonly (optional)"},required:{control:"boolean",description:"TextArea required (optional)"},spellcheck:{control:"boolean",description:"TextArea spellcheck (optional)"},autofocus:{control:"boolean",description:"TextArea autofocus (optional)"},autocomplete:{control:"select",description:"TextArea autocomplete (optional)",options:["on","off"],defaultValue:"off"},size:{control:"number",description:"TextArea size (optional)"},maxlength:{control:"number",description:"TextArea maxlength (optional)"},minlength:{control:"number",description:"TextArea minlength (optional)"},tabindex:{control:"number",description:"TextArea tabindex (optional)"},invalidMessage:{control:"object",description:"TextArea invalid message (optional)"},"onUpdate:modelValue":{action:"update"}}},d=u=>({components:{TextArea:C},setup(){return{args:u}},template:'<TextArea v-model="args.modelValue" v-bind="args" />'}),a=d.bind({});a.args={placeholder:"Placeholder",modelValue:"Default Value",required:!1,disabled:!1,readonly:!1};const r=d.bind({});r.args={...a.args,modelValue:""};const s=d.bind({});s.args={modelValue:"",required:!0};const n=d.bind({});n.args={modelValue:"Default Value",disabled:!0};var b,v,T;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(T=(v=a.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var A,_,V;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(V=(_=r.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var y,h,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var I,B,D;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const me=["DefaultTextArea","PlaceholderTextArea","InvalidTextArea","DisabledTextArea"];export{a as DefaultTextArea,n as DisabledTextArea,s as InvalidTextArea,r as PlaceholderTextArea,me as __namedExportsOrder,pe as default};
//# sourceMappingURL=TextArea.stories-4240a89e.js.map
