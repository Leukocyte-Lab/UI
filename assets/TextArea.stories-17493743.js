import{d as q,r as E,o as z,k as N,l as P,z as i,q as x,y as g,E as O,u as l,x as U,D as w,B as R,C as j}from"./vue.esm-bundler-43983c51.js";import{I as F}from"./offline-d655219e.js";import{u as G}from"./event-71edc4af.js";import{p as H}from"./validation-3db1380a.js";import{s as J}from"./signal-808da138.js";import{C as K}from"./CardBox-db643ac1.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./toPairs-abc830ed.js";import"./_mapToArray-94a011c8.js";import"./_getNative-616e87a7.js";import"./_flatRest-84d178c7.js";import"./_overRest-88b35d06.js";import"./BaseLink-f352b8ff.js";import"./index-e49385ea.js";const Q=["value"],W=["for"],M=q({__name:"TextArea",props:{modelValue:{},placeholder:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},name:{},autocomplete:{default:"off"},autofocus:{type:Boolean},maxlength:{},minlength:{},size:{},spellcheck:{type:Boolean,default:!1},tabindex:{},invalidMessage:{},eventSignalOptions:{}},emits:["update:modelValue"],setup(u,{emit:S}){const a=u,{onTrigger:p}=G(e=>{a.disabled?(e.preventDefault(),e.stopPropagation()):(m(),S("update:modelValue",e.target.value))},a.eventSignalOptions??{flush:"post"}),o=E(),c=J(""),m=()=>{var e;return c.set(o.value?(e=o.value)!=null&&e.validity.valid?"":H(o.value.validity,a.invalidMessage??{})??o.value.validationMessage:"")};return z(()=>{m()}),(e,f)=>(x(),N(K,{class:i([e.$style["textarea-container"]]),variant:"flat",radius:"var(--agh-ref-border-radius-400)"},{default:P(()=>[g("textarea",O({ref_key:"inputRef$",ref:o,class:[e.$style["textarea-input"]]},a,{value:a.modelValue,onInput:f[0]||(f[0]=(...$)=>l(p)&&l(p)(...$))}),null,16,Q),l(c)()?(x(),U("label",{key:0,for:a.name,class:i([e.$style["textarea-label"]])},[w(l(F),{class:i([e.$style["textarea-label--icon"]]),icon:"fa6-solid:circle-xmark"},null,8,["class"]),g("span",{class:i([e.$style["textarea-label--value"]])},R(l(c)()),3)],10,W)):j("",!0)]),_:1},8,["class"]))}}),X={"textarea-container":"_textarea-container_v6fbk_1","textarea-input":"_textarea-input_v6fbk_12","icon-align--left":"_icon-align--left_v6fbk_16","icon-align--right":"_icon-align--right_v6fbk_16","textarea-label--icon":"_textarea-label--icon_v6fbk_30","textarea-label":"_textarea-label_v6fbk_30","textarea-label--value":"_textarea-label--value_v6fbk_107"},Y={$style:X},C=L(M,[["__cssModules",Y],["__scopeId","data-v-c258336a"]]);M.__docgenInfo={exportName:"default",displayName:"TextArea",description:"",tags:{},props:[{name:"type",defaultValue:{func:!1,value:"'text'"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"readonly",defaultValue:{func:!1,value:"false"}},{name:"spellcheck",defaultValue:{func:!1,value:"false"}},{name:"autocomplete",defaultValue:{func:!1,value:"'off'"}},{name:"iconAlign",defaultValue:{func:!1,value:"'right'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/textarea/TextArea.vue"]};const me={title:"Components / Element / TextArea",component:C,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"TextArea value, use by `v-model`."},label:{control:"text",description:"TextArea label (optional)"},name:{control:"text",description:"TextArea name (optional)"},placeholder:{control:"text",description:"TextArea placeholder (optional)"},disabled:{control:"boolean",description:"TextArea disabled (optional)"},readonly:{control:"boolean",description:"TextArea readonly (optional)"},required:{control:"boolean",description:"TextArea required (optional)"},spellcheck:{control:"boolean",description:"TextArea spellcheck (optional)"},autofocus:{control:"boolean",description:"TextArea autofocus (optional)"},autocomplete:{control:"select",description:"TextArea autocomplete (optional)",options:["on","off"],defaultValue:"off"},size:{control:"number",description:"TextArea size (optional)"},maxlength:{control:"number",description:"TextArea maxlength (optional)"},minlength:{control:"number",description:"TextArea minlength (optional)"},tabindex:{control:"number",description:"TextArea tabindex (optional)"},invalidMessage:{control:"object",description:"TextArea invalid message (optional)"},"onUpdate:modelValue":{action:"update"}}},d=u=>({components:{TextArea:C},setup(){return{args:u}},template:'<TextArea v-model="args.modelValue" v-bind="args" />'}),t=d.bind({});t.args={placeholder:"Placeholder",modelValue:"Default Value",required:!1,disabled:!1,readonly:!1};const r=d.bind({});r.args={...t.args,modelValue:""};const s=d.bind({});s.args={modelValue:"",required:!0};const n=d.bind({});n.args={modelValue:"Default Value",disabled:!0};var v,b,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var A,_,V;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var B,D,I;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const fe=["DefaultTextArea","PlaceholderTextArea","InvalidTextArea","DisabledTextArea"];export{t as DefaultTextArea,n as DisabledTextArea,s as InvalidTextArea,r as PlaceholderTextArea,fe as __namedExportsOrder,me as default};
//# sourceMappingURL=TextArea.stories-17493743.js.map
