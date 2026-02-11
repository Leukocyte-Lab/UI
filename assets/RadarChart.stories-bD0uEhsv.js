import{d as A,o as u,a as d,i as l,l as W,g as _,w,b as a,n as t,h as F,F as h,r as b,t as $,e as E,k as g}from"./iframe-B_9hadHL.js";import{u as T,b as K}from"./index-DGkR1NZ2.js";import{u as U}from"./chart-BDNwleq8.js";import{B as G}from"./BasePoly-Cki3UFAg.js";import{C as Z}from"./CardBox-iPNZ8rsa.js";import{M as n}from"./math-Bsm6xtTW.js";import{s as H}from"./signal-B1qdTiEE.js";import{d as J}from"./delay-CMP9Govb.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmdpjdoY.js";import"./index-D2MFdZNl.js";import"./parser-A8YtP_3F.js";import"./_mapToArray-B6QWFevT.js";import"./_getNative-B6kbqn7W.js";import"./map-LfImqO5-.js";import"./last-D-rYfuUG.js";import"./toNumber-Bryb-nJS.js";import"./fn-CdTXUCyp.js";import"./string-CdhieEss.js";import"./uuid-Cakt1EUJ.js";import"./validation-zVG9lBPq.js";import"./_flatRest-DscWrHRt.js";import"./_overRest-BTimdpjk.js";import"./fromPairs-Dx9PT-t0.js";import"./_baseExtremum-De7J3NxW.js";import"./BaseLink-vHa3zoU6.js";import"./event-B6KPXUtv.js";import"./_baseRest-DfEXCklN.js";const X=["id"],Y=["stdDeviation"],I=A({__name:"RoundEffect",props:{id:{},radius:{}},setup(C){const c=C;return(f,p)=>(u(),d("filter",{id:c.id},[l("feGaussianBlur",{stdDeviation:c.radius,in:"SourceGraphic",result:"blur"},null,8,Y),p[0]||(p[0]=l("feColorMatrix",{in:"blur",mode:"matrix",result:"mask",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"},null,-1)),p[1]||(p[1]=l("feComposite",{in:"SourceGraphic",in2:"mask",operator:"in"},null,-1))],8,X))}});I.__docgenInfo={exportName:"default",displayName:"RoundEffect",type:1,props:[{name:"id",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"radius",global:!1,description:"",tags:[],required:!0,type:"number",declarations:[],schema:"number"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"radius",type:"number",description:"",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/UI/UI/src/components/effect/RoundEffect.vue"};const ee=["innerHTML"],ne={id:"chart-area-bg-mask"},ae=["d"],te=["d"],se=["d"],le=["height","width","x","y"],oe=["d"],re=["cx","cy"],ie=["cx","cy"],ue=["x","y"],D=A({__name:"RadarChart",props:{axises:{},datasets:{},options:{default:()=>({offset:{x:0,y:0},radius:0})}},setup(C){const c=C,f=F(),{width:p,height:z}=T(f),M=g(()=>c.datasets),N=g(()=>c.axises),{axises:y,datasets:R}=U({type:"radar",data:M,axises:N}),s=g(()=>n.clamp(n.min(p.value-c.options.offset.x,z.value-c.options.offset.y)/2,0,1/0)),o=g(()=>({x:p.value/2,y:z.value/2})),j=g(()=>s.value>0&&y.value?.x?.metrics?`
      ${y.value.x.metrics.map((e,m)=>`${m===0?"M":"L"} ${o.value.x+s.value*n.cos(n.rad(e.normalized*360-90))} ${o.value.y+s.value*n.sin(n.rad(e.normalized*360-90))}`).join(" ")} Z
      `:""),B=g(()=>j.value&&R.value?R.value.map(e=>({...e,path:`${e.series.map((m,r)=>`${r===0?"M":"L"} ${o.value.x+s.value*(.1+.8*m.y.normalized)*n.cos(n.rad(m.x.normalized*360-90))} ${o.value.y+s.value*(.1+.8*m.y.normalized)*n.sin(n.rad(m.x.normalized*360-90))}`).join(" ")} Z`})):[]),S=g(()=>s.value>0&&y.value.x.metrics?`M ${o.value.x} ${o.value.y}
      ${y.value.x.metrics.map(e=>`L ${o.value.x+s.value*n.cos(n.rad(e.normalized*360-90))} ${o.value.y+s.value*n.sin(n.rad(e.normalized*360-90))}
            M ${o.value.x} ${o.value.y}`).join(`
`)}
      Z`:""),O=H(""),L=()=>{f.value&&(O.set(K("--chart-bg-fill-svg",f,{observe:!0}).value),O()||J(L,1))};return W(()=>{L()}),(e,m)=>(u(),d("div",{ref_key:"wrapperRef$",ref:f,class:t(e.$style["chart-container"])},[_(G,{height:a(z),width:a(p)},{defs:w(()=>[_(I,{id:"chart-area-bg-round",radius:6}),_(I,{id:"chart-area-plot-round",radius:3}),l("g",{innerHTML:a(O)()},null,8,ee),l("mask",ne,[l("path",{class:t([e.$style["chart-area"],e.$style.radar,e.$style.bg,c.options.round&&e.$style.round]),d:j.value,fill:"#fff"},null,10,ae)])]),path:w(()=>[l("path",{class:t([e.$style["chart-area"],e.$style.radar,e.$style.bg,c.options.round&&e.$style.round]),d:j.value},null,10,te),l("g",{id:"chart-group-axises",class:t([e.$style["chart-group-axises"]]),mask:"url(#chart-area-bg-mask)"},[l("path",{class:t([e.$style["chart-axis"],e.$style.radar,e.$style.path]),d:S.value},null,10,se)],2),a(y)?(u(),d("g",{key:0,class:t([e.$style["chart-group-axises-label"]])},[(u(!0),d(h,null,b(a(y).x.metrics,r=>(u(),d("foreignObject",{key:String(r.value),class:t([e.$style["chart-axis"],e.$style.radar,e.$style["label-wrapper"]]),height:s.value/3,width:s.value,x:o.value.x+s.value*a(n).cos(a(n).rad(r.normalized*360-90))-(r.normalized%.5===0?s.value/2:r.normalized>.5?s.value:0),y:o.value.y+s.value*1.1*a(n).sin(a(n).rad(r.normalized*360-90))-s.value/6},[l("p",{class:t([[e.$style["chart-axis"],e.$style.radar,e.$style.label,r.normalized%.5===0?e.$style["font-align--center"]:r.normalized<.5?e.$style["font-align--left"]:e.$style["font-align--right"],r.normalized%.5===0?e.$style["box-align--center"]:r.normalized<.5?e.$style["box-align--left"]:e.$style["box-align--right"]],"font-bold"])},$(r.value),3)],10,le))),128))],2)):E("",!0),l("g",{class:t([e.$style["chart-group-plots"]])},[(u(!0),d(h,null,b(B.value,r=>(u(),d("g",{key:r.label,class:t([e.$style["chart-area"],e.$style.radar,e.$style.plot])},[l("path",{class:t([c.options.round&&e.$style.round]),d:r.path},null,10,oe)],2))),128))],2),(u(!0),d(h,null,b(a(R),r=>(u(),d("g",{key:r.label,class:t([e.$style["chart-area-label"]])},[(u(!0),d(h,null,b(r.series,(i,V)=>(u(),d("g",{key:`plot-${V}`,class:t(e.$style["chart-area"])},[l("circle",{class:t([e.$style.behavior,e.$style["chart-area"],e.$style.point,e.$style.plot,e.$style.clickable]),cx:o.value.x+s.value*(.1+.8*i.y.normalized)*a(n).cos(a(n).rad(i.x.normalized*360-90)),cy:o.value.y+s.value*(.1+.8*i.y.normalized)*a(n).sin(a(n).rad(i.x.normalized*360-90)),r:"10"},null,10,re),l("circle",{class:t([e.$style["chart-area"],e.$style.radar,e.$style.point,e.$style.plot]),cx:o.value.x+s.value*(.1+.8*i.y.normalized)*a(n).cos(a(n).rad(i.x.normalized*360-90)),cy:o.value.y+s.value*(.1+.8*i.y.normalized)*a(n).sin(a(n).rad(i.x.normalized*360-90)),r:"5"},null,10,ie),(u(),d("foreignObject",{class:t([e.$style["chart-area"],e.$style["legend-container"]]),x:o.value.x+s.value*(.1+.8*i.y.normalized)*a(n).cos(a(n).rad(i.x.normalized*360-90))-130,y:o.value.y+s.value*(.1+.8*i.y.normalized)*a(n).sin(a(n).rad(i.x.normalized*360-90)),height:"200",width:"260"},[_(Z,{class:t([e.$style["chart-area"],e.$style["legend-wrapper"]]),radius:"var(--agh-ref-border-radius-500)"},{default:w(()=>[c.options.title?(u(),d(h,{key:0},[l("h1",{class:t([e.$style["chart-area"],e.$style["legend-title"],e.$style.radar])},[l("span",null,$(i.x.value),1),l("span",{class:t(e.$style["legend-value"])},$(i.y.value),3)],2),m[0]||(m[0]=l("hr",null,null,-1))],64)):E("",!0),(u(!0),d(h,null,b(a(y),(P,k)=>(u(),d(h,{key:k},[!/(x|y)/.test(k)&&P&&i[k]?(u(),d("div",{key:0,class:t([e.$style["chart-area"],e.$style["legend-group"],e.$style.radar])},[l("p",{class:t([e.$style["chart-area"],e.$style["legend-value"]])},$(i[k].value),3),l("label",{class:t([e.$style["chart-area"],e.$style["legend-label"]])},$(P.label),3)],2)):E("",!0)],64))),128))]),_:2},1032,["class"])],10,ue))],2))),128))],2))),128))]),_:1},8,["height","width"])],2))}}),de="_behavior_1ekpn_1",ce="_clickable_1ekpn_1",me="_disabled_1ekpn_4",pe="_draggable_1ekpn_7",ye="_move_1ekpn_7",he="_loading_1ekpn_10",ge="_path_1ekpn_24",ve="_radar_1ekpn_29",fe="_label_1ekpn_32",be="_plot_1ekpn_130",$e="_point_1ekpn_130",ke="_doughnut_1ekpn_141",_e="_bg_1ekpn_150",qe="_round_1ekpn_154",xe="_line_1ekpn_167",Ce={behavior:de,clickable:ce,disabled:me,draggable:pe,move:ye,loading:he,"chart-container":"_chart-container_1ekpn_14","chart-axis":"_chart-axis_1ekpn_24",path:ge,radar:ve,label:fe,"font-align--center":"_font-align--center_1ekpn_45","font-align--right":"_font-align--right_1ekpn_48","font-align--left":"_font-align--left_1ekpn_51","box-align--center":"_box-align--center_1ekpn_54","box-align--left":"_box-align--left_1ekpn_57","box-align--right":"_box-align--right_1ekpn_60","chart-group-plots":"_chart-group-plots_1ekpn_67","chart-area":"_chart-area_1ekpn_67",plot:be,point:$e,doughnut:ke,"legend-container":"_legend-container_1ekpn_141",bg:_e,round:qe,line:xe,"legend-wrapper":"_legend-wrapper_1ekpn_195","legend-group":"_legend-group_1ekpn_206","legend-value":"_legend-value_1ekpn_214","legend-label":"_legend-label_1ekpn_217","legend-title":"_legend-title_1ekpn_221"},ze={$style:Ce},Re=Q(D,[["__cssModules",ze],["__scopeId","data-v-403ac390"]]);D.__docgenInfo={exportName:"default",displayName:"RadarChart",type:1,props:[{name:"axises",global:!1,description:"",tags:[],required:!0,type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",global:!1,description:"",tags:[],required:!0,type:"ObjectLike | ObjectLike[]",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"options",global:!1,description:"",tags:[],required:!1,type:"Options | undefined",declarations:[],schema:{kind:"enum",type:"Options | undefined",schema:["undefined",{kind:"object",type:"Options"}]},default:`{
    offset: {
        x: 0,
        y: 0
    },
    radius: 0
}`},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"options",type:"Options",description:"",declarations:[],schema:{kind:"object",type:"Options"}},{name:"axises",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',description:"",declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",type:"ObjectLike | ObjectLike[]",description:"",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/chart/RadarChart.vue"};const tn={title:"Components / Chart / RadarChart",component:Re,tags:["autodocs"]},v={args:{style:{width:"320px",height:"320px"},datasets:[{label:"project-analysis",series:[{name:"Reconnaissance",techniques:3,total:10,value:30},{name:"Weaponization",techniques:8,total:12,value:96},{name:"Delivery",techniques:6,total:10,value:60},{name:"Exploitation",techniques:7,total:15,value:70},{name:"Installation",techniques:7,total:14,value:70},{name:"Command & Control",techniques:6,total:10,value:60},{name:"Actions on Objectives",techniques:5,total:10,value:50}]},{label:"project-analysis-overlay",series:[{name:"Reconnaissance",techniques:1,total:10,value:10},{name:"Weaponization",techniques:4,total:12,value:32},{name:"Delivery",techniques:5,total:10,value:50},{name:"Exploitation",techniques:6,total:15,value:60},{name:"Installation",techniques:7,total:14,value:70},{name:"Command & Control",techniques:4,total:10,value:40},{name:"Actions on Objectives",techniques:1,total:10,value:10}]}],axises:{x:{label:"Cyber Kill Chain",accessor:"{{ $.name }}",selector:"$.name",type:"string"},y:{label:"Count",accessor:"{{ $.value | number }}%",selector:"$.value",type:"number",max:"auto"},z:{label:"Techniques",accessor:"{{ $.techniques }}",selector:"$.techniques",type:"string"}},options:{title:"{{ $.name }}",round:!0,offset:{x:5,y:50}}}},q={args:{style:{width:"320px",height:"320px"},datasets:[{label:"project-analysis",series:[{name:"Reconnaissance",techniques:3,total:10,value:100},{name:"Weaponization",techniques:8,total:12,value:100},{name:"Delivery",techniques:6,total:10,value:100},{name:"Exploitation",techniques:7,total:15,value:100},{name:"Installation",techniques:7,total:14,value:100},{name:"Command & Control",techniques:6,total:10,value:100},{name:"Actions on Objectives",techniques:5,total:10,value:100}]},{label:"project-analysis-overlay",series:[{name:"Reconnaissance",techniques:1,total:10,value:0},{name:"Weaponization",techniques:4,total:12,value:0},{name:"Delivery",techniques:5,total:10,value:0},{name:"Exploitation",techniques:6,total:15,value:0},{name:"Installation",techniques:7,total:14,value:0},{name:"Command & Control",techniques:4,total:10,value:0},{name:"Actions on Objectives",techniques:1,total:10,value:0}]}],axises:{x:{label:"Cyber Kill Chain",accessor:"{{ $.name }}",selector:"$.name",type:"string"},y:{label:"Count",accessor:"{{ $.value | number }}%",selector:"$.value",type:"number",max:"auto"},z:{label:"Techniques",accessor:"{{ $.techniques }}",selector:"$.techniques",type:"string"}},options:{title:"{{ $.name }}",round:!0,offset:{x:5,y:50}}}},x={args:{style:{width:"320px",height:"320px"},datasets:[],axises:{...v.args.axises},options:{...v.args.options}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      width: '320px',
      height: '320px'
    },
    datasets: [{
      label: 'project-analysis',
      series: [{
        name: 'Reconnaissance',
        techniques: 3,
        total: 10,
        value: 30
      }, {
        name: 'Weaponization',
        techniques: 8,
        total: 12,
        value: 96
      }, {
        name: 'Delivery',
        techniques: 6,
        total: 10,
        value: 60
      }, {
        name: 'Exploitation',
        techniques: 7,
        total: 15,
        value: 70
      }, {
        name: 'Installation',
        techniques: 7,
        total: 14,
        value: 70
      }, {
        name: 'Command & Control',
        techniques: 6,
        total: 10,
        value: 60
      }, {
        name: 'Actions on Objectives',
        techniques: 5,
        total: 10,
        value: 50
      }]
    }, {
      label: 'project-analysis-overlay',
      series: [{
        name: 'Reconnaissance',
        techniques: 1,
        total: 10,
        value: 10
      }, {
        name: 'Weaponization',
        techniques: 4,
        total: 12,
        value: 32
      }, {
        name: 'Delivery',
        techniques: 5,
        total: 10,
        value: 50
      }, {
        name: 'Exploitation',
        techniques: 6,
        total: 15,
        value: 60
      }, {
        name: 'Installation',
        techniques: 7,
        total: 14,
        value: 70
      }, {
        name: 'Command & Control',
        techniques: 4,
        total: 10,
        value: 40
      }, {
        name: 'Actions on Objectives',
        techniques: 1,
        total: 10,
        value: 10
      }]
    }],
    axises: {
      x: {
        label: 'Cyber Kill Chain',
        accessor: '{{ $.name }}',
        selector: '$.name',
        type: 'string'
      },
      y: {
        label: 'Count',
        accessor: '{{ $.value | number }}%',
        selector: '$.value',
        type: 'number',
        max: 'auto'
      },
      z: {
        label: 'Techniques',
        accessor: '{{ $.techniques }}',
        selector: '$.techniques',
        type: 'string'
      }
    },
    options: {
      title: '{{ $.name }}',
      round: true,
      offset: {
        x: 5,
        y: 50
      }
    }
  }
}`,...v.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      width: '320px',
      height: '320px'
    },
    datasets: [{
      label: 'project-analysis',
      series: [{
        name: 'Reconnaissance',
        techniques: 3,
        total: 10,
        value: 100
      }, {
        name: 'Weaponization',
        techniques: 8,
        total: 12,
        value: 100
      }, {
        name: 'Delivery',
        techniques: 6,
        total: 10,
        value: 100
      }, {
        name: 'Exploitation',
        techniques: 7,
        total: 15,
        value: 100
      }, {
        name: 'Installation',
        techniques: 7,
        total: 14,
        value: 100
      }, {
        name: 'Command & Control',
        techniques: 6,
        total: 10,
        value: 100
      }, {
        name: 'Actions on Objectives',
        techniques: 5,
        total: 10,
        value: 100
      }]
    }, {
      label: 'project-analysis-overlay',
      series: [{
        name: 'Reconnaissance',
        techniques: 1,
        total: 10,
        value: 0
      }, {
        name: 'Weaponization',
        techniques: 4,
        total: 12,
        value: 0
      }, {
        name: 'Delivery',
        techniques: 5,
        total: 10,
        value: 0
      }, {
        name: 'Exploitation',
        techniques: 6,
        total: 15,
        value: 0
      }, {
        name: 'Installation',
        techniques: 7,
        total: 14,
        value: 0
      }, {
        name: 'Command & Control',
        techniques: 4,
        total: 10,
        value: 0
      }, {
        name: 'Actions on Objectives',
        techniques: 1,
        total: 10,
        value: 0
      }]
    }],
    axises: {
      x: {
        label: 'Cyber Kill Chain',
        accessor: '{{ $.name }}',
        selector: '$.name',
        type: 'string'
      },
      y: {
        label: 'Count',
        accessor: '{{ $.value | number }}%',
        selector: '$.value',
        type: 'number',
        max: 'auto'
      },
      z: {
        label: 'Techniques',
        accessor: '{{ $.techniques }}',
        selector: '$.techniques',
        type: 'string'
      }
    },
    options: {
      title: '{{ $.name }}',
      round: true,
      offset: {
        x: 5,
        y: 50
      }
    }
  }
}`,...q.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      width: '320px',
      height: '320px'
    },
    datasets: [],
    axises: {
      ...DefaultRadarChart.args!.axises!
    },
    options: {
      ...DefaultRadarChart.args!.options!
    }
  }
}`,...x.parameters?.docs?.source}}};const sn=["DefaultRadarChart","ExtremumRadarChart","EmptyRadarChart"];export{v as DefaultRadarChart,x as EmptyRadarChart,q as ExtremumRadarChart,sn as __namedExportsOrder,tn as default};
