import{D as o}from"./DataTableCell-CRZmomQi.js";import"./iframe-D704OLuJ.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i={title:"Components / Layout / DataTable / DataTableCell",component:o,tags:["autodocs"],argTypes:{item:{control:"object",description:"Data to be displayed in the DataTableCell."},value:{control:"text",description:"Value to be displayed in the DataTableCell."},column:{control:"object",description:"Columns to control DataTable behavior."},isHeader:{control:"boolean",description:"Whether the cell is a header cell."},isSelected:{control:"boolean",description:"Whether the cell is selected."},"onSelect:row":{action:"onSelect:row",description:"Emitted when a row is clicked.",table:{type:{summary:"($event: Row.Payload<ItemType<T>>) => void"}}},"onSelect:column":{action:"onSelect:column",description:"Emitted when a column is clicked.",table:{type:{summary:"($event: Column<ItemType<T>>) => void"}}}},args:{isHeader:!1,isSelected:!1,"onSelect:row":t(),"onSelect:column":t()}},e={args:{item:{id:"item-1",name:"Item 1",value:{prop1:"Value 1 - Prop 1",prop2:"Value 1 - Prop 2"}},column:{key:"name",label:"Name",valuesGetter:a=>a.name},value:"Value 1 - Prop 1"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    item: {
      id: 'item-1',
      name: 'Item 1',
      value: {
        prop1: 'Value 1 - Prop 1',
        prop2: 'Value 1 - Prop 2'
      }
    },
    column: {
      key: 'name',
      label: 'Name',
      valuesGetter: (item: any) => item.name
    },
    value: 'Value 1 - Prop 1'
  }
}`,...e.parameters?.docs?.source}}};const s=["Default"];export{e as Default,s as __namedExportsOrder,i as default};
