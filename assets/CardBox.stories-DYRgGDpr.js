import{C as D}from"./CardBox-DY9R6z8p.js";import"./string-CdhieEss.js";import"./iframe-ZeqwWR1w.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseLink-DCRQCKJC.js";import"./index-CNPzCkue.js";import"./event-D4gGROsl.js";import"./signal-KWLevoig.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const G={title:"Components / Element / CardBox",component:D,tags:["autodocs"],argTypes:{link:{control:"text",description:"Card link (optional)"},color:{control:"select",description:"Card color (optional)",options:["default","cyan","blue","green","orange","red"],defaultValue:"default"},variant:{control:"radio",description:"Card variant (optional)",options:["metallic","flat","dash"],defaultValue:"metallic"},purpose:{control:"radio",description:"Card purpose (optional)",options:["container","box"],defaultValue:"box"},strokeWeight:{control:"radio",description:"Card stroke weight (optional)",options:["bold","normal","thin"]},radius:{control:"text",description:"Card radius (optional), default `var(--agh-ref-border-radius-500)` when `purpose` is `container`, otherwise `var(--agh-ref-border-radius-300)`"},hasStroke:{control:"boolean",description:"Card stroke (optional)",defaultValue:!0},clickable:{control:"boolean",description:"Is card clickable (optional)",defaultValue:!1},active:{control:"boolean",description:"Is card active (optional)",defaultValue:!1}},parameters:{slots:{default:{template:`
          <div style="padding: 1em;">
            <h1>This is a CardBox</h1>
            <br />
            <p>Put something inside the slot to see it !</p>
          </div>
        `}}}},o={args:{variant:"metallic",purpose:"box",color:"default",hasStroke:!0,clickable:!1,strokeWeight:"normal"}},r={args:{...o.args}},a={args:{...o.args,variant:"flat"}},e={args:{...o.args,variant:"dash"}},s={args:{...r.args,color:"cyan"}},t={args:{...a.args,color:"cyan"}},n={args:{...e.args,color:"cyan"}},c={args:{...r.args,color:"blue"}},l={args:{...a.args,color:"blue"}},d={args:{...e.args,color:"blue"}},i={args:{...r.args,color:"green"}},u={args:{...a.args,color:"green"}},p={args:{...e.args,color:"green"}},g={args:{...r.args,color:"orange"}},m={args:{...a.args,color:"orange"}},C={args:{...e.args,color:"orange"}},x={args:{...r.args,color:"red"}},B={args:{...a.args,color:"red"}},f={args:{...e.args,color:"red"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'metallic',
    purpose: 'box',
    color: 'default',
    hasStroke: true,
    clickable: false,
    strokeWeight: 'normal'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultCardBox.args
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultCardBox.args,
    variant: 'flat'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultCardBox.args,
    variant: 'dash'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'cyan'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...FlatDefaultCardBox.args,
    color: 'cyan'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...DashDefaultCardBox.args,
    color: 'cyan'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'blue'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...FlatDefaultCardBox.args,
    color: 'blue'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...DashDefaultCardBox.args,
    color: 'blue'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'green'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...FlatDefaultCardBox.args,
    color: 'green'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...DashDefaultCardBox.args,
    color: 'green'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'orange'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...FlatDefaultCardBox.args,
    color: 'orange'
  }
}`,...m.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...DashDefaultCardBox.args,
    color: 'orange'
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'red'
  }
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...FlatDefaultCardBox.args,
    color: 'red'
  }
}`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...DashDefaultCardBox.args,
    color: 'red'
  }
}`,...f.parameters?.docs?.source}}};const R=["DefaultCardBox","MetallicDefaultCardBox","FlatDefaultCardBox","DashDefaultCardBox","MetallicCyanCardBox","FlatCyanCardBox","DashCyanCardBox","MetallicBlueCardBox","FlatBlueCardBox","DashBlueCardBox","MetallicGreenCardBox","FlatGreenCardBox","DashGreenCardBox","MetallicOrangeCardBox","FlatOrangeCardBox","DashOrangeCardBox","MetallicRedCardBox","FlatRedCardBox","DashRedCardBox"];export{d as DashBlueCardBox,n as DashCyanCardBox,e as DashDefaultCardBox,p as DashGreenCardBox,C as DashOrangeCardBox,f as DashRedCardBox,o as DefaultCardBox,l as FlatBlueCardBox,t as FlatCyanCardBox,a as FlatDefaultCardBox,u as FlatGreenCardBox,m as FlatOrangeCardBox,B as FlatRedCardBox,c as MetallicBlueCardBox,s as MetallicCyanCardBox,r as MetallicDefaultCardBox,i as MetallicGreenCardBox,g as MetallicOrangeCardBox,x as MetallicRedCardBox,R as __namedExportsOrder,G as default};
