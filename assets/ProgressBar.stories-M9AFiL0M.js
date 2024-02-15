import{P as c}from"./ProgressBar-7-sclTGW.js";import"./vue.esm-bundler-MA0GTrBm.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const l={title:"Components / Progress / ProgressBar",component:c,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:1,step:.01},description:"The value of the progress bar. Must be between 0 and 1."},variant:{control:"radio",description:"The variant of the progress bar.",options:["concave","convex"]},thickness:{control:{type:"number",min:0},description:"The thickness of the progress bar."}}},i=g=>({components:{ProgressBar:c},setup(){return{args:g}},template:'<ProgressBar v-bind="args" style="width: 480px; height: 24px;" />'}),r=i.bind({});r.args={value:.75,variant:"concave"};const e=i.bind({});e.args={value:.75,variant:"convex"};var s,o,t;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<ProgressBar v-bind="args" style="width: 480px; height: 24px;" />'
})`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var a,n,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<ProgressBar v-bind="args" style="width: 480px; height: 24px;" />'
})`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const h=["DefaultProgressBar","ConvexProgressBar"];export{e as ConvexProgressBar,r as DefaultProgressBar,h as __namedExportsOrder,l as default};
