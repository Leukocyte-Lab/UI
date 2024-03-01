import{d as E,f as N,o as P,v as z,x as O,G as d,B as g,F as v,M as U,u as r,E as w,L as F,J as R,K as j}from"./vue.esm-bundler-B89vGqrN.js";import{I as G}from"./offline-CDMD0XjW.js";import{u as J}from"./event-WugbIXDM.js";import{p as K}from"./validation-CVTgLOvY.js";import{s as L}from"./signal-QQIltorF.js";import{C as H}from"./CardBox-RDWCVtYF.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./toPairs-DAGBV8iY.js";import"./_mapToArray-Brja0TIr.js";import"./_getNative-DtZiGuWL.js";import"./_flatRest-DC9N4yxj.js";import"./_baseAssignValue-hZa9SO6K.js";import"./_defineProperty-Ds_pPxy_.js";import"./_overRest-DM2ZsQmE.js";import"./last-D-rYfuUG.js";import"./BaseLink-DH3loil2.js";import"./index-BtH2KZwi.js";const W=["value"],X=["for"],S=E({__name:"TextArea",props:{modelValue:{},placeholder:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},name:{},autocomplete:{default:"off"},autofocus:{type:Boolean},maxlength:{},minlength:{},size:{},spellcheck:{type:Boolean,default:!1},tabindex:{},invalidMessage:{},eventSignalOptions:{}},emits:["update:modelValue","validation"],setup(u,{emit:C}){const t=u,m=C,{onTrigger:f}=J(e=>{t.disabled?(e.preventDefault(),e.stopPropagation()):(x(),m("update:modelValue",e.target.value))},t.eventSignalOptions??{flush:"post"}),a=N(),p=L(""),x=()=>{var e,l;p.set(a.value?(e=a.value)!=null&&e.validity.valid?"":K(a.value.validity,t.invalidMessage??{})??a.value.validationMessage:""),(l=a.value)!=null&&l.validity&&m("validation",a.value.validity)};return P(()=>{x()}),(e,l)=>(g(),z(H,{class:d([e.$style["textarea-container"]]),variant:"flat",radius:"var(--agh-ref-border-radius-400)"},{default:O(()=>[v("textarea",U({ref_key:"inputRef$",ref:a,class:[e.$style["textarea-input"]]},t,{value:t.modelValue,onInput:l[0]||(l[0]=(...q)=>r(f)&&r(f)(...q))}),null,16,W),r(p)()?(g(),w("label",{key:0,for:t.name,class:d([e.$style["textarea-label"]])},[F(r(G),{class:d([e.$style["textarea-label--icon"]]),icon:"fa6-solid:circle-xmark"},null,8,["class"]),v("span",{class:d([e.$style["textarea-label--value"]])},R(r(p)()),3)],10,X)):j("",!0)]),_:1},8,["class"]))}}),Y={"textarea-container":"_textarea-container_v6fbk_1","textarea-input":"_textarea-input_v6fbk_12","icon-align--left":"_icon-align--left_v6fbk_16","icon-align--right":"_icon-align--right_v6fbk_16","textarea-label--icon":"_textarea-label--icon_v6fbk_30","textarea-label":"_textarea-label_v6fbk_30","textarea-label--value":"_textarea-label--value_v6fbk_107"},Z={$style:Y},$=Q(S,[["__cssModules",Z],["__scopeId","data-v-5fd3666d"]]);S.__docgenInfo={exportName:"default",displayName:"TextArea",description:"",tags:{},props:[{name:"type",defaultValue:{func:!1,value:"'text'"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"readonly",defaultValue:{func:!1,value:"false"}},{name:"spellcheck",defaultValue:{func:!1,value:"false"}},{name:"autocomplete",defaultValue:{func:!1,value:"'off'"}},{name:"iconAlign",defaultValue:{func:!1,value:"'right'"}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/textarea/TextArea.vue"]};const ve={title:"Components / Element / TextArea",component:$,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"TextArea value, use by `v-model`."},label:{control:"text",description:"TextArea label (optional)"},name:{control:"text",description:"TextArea name (optional)"},placeholder:{control:"text",description:"TextArea placeholder (optional)"},disabled:{control:"boolean",description:"TextArea disabled (optional)"},readonly:{control:"boolean",description:"TextArea readonly (optional)"},required:{control:"boolean",description:"TextArea required (optional)"},spellcheck:{control:"boolean",description:"TextArea spellcheck (optional)"},autofocus:{control:"boolean",description:"TextArea autofocus (optional)"},autocomplete:{control:"select",description:"TextArea autocomplete (optional)",options:["on","off"],defaultValue:"off"},size:{control:"number",description:"TextArea size (optional)"},maxlength:{control:"number",description:"TextArea maxlength (optional)"},minlength:{control:"number",description:"TextArea minlength (optional)"},tabindex:{control:"number",description:"TextArea tabindex (optional)"},invalidMessage:{control:"object",description:"TextArea invalid message (optional)"},"onUpdate:modelValue":{action:"update"}}},c=u=>({components:{TextArea:$},setup(){return{args:u}},template:'<TextArea v-model="args.modelValue" v-bind="args" />'}),o=c.bind({});o.args={placeholder:"Placeholder",modelValue:"Default Value",required:!1,disabled:!1,readonly:!1};const n=c.bind({});n.args={...o.args,modelValue:""};const s=c.bind({});s.args={modelValue:"",required:!0};const i=c.bind({});i.args={modelValue:"Default Value",disabled:!0};var b,T,A;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var _,y,V;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(V=(y=n.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var h,k,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var I,M,D;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    TextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
})`,...(D=(M=i.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const be=["DefaultTextArea","PlaceholderTextArea","InvalidTextArea","DisabledTextArea"];export{o as DefaultTextArea,i as DisabledTextArea,s as InvalidTextArea,n as PlaceholderTextArea,be as __namedExportsOrder,ve as default};
