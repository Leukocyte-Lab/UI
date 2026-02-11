import{P as a}from"./ProgressBar-3SLjfDly.js";import"./iframe-DapiwkS4.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={title:"Components / Progress / ProgressBar",component:a,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:1,step:.01},description:"The value of the progress bar. Must be between 0 and 1."},variant:{control:"radio",description:"The variant of the progress bar.",options:["concave","convex"]},thickness:{control:{type:"number",min:0},description:"The thickness of the progress bar."}},args:{style:"width: 240px; height: 24px;"}},r={args:{value:.75,variant:"concave"}},e={args:{value:.75,variant:"convex"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0.75,
    variant: 'concave'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0.75,
    variant: 'convex'
  }
}`,...e.parameters?.docs?.source}}};const i=["DefaultProgressBar","ConvexProgressBar"];export{e as ConvexProgressBar,r as DefaultProgressBar,i as __namedExportsOrder,c as default};
