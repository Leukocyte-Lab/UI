import{d as f,x as h,B as w,y as n,u as i,q as v}from"./vue.esm-bundler-7c0e16c6.js";import{u as B}from"./event-7a4f6ec0.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./signal-7e1a4156.js";const d=f({__name:"SwitchButton",props:{modelValue:{type:Boolean},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:p}){const t=o,{onTrigger:a}=B(e=>{t.disabled?(e.preventDefault(),e.stopPropagation()):(console.log(t.modelValue),p("update:modelValue",!t.modelValue))},{flush:"post"});return(e,l)=>(v(),h("div",{class:n([e.$style.switch,t.modelValue&&e.$style.switch_active]),onClick:l[0]||(l[0]=(..._)=>i(a)&&i(a)(..._))},[w("div",{class:n([e.$style.slider,t.modelValue&&e.$style.slider_active])},null,2)],2))}}),S="_switch_active_13jol_9",V="_slider_13jol_12",b="_slider_active_13jol_23",y={switch:"_switch_13jol_1",switch_active:S,slider:V,slider_active:b},$={$style:y},m=g(d,[["__cssModules",$],["__scopeId","data-v-1ba5eb50"]]);d.__docgenInfo={exportName:"default",displayName:"SwitchButton",description:"",tags:{},props:[{name:"disabled",defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/switch/SwitchButton.vue"]};const I={title:"Components / Element / SwitchButton",component:m,tags:["autodocs"]},j=o=>({components:{SwitchButton:m},setup(){return{args:o}},template:'<SwitchButton v-model="args.modelValue" v-bind="args" />'}),s=j.bind({});s.args={modelValue:!1,disabled:!1};var r,c,u;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    SwitchButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<SwitchButton v-model="args.modelValue" v-bind="args" />'
})`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const N=["DefaultSwitchButton"];export{s as DefaultSwitchButton,N as __namedExportsOrder,I as default};
//# sourceMappingURL=SwitchButton.stories-b64819e9.js.map
