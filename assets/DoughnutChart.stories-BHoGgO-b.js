import{d as M,c as h,b as A,G as n,N as j,C as B,u as x,I as s,B as r,H as l,R as f,S as C,L as O,M as U,D as V,P as F,Q as Z}from"./vue.esm-bundler-ci6tbuJ3.js";import{u as E}from"./index-DWXNs7Ik.js";import{u as H}from"./chart-K1M-E2uk.js";import{B as Q}from"./BasePoly-B76thUAg.js";import{C as J}from"./CardBox-dEP2UIqz.js";import{M as c}from"./math-TzMrGeT-.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DNcykg7C.js";import"./index-Dual3jJw.js";import"./signal-OKbTO5k-.js";import"./parser-B_CS4nKE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_mapToArray-VNT0Ttt3.js";import"./_getNative-BogmDzHj.js";import"./map-DlRUZNXA.js";import"./last-D-rYfuUG.js";import"./toNumber-t3fhV6Fy.js";import"./string-CdhieEss.js";import"./validation-CyA4SfeB.js";import"./_flatRest-BAEVAHO-.js";import"./_overRest-zK1fGxME.js";import"./fromPairs-Dx9PT-t0.js";import"./_baseExtremum-Dz73-EKL.js";import"./BaseLink-Dp3waMOx.js";import"./event-TmdgNdWX.js";const X=g=>(F("data-v-f2c530a7"),g=g(),Z(),g),Y=["cx","cy","r","stroke-dasharray","stroke-dashoffset"],K=["x","y"],ee=X(()=>l("hr",null,null,-1)),ae={id:"chart-content-clip"},te=["cx","cy","r"],ne={"clip-path":"url(#chart-content-clip)"},se=["height","width","x","y"],L=M({__name:"DoughnutChart",props:{axises:{},datasets:{},options:{default:()=>({offset:{x:0,y:0},radius:0})}},setup(g){const u=g,q=h(()=>u.datasets),G=h(()=>u.axises),w=A(),{width:v,height:$}=E(w),{axises:T,datasets:z}=H({type:"doughnut",data:q,axises:G}),i=h(()=>c.clamp(c.min(v.value-u.options.offset.x,$.value-u.options.offset.y)/2,0,1/0)),_=h(()=>u.options.gap??(u.options.round?30:15)),d=h(()=>i.value*2*c.PI),m=h(()=>({x:v.value/2,y:$.value/2})),P=h(()=>z.value.map(e=>e.series.reduce((b,a)=>b+a.y.normalized,0))),S=h(()=>z.value.map((e,b)=>({...e,series:e.series.map(a=>({...a,y:{...a.y,normalized:c.clamp(a.y.normalized/P.value[b]-_.value/d.value,0,1)}})).filter(a=>a.y.normalized>_.value/d.value/2).map((a,t,p)=>({...a,y:{...a.y,normalized:a.y.normalized/p.reduce((y,o)=>y+o.y.normalized,0)}})).map((a,t,p)=>({...a,y:{...a.y,normalized:c.clamp(a.y.normalized/p.reduce((y,o)=>y+o.y.normalized,0)-_.value/d.value,0,1)}})).map((a,t,p)=>({...a,y:{...a.y,offset:p.slice(0,t).reduce((y,o)=>y+o.y.normalized,0)}})).map((a,t)=>({...a,x:{...a.x,label:c.cos(c.rad((a.y.offset+a.y.normalized/2+_.value/d.value*t)*360-90))},y:{...a.y,label:c.sin(c.rad((a.y.offset+a.y.normalized/2+_.value/d.value*t)*360-90))}}))})));return(e,b)=>(r(),n("div",{ref_key:"wrapperRef$",ref:w,class:s(e.$style["chart-container"])},[j(Q,{height:x($),width:x(v)},{path:B(()=>[l("g",{class:s([e.$style["chart-group-plots"]])},[(r(!0),n(f,null,C(S.value,a=>(r(),n(f,{key:a.label},[(r(!0),n(f,null,C(a.series,(t,p)=>(r(),n("g",{key:`plot-${p}`,class:s(e.$style["chart-area"])},[l("circle",{class:s([e.$style.behavior,e.$style["chart-area"],e.$style.doughnut,e.$style.plot,e.$style.clickable,{[e.$style.round]:u.options.round}]),cx:m.value.x,cy:m.value.y,r:i.value,"stroke-dasharray":`${t.y.normalized*d.value} ${(1-t.y.normalized)*d.value}`,"stroke-dashoffset":t.y.offset*d.value*-1-_.value*p+.25*d.value,"pointer-events":"visibleStroke"},null,10,Y),(r(),n("foreignObject",{class:s([e.$style["chart-area"],e.$style["legend-container"]]),x:m.value.x+i.value*t.x.label-260*+(t.x.label<0),y:m.value.y+i.value*t.y.label-240*+(t.y.label<0),height:"240",width:"260"},[j(J,{class:s([e.$style["chart-area"],e.$style["legend-wrapper"]]),radius:"var(--agh-ref-border-radius-500)"},{default:B(()=>[u.options.title?(r(),n(f,{key:0},[l("h1",{class:s([e.$style["chart-area"],e.$style["legend-title"],e.$style.doughnut])},[l("span",null,O(t.x.value),1)],2),ee],64)):U("",!0),(r(!0),n(f,null,C(x(T),(y,o)=>(r(),n(f,{key:o},[!/(x)/.test(o)&&y&&t[o]?(r(),n("div",{key:0,class:s([e.$style["chart-area"],e.$style["legend-group"],e.$style.doughnut])},[l("label",{class:s([e.$style["chart-area"],e.$style["legend-label"]])},O(y.label),3),l("p",{class:s([e.$style["chart-area"],e.$style["legend-value"]])},O(t[o].value),3)],2)):U("",!0)],64))),128))]),_:2},1032,["class"])],10,K))],2))),128))],64))),128))],2),l("clipPath",ae,[l("circle",{cx:m.value.x,cy:m.value.y,r:i.value-10},null,8,te)]),l("g",ne,[(r(),n("foreignObject",{class:s(e.$style["chart-content-wrapper"]),height:i.value*2,width:i.value*2,x:m.value.x-i.value,y:m.value.y-i.value},[V(e.$slots,"default",{},void 0,!0)],10,se))])]),_:3},8,["height","width"])],2))}}),re="_behavior_1kum8_1",oe="_clickable_1kum8_1",le="_disabled_1kum8_4",ie="_draggable_1kum8_7",de="_move_1kum8_7",ce="_loading_1kum8_10",ue="_path_1kum8_24",me="_radar_1kum8_29",pe="_label_1kum8_32",ye="_plot_1kum8_133",he="_point_1kum8_133",ge="_doughnut_1kum8_144",_e="_bg_1kum8_150",fe="_round_1kum8_154",be="_line_1kum8_167",ke={behavior:re,clickable:oe,disabled:le,draggable:ie,move:de,loading:ce,"chart-container":"_chart-container_1kum8_14","chart-axis":"_chart-axis_1kum8_24",path:ue,radar:me,label:pe,"font-align--center":"_font-align--center_1kum8_45","font-align--right":"_font-align--right_1kum8_48","font-align--left":"_font-align--left_1kum8_51","box-align--center":"_box-align--center_1kum8_54","box-align--left":"_box-align--left_1kum8_57","box-align--right":"_box-align--right_1kum8_60","chart-group-plots":"_chart-group-plots_1kum8_67","chart-area":"_chart-area_1kum8_67",plot:ye,point:he,doughnut:ge,"legend-container":"_legend-container_1kum8_144",bg:_e,round:fe,line:be,"legend-wrapper":"_legend-wrapper_1kum8_195","legend-group":"_legend-group_1kum8_206","legend-value":"_legend-value_1kum8_214","legend-label":"_legend-label_1kum8_217","legend-title":"_legend-title_1kum8_221"},ve={$style:ke},D=W(L,[["__cssModules",ve],["__scopeId","data-v-f2c530a7"]]);L.__docgenInfo={exportName:"default",displayName:"DoughnutChart",type:1,props:[{name:"options",global:!1,description:"",tags:[],required:!1,type:"Options | undefined",declarations:[],schema:{kind:"enum",type:"Options | undefined",schema:["undefined",{kind:"object",type:"Options"}]},default:`{
    offset: {
        x: 0,
        y: 0
    },
    radius: 0
}`},{name:"axises",global:!1,description:"",tags:[],required:!0,type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",global:!1,description:"",tags:[],required:!0,type:"ObjectLike | ObjectLike[]",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"axises",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',description:"",declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",type:"ObjectLike | ObjectLike[]",description:"",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"options",type:"Options",description:"",declarations:[],schema:{kind:"object",type:"Options"}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/chart/DoughnutChart.vue"};const Qe={title:"Components / Chart / DoughnutChart",component:D,tags:["autodocs"]},$e=g=>({components:{DoughnutChart:D},setup(){return{args:g}},template:`
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
  `}),k={render:$e,args:{datasets:[{name:"Nginx Techniques",storage:"72.1 GB",recentlyUsed:"2021-07-01T00:00:00.000Z"},{name:"IIS Techniques",storage:"48.0 GB",recentlyUsed:"2021-07-01T00:00:00.000Z"},{name:"FIN-2023",storage:"28.0 GB",recentlyUsed:"2021-07-01T00:00:00.000Z"},{name:"Others",storage:"63.9 GB",recentlyUsed:""},{name:"Free",storage:"98.0 GB",recentlyUsed:""}],axises:{x:{label:"Name",accessor:"{{ $.name }}",selector:"$.name",type:"string"},y:{label:"Value",accessor:"{{ $.storage }}",selector:"$.storage",type:"number",max:"auto"},z:{label:"Recently Used",accessor:"{{ $.recentlyUsed | date : yyyy/MM/dd }}",selector:"$.recentlyUsed",type:"date"}},options:{title:"{{ $.name }}",round:!0,offset:{x:20,y:20}}}};var R,I,N;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(I=k.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const Je=["DefaultDoughnutChart"];export{k as DefaultDoughnutChart,Je as __namedExportsOrder,Qe as default};
