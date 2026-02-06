import{d as me,x as ce,h as v,p as he,a as y,m as F,e as j,F as ge,r as fe,n as ve,b as R,k as o,a0 as ye,o as w,j as K,g as U,w as we,A as Q}from"./iframe-DWkrEofv.js";import{a as be}from"./index-DUnGqQaM.js";import{D as Se}from"./DataTableCell-C-3zDfBk.js";import{D as _e}from"./DataTableRow-Dv1Za8ig.js";import"./index-MhWnggP3.js";import{u as ke}from"./event-BWOUwEvK.js";import{M as C}from"./map-D2EjNm15.js";import{s as Me}from"./signal-D5KBuHr1.js";import{M as xe}from"./math-TzMrGeT-.js";import{_ as Pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CApejOiu.js";import"./fn-DU1B6eD4.js";import"./parser-B5lz-F76.js";import"./_mapToArray-B6QWFevT.js";import"./_getNative-B6kbqn7W.js";import"./map-LfImqO5-.js";import"./last-D-rYfuUG.js";import"./toNumber-Bryb-nJS.js";import"./string-CdhieEss.js";import"./uuid-Cakt1EUJ.js";import"./validation-zVG9lBPq.js";import"./_flatRest-DscWrHRt.js";import"./_overRest-BTimdpjk.js";import"./fromPairs-Dx9PT-t0.js";const X=16777216,J=me({__name:"LargeDataTableWrapper",props:{items:{},columns:{},useSearch:{type:Boolean},searchQuery:{},result:{},clearSelection:{type:Function},totalItems:{},visibleSize:{},nested:{type:Boolean},defaultRowHeight:{},bufferSize:{}},emits:["select:row","overflowed"],setup(e,{emit:n}){ce();const a=e,D=n,u=ye("wrapperRef$"),i=v(0),W=v(0),V=v(new Set),Z=v(new C(new C)),ee=o(()=>{const t=Math.min(...V.value);return Number.isFinite(t)?t:a.defaultRowHeight??32}),s=o(()=>ee.value+W.value),ae=o(()=>a.visibleSize??50),h=o(()=>a.bufferSize??10),z=o(()=>new C(a.items instanceof Map?a.items:new Map([...a.items].map((t,r)=>[r,t]))).mapWithIndex((t,r,l)=>[r,{item:t,index:l,key:r}])),te=o(()=>Array.from(z.value.entries())),p=o(()=>a.totalItems??z.value.size),A=o(()=>p.value*s.value),M=o(()=>A.value>X),q=o(()=>M.value?X:A.value),O=o(()=>ae.value+h.value*2),x=o(()=>Math.min(i.value+O.value,p.value)),P=o(()=>x.value-i.value),ne=o(()=>new Map(te.value.slice(i.value,x.value))),$=o(()=>{if(M.value){const t=i.value/Math.max(p.value,1),r=P.value*s.value,l=Math.max(0,q.value-r);return Math.floor(t*l)}return i.value*s.value}),T=o(()=>{const t=p.value-x.value;if(M.value){const r=t/Math.max(p.value,1),l=P.value*s.value,m=Math.max(0,q.value-l);return Math.floor(r*m)}return t*s.value}),I=Me(!1),re=()=>{if(u.value){const{scrollHeight:t,clientHeight:r}=u.value;I.set(t>r+1)}},oe=()=>{u.value&&(W.value=parseFloat(globalThis.getComputedStyle(u.value).getPropertyValue("row-gap"))||0)},le=t=>{const r=t.target,l=r.scrollTop,m=i.value;Array.from(r.querySelectorAll(":scope > [data-table-row]")).forEach((c,f)=>{const ue=m+f,B=c.getBoundingClientRect().height;Z.value.set(ue,B),V.value.add(B)});const d=$.value,ie=T.value,L=P.value*s.value,G=l-d,E=G<0||G>L;let g;if(E){const c=d+L+ie,f=c>0?l/c:0;g=Math.floor(f*p.value)}else{const c=s.value,f=Math.floor(G/c);g=i.value+f}const se=Math.max(0,g-h.value),pe=g<i.value+Math.floor(h.value/2),de=g>i.value+h.value+Math.floor(h.value/2);(E||pe||de)&&(i.value=xe.clamp(se,0,Math.max(0,p.value-O.value)))},{onTrigger:N}=ke(le,{debounce:10,flush:"sync",syncWithDebounce:!0});return be(u,()=>{oe(),re()},{window}),he(I,t=>D("overflowed",t),{immediate:!0}),(t,r)=>(w(),y("div",{ref_key:"wrapperRef$",ref:u,onScrollCapture:r[1]||(r[1]=(...l)=>R(N)&&R(N)(...l)),class:ve([t.$style["table-wrapper"],t.$style.wrapper,t.$style.flex,t.$style.vertical,R(I)()&&t.$style.overflowed])},[$.value?(w(),y("div",{key:0,style:F({height:`${$.value}px`,flexShrink:0}),"aria-hidden":"true","data-table-spacer":""},null,4)):j("",!0),(w(!0),y(ge,null,fe(ne.value,([l,{item:m,index:H}])=>K(t.$slots,"row",{key:l,columns:a.columns,item:m,rowIndex:H,rowKey:l},()=>[U(_e,{"onSelect:row":r[0]||(r[0]=d=>D("select:row",d)),columns:a.columns,item:m,"row-index":H,"row-key":l,"data-table-row":""},{default:we(d=>[K(t.$slots,"cell",Q({ref_for:!0},d),()=>[U(Se,Q({ref_for:!0},d),null,16)],!0)]),_:3},8,["columns","item","row-index","row-key"])],!0)),128)),T.value?(w(),y("div",{key:1,style:F({height:`${T.value}px`,flexShrink:0}),"aria-hidden":"true","data-table-spacer":""},null,4)):j("",!0)],34))}}),$e="_wrapper_1gavr_1",Te="_flex_1gavr_12",Ie="_horizontal_1gavr_48",He="_wrap_1gavr_1",Ge="_vertical_1gavr_60",Re="_grid_1gavr_72",Ce="_overflowed_1gavr_108",De={wrapper:$e,flex:Te,"col-1":"_col-1_1gavr_12","col-2":"_col-2_1gavr_15","col-3":"_col-3_1gavr_18","col-4":"_col-4_1gavr_21","col-5":"_col-5_1gavr_24","col-6":"_col-6_1gavr_27","col-7":"_col-7_1gavr_30","col-8":"_col-8_1gavr_33","col-9":"_col-9_1gavr_36","col-10":"_col-10_1gavr_39","col-11":"_col-11_1gavr_42","col-12":"_col-12_1gavr_45",horizontal:Ie,wrap:He,vertical:Ge,grid:Re,"table-wrapper":"_table-wrapper_1gavr_78",overflowed:Ce},We={$style:De},Ve=Pe(J,[["__cssModules",We],["__scopeId","data-v-b9d7ae93"]]);J.__docgenInfo={exportName:"default",displayName:"LargeDataTableWrapper",type:2,props:[{name:"items",global:!1,description:"",tags:[],required:!0,type:"AcceptedTypes",declarations:[],schema:"AcceptedTypes"},{name:"columns",global:!1,description:"",tags:[],required:!0,type:"Column<unknown>[]",declarations:[],schema:{kind:"array",type:"Column<unknown>[]"}},{name:"useSearch",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"searchQuery",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"result",global:!1,description:"",tags:[],required:!1,type:"AcceptedTypes | undefined",declarations:[],schema:{kind:"enum",type:"AcceptedTypes | undefined",schema:["undefined","AcceptedTypes"]}},{name:"clearSelection",global:!1,description:"",tags:[],required:!1,type:"(() => void) | undefined",declarations:[],schema:{kind:"enum",type:"(() => void) | undefined",schema:["undefined",{kind:"event",type:"(): void"}]}},{name:"totalItems",global:!1,description:"",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"visibleSize",global:!1,description:"",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"nested",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"defaultRowHeight",global:!1,description:"",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"bufferSize",global:!1,description:"",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"select:row",description:"",tags:[],type:"Payload<unknown>",signature:'(e: "select:row", value: Payload<unknown>): void',declarations:[],schema:[]},{name:"overflowed",description:"",tags:[],type:"boolean",signature:'(e: "overflowed", value: boolean): void',declarations:[],schema:[]}],slots:[{name:"row",type:"Props<unknown>",description:"",declarations:[],schema:{kind:"enum",type:"Props<unknown>",schema:[{kind:"object",type:"{ columns: Column<unknown>[]; isSelected?: boolean | undefined; } & { item?: undefined; rowIndex?: undefined; rowKey?: undefined; isHeader: true; }"},{kind:"object",type:"{ columns: Column<unknown>[]; isSelected?: boolean | undefined; } & Payload<unknown> & { isHeader?: false | undefined; }"}]}},{name:"cell",type:"Props<unknown>",description:"",declarations:[],schema:{kind:"enum",type:"Props<unknown>",schema:[{kind:"object",type:"{ value: any; column: Column<unknown>; } & { isHeader: true; item?: undefined; rowIndex?: undefined; rowKey?: undefined; isSelected?: undefined; }"},{kind:"object",type:"{ value: any; column: Column<unknown>; } & Payload<unknown> & { isHeader?: false | undefined; isSelected?: boolean | undefined; }"}]}},{name:"placeholder",type:"Props",description:"",declarations:[],schema:{kind:"object",type:"Props"}}],exposed:[],sourceFiles:"/home/runner/work/UI/UI/src/components/layout/table/large-data-table/LargeDataTableWrapper.vue"};const{fn:Y}=__STORYBOOK_MODULE_TEST__,sa={title:"Components / Layout / LargeDataTable / LargeDataTableWrapper",component:Ve,tags:["autodocs"],argTypes:{items:{control:!1,description:"Data to be displayed in the LargeDataTableWrapper."},columns:{control:"object",description:"Columns to control LargeDataTableWrapper behavior."},useSearch:{control:"boolean",description:"Whether to enable the search functionality."},row:{description:"Slot to customize the rendering of each row in the DataTable.",table:{type:{summary:"DataTable.Component.Row.Slots<T>"}}},cell:{description:"Slot to customize the rendering of each cell in the DataTable.",table:{type:{summary:"DataTable.Component.Cell.Props<T>"}}},"onSelect:row":{action:"onSelect:row",description:"Emitted when a row is clicked.",table:{type:{summary:"($event: Row.Payload<ItemType<T>>) => void"}}},onOverflowed:{action:"onOverflowed",description:"Emitted when the table overflows horizontally.",table:{type:{summary:"($event: boolean) => void"}}}},args:{useSearch:!1,"onSelect:row":Y(),onOverflowed:Y()}},b={args:{items:new Map(Array(1e5).fill(null).map((e,n,{length:a})=>({id:`item-${String(n+1).padStart(Math.log10(a)+1,"0")}`,name:`Item ${String(n+1).padStart(Math.log10(a)+1,"0")}`,value:{prop1:`Value ${String(n+1).padStart(Math.log10(a)+1,"0")} - Prop 1`,prop2:`Value ${String(n+1).padStart(Math.log10(a)+1,"0")} - Prop 2`}})).map(e=>[e.id,e])),columns:[{key:"name",label:"Name",width:1,valuesGetter:e=>e.name},{key:"prop-1",label:"Prop 1",width:2,valuesGetter:e=>e.value.prop1},{key:"prop-2",label:"Prop 2",width:2,valuesGetter:e=>e.value.prop2}],style:{width:"100%",minWidth:"640px",height:"480px"}}},S={args:{items:new Map(Array(5e5).fill(null).map((e,n,{length:a})=>({id:`item-${String(n+1).padStart(Math.log10(a)+1,"0")}`,name:`Item ${String(n+1).padStart(Math.log10(a)+1,"0")}`,value:{prop1:`Value ${String(n+1).padStart(Math.log10(a)+1,"0")} - Prop 1`,prop2:`Value ${String(n+1).padStart(Math.log10(a)+1,"0")} - Prop 2`}})).map(e=>[e.id,e])),columns:[{key:"name",label:"Name",width:1,valuesGetter:e=>e.name},{key:"prop-1",label:"Prop 1",width:2,valuesGetter:e=>e.value.prop1},{key:"prop-2",label:"Prop 2",width:2,valuesGetter:e=>e.value.prop2}],style:{width:"100%",minWidth:"640px",height:"480px"}}},_={args:{items:new Map(Array(1e6).fill(null).map((e,n,{length:a})=>({id:`item-${String(n+1).padStart(Math.log10(a)+1,"0")}`,name:`Item ${String(n+1).padStart(Math.log10(a)+1,"0")}`,value:{prop1:`Value ${String(n+1).padStart(Math.log10(a)+1,"0")} - Prop 1`,prop2:`Value ${String(n+1).padStart(Math.log10(a)+1,"0")} - Prop 2`}})).map(e=>[e.id,e])),columns:[{key:"name",label:"Name",width:1,valuesGetter:e=>e.name},{key:"prop-1",label:"Prop 1",width:2,valuesGetter:e=>e.value.prop1},{key:"prop-2",label:"Prop 2",width:2,valuesGetter:e=>e.value.prop2}],style:{width:"100%",minWidth:"640px",height:"480px"}}},k={args:{items:new Map(Array(5e6).fill(null).map((e,n,{length:a})=>({id:`item-${String(n+1).padStart(Math.log10(a)+1,"0")}`,name:`Item ${String(n+1).padStart(Math.log10(a)+1,"0")}`,value:{prop1:`Value ${String(n+1).padStart(Math.log10(a)+1,"0")} - Prop 1`,prop2:`Value ${String(n+1).padStart(Math.log10(a)+1,"0")} - Prop 2`}})).map(e=>[e.id,e])),columns:[{key:"name",label:"Name",width:1,valuesGetter:e=>e.name},{key:"prop-1",label:"Prop 1",width:2,valuesGetter:e=>e.value.prop1},{key:"prop-2",label:"Prop 2",width:2,valuesGetter:e=>e.value.prop2}],style:{width:"100%",minWidth:"640px",height:"480px"}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: new Map(Array(100_000).fill(null).map((_, index, {
      length
    }) => ({
      id: \`item-\${String(index + 1).padStart(Math.log10(length) + 1, '0')}\`,
      name: \`Item \${String(index + 1).padStart(Math.log10(length) + 1, '0')}\`,
      value: {
        prop1: \`Value \${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 1\`,
        prop2: \`Value \${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 2\`
      }
    })).map(item => [item.id, item])),
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
      minWidth: '640px',
      height: '480px'
    }
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: new Map(Array(500_000).fill(null).map((_, index, {
      length
    }) => ({
      id: \`item-\${String(index + 1).padStart(Math.log10(length) + 1, '0')}\`,
      name: \`Item \${String(index + 1).padStart(Math.log10(length) + 1, '0')}\`,
      value: {
        prop1: \`Value \${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 1\`,
        prop2: \`Value \${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 2\`
      }
    })).map(item => [item.id, item])),
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
      minWidth: '640px',
      height: '480px'
    }
  }
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: new Map(Array(1_000_000).fill(null).map((_, index, {
      length
    }) => ({
      id: \`item-\${String(index + 1).padStart(Math.log10(length) + 1, '0')}\`,
      name: \`Item \${String(index + 1).padStart(Math.log10(length) + 1, '0')}\`,
      value: {
        prop1: \`Value \${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 1\`,
        prop2: \`Value \${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 2\`
      }
    })).map(item => [item.id, item])),
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
      minWidth: '640px',
      height: '480px'
    }
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: new Map(Array(5_000_000).fill(null).map((_, index, {
      length
    }) => ({
      id: \`item-\${String(index + 1).padStart(Math.log10(length) + 1, '0')}\`,
      name: \`Item \${String(index + 1).padStart(Math.log10(length) + 1, '0')}\`,
      value: {
        prop1: \`Value \${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 1\`,
        prop2: \`Value \${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 2\`
      }
    })).map(item => [item.id, item])),
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
      minWidth: '640px',
      height: '480px'
    }
  }
}`,...k.parameters?.docs?.source}}};const pa=["Default","HalfMillion","OneMillion","FiveMillion"];export{b as Default,k as FiveMillion,S as HalfMillion,_ as OneMillion,pa as __namedExportsOrder,sa as default};
