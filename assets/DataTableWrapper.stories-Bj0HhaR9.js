import{D as a}from"./DataTableWrapper-BN9HMMbq.js";import"./iframe-D704OLuJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3AAXQwF6.js";import"./index-mh3gIsbx.js";import"./DataTableCell-CRZmomQi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DataTableRow-DI65OYKh.js";import"./fn-Bjl0qS1w.js";import"./parser-BbsT_fjW.js";import"./_mapToArray-B6QWFevT.js";import"./_getNative-B6kbqn7W.js";import"./map-LfImqO5-.js";import"./last-D-rYfuUG.js";import"./toNumber-Bryb-nJS.js";import"./index-sYcUXZG5.js";import"./signal-DXprjEkh.js";import"./math-Bsm6xtTW.js";import"./fromPairs-Dx9PT-t0.js";import"./string-CdhieEss.js";import"./uuid-Cakt1EUJ.js";import"./validation-zVG9lBPq.js";import"./_flatRest-DscWrHRt.js";import"./_overRest-BTimdpjk.js";import"./map-DlFn5-zT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,k={title:"Components / Layout / DataTable / DataTableWrapper",component:a,tags:["autodocs"],argTypes:{items:{control:"object",description:"Data to be displayed in the DataTableWrapper."},columns:{control:"object",description:"Columns to control DataTableWrapper behavior."},useSearch:{control:"boolean",description:"Whether to enable the search functionality."},row:{description:"Slot to customize the rendering of each row in the DataTable.",table:{type:{summary:"DataTable.Component.Row.Slots<T>"}}},cell:{description:"Slot to customize the rendering of each cell in the DataTable.",table:{type:{summary:"DataTable.Component.Cell.Props<T>"}}},"onSelect:row":{action:"onSelect:row",description:"Emitted when a row is clicked.",table:{type:{summary:"($event: Row.Payload<ItemType<T>>) => void"}}},onOverflowed:{action:"onOverflowed",description:"Emitted when the table overflows horizontally.",table:{type:{summary:"($event: boolean) => void"}}}},args:{useSearch:!1,"onSelect:row":p(),onOverflowed:p()}},o={args:{items:[{id:"item-1",name:"Item 1",value:{prop1:"Value 1 - Prop 1",prop2:"Value 1 - Prop 2"}},{id:"item-2",name:"Item 2",value:{prop1:"Value 2 - Prop 1",prop2:"Value 2 - Prop 2"}},{id:"item-3",name:"Item 3",value:{prop1:"Value 3 - Prop 1",prop2:"Value 3 - Prop 2"}},{id:"item-4",name:"Item 4",value:{prop1:"Value 4 - Prop 1",prop2:"Value 4 - Prop 2"}},{id:"item-5",name:"Item 5",value:{prop1:"Value 5 - Prop 1",prop2:"Value 5 - Prop 2"}},{id:"item-6",name:"Item 6",value:{prop1:"Value 6 - Prop 1",prop2:"Value 6 - Prop 2"}},{id:"item-7",name:"Item 7",value:{prop1:"Value 7 - Prop 1",prop2:"Value 7 - Prop 2"}},{id:"item-8",name:"Item 8",value:{prop1:"Value 8 - Prop 1",prop2:"Value 8 - Prop 2"}},{id:"item-9",name:"Item 9",value:{prop1:"Value 9 - Prop 1",prop2:"Value 9 - Prop 2"}},{id:"item-10",name:"Item 10",value:{prop1:"Value 10 - Prop 1",prop2:"Value 10 - Prop 2"}}],columns:[{key:"name",label:"Name",width:1,valuesGetter:e=>e.name},{key:"prop-1",label:"Prop 1",width:2,valuesGetter:e=>e.value.prop1},{key:"prop-2",label:"Prop 2",width:2,valuesGetter:e=>e.value.prop2}],style:{width:"100%",minWidth:"480px",height:"240px"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'item-1',
      name: 'Item 1',
      value: {
        prop1: 'Value 1 - Prop 1',
        prop2: 'Value 1 - Prop 2'
      }
    }, {
      id: 'item-2',
      name: 'Item 2',
      value: {
        prop1: 'Value 2 - Prop 1',
        prop2: 'Value 2 - Prop 2'
      }
    }, {
      id: 'item-3',
      name: 'Item 3',
      value: {
        prop1: 'Value 3 - Prop 1',
        prop2: 'Value 3 - Prop 2'
      }
    }, {
      id: 'item-4',
      name: 'Item 4',
      value: {
        prop1: 'Value 4 - Prop 1',
        prop2: 'Value 4 - Prop 2'
      }
    }, {
      id: 'item-5',
      name: 'Item 5',
      value: {
        prop1: 'Value 5 - Prop 1',
        prop2: 'Value 5 - Prop 2'
      }
    }, {
      id: 'item-6',
      name: 'Item 6',
      value: {
        prop1: 'Value 6 - Prop 1',
        prop2: 'Value 6 - Prop 2'
      }
    }, {
      id: 'item-7',
      name: 'Item 7',
      value: {
        prop1: 'Value 7 - Prop 1',
        prop2: 'Value 7 - Prop 2'
      }
    }, {
      id: 'item-8',
      name: 'Item 8',
      value: {
        prop1: 'Value 8 - Prop 1',
        prop2: 'Value 8 - Prop 2'
      }
    }, {
      id: 'item-9',
      name: 'Item 9',
      value: {
        prop1: 'Value 9 - Prop 1',
        prop2: 'Value 9 - Prop 2'
      }
    }, {
      id: 'item-10',
      name: 'Item 10',
      value: {
        prop1: 'Value 10 - Prop 1',
        prop2: 'Value 10 - Prop 2'
      }
    }],
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
      minWidth: '480px',
      height: '240px'
    }
  }
}`,...o.parameters?.docs?.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,k as default};
