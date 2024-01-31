import{i as h,D as w,E as v,F as n,u as i,A as B}from"./vue.esm-bundler-SihWJJBJ.js";import{u as g}from"./event-DHm0Wirh.js";import{_ as S}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./signal-86x_1vAt.js";const d=h({__name:"SwitchButton",props:{modelValue:{type:Boolean},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:p}){const s=o,_=p,{onTrigger:a}=g(e=>{s.disabled?(e.preventDefault(),e.stopPropagation()):_("update:modelValue",!s.modelValue)},{flush:"post"});return(e,l)=>(B(),w("div",{class:n([e.$style.switch,s.modelValue&&e.$style.switch_active]),onClick:l[0]||(l[0]=(...f)=>i(a)&&i(a)(...f))},[v("div",{class:n([e.$style.slider,s.modelValue&&e.$style.slider_active])},null,2)],2))}}),V="_switch_active_13jol_9",b="_slider_13jol_12",y="_slider_active_13jol_23",D={switch:"_switch_13jol_1",switch_active:V,slider:b,slider_active:y},E={$style:D},m=S(d,[["__cssModules",E],["__scopeId","data-v-ba7e8ec3"]]);d.__docgenInfo={exportName:"default",displayName:"SwitchButton",description:"",tags:{},props:[{name:"disabled",defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/switch/SwitchButton.vue"]};const N={title:"Components / Element / SwitchButton",component:m,tags:["autodocs"]},$=o=>({components:{SwitchButton:m},setup(){return{args:o}},template:'<SwitchButton v-model="args.modelValue" v-bind="args" />'}),t=$.bind({});t.args={modelValue:!1,disabled:!1};var c,r,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    SwitchButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<SwitchButton v-model="args.modelValue" v-bind="args" />'
})`,...(u=(r=t.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const F=["DefaultSwitchButton"];export{t as DefaultSwitchButton,F as __namedExportsOrder,N as default};
