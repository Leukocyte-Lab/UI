import{d as U,G as u,H as o,B as c,b as J,U as A,m as D,o as X,N as k,C as w,u as n,I as t,R as y,S as v,L as b,M as O,P as Y,Q as ee}from"./vue.esm-bundler-C7it3AYA.js";import{u as ne,b as ae}from"./index-BbYK7p8-.js";import{u as te}from"./chart-BvMgYRkJ.js";import{B as se}from"./BasePoly-DP8d-7c8.js";import{C as le}from"./CardBox-Cw-EepDr.js";import{M as a}from"./math-TzMrGeT-.js";import{s as oe}from"./signal-CaxfPQ3d.js";import{d as ie}from"./delay-MPIsVmob.js";import{o as I}from"./index-CxnU7RZ7.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DbW2PGEo.js";import"./parser-FlZzcoVC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_mapToArray-VNT0Ttt3.js";import"./_getNative-BogmDzHj.js";import"./map-DlRUZNXA.js";import"./last-D-rYfuUG.js";import"./toNumber-t3fhV6Fy.js";import"./string-CdhieEss.js";import"./validation-CyA4SfeB.js";import"./_flatRest-BAEVAHO-.js";import"./_overRest-zK1fGxME.js";import"./fromPairs-Dx9PT-t0.js";import"./_baseExtremum-Dz73-EKL.js";import"./BaseLink-CiYBeBkj.js";import"./event-C6RSQqJn.js";import"./_baseRest-B-fDb45u.js";const ue=["id"],ce=["stdDeviation"],de=o("feColorMatrix",{in:"blur",mode:"matrix",result:"mask",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"},null,-1),me=o("feComposite",{in:"SourceGraphic",in2:"mask",operator:"in"},null,-1),E=U({__name:"RoundEffect",props:{id:{},radius:{}},setup(p){const d=p;return(f,$)=>(c(),u("filter",{id:d.id},[o("feGaussianBlur",{stdDeviation:d.radius,in:"SourceGraphic",result:"blur"},null,8,ce),de,me],8,ue))}});E.__docgenInfo={exportName:"default",displayName:"RoundEffect",type:1,props:[{name:"id",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"radius",global:!1,description:"",tags:[],required:!0,type:"number",declarations:[],schema:"number"}],events:[],slots:[],exposed:[{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"radius",type:"number",description:"",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/UI/UI/src/components/effect/RoundEffect.vue"};const pe=p=>(Y("data-v-24d71238"),p=p(),ee(),p),he=["innerHTML"],ye={id:"chart-area-bg-mask"},ge=["d"],fe=["d"],ve=["d"],be=["height","width","x","y"],$e=["d"],_e=["cx","cy"],ke=["cx","cy"],qe=["x","y"],xe=pe(()=>o("hr",null,null,-1)),G=U({__name:"RadarChart",props:{axises:{},datasets:{},options:{default:()=>({offset:{x:0,y:0},radius:0})}},setup(p){const d=p,f=J(),{width:$,height:C}=ne(f),{axises:h,datasets:R}=te({type:"radar",data:A(d).datasets,axises:A(d).axises}),s=I(()=>a.clamp(a.min($.value-d.options.offset.x,C.value-d.options.offset.y)/2,0,1/0)),i=I(()=>({x:$.value/2,y:C.value/2})),z=D(()=>{var e,m;return s.value>0&&((m=(e=h.value)==null?void 0:e.x)!=null&&m.metrics)?`
      ${h.value.x.metrics.map((l,r)=>`${r===0?"M":"L"} ${i.value.x+s.value*a.cos(a.rad(l.normalized*360-90))} ${i.value.y+s.value*a.sin(a.rad(l.normalized*360-90))}`).join(" ")} Z
      `:""}),H=D(()=>z.value&&R.value?R.value.map(e=>({...e,path:`${e.series.map((m,l)=>`${l===0?"M":"L"} ${i.value.x+s.value*(.1+.8*m.y.normalized)*a.cos(a.rad(m.x.normalized*360-90))} ${i.value.y+s.value*(.1+.8*m.y.normalized)*a.sin(a.rad(m.x.normalized*360-90))}`).join(" ")} Z`})):[]),Z=I(()=>s.value>0&&h.value.x.metrics?`M ${i.value.x} ${i.value.y}
      ${h.value.x.metrics.map(e=>`L ${i.value.x+s.value*a.cos(a.rad(e.normalized*360-90))} ${i.value.y+s.value*a.sin(a.rad(e.normalized*360-90))}
            M ${i.value.x} ${i.value.y}`).join(`
`)}
      Z`:""),j=oe(""),L=()=>{f.value&&(j.set(ae("--chart-bg-fill-svg",f,{observe:!0}).value),j()||ie(L,1))};return X(()=>{L()}),(e,m)=>(c(),u("div",{ref_key:"wrapperRef$",ref:f,class:t(e.$style["chart-container"])},[k(se,{height:n(C),width:n($)},{defs:w(()=>[k(E,{id:"chart-area-bg-round",radius:6}),k(E,{id:"chart-area-plot-round",radius:3}),o("g",{innerHTML:n(j)()},null,8,he),o("mask",ye,[o("path",{class:t([e.$style["chart-area"],e.$style.radar,e.$style.bg,{[e.$style.round]:d.options.round}]),d:z.value,fill:"#fff"},null,10,ge)])]),path:w(()=>[o("path",{class:t([e.$style["chart-area"],e.$style.radar,e.$style.bg,{[e.$style.round]:d.options.round}]),d:z.value},null,10,fe),o("g",{id:"chart-group-axises",class:t([e.$style["chart-group-axises"]]),mask:"url(#chart-area-bg-mask)"},[o("path",{class:t([e.$style["chart-axis"],e.$style.radar,e.$style.path]),d:n(Z)},null,10,ve)],2),n(h)?(c(),u("g",{key:0,class:t([e.$style["chart-group-axises-label"]])},[(c(!0),u(y,null,v(n(h).x.metrics,l=>(c(),u("foreignObject",{key:l.value,class:t([e.$style["chart-axis"],e.$style.radar,e.$style["label-wrapper"]]),height:n(s)/3,width:n(s),x:n(i).x+n(s)*n(a).cos(n(a).rad(l.normalized*360-90))-(l.normalized%.5===0?n(s)/2:l.normalized>.5?n(s):0),y:n(i).y+n(s)*1.1*n(a).sin(n(a).rad(l.normalized*360-90))-n(s)/6},[o("p",{class:t([[e.$style["chart-axis"],e.$style.radar,e.$style.label,l.normalized%.5===0?e.$style["font-align--center"]:l.normalized<.5?e.$style["font-align--left"]:e.$style["font-align--right"],l.normalized%.5===0?e.$style["box-align--center"]:l.normalized<.5?e.$style["box-align--left"]:e.$style["box-align--right"]],"font-bold"])},b(l.value),3)],10,be))),128))],2)):O("",!0),o("g",{class:t([e.$style["chart-group-plots"]])},[(c(!0),u(y,null,v(H.value,l=>(c(),u("g",{key:l.label,class:t([e.$style["chart-area"],e.$style.radar,e.$style.plot])},[o("path",{class:t([{[e.$style.round]:d.options.round}]),d:l.path},null,10,$e)],2))),128))],2),(c(!0),u(y,null,v(n(R),l=>(c(),u("g",{key:l.label,class:t([e.$style["chart-area-label"]])},[(c(!0),u(y,null,v(l.series,(r,Q)=>(c(),u("g",{key:`plot-${Q}`,class:t(e.$style["chart-area"])},[o("circle",{class:t([e.$style.behavior,e.$style["chart-area"],e.$style.point,e.$style.plot,e.$style.clickable]),cx:n(i).x+n(s)*(.1+.8*r.y.normalized)*n(a).cos(n(a).rad(r.x.normalized*360-90)),cy:n(i).y+n(s)*(.1+.8*r.y.normalized)*n(a).sin(n(a).rad(r.x.normalized*360-90)),r:"10"},null,10,_e),o("circle",{class:t([e.$style["chart-area"],e.$style.radar,e.$style.point,e.$style.plot]),cx:n(i).x+n(s)*(.1+.8*r.y.normalized)*n(a).cos(n(a).rad(r.x.normalized*360-90)),cy:n(i).y+n(s)*(.1+.8*r.y.normalized)*n(a).sin(n(a).rad(r.x.normalized*360-90)),r:"5"},null,10,ke),(c(),u("foreignObject",{class:t([e.$style["chart-area"],e.$style["legend-container"]]),x:n(i).x+n(s)*(.1+.8*r.y.normalized)*n(a).cos(n(a).rad(r.x.normalized*360-90))-130,y:n(i).y+n(s)*(.1+.8*r.y.normalized)*n(a).sin(n(a).rad(r.x.normalized*360-90)),height:"200",width:"260"},[k(le,{class:t([e.$style["chart-area"],e.$style["legend-wrapper"]]),radius:"var(--agh-ref-border-radius-500)"},{default:w(()=>[d.options.title?(c(),u(y,{key:0},[o("h1",{class:t([e.$style["chart-area"],e.$style["legend-title"],e.$style.radar])},[o("span",null,b(r.x.value),1),o("span",{class:t(e.$style["legend-value"])},b(r.y.value),3)],2),xe],64)):O("",!0),(c(!0),u(y,null,v(n(h),(P,_)=>(c(),u(y,{key:_},[!/(x|y)/.test(_)&&P&&r[_]?(c(),u("div",{key:0,class:t([e.$style["chart-area"],e.$style["legend-group"],e.$style.radar])},[o("p",{class:t([e.$style["chart-area"],e.$style["legend-value"]])},b(r[_].value),3),o("label",{class:t([e.$style["chart-area"],e.$style["legend-label"]])},b(P.label),3)],2)):O("",!0)],64))),128))]),_:2},1032,["class"])],10,qe))],2))),128))],2))),128))]),_:1},8,["height","width"])],2))}}),Ce="_behavior_tk25i_1",Re="_clickable_tk25i_1",ze="_disabled_tk25i_4",je="_draggable_tk25i_7",we="_move_tk25i_7",Oe="_loading_tk25i_10",Ie="_path_tk25i_24",Ee="_radar_tk25i_29",Le="_label_tk25i_32",Pe="_plot_tk25i_133",Ae="_point_tk25i_133",De="_doughnut_tk25i_144",Me="_bg_tk25i_150",Ne="_round_tk25i_154",Be="_line_tk25i_167",Se={behavior:Ce,clickable:Re,disabled:ze,draggable:je,move:we,loading:Oe,"chart-container":"_chart-container_tk25i_14","chart-axis":"_chart-axis_tk25i_24",path:Ie,radar:Ee,label:Le,"font-align--center":"_font-align--center_tk25i_45","font-align--right":"_font-align--right_tk25i_48","font-align--left":"_font-align--left_tk25i_51","box-align--center":"_box-align--center_tk25i_54","box-align--left":"_box-align--left_tk25i_57","box-align--right":"_box-align--right_tk25i_60","chart-group-plots":"_chart-group-plots_tk25i_67","chart-area":"_chart-area_tk25i_67",plot:Pe,point:Ae,doughnut:De,"legend-container":"_legend-container_tk25i_144",bg:Me,round:Ne,line:Be,"legend-wrapper":"_legend-wrapper_tk25i_195","legend-group":"_legend-group_tk25i_206","legend-value":"_legend-value_tk25i_214","legend-label":"_legend-label_tk25i_217","legend-title":"_legend-title_tk25i_221"},Ve={$style:Se},We=re(G,[["__cssModules",Ve],["__scopeId","data-v-24d71238"]]);G.__docgenInfo={exportName:"default",displayName:"RadarChart",type:1,props:[{name:"options",global:!1,description:"",tags:[],required:!1,type:"Options | undefined",declarations:[],schema:{kind:"enum",type:"Options | undefined",schema:["undefined",{kind:"object",type:"Options"}]},default:`{
    offset: {
        x: 0,
        y: 0
    },
    radius: 0
}`},{name:"axises",global:!1,description:"",tags:[],required:!0,type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",global:!1,description:"",tags:[],required:!0,type:"ObjectLike | ObjectLike[]",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"axises",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',description:"",declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",type:"ObjectLike | ObjectLike[]",description:"",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"options",type:"Options",description:"",declarations:[],schema:{kind:"object",type:"Options"}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/chart/RadarChart.vue"};const fn={title:"Components / Chart / RadarChart",component:We,tags:["autodocs"]},g={args:{style:{width:"320px",height:"320px"},datasets:[{label:"project-analysis",series:[{name:"Reconnaissance",techniques:3,total:10,value:30},{name:"Weaponization",techniques:8,total:12,value:96},{name:"Delivery",techniques:6,total:10,value:60},{name:"Exploitation",techniques:7,total:15,value:70},{name:"Installation",techniques:7,total:14,value:70},{name:"Command & Control",techniques:6,total:10,value:60},{name:"Actions on Objectives",techniques:5,total:10,value:50}]},{label:"project-analysis-overlay",series:[{name:"Reconnaissance",techniques:1,total:10,value:10},{name:"Weaponization",techniques:4,total:12,value:32},{name:"Delivery",techniques:5,total:10,value:50},{name:"Exploitation",techniques:6,total:15,value:60},{name:"Installation",techniques:7,total:14,value:70},{name:"Command & Control",techniques:4,total:10,value:40},{name:"Actions on Objectives",techniques:1,total:10,value:10}]}],axises:{x:{label:"Cyber Kill Chain",accessor:"{{ $.name }}",selector:"$.name",type:"string"},y:{label:"Count",accessor:"{{ $.value | number }}%",selector:"$.value",type:"number",max:"auto"},z:{label:"Techniques",accessor:"{{ $.techniques }}",selector:"$.techniques",type:"string"}},options:{title:"{{ $.name }}",round:!0,offset:{x:5,y:50}}}},q={args:{style:{width:"320px",height:"320px"},datasets:[{label:"project-analysis",series:[{name:"Reconnaissance",techniques:3,total:10,value:100},{name:"Weaponization",techniques:8,total:12,value:100},{name:"Delivery",techniques:6,total:10,value:100},{name:"Exploitation",techniques:7,total:15,value:100},{name:"Installation",techniques:7,total:14,value:100},{name:"Command & Control",techniques:6,total:10,value:100},{name:"Actions on Objectives",techniques:5,total:10,value:100}]},{label:"project-analysis-overlay",series:[{name:"Reconnaissance",techniques:1,total:10,value:0},{name:"Weaponization",techniques:4,total:12,value:0},{name:"Delivery",techniques:5,total:10,value:0},{name:"Exploitation",techniques:6,total:15,value:0},{name:"Installation",techniques:7,total:14,value:0},{name:"Command & Control",techniques:4,total:10,value:0},{name:"Actions on Objectives",techniques:1,total:10,value:0}]}],axises:{x:{label:"Cyber Kill Chain",accessor:"{{ $.name }}",selector:"$.name",type:"string"},y:{label:"Count",accessor:"{{ $.value | number }}%",selector:"$.value",type:"number",max:"auto"},z:{label:"Techniques",accessor:"{{ $.techniques }}",selector:"$.techniques",type:"string"}},options:{title:"{{ $.name }}",round:!0,offset:{x:5,y:50}}}},x={args:{style:{width:"320px",height:"320px"},datasets:[],axises:{...g.args.axises},options:{...g.args.options}}};var M,N,B;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(N=g.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var S,V,W;q.parameters={...q.parameters,docs:{...(S=q.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(W=(V=q.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var T,F,K;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(K=(F=x.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const vn=["DefaultRadarChart","ExtremumRadarChart","EmptyRadarChart"];export{g as DefaultRadarChart,x as EmptyRadarChart,q as ExtremumRadarChart,vn as __namedExportsOrder,fn as default};
