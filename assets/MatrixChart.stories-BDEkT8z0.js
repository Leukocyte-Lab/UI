import{d as L,S as v,m as M,b as g,o as w,E as n,P as b,Q as f,G as t,B as s,F as h,J as A,u as P}from"./vue.esm-bundler-BpHB5au2.js";import{a as N,b as W}from"./index-fh8yLtER.js";import{u as E}from"./chart-Bswvmbot.js";import{M as j}from"./math-TzMrGeT-.js";import{s as I}from"./signal-01ERMYt_.js";import{d as B}from"./delay-MPIsVmob.js";import{o as D}from"./index-LawT-h5P.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BgEZgAxe.js";import"./parser-BWHUHmdy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_mapToArray-VNT0Ttt3.js";import"./_getNative-BogmDzHj.js";import"./map-DlRUZNXA.js";import"./last-D-rYfuUG.js";import"./toNumber-t3fhV6Fy.js";import"./string-CdhieEss.js";import"./validation-CyA4SfeB.js";import"./_flatRest-BAEVAHO-.js";import"./_overRest-zK1fGxME.js";import"./fromPairs-Dx9PT-t0.js";import"./_baseExtremum-Dz73-EKL.js";import"./_baseRest-B-fDb45u.js";const C=L({__name:"MatrixChart",props:{axises:{},datasets:{},options:{}},setup(O){const c=O,{axises:$,datasets:q}=E({type:"matrix",data:v(c).datasets,axises:v(c).axises}),d=D(()=>$.value.y.step),R=M(()=>q.value[0].series.map(e=>({...e,y:{...e.y,normalized:j.round(e.y.normalized*d.value)}}))),a=g(),l=g(),u=I(""),m=()=>{if(a.value&&a.value.firstElementChild){const{firstElementChild:e,clientWidth:y}=a.value,r=y,o=e==null?void 0:e.clientWidth;l.value=j.floor(r/o)}},p=()=>{a.value&&(u.set(W("--matrix-border-width",a,{observe:!0}).value),u()||B(p,1))};return N(a,m,{window}),w(()=>{p(),m()}),(e,y)=>(s(),n("div",{ref_key:"containerRef$",ref:a,class:t(e.$style["chart-container"])},[(s(!0),n(b,null,f(R.value,(r,o)=>(s(),n("div",{key:o,class:t([e.$style["matrix-container"],l.value&&o%l.value!==0&&e.$style["matrix-container-border"]])},[h("label",{class:t(e.$style.label)},A(r.x.value),3),h("div",{class:t(e.$style["box-container"])},[(s(!0),n(b,null,f(P(d),_=>(s(),n("div",{key:_,class:t([e.$style.square,_<=r.y.normalized?e.$style["square-cyan"]:e.$style["square-grayscale"]])},null,2))),128))],2)],2))),128))],2))}}),F="_behavior_zy7jv_1",S="_clickable_zy7jv_1",K="_disabled_zy7jv_4",U="_draggable_zy7jv_7",G="_move_zy7jv_7",J="_loading_zy7jv_10",Q="_path_zy7jv_24",T="_radar_zy7jv_29",H="_label_zy7jv_32",X="_plot_zy7jv_85",Y="_point_zy7jv_85",Z="_doughnut_zy7jv_96",ee="_bg_zy7jv_102",ae="_round_zy7jv_106",ne="_line_zy7jv_119",te="_square_zy7jv_242",se={behavior:F,clickable:S,disabled:K,draggable:U,move:G,loading:J,"chart-container":"_chart-container_zy7jv_14","chart-axis":"_chart-axis_zy7jv_24",path:Q,radar:T,label:H,"font-align--center":"_font-align--center_zy7jv_45","font-align--right":"_font-align--right_zy7jv_48","font-align--left":"_font-align--left_zy7jv_51","box-align--center":"_box-align--center_zy7jv_54","box-align--left":"_box-align--left_zy7jv_57","box-align--right":"_box-align--right_zy7jv_60","chart-group-plots":"_chart-group-plots_zy7jv_67","chart-area":"_chart-area_zy7jv_67",plot:X,point:Y,doughnut:Z,"legend-container":"_legend-container_zy7jv_96",bg:ee,round:ae,line:ne,"legend-wrapper":"_legend-wrapper_zy7jv_147","legend-group":"_legend-group_zy7jv_158","legend-value":"_legend-value_zy7jv_166","legend-label":"_legend-label_zy7jv_169","legend-title":"_legend-title_zy7jv_173","matrix-container":"_matrix-container_zy7jv_220","matrix-container-border":"_matrix-container-border_zy7jv_228","box-container":"_box-container_zy7jv_238",square:te,"square-cyan":"_square-cyan_zy7jv_247","square-grayscale":"_square-grayscale_zy7jv_250"},re={$style:se},oe=V(C,[["__cssModules",re],["__scopeId","data-v-6d19f029"]]);C.__docgenInfo={exportName:"default",displayName:"MatrixChart",type:1,props:[{name:"axises",global:!1,description:"",tags:[],required:!0,type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",global:!1,description:"",tags:[],required:!0,type:"ObjectLike | ObjectLike[]",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"options",global:!1,description:"",tags:[],required:!1,type:"Options | undefined",declarations:[],schema:{kind:"enum",type:"Options | undefined",schema:["undefined",{kind:"object",type:"Options"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"axises",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',description:"",declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",type:"ObjectLike | ObjectLike[]",description:"",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"options",type:"Options | undefined",description:"",declarations:[],schema:{kind:"enum",type:"Options | undefined",schema:["undefined",{kind:"object",type:"Options"}]}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/chart/MatrixChart.vue"};const Le={title:"Components / Chart / MatrixChart",component:oe,tags:["autodocs"]},i={args:{datasets:[{label:"project-analysis",series:[{name:"Reconnaissance",value:20},{name:"Weaponization",value:55},{name:"Delivery",value:78},{name:"Exploitation",value:34},{name:"Installation",value:69},{name:"Command & Control",value:53},{name:"Actions on Objectives",value:99}]}],axises:{x:{label:"Name",accessor:"{{ $.name }}",selector:"$.name",type:"string"},y:{label:"Percentage",accessor:"{{ $.value | number }}%",selector:"$.value",type:"number",step:5,max:100,min:0}}}};var x,z,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    datasets: [{
      label: 'project-analysis',
      series: [{
        name: 'Reconnaissance',
        value: 20
      }, {
        name: 'Weaponization',
        value: 55
      }, {
        name: 'Delivery',
        value: 78
      }, {
        name: 'Exploitation',
        value: 34
      }, {
        name: 'Installation',
        value: 69
      }, {
        name: 'Command & Control',
        value: 53
      }, {
        name: 'Actions on Objectives',
        value: 99
      }]
    }],
    axises: {
      x: {
        label: 'Name',
        accessor: '{{ $.name }}',
        selector: '$.name',
        type: 'string'
      },
      y: {
        label: 'Percentage',
        accessor: '{{ $.value | number }}%',
        selector: '$.value',
        type: 'number',
        step: 5,
        max: 100,
        min: 0
      }
    }
  }
}`,...(k=(z=i.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const Me=["DefaultMatrixChart"];export{i as DefaultMatrixChart,Me as __namedExportsOrder,Le as default};
