import{d as G,a as n,g as z,w as B,b as x,n as s,h as P,o as r,i as l,F as _,r as C,t as O,e as U,j as A,k as m}from"./iframe-Dh87b88C.js";import{u as M}from"./index-B6fct2yO.js";import{u as F}from"./chart-wc7cFFm_.js";import{B as S}from"./BasePoly-CEKrO9Dn.js";import{C as V}from"./CardBox-B5tc7abl.js";import{M as c}from"./math-TzMrGeT-.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-y-fQss8R.js";import"./index-CK0PNDFJ.js";import"./signal-CRb94PYx.js";import"./parser-r5tsDhPm.js";import"./_mapToArray-B6QWFevT.js";import"./_getNative-B6kbqn7W.js";import"./map-LfImqO5-.js";import"./last-D-rYfuUG.js";import"./toNumber-Bryb-nJS.js";import"./fn-BnWh67Sm.js";import"./string-CdhieEss.js";import"./uuid-Cakt1EUJ.js";import"./validation-zVG9lBPq.js";import"./_flatRest-DscWrHRt.js";import"./_overRest-BTimdpjk.js";import"./fromPairs-Dx9PT-t0.js";import"./_baseExtremum-De7J3NxW.js";import"./BaseLink-XBjlIHNp.js";import"./event-DUjXcqW1.js";const E=["cx","cy","r","stroke-dasharray","stroke-dashoffset"],H=["x","y"],J={id:"chart-content-clip"},Q=["cx","cy","r"],W={"clip-path":"url(#chart-content-clip)"},X=["height","width","x","y"],R=G({__name:"DoughnutChart",props:{axises:{},datasets:{},options:{default:()=>({offset:{x:0,y:0},radius:0})}},setup(v){const u=v,L=m(()=>u.datasets),q=m(()=>u.axises),j=P(),{width:k,height:$}=M(j),{axises:D,datasets:w}=F({type:"doughnut",data:L,axises:q}),i=m(()=>c.clamp(c.min(k.value-u.options.offset.x,$.value-u.options.offset.y)/2,0,1/0)),h=m(()=>u.options.gap??(u.options.round?30:15)),d=m(()=>i.value*2*c.PI),y=m(()=>({x:k.value/2,y:$.value/2})),I=m(()=>w.value.map(e=>e.series.reduce((f,a)=>f+a.y.normalized,0))),T=m(()=>w.value.map((e,f)=>({...e,series:e.series.map(a=>({...a,y:{...a.y,normalized:c.clamp(a.y.normalized/(I.value[f]??1)-h.value/d.value,0,1)}})).filter(a=>a.y.normalized>h.value/d.value/2).map((a,t,g)=>({...a,y:{...a.y,normalized:a.y.normalized/g.reduce((p,o)=>p+o.y.normalized,0)}})).map((a,t,g)=>({...a,y:{...a.y,normalized:c.clamp(a.y.normalized/g.reduce((p,o)=>p+o.y.normalized,0)-h.value/d.value,0,1)}})).map((a,t,g)=>({...a,y:{...a.y,offset:g.slice(0,t).reduce((p,o)=>p+o.y.normalized,0)}})).map((a,t)=>({...a,x:{...a.x,label:c.cos(c.rad((a.y.offset+a.y.normalized/2+h.value/d.value*t)*360-90))},y:{...a.y,label:c.sin(c.rad((a.y.offset+a.y.normalized/2+h.value/d.value*t)*360-90))}}))})));return(e,f)=>(r(),n("div",{ref_key:"wrapperRef$",ref:j,class:s(e.$style["chart-container"])},[z(S,{height:x($),width:x(k)},{path:B(()=>[l("g",{class:s([e.$style["chart-group-plots"]])},[(r(!0),n(_,null,C(T.value,a=>(r(),n(_,{key:a.label},[(r(!0),n(_,null,C(a.series,(t,g)=>(r(),n("g",{key:`plot-${g}`,class:s(e.$style["chart-area"])},[l("circle",{class:s([e.$style.behavior,e.$style["chart-area"],e.$style.doughnut,e.$style.plot,e.$style.clickable,u.options.round&&e.$style.round]),cx:y.value.x,cy:y.value.y,r:i.value,"stroke-dasharray":`${t.y.normalized*d.value} ${(1-t.y.normalized)*d.value}`,"stroke-dashoffset":t.y.offset*d.value*-1-h.value*g+.25*d.value,"pointer-events":"visibleStroke"},null,10,E),(r(),n("foreignObject",{class:s([e.$style["chart-area"],e.$style["legend-container"]]),x:y.value.x+i.value*t.x.label-260*+(t.x.label<0),y:y.value.y+i.value*t.y.label-240*+(t.y.label<0),height:"240",width:"260"},[z(V,{class:s([e.$style["chart-area"],e.$style["legend-wrapper"]]),radius:"var(--agh-ref-border-radius-500)"},{default:B(()=>[u.options.title?(r(),n(_,{key:0},[l("h1",{class:s([e.$style["chart-area"],e.$style["legend-title"],e.$style.doughnut])},[l("span",null,O(t.x.value),1)],2),f[0]||(f[0]=l("hr",null,null,-1))],64)):U("",!0),(r(!0),n(_,null,C(x(D),(p,o)=>(r(),n(_,{key:o},[!/(x)/.test(o)&&p&&t[o]?(r(),n("div",{key:0,class:s([e.$style["chart-area"],e.$style["legend-group"],e.$style.doughnut])},[l("label",{class:s([e.$style["chart-area"],e.$style["legend-label"]])},O(p.label),3),l("p",{class:s([e.$style["chart-area"],e.$style["legend-value"]])},O(t[o].value),3)],2)):U("",!0)],64))),128))]),_:2},1032,["class"])],10,H))],2))),128))],64))),128))],2),l("clipPath",J,[l("circle",{cx:y.value.x,cy:y.value.y,r:i.value-10},null,8,Q)]),l("g",W,[(r(),n("foreignObject",{class:s(e.$style["chart-content-wrapper"]),height:i.value*2,width:i.value*2,x:y.value.x-i.value,y:y.value.y-i.value},[A(e.$slots,"default",{},void 0,!0)],10,X))])]),_:3},8,["height","width"])],2))}}),Y="_behavior_ag127_1",K="_clickable_ag127_1",ee="_disabled_ag127_4",ae="_draggable_ag127_7",te="_move_ag127_7",ne="_loading_ag127_10",se="_path_ag127_24",re="_radar_ag127_29",oe="_label_ag127_32",le="_plot_ag127_130",ie="_point_ag127_130",de="_doughnut_ag127_141",ce="_bg_ag127_150",ue="_round_ag127_154",ye="_line_ag127_167",ge={behavior:Y,clickable:K,disabled:ee,draggable:ae,move:te,loading:ne,"chart-container":"_chart-container_ag127_14","chart-axis":"_chart-axis_ag127_24",path:se,radar:re,label:oe,"font-align--center":"_font-align--center_ag127_45","font-align--right":"_font-align--right_ag127_48","font-align--left":"_font-align--left_ag127_51","box-align--center":"_box-align--center_ag127_54","box-align--left":"_box-align--left_ag127_57","box-align--right":"_box-align--right_ag127_60","chart-group-plots":"_chart-group-plots_ag127_67","chart-area":"_chart-area_ag127_67",plot:le,point:ie,doughnut:de,"legend-container":"_legend-container_ag127_141",bg:ce,round:ue,line:ye,"legend-wrapper":"_legend-wrapper_ag127_195","legend-group":"_legend-group_ag127_206","legend-value":"_legend-value_ag127_214","legend-label":"_legend-label_ag127_217","legend-title":"_legend-title_ag127_221"},pe={$style:ge},N=Z(R,[["__cssModules",pe],["__scopeId","data-v-076402e2"]]);R.__docgenInfo={exportName:"default",displayName:"DoughnutChart",type:1,props:[{name:"axises",global:!1,description:"",tags:[],required:!0,type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",global:!1,description:"",tags:[],required:!0,type:"ObjectLike | ObjectLike[]",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"options",global:!1,description:"",tags:[],required:!1,type:"Options | undefined",declarations:[],schema:{kind:"enum",type:"Options | undefined",schema:["undefined",{kind:"object",type:"Options"}]},default:`{
    offset: {
        x: 0,
        y: 0
    },
    radius: 0
}`},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"options",type:"Options",description:"",declarations:[],schema:{kind:"object",type:"Options"}},{name:"axises",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',description:"",declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",type:"ObjectLike | ObjectLike[]",description:"",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/chart/DoughnutChart.vue"};const Se={title:"Components / Chart / DoughnutChart",component:N,tags:["autodocs"]},me=v=>({components:{DoughnutChart:N},setup(){return{args:v}},template:`
  <DoughnutChart
    :datasets="args.datasets"
    :axises="args.axises"
    :options="args.options"
    style="width: 240px; height: 240px;"
  >
    <div style="display: flex; height: 100%; flex-direction: column; place-items: center; place-content: center;">
      <h1>140 GB</h1>
      <p>Left</p>
    </div>
  </DoughnutChart>
  `}),b={render:me,args:{datasets:[{name:"Nginx Techniques",storage:"72.1 GB",recentlyUsed:"2021-07-01T00:00:00.000Z"},{name:"IIS Techniques",storage:"48.0 GB",recentlyUsed:"2021-07-01T00:00:00.000Z"},{name:"FIN-2023",storage:"28.0 GB",recentlyUsed:"2021-07-01T00:00:00.000Z"},{name:"Others",storage:"63.9 GB",recentlyUsed:""},{name:"Free",storage:"98.0 GB",recentlyUsed:""}],axises:{x:{label:"Name",accessor:"{{ $.name }}",selector:"$.name",type:"string"},y:{label:"Value",accessor:"{{ $.storage }}",selector:"$.storage",type:"number",max:"auto"},z:{label:"Recently Used",accessor:"{{ $.recentlyUsed | date : yyyy/MM/dd }}",selector:"$.recentlyUsed",type:"date"}},options:{title:"{{ $.name }}",round:!0,offset:{x:20,y:20}}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    datasets: [{
      name: 'Nginx Techniques',
      storage: '72.1 GB',
      recentlyUsed: '2021-07-01T00:00:00.000Z'
    }, {
      name: 'IIS Techniques',
      storage: '48.0 GB',
      recentlyUsed: '2021-07-01T00:00:00.000Z'
    }, {
      name: 'FIN-2023',
      storage: '28.0 GB',
      recentlyUsed: '2021-07-01T00:00:00.000Z'
    }, {
      name: 'Others',
      storage: '63.9 GB',
      recentlyUsed: ''
    }, {
      name: 'Free',
      storage: '98.0 GB',
      recentlyUsed: ''
    }],
    axises: {
      x: {
        label: 'Name',
        accessor: '{{ $.name }}',
        selector: '$.name',
        type: 'string'
      },
      y: {
        label: 'Value',
        accessor: '{{ $.storage }}',
        selector: '$.storage',
        type: 'number',
        max: 'auto'
      },
      z: {
        label: 'Recently Used',
        accessor: '{{ $.recentlyUsed | date : yyyy/MM/dd }}',
        selector: '$.recentlyUsed',
        type: 'date'
      }
    },
    options: {
      title: '{{ $.name }}',
      round: true,
      offset: {
        x: 20,
        y: 20
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const Ve=["DefaultDoughnutChart"];export{b as DefaultDoughnutChart,Ve as __namedExportsOrder,Se as default};
