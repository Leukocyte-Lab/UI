import{d as I,b as R,c as u,$ as U,x as P,C as V,I as r,K as A,B as D,H as a,L as c,u as i,N as k,G as M,S as F,J as K,R as L}from"./vue.esm-bundler-ci6tbuJ3.js";import{I as W}from"./offline-ChRR0KDp.js";import{u as G,e as J,f as Q}from"./index-kfNwdgEE.js";import{B as X}from"./ButtonBox-BXGFawOF.js";import{C as Y}from"./CardBox-DJ0VdkV9.js";import{u as ee}from"./event-BlClQLSn.js";import{M as ne}from"./map-cdTs1dOm.js";import{p}from"./parser-B_CS4nKE.js";import{o as te}from"./orderBy-gGmTF--v.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DNcykg7C.js";import"./BaseLink-Dp3waMOx.js";import"./BasePoly-B76thUAg.js";import"./signal-C4qga6p8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_mapToArray-VNT0Ttt3.js";import"./_getNative-BogmDzHj.js";import"./map-DlRUZNXA.js";import"./last-D-rYfuUG.js";import"./toNumber-t3fhV6Fy.js";const re=["textContent"],se=["textContent"],ie=["textContent"],de=["textContent"],oe=["id","data-label"],C=I({__name:"Timeline",props:{events:{},follow:{type:Boolean,default:!1},title:{default:"Timeline"},running:{type:Boolean,default:!1},start:{},end:{},eventSignalOptions:{},duration:{default:5*60*1e3},basis:{default:5*60*1e3},grow:{type:[Boolean,String]},growThreshold:{},growPolicy:{},shrink:{type:[Boolean,String]},shrinkThreshold:{},shrinkPolicy:{}},emits:["update:range","update:duration","update:focused","update:focused.array"],setup(j,{emit:O}){A(e=>({"2dcf19d9":o.value}));const t=j,m=O,g=R(),{width:w}=G(g),{timestamp:h,pause:x,resume:B}=J({controls:!0,interval:1e3,immediate:t.running}),{x:T}=Q(g,{behavior:"smooth"}),f=u(()=>new ne(te(Array.isArray(t.events)?t.events:[...t.events.values()],["range.start"],["asc"]).map(e=>{var n;return[e.range.start.getTime(),{event:e,duration:Math.max((((n=e.range.end)==null?void 0:n.getTime())??(t.running?h.value:0))-e.range.start.getTime(),0)}]}))),y=u(()=>Number(t.start)||f.value.keys().next().value),E=u(()=>Number(t.end)||(t.running?h.value:Math.max(...[...f.value.values()].map(({event:e,duration:n})=>{var l;return((l=e.range.end)==null?void 0:l.getTime())??e.range.start.getTime()+n})))),d=u(()=>Number(E.value-y.value)||0),Z=u(()=>(e=>e.duration==="justify"?e.grow==="fill"&&Math.abs(Number(e.basis)-d.value)<=Number(e.growThreshold??0)?d.value:Number(e.basis):e.duration==="cover"?d.value:Number(e.duration)||0)(t)),o=u(()=>d.value/Z.value*w.value),s=u(()=>({startTime:y.value+T.value/o.value*d.value,endTime:y.value+(T.value+w.value)/o.value*d.value})),q=()=>{var e;(e=g.value)==null||e.scrollTo({left:o.value,behavior:"smooth"})},{onTrigger:b}=ee(()=>{m("update:range",{start:new Date(s.value.startTime),end:new Date(s.value.endTime)}),m("update:duration",new Date(Z.value));const e=f.value.filter(({event:n})=>!(Number(n.range.start??0)<=Number(s.value.startTime??0)&&Number(n.range.end??0)<=Number(s.value.startTime??0))&&!(Number(n.range.start??0)>=Number(s.value.endTime??0)&&Number(n.range.end??0)>=Number(s.value.endTime??0))).map(({event:n})=>[n.id,n]);m("update:focused",e),m("update:focused.array",e.toArray("values"))},t.eventSignalOptions??{flush:"post",debounce:100});return U(()=>{t.running?B():x()}),(e,n)=>(D(),P(Y,{class:r([e.$style["timeline-container"],e.$style.wrapper,e.$style.flex,e.$style.vertical]),"has-stroke":!1,purpose:"container",radius:"var(--agh-ref-border-radius-500)"},{default:V(()=>[a("header",{class:r([e.$style.wrapper,e.$style.flex,e.$style.horizontal])},[a("h1",null,c(t.title),1),a("div",{class:r([e.$style.wrapper,e.$style.flex,e.$style.horizontal])},[a("p",{class:r([e.$style.wrapper,e.$style.flex,e.$style.vertical])},[a("span",{textContent:c(i(p)(s.value,"{{ startTime | date : yyyy/MM/dd }}")),"data-label":"date"},null,8,re),a("span",{textContent:c(i(p)(s.value,"{{ startTime | date : HH:mm:ss }}")),"data-label":"time"},null,8,se)],2),k(i(W),{class:r(e.$style.icon),icon:"fa6-solid:arrows-left-right"},null,8,["class"]),a("p",{class:r([e.$style.wrapper,e.$style.flex,e.$style.vertical])},[a("span",{textContent:c(i(p)(s.value,"{{ endTime | date : yyyy/MM/dd }}")),"data-label":"date"},null,8,ie),a("span",{textContent:c(i(p)(s.value,"{{ endTime | date : HH:mm:ss }}")),"data-label":"time"},null,8,de)],2)],2),k(X,{onClick:n[0]||(n[0]=l=>q()),class:r(e.$style.button),disabled:i(T)+i(w)>=o.value,icon:"fa6-solid:forward-step",level:"secondary",variant:"square"},null,8,["class","disabled"])],2),a("div",{ref_key:"wrapperRef$",ref:g,onScroll:n[1]||(n[1]=(...l)=>i(b)&&i(b)(...l)),class:r([e.$style["timeline-wrapper"],e.$style.wrapper,e.$style.flex,e.$style.horizontal])},[a("div",{class:r([e.$style["timeline-axis"],e.$style.wrapper,e.$style.flex,e.$style.horizontal])},null,2),(D(!0),M(L,null,F(f.value,([l,{event:_,duration:z}],H)=>(D(),M("div",{key:`tick-${H}`,id:_.id,class:r(e.$style["timeline-tick"]),"data-label":`${i(p)(_.range,"{{ start | date : yyyy/MM/dd HH:mm:ss }} - {{ end | date : yyyy/MM/dd HH:mm:ss }}")}`,style:K({left:`${(l-y.value)/d.value*o.value}px`,width:`${z/d.value*o.value}px`})},null,14,oe))),128)),a("div",{class:r(e.$style.anchor)},null,2)],34)]),_:1},8,["class"]))}}),le="_wrapper_n8d35_1",ue="_flex_n8d35_12",ce="_horizontal_n8d35_48",pe="_wrap_n8d35_1",me="_vertical_n8d35_60",ge="_grid_n8d35_72",fe="_icon_n8d35_101",ye="_button_n8d35_122",ve="_anchor_n8d35_152",we={wrapper:le,flex:ue,"col-1":"_col-1_n8d35_12","col-2":"_col-2_n8d35_15","col-3":"_col-3_n8d35_18","col-4":"_col-4_n8d35_21","col-5":"_col-5_n8d35_24","col-6":"_col-6_n8d35_27","col-7":"_col-7_n8d35_30","col-8":"_col-8_n8d35_33","col-9":"_col-9_n8d35_36","col-10":"_col-10_n8d35_39","col-11":"_col-11_n8d35_42","col-12":"_col-12_n8d35_45",horizontal:ce,wrap:pe,vertical:me,grid:ge,"timeline-container":"_timeline-container_n8d35_78",icon:fe,button:ye,"timeline-wrapper":"_timeline-wrapper_n8d35_125",anchor:ve,"timeline-axis":"_timeline-axis_n8d35_155","timeline-tick":"_timeline-tick_n8d35_180"},Te={$style:we},De=ae(C,[["__cssModules",Te],["__scopeId","data-v-76e439bd"]]);C.__docgenInfo={exportName:"default",displayName:"Timeline",type:1,props:[{name:"follow",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"title",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Timeline"'},{name:"running",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"duration",global:!1,description:"",tags:[],required:!1,type:'number | Date | "cover" | "justify" | undefined',declarations:[],schema:{kind:"enum",type:'number | Date | "cover" | "justify" | undefined',schema:["undefined","number",{kind:"object",type:"Date"},'"cover"','"justify"']},default:"5 * 60 * 1000"},{name:"events",global:!1,description:"",tags:[],required:!0,type:"Map<string, Model> | Model[]",declarations:[],schema:{kind:"enum",type:"Map<string, Model> | Model[]",schema:["Map<string, Model>",{kind:"array",type:"Model[]"}]}},{name:"start",global:!1,description:"",tags:[],required:!1,type:"Date | undefined",declarations:[],schema:{kind:"enum",type:"Date | undefined",schema:["undefined",{kind:"object",type:"Date"}]}},{name:"end",global:!1,description:"",tags:[],required:!1,type:"Date | undefined",declarations:[],schema:{kind:"enum",type:"Date | undefined",schema:["undefined",{kind:"object",type:"Date"}]}},{name:"eventSignalOptions",global:!1,description:"",tags:[],required:!1,type:"EventSignalOptions | undefined",declarations:[],schema:{kind:"enum",type:"EventSignalOptions | undefined",schema:["undefined",{kind:"object",type:"EventSignalOptions"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:range",description:"",tags:[],type:"[range: Model]",signature:'(event: "update:range", range: Model): void',declarations:[],schema:[{kind:"object",type:"Model"}]},{name:"update:duration",description:"",tags:[],type:"[duration: Date]",signature:'(event: "update:duration", duration: Date): void',declarations:[],schema:[{kind:"object",type:"Date"}]},{name:"update:focused",description:"",tags:[],type:"[events: Map<string, Model>]",signature:'(event: "update:focused", events: Map<string, Model>): void',declarations:[],schema:["Map<string, Model>"]},{name:"update:focused.array",description:"",tags:[],type:"[events: Model[]]",signature:'(event: "update:focused.array", events: Model[]): void',declarations:[],schema:[{kind:"array",type:"Model[]"}]}],slots:[],exposed:[{name:"events",type:"Map<string, Model> | Model[]",description:"",declarations:[],schema:{kind:"enum",type:"Map<string, Model> | Model[]",schema:["Map<string, Model>",{kind:"array",type:"Model[]"}]}},{name:"follow",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"title",type:"string",description:"",declarations:[],schema:"string"},{name:"running",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"start",type:"Date | undefined",description:"",declarations:[],schema:{kind:"enum",type:"Date | undefined",schema:["undefined",{kind:"object",type:"Date"}]}},{name:"end",type:"Date | undefined",description:"",declarations:[],schema:{kind:"enum",type:"Date | undefined",schema:["undefined",{kind:"object",type:"Date"}]}},{name:"eventSignalOptions",type:"EventSignalOptions | undefined",description:"",declarations:[],schema:{kind:"enum",type:"EventSignalOptions | undefined",schema:["undefined",{kind:"object",type:"EventSignalOptions"}]}},{name:"duration",type:'number | Date | "cover" | "justify"',description:"",declarations:[],schema:{kind:"enum",type:'number | Date | "cover" | "justify"',schema:["number",{kind:"object",type:"Date"},'"cover"','"justify"']}}],sourceFiles:"/home/runner/work/UI/UI/src/components/layout/timeline/Timeline.vue"};const Ue={title:"Components / Layout / Timeline",component:De,tags:["autodocs"],argTypes:{events:{control:{type:"object"},description:"The events to display on the timeline"},follow:{control:{type:"boolean"},description:"Whether the timeline should follow the last event (Optional)"},running:{control:{type:"boolean"},description:"Whether the timeline is running (Optional)"},start:{control:{type:"date"},description:"The start of the timeline (Optional)"},end:{control:{type:"date"},description:"The end of the timeline (Optional)"},title:{control:{type:"text"},description:"The title of the timeline (Optional)"},"onUpdate:range":{action:"update:range",description:"Emitted when the range is updated"},"onUpdate:duration":{action:"update:duration",description:"Emitted when the duration is updated"},"onUpdate:focused":{action:"update:focused",description:"Emitted when the focused events are updated"},"onUpdate:focused.array":{action:"update:focused.array",description:"Emitted when the focused events are updated"}}},v={args:{style:{width:"900px",height:"216px"},start:new Date("2024-02-01T00:59:50Z"),end:new Date("2024-02-01T01:15:58Z"),events:[{id:"event-1",range:{start:new Date("2024-02-01T01:00:00Z"),end:new Date("2024-02-01T01:00:30Z")}},{id:"event-2",range:{start:new Date("2024-02-01T01:00:10Z"),end:new Date("2024-02-01T01:00:40Z")}},{id:"event-3",range:{start:new Date("2024-02-01T01:00:10Z"),end:new Date("2024-02-01T01:01:45Z")}},{id:"event-4",range:{start:new Date("2024-02-01T01:00:20Z"),end:new Date("2024-02-01T01:06:40Z")}},{id:"event-5",range:{start:new Date("2024-02-01T01:01:25Z"),end:new Date("2024-02-01T01:06:30Z")}},{id:"event-6",range:{start:new Date("2024-02-01T01:01:30Z"),end:new Date("2024-02-01T01:02:00Z")}},{id:"event-7",range:{start:new Date("2024-02-01T01:01:45Z"),end:new Date("2024-02-01T01:02:30Z")}},{id:"event-8",range:{start:new Date("2024-02-01T01:02:45Z"),end:new Date("2024-02-01T01:02:47Z")}},{id:"event-9",range:{start:new Date("2024-02-01T01:04:30Z"),end:new Date("2024-02-01T01:06:00Z")}},{id:"event-10",range:{start:new Date("2024-02-01T01:02:45Z"),end:new Date("2024-02-01T01:03:15Z")}},{id:"event-11",range:{start:new Date("2024-02-01T01:07:00Z"),end:new Date("2024-02-01T01:07:30Z")}},{id:"event-12",range:{start:new Date("2024-02-01T01:07:30Z"),end:new Date("2024-02-01T01:11:00Z")}},{id:"event-13",range:{start:new Date("2024-02-01T01:08:00Z"),end:new Date("2024-02-01T01:08:30Z")}},{id:"event-14",range:{start:new Date("2024-02-01T01:08:20Z"),end:new Date("2024-02-01T01:09:00Z")}},{id:"event-15",range:{start:new Date("2024-02-01T01:09:00Z"),end:new Date("2024-02-01T01:09:10Z")}},{id:"event-16",range:{start:new Date("2024-02-01T01:09:06Z"),end:new Date("2024-02-01T01:10:00Z")}},{id:"event-17",range:{start:new Date("2024-02-01T01:09:10Z"),end:new Date("2024-02-01T01:09:21Z")}},{id:"event-18",range:{start:new Date("2024-02-01T01:10:28Z"),end:new Date("2024-02-01T01:10:11Z")}},{id:"event-19",range:{start:new Date("2024-02-01T01:10:31Z"),end:new Date("2024-02-01T01:10:34Z")}},{id:"event-20",range:{start:new Date("2024-02-01T01:11:24Z")}},{id:"event-21",range:{start:new Date("2024-02-01T01:12:00Z"),end:new Date("2024-02-01T01:12:19Z")}},{id:"event-22",range:{start:new Date("2024-02-01T01:12:30Z"),end:new Date("2024-02-01T01:12:36Z")}},{id:"event-23",range:{start:new Date("2024-02-01T01:13:13Z")}},{id:"event-24",range:{start:new Date("2024-02-01T01:13:17Z")}},{id:"event-25",range:{start:new Date("2024-02-01T01:14:00Z"),end:new Date("2024-02-01T01:14:30Z")}},{id:"event-26",range:{start:new Date("2024-02-01T01:14:29Z"),end:new Date("2024-02-01T01:14:44Z")}},{id:"event-27",range:{start:new Date("2024-02-01T01:14:47Z"),end:new Date("2024-02-01T01:15:30Z")}},{id:"event-28",range:{start:new Date("2024-02-01T01:15:26Z")}}]}};var $,N,S;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    style: {
      width: '900px',
      height: '216px'
    },
    start: new Date('2024-02-01T00:59:50Z'),
    end: new Date('2024-02-01T01:15:58Z'),
    events: [{
      id: 'event-1',
      range: {
        start: new Date('2024-02-01T01:00:00Z'),
        end: new Date('2024-02-01T01:00:30Z')
      }
    }, {
      id: 'event-2',
      range: {
        start: new Date('2024-02-01T01:00:10Z'),
        end: new Date('2024-02-01T01:00:40Z')
      }
    }, {
      id: 'event-3',
      range: {
        start: new Date('2024-02-01T01:00:10Z'),
        end: new Date('2024-02-01T01:01:45Z')
      }
    }, {
      id: 'event-4',
      range: {
        start: new Date('2024-02-01T01:00:20Z'),
        end: new Date('2024-02-01T01:06:40Z')
      }
    }, {
      id: 'event-5',
      range: {
        start: new Date('2024-02-01T01:01:25Z'),
        end: new Date('2024-02-01T01:06:30Z')
      }
    }, {
      id: 'event-6',
      range: {
        start: new Date('2024-02-01T01:01:30Z'),
        end: new Date('2024-02-01T01:02:00Z')
      }
    }, {
      id: 'event-7',
      range: {
        start: new Date('2024-02-01T01:01:45Z'),
        end: new Date('2024-02-01T01:02:30Z')
      }
    }, {
      id: 'event-8',
      range: {
        start: new Date('2024-02-01T01:02:45Z'),
        end: new Date('2024-02-01T01:02:47Z')
      }
    }, {
      id: 'event-9',
      range: {
        start: new Date('2024-02-01T01:04:30Z'),
        end: new Date('2024-02-01T01:06:00Z')
      }
    }, {
      id: 'event-10',
      range: {
        start: new Date('2024-02-01T01:02:45Z'),
        end: new Date('2024-02-01T01:03:15Z')
      }
    }, {
      id: 'event-11',
      range: {
        start: new Date('2024-02-01T01:07:00Z'),
        end: new Date('2024-02-01T01:07:30Z')
      }
    }, {
      id: 'event-12',
      range: {
        start: new Date('2024-02-01T01:07:30Z'),
        end: new Date('2024-02-01T01:11:00Z')
      }
    }, {
      id: 'event-13',
      range: {
        start: new Date('2024-02-01T01:08:00Z'),
        end: new Date('2024-02-01T01:08:30Z')
      }
    }, {
      id: 'event-14',
      range: {
        start: new Date('2024-02-01T01:08:20Z'),
        end: new Date('2024-02-01T01:09:00Z')
      }
    }, {
      id: 'event-15',
      range: {
        start: new Date('2024-02-01T01:09:00Z'),
        end: new Date('2024-02-01T01:09:10Z')
      }
    }, {
      id: 'event-16',
      range: {
        start: new Date('2024-02-01T01:09:06Z'),
        end: new Date('2024-02-01T01:10:00Z')
      }
    }, {
      id: 'event-17',
      range: {
        start: new Date('2024-02-01T01:09:10Z'),
        end: new Date('2024-02-01T01:09:21Z')
      }
    }, {
      id: 'event-18',
      range: {
        start: new Date('2024-02-01T01:10:28Z'),
        end: new Date('2024-02-01T01:10:11Z')
      }
    }, {
      id: 'event-19',
      range: {
        start: new Date('2024-02-01T01:10:31Z'),
        end: new Date('2024-02-01T01:10:34Z')
      }
    }, {
      id: 'event-20',
      range: {
        start: new Date('2024-02-01T01:11:24Z')
      }
    }, {
      id: 'event-21',
      range: {
        start: new Date('2024-02-01T01:12:00Z'),
        end: new Date('2024-02-01T01:12:19Z')
      }
    }, {
      id: 'event-22',
      range: {
        start: new Date('2024-02-01T01:12:30Z'),
        end: new Date('2024-02-01T01:12:36Z')
      }
    }, {
      id: 'event-23',
      range: {
        start: new Date('2024-02-01T01:13:13Z')
      }
    }, {
      id: 'event-24',
      range: {
        start: new Date('2024-02-01T01:13:17Z')
      }
    }, {
      id: 'event-25',
      range: {
        start: new Date('2024-02-01T01:14:00Z'),
        end: new Date('2024-02-01T01:14:30Z')
      }
    }, {
      id: 'event-26',
      range: {
        start: new Date('2024-02-01T01:14:29Z'),
        end: new Date('2024-02-01T01:14:44Z')
      }
    }, {
      id: 'event-27',
      range: {
        start: new Date('2024-02-01T01:14:47Z'),
        end: new Date('2024-02-01T01:15:30Z')
      }
    }, {
      id: 'event-28',
      range: {
        start: new Date('2024-02-01T01:15:26Z')
      }
    }]
  }
}`,...(S=(N=v.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const Pe=["Default"];export{v as Default,Pe as __namedExportsOrder,Ue as default};
