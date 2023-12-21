import{d as q,r as z,o as E,k as N,l as P,z as d,q as g,y as v,E as O,u as r,x as U,D as w,B as R,C as j}from"./vue.esm-bundler-43983c51.js";import{I as F}from"./offline-d655219e.js";import{u as G}from"./event-71edc4af.js";import{p as H}from"./validation-3db1380a.js";import{s as J}from"./signal-808da138.js";import{C as K}from"./CardBox-db643ac1.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./toPairs-abc830ed.js";import"./_mapToArray-94a011c8.js";import"./_getNative-616e87a7.js";import"./_flatRest-84d178c7.js";import"./_overRest-88b35d06.js";import"./BaseLink-f352b8ff.js";import"./index-e49385ea.js";const Q=["value"],W=["for"],C=q({__name:"TextArea",props:{modelValue:{},placeholder:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},name:{},autocomplete:{default:"off"},autofocus:{type:Boolean},maxlength:{},minlength:{},size:{},spellcheck:{type:Boolean,default:!1},tabindex:{},invalidMessage:{},eventSignalOptions:{}},emits:["update:modelValue","validation"],setup(u,{emit:m}){const t=u,{onTrigger:f}=G(e=>{t.disabled?(e.preventDefault(),e.stopPropagation()):(x(),m("update:modelValue",e.target.value))},t.eventSignalOptions??{flush:"post"}),a=z(),p=J(""),x=()=>{var e,l;p.set(a.value?(e=a.value)!=null&&e.validity.valid?"":H(a.value.validity,t.invalidMessage??{})??a.value.validationMessage:""),(l=a.value)!=null&&l.validity&&m("validation",a.value.validity)};return E(()=>{x()}),(e,l)=>(g(),N(K,{class:d([e.$style["textarea-container"]]),variant:"flat",radius:"var(--agh-ref-border-radius-400)"},{default:P(()=>[v("textarea",O({ref_key:"inputRef$",ref:a,class:[e.$style["textarea-input"]]},t,{value:t.modelValue,onInput:l[0]||(l[0]=(...$)=>r(f)&&r(f)(...$))}),null,16,Q),r(p)()?(g(),U("label",{key:0,for:t.name,class:d([e.$style["textarea-label"]])},[w(r(F),{class:d([e.$style["textarea-label--icon"]]),icon:"fa6-solid:circle-xmark"},null,8,["class"]),v("span",{class:d([e.$style["textarea-label--value"]])},R(r(p)()),3)],10,W)):j("",!0)]),_:1},8,["class"]))}}),X={"textarea-container":"_textarea-container_v6fbk_1","textarea-input":"_textarea-input_v6fbk_12","icon-align--left":"_icon-align--left_v6fbk_16","icon-align--right":"_icon-align--right_v6fbk_16","textarea-label--icon":"_textarea-label--icon_v6fbk_30","textarea-label":"_textarea-label_v6fbk_30","textarea-label--value":"_textarea-label--value_v6fbk_107"},Y={$style:X},S=L(C,[["__cssModules",Y],["__scopeId","data-v-5fd3666d"]]);C.__docgenInfo={exportName:"default",displayName:"TextArea",description:"",tags:{},props:[{name:"type",defaultValue:{func:!1,value:"'text'"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"readonly",defaultValue:{func:!1,value:"false"}},{name:"spellcheck",defaultValue:{func:!1,value:"false"}},{name:"autocomplete",defaultValue:{func:!1,value:"'off'"}},{name:"iconAlign",defaultValue:{func:!1,value:"'right'"}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/textarea/TextArea.vue"]};const me={title:"Components / Element / TextArea",component:S,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"TextArea value, use by `v-model`."},label:{control:"text",description:"TextArea label (optional)"},name:{control:"text",description:"TextArea name (optional)"},placeholder:{control:"text",description:"TextArea placeholder (optional)"},disabled:{control:"boolean",description:"TextArea disabled (optional)"},readonly:{control:"boolean",description:"TextArea readonly (optional)"},required:{control:"boolean",description:"TextArea required (optional)"},spellcheck:{control:"boolean",description:"TextArea spellcheck (optional)"},autofocus:{control:"boolean",description:"TextArea autofocus (optional)"},autocomplete:{control:"select",description:"TextArea autocomplete (optional)",options:["on","off"],defaultValue:"off"},size:{control:"number",description:"TextArea size (optional)"},maxlength:{control:"number",description:"TextArea maxlength (optional)"},minlength:{control:"number",description:"TextArea minlength (optional)"},tabindex:{control:"number",description:"TextArea tabindex (optional)"},invalidMessage:{control:"object",description:"TextArea invalid message (optional)"},"onUpdate:modelValue":{action:"update"}}},c=u=>({components:{TextArea:S},setup(){return{args:u}},template:'<TextArea v-model="args.modelValue" v-bind="args" />'}),o=c.bind({});o.args={placeholder:"Placeholder",modelValue:"Default Value",required:!1,disabled:!1,readonly:!1};const s=c.bind({});s.args={...o.args,modelValue:""};const n=c.bind({});n.args={modelValue:"",required:!0};const i=c.bind({});i.args={modelValue:"Default Value",disabled:!0};var b,T,A;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var _,y,V;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(V=(y=s.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var h,k,B;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(B=(k=n.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var D,I,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(M=(I=i.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const fe=["DefaultTextArea","PlaceholderTextArea","InvalidTextArea","DisabledTextArea"];export{o as DefaultTextArea,i as DisabledTextArea,n as InvalidTextArea,s as PlaceholderTextArea,fe as __namedExportsOrder,me as default};
//# sourceMappingURL=TextArea.stories-68be0602.js.map
