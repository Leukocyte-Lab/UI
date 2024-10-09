import{d as G,E as c,F as r,B as u,b as Q,S as A,m as D,o as X,L as x,C as O,u as n,G as t,P as y,Q as v,J as b,K as w,N as Y,O as ee}from"./vue.esm-bundler-BpHB5au2.js";import{u as ne,b as ae}from"./index-fh8yLtER.js";import{u as te}from"./chart-COSkYKLK.js";import{B as se}from"./BasePoly-DSEL_Kpu.js";import{C as le}from"./CardBox-Bopnxjri.js";import{M as a}from"./math-TzMrGeT-.js";import{s as re}from"./signal-CL8hpUQH.js";import{d as oe}from"./delay-MPIsVmob.js";import{o as E}from"./index-LawT-h5P.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-D6g0Az8a.js";import"./parser-BWHUHmdy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_mapToArray-VNT0Ttt3.js";import"./_getNative-BogmDzHj.js";import"./map-DlRUZNXA.js";import"./last-D-rYfuUG.js";import"./toNumber-t3fhV6Fy.js";import"./string-CdhieEss.js";import"./validation-CyA4SfeB.js";import"./_flatRest-BAEVAHO-.js";import"./_overRest-zK1fGxME.js";import"./fromPairs-Dx9PT-t0.js";import"./_baseExtremum-Dz73-EKL.js";import"./BaseLink-DLJPWV9V.js";import"./event-BHIgcvip.js";import"./_baseRest-B-fDb45u.js";const ce=["id"],ue=["stdDeviation"],de=r("feColorMatrix",{in:"blur",mode:"matrix",result:"mask",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"},null,-1),me=r("feComposite",{in:"SourceGraphic",in2:"mask",operator:"in"},null,-1),I=G({__name:"RoundEffect",props:{id:{},radius:{}},setup(p){const d=p;return(f,$)=>(u(),c("filter",{id:d.id},[r("feGaussianBlur",{stdDeviation:d.radius,in:"SourceGraphic",result:"blur"},null,8,ue),de,me],8,ce))}});I.__docgenInfo={exportName:"default",displayName:"RoundEffect",type:1,props:[{name:"radius",global:!1,description:"",tags:[],required:!0,type:"number",declarations:[],schema:"number"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"id",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"}],events:[],slots:[],exposed:[{name:"radius",type:"number",description:"",declarations:[],schema:"number"},{name:"id",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/UI/UI/src/components/effect/RoundEffect.vue"};const pe=p=>(Y("data-v-24d71238"),p=p(),ee(),p),he=["innerHTML"],ye={id:"chart-area-bg-mask"},ge=["d"],fe=["d"],ve=["d"],be=["height","width","x","y"],$e=["d"],_e=["cx","cy"],xe=["cx","cy"],qe=["x","y"],ke=pe(()=>r("hr",null,null,-1)),U=G({__name:"RadarChart",props:{axises:{},datasets:{},options:{default:()=>({offset:{x:0,y:0},radius:0})}},setup(p){const d=p,f=Q(),{width:$,height:C}=ne(f),{axises:h,datasets:R}=te({type:"radar",data:A(d).datasets,axises:A(d).axises}),s=E(()=>a.clamp(a.min($.value-d.options.offset.x,C.value-d.options.offset.y)/2,0,1/0)),o=E(()=>({x:$.value/2,y:C.value/2})),z=D(()=>{var e,m;return s.value>0&&((m=(e=h.value)==null?void 0:e.x)!=null&&m.metrics)?`
      ${h.value.x.metrics.map((l,i)=>`${i===0?"M":"L"} ${o.value.x+s.value*a.cos(a.rad(l.normalized*360-90))} ${o.value.y+s.value*a.sin(a.rad(l.normalized*360-90))}`).join(" ")} Z
      `:""}),Z=D(()=>z.value&&R.value?R.value.map(e=>({...e,path:`${e.series.map((m,l)=>`${l===0?"M":"L"} ${o.value.x+s.value*(.1+.8*m.y.normalized)*a.cos(a.rad(m.x.normalized*360-90))} ${o.value.y+s.value*(.1+.8*m.y.normalized)*a.sin(a.rad(m.x.normalized*360-90))}`).join(" ")} Z`})):[]),H=E(()=>s.value>0&&h.value.x.metrics?`M ${o.value.x} ${o.value.y}
      ${h.value.x.metrics.map(e=>`L ${o.value.x+s.value*a.cos(a.rad(e.normalized*360-90))} ${o.value.y+s.value*a.sin(a.rad(e.normalized*360-90))}
            M ${o.value.x} ${o.value.y}`).join(`
`)}
      Z`:""),j=re(""),L=()=>{f.value&&(j.set(ae("--chart-bg-fill-svg",f,{observe:!0}).value),j()||oe(L,1))};return X(()=>{L()}),(e,m)=>(u(),c("div",{ref_key:"wrapperRef$",ref:f,class:t(e.$style["chart-container"])},[x(se,{height:n(C),width:n($)},{defs:O(()=>[x(I,{id:"chart-area-bg-round",radius:6}),x(I,{id:"chart-area-plot-round",radius:3}),r("g",{innerHTML:n(j)()},null,8,he),r("mask",ye,[r("path",{class:t([e.$style["chart-area"],e.$style.radar,e.$style.bg,{[e.$style.round]:d.options.round}]),d:z.value,fill:"#fff"},null,10,ge)])]),path:O(()=>[r("path",{class:t([e.$style["chart-area"],e.$style.radar,e.$style.bg,{[e.$style.round]:d.options.round}]),d:z.value},null,10,fe),r("g",{id:"chart-group-axises",class:t([e.$style["chart-group-axises"]]),mask:"url(#chart-area-bg-mask)"},[r("path",{class:t([e.$style["chart-axis"],e.$style.radar,e.$style.path]),d:n(H)},null,10,ve)],2),n(h)?(u(),c("g",{key:0,class:t([e.$style["chart-group-axises-label"]])},[(u(!0),c(y,null,v(n(h).x.metrics,l=>(u(),c("foreignObject",{key:l.value,class:t([e.$style["chart-axis"],e.$style.radar,e.$style["label-wrapper"]]),height:n(s)/3,width:n(s),x:n(o).x+n(s)*n(a).cos(n(a).rad(l.normalized*360-90))-(l.normalized%.5===0?n(s)/2:l.normalized>.5?n(s):0),y:n(o).y+n(s)*1.1*n(a).sin(n(a).rad(l.normalized*360-90))-n(s)/6},[r("p",{class:t([[e.$style["chart-axis"],e.$style.radar,e.$style.label,l.normalized%.5===0?e.$style["font-align--center"]:l.normalized<.5?e.$style["font-align--left"]:e.$style["font-align--right"],l.normalized%.5===0?e.$style["box-align--center"]:l.normalized<.5?e.$style["box-align--left"]:e.$style["box-align--right"]],"font-bold"])},b(l.value),3)],10,be))),128))],2)):w("",!0),r("g",{class:t([e.$style["chart-group-plots"]])},[(u(!0),c(y,null,v(Z.value,l=>(u(),c("g",{key:l.label,class:t([e.$style["chart-area"],e.$style.radar,e.$style.plot])},[r("path",{class:t([{[e.$style.round]:d.options.round}]),d:l.path},null,10,$e)],2))),128))],2),(u(!0),c(y,null,v(n(R),l=>(u(),c("g",{key:l.label,class:t([e.$style["chart-area-label"]])},[(u(!0),c(y,null,v(l.series,(i,J)=>(u(),c("g",{key:`plot-${J}`,class:t(e.$style["chart-area"])},[r("circle",{class:t([e.$style.behavior,e.$style["chart-area"],e.$style.point,e.$style.plot,e.$style.clickable]),cx:n(o).x+n(s)*(.1+.8*i.y.normalized)*n(a).cos(n(a).rad(i.x.normalized*360-90)),cy:n(o).y+n(s)*(.1+.8*i.y.normalized)*n(a).sin(n(a).rad(i.x.normalized*360-90)),r:"10"},null,10,_e),r("circle",{class:t([e.$style["chart-area"],e.$style.radar,e.$style.point,e.$style.plot]),cx:n(o).x+n(s)*(.1+.8*i.y.normalized)*n(a).cos(n(a).rad(i.x.normalized*360-90)),cy:n(o).y+n(s)*(.1+.8*i.y.normalized)*n(a).sin(n(a).rad(i.x.normalized*360-90)),r:"5"},null,10,xe),(u(),c("foreignObject",{class:t([e.$style["chart-area"],e.$style["legend-container"]]),x:n(o).x+n(s)*(.1+.8*i.y.normalized)*n(a).cos(n(a).rad(i.x.normalized*360-90))-130,y:n(o).y+n(s)*(.1+.8*i.y.normalized)*n(a).sin(n(a).rad(i.x.normalized*360-90)),height:"200",width:"260"},[x(le,{class:t([e.$style["chart-area"],e.$style["legend-wrapper"]]),radius:"var(--agh-ref-border-radius-500)"},{default:O(()=>[d.options.title?(u(),c(y,{key:0},[r("h1",{class:t([e.$style["chart-area"],e.$style["legend-title"],e.$style.radar])},[r("span",null,b(i.x.value),1),r("span",{class:t(e.$style["legend-value"])},b(i.y.value),3)],2),ke],64)):w("",!0),(u(!0),c(y,null,v(n(h),(P,_)=>(u(),c(y,{key:_},[!/(x|y)/.test(_)&&P&&i[_]?(u(),c("div",{key:0,class:t([e.$style["chart-area"],e.$style["legend-group"],e.$style.radar])},[r("p",{class:t([e.$style["chart-area"],e.$style["legend-value"]])},b(i[_].value),3),r("label",{class:t([e.$style["chart-area"],e.$style["legend-label"]])},b(P.label),3)],2)):w("",!0)],64))),128))]),_:2},1032,["class"])],10,qe))],2))),128))],2))),128))]),_:1},8,["height","width"])],2))}}),Ce="_behavior_1rlxc_1",Re="_clickable_1rlxc_1",ze="_disabled_1rlxc_4",je="_draggable_1rlxc_7",Oe="_move_1rlxc_7",we="_loading_1rlxc_10",Ee="_path_1rlxc_24",Ie="_radar_1rlxc_29",Le="_label_1rlxc_32",Pe="_plot_1rlxc_85",Ae="_point_1rlxc_85",De="_doughnut_1rlxc_96",Me="_bg_1rlxc_102",Ne="_round_1rlxc_106",Be="_line_1rlxc_119",Se={behavior:Ce,clickable:Re,disabled:ze,draggable:je,move:Oe,loading:we,"chart-container":"_chart-container_1rlxc_14","chart-axis":"_chart-axis_1rlxc_24",path:Ee,radar:Ie,label:Le,"font-align--center":"_font-align--center_1rlxc_45","font-align--right":"_font-align--right_1rlxc_48","font-align--left":"_font-align--left_1rlxc_51","box-align--center":"_box-align--center_1rlxc_54","box-align--left":"_box-align--left_1rlxc_57","box-align--right":"_box-align--right_1rlxc_60","chart-group-plots":"_chart-group-plots_1rlxc_67","chart-area":"_chart-area_1rlxc_67",plot:Pe,point:Ae,doughnut:De,"legend-container":"_legend-container_1rlxc_96",bg:Me,round:Ne,line:Be,"legend-wrapper":"_legend-wrapper_1rlxc_147","legend-group":"_legend-group_1rlxc_158","legend-value":"_legend-value_1rlxc_166","legend-label":"_legend-label_1rlxc_169","legend-title":"_legend-title_1rlxc_173"},Ve={$style:Se},We=ie(U,[["__cssModules",Ve],["__scopeId","data-v-24d71238"]]);U.__docgenInfo={exportName:"default",displayName:"RadarChart",type:1,props:[{name:"options",global:!1,description:"",tags:[],required:!1,type:"Options | undefined",declarations:[],schema:{kind:"enum",type:"Options | undefined",schema:["undefined",{kind:"object",type:"Options"}]},default:`{
    offset: {
        x: 0,
        y: 0
    },
    radius: 0
}`},{name:"axises",global:!1,description:"",tags:[],required:!0,type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",global:!1,description:"",tags:[],required:!0,type:"ObjectLike | ObjectLike[]",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"axises",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',description:"",declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",type:"ObjectLike | ObjectLike[]",description:"",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"options",type:"Options",description:"",declarations:[],schema:{kind:"object",type:"Options"}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/chart/RadarChart.vue"};const fn={title:"Components / Chart / RadarChart",component:We,tags:["autodocs"]},g={args:{style:{width:"320px",height:"320px"},datasets:[{label:"project-analysis",series:[{name:"Reconnaissance",techniques:3,total:10,value:30},{name:"Weaponization",techniques:8,total:12,value:96},{name:"Delivery",techniques:6,total:10,value:60},{name:"Exploitation",techniques:7,total:15,value:70},{name:"Installation",techniques:7,total:14,value:70},{name:"Command & Control",techniques:6,total:10,value:60},{name:"Actions on Objectives",techniques:5,total:10,value:50}]},{label:"project-analysis-overlay",series:[{name:"Reconnaissance",techniques:1,total:10,value:10},{name:"Weaponization",techniques:4,total:12,value:32},{name:"Delivery",techniques:5,total:10,value:50},{name:"Exploitation",techniques:6,total:15,value:60},{name:"Installation",techniques:7,total:14,value:70},{name:"Command & Control",techniques:4,total:10,value:40},{name:"Actions on Objectives",techniques:1,total:10,value:10}]}],axises:{x:{label:"Cyber Kill Chain",accessor:"{{ $.name }}",selector:"$.name",type:"string"},y:{label:"Count",accessor:"{{ $.value | number }}%",selector:"$.value",type:"number",max:"auto"},z:{label:"Techniques",accessor:"{{ $.techniques }}",selector:"$.techniques",type:"string"}},options:{title:"{{ $.name }}",round:!0,offset:{x:5,y:50}}}},q={args:{style:{width:"320px",height:"320px"},datasets:[{label:"project-analysis",series:[{name:"Reconnaissance",techniques:3,total:10,value:100},{name:"Weaponization",techniques:8,total:12,value:100},{name:"Delivery",techniques:6,total:10,value:100},{name:"Exploitation",techniques:7,total:15,value:100},{name:"Installation",techniques:7,total:14,value:100},{name:"Command & Control",techniques:6,total:10,value:100},{name:"Actions on Objectives",techniques:5,total:10,value:100}]},{label:"project-analysis-overlay",series:[{name:"Reconnaissance",techniques:1,total:10,value:0},{name:"Weaponization",techniques:4,total:12,value:0},{name:"Delivery",techniques:5,total:10,value:0},{name:"Exploitation",techniques:6,total:15,value:0},{name:"Installation",techniques:7,total:14,value:0},{name:"Command & Control",techniques:4,total:10,value:0},{name:"Actions on Objectives",techniques:1,total:10,value:0}]}],axises:{x:{label:"Cyber Kill Chain",accessor:"{{ $.name }}",selector:"$.name",type:"string"},y:{label:"Count",accessor:"{{ $.value | number }}%",selector:"$.value",type:"number",max:"auto"},z:{label:"Techniques",accessor:"{{ $.techniques }}",selector:"$.techniques",type:"string"}},options:{title:"{{ $.name }}",round:!0,offset:{x:5,y:50}}}},k={args:{style:{width:"320px",height:"320px"},datasets:[],axises:{...g.args.axises},options:{...g.args.options}}};var M,N,B;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(V=q.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var F,K,T;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(T=(K=k.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};const vn=["DefaultRadarChart","ExtremumRadarChart","EmptyRadarChart"];export{g as DefaultRadarChart,k as EmptyRadarChart,q as ExtremumRadarChart,vn as __namedExportsOrder,fn as default};
