import{d as _,C as h,D as n,F as t,K as f,q as B}from"./vue.esm-bundler-c0ff2e30.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const v=_({__name:"ProgressBar",props:{value:{default:0},variant:{default:"concave"},thickness:{default:12}},setup(a){const o=a;return(e,k)=>(B(),h("div",{class:t([e.$style["progress-container"],e.$style[o.variant]])},[n("div",{class:t([e.$style["progress-groove"],e.$style[o.variant]])},[n("div",{class:t(e.$style["progress-value"]),style:f({width:`${o.value*100}%`})},null,6)],2)],2))}}),P="_concave_vuh1m_23",x="_convex_vuh1m_55",b={"progress-container":"_progress-container_vuh1m_1","progress-groove":"_progress-groove_vuh1m_11","progress-value":"_progress-value_vuh1m_11",concave:P,"progress-content-wrapper":"_progress-content-wrapper_vuh1m_35",convex:x},w={$style:b},d=y(v,[["__cssModules",w],["__scopeId","data-v-d1ec5a1d"]]);v.__docgenInfo={exportName:"default",displayName:"ProgressBar",description:"",tags:{},props:[{name:"value",defaultValue:{func:!1,value:"0"}},{name:"variant",defaultValue:{func:!1,value:"'concave'"}},{name:"thickness",defaultValue:{func:!1,value:"12"}}],sourceFiles:["/home/runner/work/UI/UI/src/components/element/progress/ProgressBar.vue"]};const T={title:"Components / Progress / ProgressBar",component:d,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:1,step:.01},description:"The value of the progress bar. Must be between 0 and 1."},variant:{control:"radio",description:"The variant of the progress bar.",options:["concave","convex"]},thickness:{control:{type:"number",min:0},description:"The thickness of the progress bar."}}},m=a=>({components:{ProgressBar:d},setup(){return{args:a}},template:'<ProgressBar v-bind="args" style="width: 480px; height: 24px;" />'}),s=m.bind({});s.args={value:.75,variant:"concave"};const r=m.bind({});r.args={value:.75,variant:"convex"};var c,p,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<ProgressBar v-bind="args" style="width: 480px; height: 24px;" />'
})`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,i,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<ProgressBar v-bind="args" style="width: 480px; height: 24px;" />'
})`,...(g=(i=r.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};const I=["DefaultProgressBar","ConvexProgressBar"];export{r as ConvexProgressBar,s as DefaultProgressBar,I as __namedExportsOrder,T as default};
//# sourceMappingURL=ProgressBar.stories-c73550ca.js.map
