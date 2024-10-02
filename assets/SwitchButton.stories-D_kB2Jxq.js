import{d as v,F as h,G as w,H as l,u as i,C as g}from"./vue.esm-bundler-Dsefq1Xx.js";import{u as B}from"./event-BzLB4q2c.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./signal-G4nFfYSF.js";const d=v({__name:"SwitchButton",props:{modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},eventSignalOptions:{}},emits:["update:modelValue"],setup(o,{emit:p}){const t=o,_=p,{onTrigger:a}=B(e=>{t.disabled?(e.preventDefault(),e.stopPropagation()):_("update:modelValue",!t.modelValue)},t.eventSignalOptions??{flush:"post"});return(e,n)=>(g(),h("div",{class:l([e.$style.switch,t.modelValue&&e.$style.switch_active]),onClick:n[0]||(n[0]=(...f)=>i(a)&&i(a)(...f))},[w("div",{class:l([e.$style.slider,t.modelValue&&e.$style.slider_active])},null,2)],2))}}),V="_switch_active_13jol_9",b="_slider_13jol_12",y="_slider_active_13jol_23",C={switch:"_switch_13jol_1",switch_active:V,slider:b,slider_active:y},$={$style:C},m=S(d,[["__cssModules",$],["__scopeId","data-v-cf94cb09"]]);d.__docgenInfo={exportName:"default",displayName:"SwitchButton",description:"",tags:{},props:[{name:"disabled",defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/switch/SwitchButton.vue"]};const N={title:"Components / Element / SwitchButton",component:m,tags:["autodocs"]},j=o=>({components:{SwitchButton:m},setup(){return{args:o}},template:'<SwitchButton v-model="args.modelValue" v-bind="args" />'}),s=j.bind({});s.args={modelValue:!1,disabled:!1};var c,r,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    SwitchButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<SwitchButton v-model="args.modelValue" v-bind="args" />'
})`,...(u=(r=s.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const O=["DefaultSwitchButton"];export{s as DefaultSwitchButton,O as __namedExportsOrder,N as default};
