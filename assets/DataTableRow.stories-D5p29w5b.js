import{D as o}from"./DataTableRow-CMdHpBws.js";import"./iframe-ZeqwWR1w.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTableCell-oLxt1tSW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./fn-BzcYbq6d.js";import"./parser-DmDHfAPg.js";import"./_mapToArray-B6QWFevT.js";import"./_getNative-B6kbqn7W.js";import"./map-LfImqO5-.js";import"./index-CNPzCkue.js";import"./last-D-rYfuUG.js";import"./toNumber-Bryb-nJS.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,v={title:"Components / Layout / DataTable / DataTableRow",component:o,tags:["autodocs"],argTypes:{item:{control:"object",description:"Data to be displayed in the DataTableRow."},columns:{control:"object",description:"Columns to control DataTable behavior."},"onSelect:row":{action:"onSelect:row",description:"Emitted when a row is clicked.",table:{type:{summary:"($event: Row.Payload<ItemType<T>>) => void"}}}},args:{"onSelect:row":a()}},t={args:{item:{id:"item-1",name:"Item 1",value:{prop1:"Value 1 - Prop 1",prop2:"Value 1 - Prop 2"}},columns:[{key:"name",label:"Name",width:1,valuesGetter:e=>e.name},{key:"prop-1",label:"Prop 1",width:2,valuesGetter:e=>e.value.prop1},{key:"prop-2",label:"Prop 2",width:2,valuesGetter:e=>e.value.prop2}],style:{width:"100%",minWidth:"480px"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    item: {
      id: 'item-1',
      name: 'Item 1',
      value: {
        prop1: 'Value 1 - Prop 1',
        prop2: 'Value 1 - Prop 2'
      }
    },
    columns: [{
      key: 'name',
      label: 'Name',
      width: 1,
      valuesGetter: (item: any) => item.name
    }, {
      key: 'prop-1',
      label: 'Prop 1',
      width: 2,
      valuesGetter: (item: any) => item.value.prop1
    }, {
      key: 'prop-2',
      label: 'Prop 2',
      width: 2,
      valuesGetter: (item: any) => item.value.prop2
    }],
    style: {
      width: '100%',
      minWidth: '480px'
    }
  }
}`,...t.parameters?.docs?.source}}};const h=["Default"];export{t as Default,h as __namedExportsOrder,v as default};
