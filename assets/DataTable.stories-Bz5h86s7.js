import{d as k,x as g,a as S,j as t,e as T,n as V,o as D,g as a,w as p,_ as u,$ as y,A as s,b as I}from"./iframe-CF7olIhg.js";import{D as b}from"./DataTableCell-BWL7SFoO.js";import{D as C}from"./DataTableHeader-D03h0e-w.js";import{D as _}from"./DataTableRow-ClTYw0j1.js";import{D as $}from"./DataTableWrapper-DLhx1FDe.js";import"./index--bTPKvRN.js";import{s as H}from"./signal-D7KNXmFu.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchBar-T94md5fC.js";import"./SelectMenu-C_UYg1rd.js";import"./index-CN9MBCre.js";import"./index-Bt-aqJHZ.js";import"./ButtonBox-DgLyYxC5.js";import"./BaseLink-Dej-ecbe.js";import"./BasePoly-D0uFTxs6.js";import"./event-BgofFY0p.js";import"./CardBox-BYgr2ESy.js";import"./TextField-xcRNgqro.js";import"./validation-zVG9lBPq.js";import"./_mapToArray-B6QWFevT.js";import"./_getNative-B6kbqn7W.js";import"./_flatRest-DscWrHRt.js";import"./_overRest-BTimdpjk.js";import"./last-D-rYfuUG.js";import"./fn-VydWJQjL.js";import"./parser-j3J06UQp.js";import"./map-LfImqO5-.js";import"./toNumber-Bryb-nJS.js";import"./map-DlFn5-zT.js";import"./_basePickBy-CjrHyFLl.js";import"./groupBy-CQVXrZzi.js";import"./math-Bsm6xtTW.js";import"./fromPairs-Dx9PT-t0.js";import"./string-CdhieEss.js";import"./uuid-Cakt1EUJ.js";const P=k({__name:"DataTable",props:{items:{},columns:{},useSearch:{type:Boolean},query:{},caseSensitive:{type:Boolean},limit:{},sortBy:{},phraseSearch:{type:Boolean},strict:{type:Boolean},segmentPattern:{},relevanceSearch:{type:Boolean},relevancePolicy:{},threshold:{},hideHeader:{type:Boolean}},emits:["select:item","select:row","select:column"],setup(n,{emit:v}){g();const o=n,m=v,f=H(!1),c=e=>{m("select:row",e),m("select:item",e.item)},d=e=>{m("select:column",e)},w=e=>{f.set(e)};return(e,G)=>(D(),S("div",{class:V([e.$style["table-container"],e.$style.wrapper,e.$style.flex,e.$style.vertical])},[o.hideHeader?T("",!0):t(e.$slots,"header",{key:0,columns:o.columns,useSearch:o.useSearch},()=>[a(C,{columns:o.columns,overflowed:I(f)(),"use-search":o.useSearch},{row:p(r=>[t(e.$slots,"row",u(y(r)),()=>[a(_,u(y(r)),{default:p(l=>[t(e.$slots,"cell",s({"onSelect:column":d},l),()=>[a(b,s({"onSelect:column":d},l),null,16)],!0)]),_:3},16)],!0)]),_:3},8,["columns","overflowed","use-search"])],!0),t(e.$slots,"wrapper",{onOverflowed:w,"onSelect:row":c,columns:o.columns,items:o.items,useSearch:o.useSearch},()=>[a($,{onOverflowed:w,columns:o.columns,items:o.items,"use-search":o.useSearch},{row:p(r=>[t(e.$slots,"row",s({"onSelect:row":c},r),()=>[a(_,s({"onSelect:row":c},r),{default:p(l=>[t(e.$slots,"cell",u(y(l)),()=>[a(b,s({"onSelect:column":d},l),null,16)],!0)]),_:3},16)],!0)]),_:3},8,["columns","items","use-search"])],!0)],2))}}),q="_wrapper_16ew7_1",z="_flex_16ew7_12",B="_horizontal_16ew7_48",A="_wrap_16ew7_1",O="_vertical_16ew7_60",R="_grid_16ew7_72",x={wrapper:q,flex:z,"col-1":"_col-1_16ew7_12","col-2":"_col-2_16ew7_15","col-3":"_col-3_16ew7_18","col-4":"_col-4_16ew7_21","col-5":"_col-5_16ew7_24","col-6":"_col-6_16ew7_27","col-7":"_col-7_16ew7_30","col-8":"_col-8_16ew7_33","col-9":"_col-9_16ew7_36","col-10":"_col-10_16ew7_39","col-11":"_col-11_16ew7_42","col-12":"_col-12_16ew7_45",horizontal:B,wrap:A,vertical:O,grid:R,"table-container":"_table-container_16ew7_78"},E={$style:x},N=j(P,[["__cssModules",E],["__scopeId","data-v-dd3079ef"]]);P.__docgenInfo={exportName:"default",displayName:"DataTable",type:2,props:[{name:"items",global:!1,description:"",tags:[],required:!0,type:"AcceptedTypes",declarations:[],schema:"AcceptedTypes"},{name:"columns",global:!1,description:"",tags:[],required:!0,type:"Column<unknown>[]",declarations:[],schema:{kind:"array",type:"Column<unknown>[]"}},{name:"useSearch",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"hideHeader",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"select:item",description:"",tags:[],type:"unknown",signature:'(e: "select:item", value: unknown): void',declarations:[],schema:[]},{name:"select:row",description:"",tags:[],type:"Payload<unknown>",signature:'(e: "select:row", value: Payload<unknown>): void',declarations:[],schema:[]},{name:"select:column",description:"",tags:[],type:"Column<unknown>",signature:'(e: "select:column", value: Column<unknown>): void',declarations:[],schema:[]}],slots:[{name:"header",type:"Props<AcceptedTypes>",description:"",declarations:[],schema:{kind:"object",type:"Props<AcceptedTypes>"}},{name:"wrapper",type:"Props<AcceptedTypes>",description:"",declarations:[],schema:{kind:"object",type:"Props<AcceptedTypes>"}},{name:"footer",type:"Props<AcceptedTypes>",description:"",declarations:[],schema:{kind:"object",type:"Props<AcceptedTypes>"}},{name:"row",type:"Props<unknown>",description:"",declarations:[],schema:{kind:"enum",type:"Props<unknown>",schema:[{kind:"object",type:"{ columns: Column<unknown>[]; isSelected?: boolean | undefined; } & { item?: undefined; rowIndex?: undefined; rowKey?: undefined; isHeader: true; }"},{kind:"object",type:"{ columns: Column<unknown>[]; isSelected?: boolean | undefined; } & Payload<unknown> & { isHeader?: false | undefined; }"}]}},{name:"cell",type:"Props<unknown>",description:"",declarations:[],schema:{kind:"enum",type:"Props<unknown>",schema:[{kind:"object",type:"{ value: any; column: Column<unknown>; } & { isHeader: true; item?: undefined; rowIndex?: undefined; rowKey?: undefined; isSelected?: undefined; }"},{kind:"object",type:"{ value: any; column: Column<unknown>; } & Payload<unknown> & { isHeader?: false | undefined; isSelected?: boolean | undefined; }"}]}},{name:"placeholder",type:"Props",description:"",declarations:[],schema:{kind:"object",type:"Props"}}],exposed:[],sourceFiles:"/home/runner/work/UI/UI/src/components/layout/table/data-table/DataTable.vue"};const{fn:h}=__STORYBOOK_MODULE_TEST__,Te={title:"Components / Layout / DataTable / DataTable",component:N,tags:["autodocs"],argTypes:{items:{control:"object",description:"Data to be displayed in the DataTable."},columns:{control:"object",description:"Columns to control DataTable behavior."},hideHeader:{control:"boolean",description:"Whether to hide the header slot/component."},useSearch:{control:"boolean",description:"Whether to enable the search functionality."},header:{description:"Slot to customize the header section of the DataTable.",table:{type:{summary:"DataTable.Component.Header.Props<T>"}}},footer:{description:"Slot to customize the footer section of the DataTable.",table:{type:{summary:"DataTable.Component.Footer.Props<T>"}}},wrapper:{description:"Slot to customize the wrapper section of the DataTable.",table:{type:{summary:"DataTable.Component.Wrapper.Props<T>"}}},row:{description:"Slot to customize the rendering of each row in the DataTable.",table:{type:{summary:"DataTable.Component.Row.Slots<T>"}}},cell:{description:"Slot to customize the rendering of each cell in the DataTable.",table:{type:{summary:"DataTable.Component.Cell.Props<T>"}}},placeholder:{description:"Slot to customize the placeholder content when there is no data or no matched results.",table:{type:{summary:"DataTable.Component.Placeholder.Props"}}},"onSelect:row":{action:"onSelect:row",description:"Emitted when a row is clicked.",table:{type:{summary:"($event: Row.Payload<ItemType<T>>) => void"}}},"onSelect:item":{action:"onSelect:item",description:"Emitted when an item is selected (row click).",table:{type:{summary:"($event: ItemType<T>) => void"}}},"onSelect:column":{action:"onSelect:column",description:"Emitted when a column is clicked.",table:{type:{summary:"($event: Column<ItemType<T>>) => void"}}}},args:{hideHeader:!1,useSearch:!1,"onSelect:row":h(),"onSelect:item":h(),"onSelect:column":h()}},i={args:{items:[{id:"item-1",name:"Item 1",value:{prop1:"Value 1 - Prop 1",prop2:"Value 1 - Prop 2"}},{id:"item-2",name:"Item 2",value:{prop1:"Value 2 - Prop 1",prop2:"Value 2 - Prop 2"}},{id:"item-3",name:"Item 3",value:{prop1:"Value 3 - Prop 1",prop2:"Value 3 - Prop 2"}},{id:"item-4",name:"Item 4",value:{prop1:"Value 4 - Prop 1",prop2:"Value 4 - Prop 2"}},{id:"item-5",name:"Item 5",value:{prop1:"Value 5 - Prop 1",prop2:"Value 5 - Prop 2"}},{id:"item-6",name:"Item 6",value:{prop1:"Value 6 - Prop 1",prop2:"Value 6 - Prop 2"}},{id:"item-7",name:"Item 7",value:{prop1:"Value 7 - Prop 1",prop2:"Value 7 - Prop 2"}},{id:"item-8",name:"Item 8",value:{prop1:"Value 8 - Prop 1",prop2:"Value 8 - Prop 2"}},{id:"item-9",name:"Item 9",value:{prop1:"Value 9 - Prop 1",prop2:"Value 9 - Prop 2"}},{id:"item-10",name:"Item 10",value:{prop1:"Value 10 - Prop 1",prop2:"Value 10 - Prop 2"}}],columns:[{key:"name",label:"Name",width:1,valuesGetter:n=>n.name},{key:"prop-1",label:"Prop 1",width:2,valuesGetter:n=>n.value.prop1},{key:"prop-2",label:"Prop 2",width:2,valuesGetter:n=>n.value.prop2}],style:{width:"100%",minWidth:"480px",height:"240px"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ve=["Default"];export{i as Default,Ve as __namedExportsOrder,Te as default};
