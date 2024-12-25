import{d as A,m as i,b,o as P,G as t,R as f,S as h,I as n,B as s,H as v,L as z}from"./vue.esm-bundler-CtYRyXVz.js";import{a as I,b as N}from"./index-D7b_c8vd.js";import{u as W}from"./chart-BCRYkIoA.js";import{M as x}from"./math-TzMrGeT-.js";import{s as B}from"./signal-DkdeDLGz.js";import{d as D}from"./delay-MPIsVmob.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DuE56Lqv.js";import"./index-B-IWsJpC.js";import"./parser-CV0GE2Vw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_mapToArray-VNT0Ttt3.js";import"./_getNative-BogmDzHj.js";import"./map-DlRUZNXA.js";import"./last-D-rYfuUG.js";import"./toNumber-t3fhV6Fy.js";import"./string-CdhieEss.js";import"./validation-CyA4SfeB.js";import"./_flatRest-BAEVAHO-.js";import"./_overRest-zK1fGxME.js";import"./fromPairs-Dx9PT-t0.js";import"./_baseExtremum-Dz73-EKL.js";import"./_baseRest-B-fDb45u.js";const $=A({__name:"MatrixChart",props:{axises:{},datasets:{},options:{}},setup(j){const c=j,q=i(()=>c.datasets),R=i(()=>c.axises),{axises:L,datasets:M}=W({type:"matrix",data:q,axises:R}),u=i(()=>L.value.y.step),w=i(()=>M.value[0].series.map(e=>({...e,y:{...e.y,normalized:x.round(e.y.normalized*u.value)}}))),a=b(),d=b(),m=B(""),p=()=>{if(a.value&&a.value.firstElementChild){const{firstElementChild:e,clientWidth:y}=a.value,r=y,o=e==null?void 0:e.clientWidth;d.value=x.floor(r/o)}},_=()=>{a.value&&(m.set(N("--matrix-border-width",a,{observe:!0}).value),m()||D(_,1))};return I(a,p,{window}),P(()=>{_(),p()}),(e,y)=>(s(),t("div",{ref_key:"containerRef$",ref:a,class:n(e.$style["chart-container"])},[(s(!0),t(f,null,h(w.value,(r,o)=>(s(),t("div",{key:o,class:n([e.$style["matrix-container"],d.value&&o%d.value!==0&&e.$style["matrix-container-border"]])},[v("label",{class:n(e.$style.label)},z(r.x.value),3),v("div",{class:n(e.$style["box-container"])},[(s(!0),t(f,null,h(u.value,g=>(s(),t("div",{key:g,class:n([e.$style.square,g<=r.y.normalized?e.$style["square-cyan"]:e.$style["square-grayscale"]])},null,2))),128))],2)],2))),128))],2))}}),V="_behavior_18t2d_1",S="_clickable_18t2d_1",F="_disabled_18t2d_4",K="_draggable_18t2d_7",U="_move_18t2d_7",G="_loading_18t2d_10",H="_path_18t2d_24",T="_radar_18t2d_29",J="_label_18t2d_32",Q="_plot_18t2d_133",X="_point_18t2d_133",Y="_doughnut_18t2d_144",Z="_bg_18t2d_150",ee="_round_18t2d_154",ae="_line_18t2d_167",te="_square_18t2d_290",ne={behavior:V,clickable:S,disabled:F,draggable:K,move:U,loading:G,"chart-container":"_chart-container_18t2d_14","chart-axis":"_chart-axis_18t2d_24",path:H,radar:T,label:J,"font-align--center":"_font-align--center_18t2d_45","font-align--right":"_font-align--right_18t2d_48","font-align--left":"_font-align--left_18t2d_51","box-align--center":"_box-align--center_18t2d_54","box-align--left":"_box-align--left_18t2d_57","box-align--right":"_box-align--right_18t2d_60","chart-group-plots":"_chart-group-plots_18t2d_67","chart-area":"_chart-area_18t2d_67",plot:Q,point:X,doughnut:Y,"legend-container":"_legend-container_18t2d_144",bg:Z,round:ee,line:ae,"legend-wrapper":"_legend-wrapper_18t2d_195","legend-group":"_legend-group_18t2d_206","legend-value":"_legend-value_18t2d_214","legend-label":"_legend-label_18t2d_217","legend-title":"_legend-title_18t2d_221","matrix-container":"_matrix-container_18t2d_268","matrix-container-border":"_matrix-container-border_18t2d_276","box-container":"_box-container_18t2d_286",square:te,"square-cyan":"_square-cyan_18t2d_295","square-grayscale":"_square-grayscale_18t2d_298"},se={$style:ne},re=E($,[["__cssModules",se],["__scopeId","data-v-d24c269d"]]);$.__docgenInfo={exportName:"default",displayName:"MatrixChart",type:1,props:[{name:"options",global:!1,description:"",tags:[],required:!1,type:"Options | undefined",declarations:[],schema:{kind:"enum",type:"Options | undefined",schema:["undefined",{kind:"object",type:"Options"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"axises",global:!1,description:"",tags:[],required:!0,type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",global:!1,description:"",tags:[],required:!0,type:"ObjectLike | ObjectLike[]",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}}],events:[],slots:[],exposed:[{name:"options",type:"Options | undefined",description:"",declarations:[],schema:{kind:"enum",type:"Options | undefined",schema:["undefined",{kind:"object",type:"Options"}]}},{name:"axises",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',description:"",declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",type:"ObjectLike | ObjectLike[]",description:"",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/chart/MatrixChart.vue"};const Le={title:"Components / Chart / MatrixChart",component:re,tags:["autodocs"]},l={args:{datasets:[{label:"project-analysis",series:[{name:"Reconnaissance",value:20},{name:"Weaponization",value:55},{name:"Delivery",value:78},{name:"Exploitation",value:34},{name:"Installation",value:69},{name:"Command & Control",value:53},{name:"Actions on Objectives",value:99}]}],axises:{x:{label:"Name",accessor:"{{ $.name }}",selector:"$.name",type:"string"},y:{label:"Percentage",accessor:"{{ $.value | number }}%",selector:"$.value",type:"number",step:5,max:100,min:0}}}};var k,C,O;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(O=(C=l.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const Me=["DefaultMatrixChart"];export{l as DefaultMatrixChart,Me as __namedExportsOrder,Le as default};
