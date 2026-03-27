import{d as H,u as I,k as d,V as q,o as Z,c as P,w as U,i as a,n as r,t as u,b as i,g as $,I as V,a as k,F as R,r as F,m as A,h as W}from"./iframe-B1_bDQ12.js";import{u as j,h as K,i as L}from"./index-D4ttusQD.js";import{B as G}from"./ButtonBox-DnJucXWZ.js";import{C as J}from"./CardBox-QPcLTBJ2.js";import{u as Q}from"./event-CJ_fmTsQ.js";import{M as X}from"./map-DlFn5-zT.js";import{p as m}from"./parser-BdfzjjZT.js";import{o as Y}from"./orderBy-DcCA0DDH.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_VEjRh1u.js";import"./BaseLink-Br1RARKK.js";import"./BasePoly-2O23lQLM.js";import"./signal-CVulTrWV.js";import"./_mapToArray-B6QWFevT.js";import"./_getNative-B6kbqn7W.js";import"./map-LfImqO5-.js";import"./last-D-rYfuUG.js";import"./toNumber-Bryb-nJS.js";const ne=["textContent"],te=["textContent"],ae=["textContent"],re=["textContent"],se=["id","data-label"],N=H({__name:"Timeline",props:{events:{},follow:{type:Boolean,default:!1},title:{default:"Timeline"},running:{type:Boolean,default:!1},start:{},end:{},eventSignalOptions:{},duration:{default:300*1e3},basis:{default:300*1e3},grow:{type:[Boolean,String]},growThreshold:{},growPolicy:{},shrink:{type:[Boolean,String]},shrinkThreshold:{},shrinkPolicy:{}},emits:["update:range","update:duration","update:focused","update:focused.array"],setup(C,{emit:x}){I(e=>({ec453610:l.value}));const t=C,p=x,c=W(),{width:D}=j(c),{timestamp:f,pause:B,resume:M}=K({controls:!0,interval:1e3,immediate:t.running}),{x:y}=L(c,{behavior:"smooth"}),w=d(()=>new X(Y(Array.isArray(t.events)?t.events:[...t.events.values()],["range.start"],["asc"]).map(e=>[e.range.start.getTime(),{event:e,duration:Math.max((e.range.end?.getTime()??(t.running?f.value:0))-e.range.start.getTime(),0)}]))),T=d(()=>Number(t.start)||w.value.keys().next().value||0),S=d(()=>Number(t.end)||(t.running?f.value:Math.max(...[...w.value.values()].map(({event:e,duration:n})=>e.range.end?.getTime()??e.range.start.getTime()+n)))),o=d(()=>Number(S.value-T.value)||0),h=d(()=>(e=>e.duration==="justify"?e.grow==="fill"&&Math.abs(Number(e.basis)-o.value)<=Number(e.growThreshold??0)?o.value:Number(e.basis):e.duration==="cover"?o.value:Number(e.duration)||0)(t)),l=d(()=>o.value/h.value*D.value),s=d(()=>({startTime:T.value+y.value/l.value*o.value,endTime:T.value+(y.value+D.value)/l.value*o.value})),z=()=>{c.value?.scrollTo({left:l.value,behavior:"smooth"})},{onTrigger:_}=Q(()=>{p("update:range",{start:new Date(s.value.startTime),end:new Date(s.value.endTime)}),p("update:duration",new Date(h.value));const e=w.value.filter(({event:n})=>!(Number(n.range.start??0)<=Number(s.value.startTime??0)&&Number(n.range.end??0)<=Number(s.value.startTime??0))&&!(Number(n.range.start??0)>=Number(s.value.endTime??0)&&Number(n.range.end??0)>=Number(s.value.endTime??0))).map(({event:n})=>[n.id,n]);p("update:focused",e),p("update:focused.array",e.toArray("values"))},t.eventSignalOptions??{flush:"post",debounce:100});return q(()=>{t.running?M():B()}),(e,n)=>(Z(),P(J,{class:r([e.$style["timeline-container"],e.$style.wrapper,e.$style.flex,e.$style.vertical]),"has-stroke":!1,purpose:"container",radius:"var(--agh-ref-border-radius-500)"},{default:U(()=>[a("header",{class:r([e.$style.wrapper,e.$style.flex,e.$style.horizontal])},[a("h1",null,u(t.title),1),a("div",{class:r([e.$style.wrapper,e.$style.flex,e.$style.horizontal])},[a("p",{class:r([e.$style.wrapper,e.$style.flex,e.$style.vertical])},[a("span",{textContent:u(i(m)(s.value,"{{ startTime | date : yyyy/MM/dd }}")),"data-label":"date"},null,8,ne),a("span",{textContent:u(i(m)(s.value,"{{ startTime | date : HH:mm:ss }}")),"data-label":"time"},null,8,te)],2),$(i(V),{class:r(e.$style.icon),icon:"fa6-solid:arrows-left-right"},null,8,["class"]),a("p",{class:r([e.$style.wrapper,e.$style.flex,e.$style.vertical])},[a("span",{textContent:u(i(m)(s.value,"{{ endTime | date : yyyy/MM/dd }}")),"data-label":"date"},null,8,ae),a("span",{textContent:u(i(m)(s.value,"{{ endTime | date : HH:mm:ss }}")),"data-label":"time"},null,8,re)],2)],2),$(G,{onClick:n[0]||(n[0]=v=>z()),class:r(e.$style.button),disabled:i(y)+i(D)>=l.value,icon:"fa6-solid:forward-step",level:"secondary",variant:"square"},null,8,["class","disabled"])],2),a("div",{ref_key:"wrapperRef$",ref:c,onScroll:n[1]||(n[1]=(...v)=>i(_)&&i(_)(...v)),class:r([e.$style["timeline-wrapper"],e.$style.wrapper,e.$style.flex,e.$style.horizontal])},[a("div",{class:r([e.$style["timeline-axis"],e.$style.wrapper,e.$style.flex,e.$style.horizontal])},null,2),(Z(!0),k(R,null,F(w.value,([v,{event:b,duration:E}],O)=>(Z(),k("div",{key:`tick-${O}`,id:b.id,class:r(e.$style["timeline-tick"]),"data-label":`${i(m)(b.range,"{{ start | date : yyyy/MM/dd HH:mm:ss }} - {{ end | date : yyyy/MM/dd HH:mm:ss }}")}`,style:A({left:`${(v-T.value)/o.value*l.value}px`,width:`${E/o.value*l.value}px`})},null,14,se))),128)),a("div",{class:r(e.$style.anchor)},null,2)],34)]),_:1},8,["class"]))}}),ie="_wrapper_u9m49_1",oe="_flex_u9m49_12",le="_horizontal_u9m49_48",de="_wrap_u9m49_1",ue="_vertical_u9m49_60",me="_grid_u9m49_72",pe="_icon_u9m49_101",ce="_button_u9m49_122",we="_anchor_u9m49_152",Te={wrapper:ie,flex:oe,"col-1":"_col-1_u9m49_12","col-2":"_col-2_u9m49_15","col-3":"_col-3_u9m49_18","col-4":"_col-4_u9m49_21","col-5":"_col-5_u9m49_24","col-6":"_col-6_u9m49_27","col-7":"_col-7_u9m49_30","col-8":"_col-8_u9m49_33","col-9":"_col-9_u9m49_36","col-10":"_col-10_u9m49_39","col-11":"_col-11_u9m49_42","col-12":"_col-12_u9m49_45",horizontal:le,wrap:de,vertical:ue,grid:me,"timeline-container":"_timeline-container_u9m49_78",icon:pe,button:ce,"timeline-wrapper":"_timeline-wrapper_u9m49_125",anchor:we,"timeline-axis":"_timeline-axis_u9m49_155","timeline-tick":"_timeline-tick_u9m49_180"},ve={$style:Te},ge=ee(N,[["__cssModules",ve],["__scopeId","data-v-d3072355"]]);N.__docgenInfo={exportName:"default",displayName:"Timeline",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/home/runner/work/UI/UI/src/components/layout/timeline/Timeline.vue"};const Ie={title:"Components / Layout / Timeline",component:ge,tags:["autodocs"],argTypes:{events:{control:{type:"object"},description:"The events to display on the timeline"},follow:{control:{type:"boolean"},description:"Whether the timeline should follow the last event (Optional)"},running:{control:{type:"boolean"},description:"Whether the timeline is running (Optional)"},start:{control:{type:"date"},description:"The start of the timeline (Optional)"},end:{control:{type:"date"},description:"The end of the timeline (Optional)"},title:{control:{type:"text"},description:"The title of the timeline (Optional)"},"onUpdate:range":{action:"update:range",description:"Emitted when the range is updated"},"onUpdate:duration":{action:"update:duration",description:"Emitted when the duration is updated"},"onUpdate:focused":{action:"update:focused",description:"Emitted when the focused events are updated"},"onUpdate:focused.array":{action:"update:focused.array",description:"Emitted when the focused events are updated"}}},g={args:{style:{width:"900px",height:"216px"},start:new Date("2024-02-01T00:59:50Z"),end:new Date("2024-02-01T01:15:58Z"),events:[{id:"event-1",range:{start:new Date("2024-02-01T01:00:00Z"),end:new Date("2024-02-01T01:00:30Z")}},{id:"event-2",range:{start:new Date("2024-02-01T01:00:10Z"),end:new Date("2024-02-01T01:00:40Z")}},{id:"event-3",range:{start:new Date("2024-02-01T01:00:10Z"),end:new Date("2024-02-01T01:01:45Z")}},{id:"event-4",range:{start:new Date("2024-02-01T01:00:20Z"),end:new Date("2024-02-01T01:06:40Z")}},{id:"event-5",range:{start:new Date("2024-02-01T01:01:25Z"),end:new Date("2024-02-01T01:06:30Z")}},{id:"event-6",range:{start:new Date("2024-02-01T01:01:30Z"),end:new Date("2024-02-01T01:02:00Z")}},{id:"event-7",range:{start:new Date("2024-02-01T01:01:45Z"),end:new Date("2024-02-01T01:02:30Z")}},{id:"event-8",range:{start:new Date("2024-02-01T01:02:45Z"),end:new Date("2024-02-01T01:02:47Z")}},{id:"event-9",range:{start:new Date("2024-02-01T01:04:30Z"),end:new Date("2024-02-01T01:06:00Z")}},{id:"event-10",range:{start:new Date("2024-02-01T01:02:45Z"),end:new Date("2024-02-01T01:03:15Z")}},{id:"event-11",range:{start:new Date("2024-02-01T01:07:00Z"),end:new Date("2024-02-01T01:07:30Z")}},{id:"event-12",range:{start:new Date("2024-02-01T01:07:30Z"),end:new Date("2024-02-01T01:11:00Z")}},{id:"event-13",range:{start:new Date("2024-02-01T01:08:00Z"),end:new Date("2024-02-01T01:08:30Z")}},{id:"event-14",range:{start:new Date("2024-02-01T01:08:20Z"),end:new Date("2024-02-01T01:09:00Z")}},{id:"event-15",range:{start:new Date("2024-02-01T01:09:00Z"),end:new Date("2024-02-01T01:09:10Z")}},{id:"event-16",range:{start:new Date("2024-02-01T01:09:06Z"),end:new Date("2024-02-01T01:10:00Z")}},{id:"event-17",range:{start:new Date("2024-02-01T01:09:10Z"),end:new Date("2024-02-01T01:09:21Z")}},{id:"event-18",range:{start:new Date("2024-02-01T01:10:28Z"),end:new Date("2024-02-01T01:10:11Z")}},{id:"event-19",range:{start:new Date("2024-02-01T01:10:31Z"),end:new Date("2024-02-01T01:10:34Z")}},{id:"event-20",range:{start:new Date("2024-02-01T01:11:24Z")}},{id:"event-21",range:{start:new Date("2024-02-01T01:12:00Z"),end:new Date("2024-02-01T01:12:19Z")}},{id:"event-22",range:{start:new Date("2024-02-01T01:12:30Z"),end:new Date("2024-02-01T01:12:36Z")}},{id:"event-23",range:{start:new Date("2024-02-01T01:13:13Z")}},{id:"event-24",range:{start:new Date("2024-02-01T01:13:17Z")}},{id:"event-25",range:{start:new Date("2024-02-01T01:14:00Z"),end:new Date("2024-02-01T01:14:30Z")}},{id:"event-26",range:{start:new Date("2024-02-01T01:14:29Z"),end:new Date("2024-02-01T01:14:44Z")}},{id:"event-27",range:{start:new Date("2024-02-01T01:14:47Z"),end:new Date("2024-02-01T01:15:30Z")}},{id:"event-28",range:{start:new Date("2024-02-01T01:15:26Z")}}]}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const qe=["Default"];export{g as Default,qe as __namedExportsOrder,Ie as default};
