import{P as i}from"./ProgressBar-DLYVEbm-.js";import"./vue.esm-bundler-CtYRyXVz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Components / Progress / ProgressBar",component:i,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:1,step:.01},description:"The value of the progress bar. Must be between 0 and 1."},variant:{control:"radio",description:"The variant of the progress bar.",options:["concave","convex"]},thickness:{control:{type:"number",min:0},description:"The thickness of the progress bar."}},args:{style:"width: 240px; height: 24px;"}},r={args:{value:.75,variant:"concave"}},e={args:{value:.75,variant:"convex"}};var a,s,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    value: 0.75,
    variant: 'concave'
  }
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: 0.75,
    variant: 'convex'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const u=["DefaultProgressBar","ConvexProgressBar"];export{e as ConvexProgressBar,r as DefaultProgressBar,u as __namedExportsOrder,v as default};
