import{d as L,l as M,a as n,F as b,r as f,n as t,k as o,h,o as i,i as v,t as w}from"./iframe-t-uyMozj.js";import{a as A,b as P}from"./index-TKYPCg_a.js";import{u as z}from"./chart-Bk6u0Rve.js";import{M as x}from"./math-TzMrGeT-.js";import{s as N}from"./signal-CF6Db2cL.js";import{d as W}from"./delay-CMP9Govb.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DakfKpT1.js";import"./index-DpM-AVLv.js";import"./parser-CaWTNdKr.js";import"./_mapToArray-B6QWFevT.js";import"./_getNative-B6kbqn7W.js";import"./map-LfImqO5-.js";import"./last-D-rYfuUG.js";import"./toNumber-Bryb-nJS.js";import"./fn-DS3SyXcv.js";import"./string-CdhieEss.js";import"./uuid-Cakt1EUJ.js";import"./validation-zVG9lBPq.js";import"./_flatRest-DscWrHRt.js";import"./_overRest-BTimdpjk.js";import"./fromPairs-Dx9PT-t0.js";import"./_baseExtremum-De7J3NxW.js";import"./_baseRest-DfEXCklN.js";const k=L({__name:"MatrixChart",props:{axises:{},datasets:{},options:{}},setup(C){const d=C,O=o(()=>d.datasets),$=o(()=>d.axises),{axises:j,datasets:q}=z({type:"matrix",data:O,axises:$}),m=o(()=>j.value.y.step),R=o(()=>q.value[0]?.series.map(e=>({...e,y:{...e.y,normalized:x.round(e.y.normalized*m.value)}}))),a=h(),c=h(),u=N(""),p=()=>{if(a.value&&a.value.firstElementChild){const{firstElementChild:e,clientWidth:y}=a.value,s=y,r=e?.clientWidth;c.value=x.floor(s/r)}},_=()=>{a.value&&(u.set(P("--matrix-border-width",a,{observe:!0}).value),u()||W(_,1))};return A(a,p,{window}),M(()=>{_(),p()}),(e,y)=>(i(),n("div",{ref_key:"containerRef$",ref:a,class:t(e.$style["chart-container"])},[(i(!0),n(b,null,f(R.value,(s,r)=>(i(),n("div",{key:r,class:t([e.$style["matrix-container"],c.value&&r%c.value!==0&&e.$style["matrix-container-border"]])},[v("label",{class:t(e.$style.label)},w(s.x.value),3),v("div",{class:t(e.$style["box-container"])},[(i(!0),n(b,null,f(m.value,g=>(i(),n("div",{key:g,class:t([e.$style.square,g<=s.y.normalized?e.$style["square-cyan"]:e.$style["square-grayscale"]])},null,2))),128))],2)],2))),128))],2))}}),I="_behavior_1i867_1",D="_clickable_1i867_1",B="_disabled_1i867_4",V="_draggable_1i867_7",F="_move_1i867_7",K="_loading_1i867_10",S="_path_1i867_24",U="_radar_1i867_29",T="_label_1i867_32",G="_plot_1i867_130",H="_point_1i867_130",J="_doughnut_1i867_141",Q="_bg_1i867_150",X="_round_1i867_154",Y="_line_1i867_167",Z="_square_1i867_290",ee={behavior:I,clickable:D,disabled:B,draggable:V,move:F,loading:K,"chart-container":"_chart-container_1i867_14","chart-axis":"_chart-axis_1i867_24",path:S,radar:U,label:T,"font-align--center":"_font-align--center_1i867_45","font-align--right":"_font-align--right_1i867_48","font-align--left":"_font-align--left_1i867_51","box-align--center":"_box-align--center_1i867_54","box-align--left":"_box-align--left_1i867_57","box-align--right":"_box-align--right_1i867_60","chart-group-plots":"_chart-group-plots_1i867_67","chart-area":"_chart-area_1i867_67",plot:G,point:H,doughnut:J,"legend-container":"_legend-container_1i867_141",bg:Q,round:X,line:Y,"legend-wrapper":"_legend-wrapper_1i867_195","legend-group":"_legend-group_1i867_206","legend-value":"_legend-value_1i867_214","legend-label":"_legend-label_1i867_217","legend-title":"_legend-title_1i867_221","matrix-container":"_matrix-container_1i867_268","matrix-container-border":"_matrix-container-border_1i867_276","box-container":"_box-container_1i867_286",square:Z,"square-cyan":"_square-cyan_1i867_295","square-grayscale":"_square-grayscale_1i867_298"},ae={$style:ee},ne=E(k,[["__cssModules",ae],["__scopeId","data-v-edb6b87f"]]);k.__docgenInfo={exportName:"default",displayName:"MatrixChart",type:1,props:[{name:"axises",global:!1,description:"",tags:[],required:!0,type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",global:!1,description:"",tags:[],required:!0,type:"ObjectLike | ObjectLike[]",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"options",global:!1,description:"",tags:[],required:!1,type:"Options | undefined",declarations:[],schema:{kind:"enum",type:"Options | undefined",schema:["undefined",{kind:"object",type:"Options"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"axises",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',description:"",declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",type:"ObjectLike | ObjectLike[]",description:"",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"options",type:"Options | undefined",description:"",declarations:[],schema:{kind:"enum",type:"Options | undefined",schema:["undefined",{kind:"object",type:"Options"}]}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/chart/MatrixChart.vue"};const Re={title:"Components / Chart / MatrixChart",component:ne,tags:["autodocs"]},l={args:{datasets:[{label:"project-analysis",series:[{name:"Reconnaissance",value:20},{name:"Weaponization",value:55},{name:"Delivery",value:78},{name:"Exploitation",value:34},{name:"Installation",value:69},{name:"Command & Control",value:53},{name:"Actions on Objectives",value:99}]}],axises:{x:{label:"Name",accessor:"{{ $.name }}",selector:"$.name",type:"string"},y:{label:"Percentage",accessor:"{{ $.value | number }}%",selector:"$.value",type:"number",step:5,max:100,min:0}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Le=["DefaultMatrixChart"];export{l as DefaultMatrixChart,Le as __namedExportsOrder,Re as default};
