import{d as P,b as S,E as s,L as z,C as B,u as t,G as r,B as o,F as i,P as _,Q as x,J as C,K as U,D as A,N as M,O as F}from"./vue.esm-bundler-BpHB5au2.js";import{u as V}from"./index-fh8yLtER.js";import{u as E}from"./chart-Bswvmbot.js";import{B as Z}from"./BasePoly-DSEL_Kpu.js";import{C as J}from"./CardBox-DRgt0Inl.js";import{M as u}from"./math-TzMrGeT-.js";import{o as b}from"./index-LawT-h5P.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BgEZgAxe.js";import"./signal-01ERMYt_.js";import"./parser-BWHUHmdy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_mapToArray-VNT0Ttt3.js";import"./_getNative-BogmDzHj.js";import"./map-DlRUZNXA.js";import"./last-D-rYfuUG.js";import"./toNumber-t3fhV6Fy.js";import"./string-CdhieEss.js";import"./validation-CyA4SfeB.js";import"./_flatRest-BAEVAHO-.js";import"./_overRest-zK1fGxME.js";import"./fromPairs-Dx9PT-t0.js";import"./_baseExtremum-Dz73-EKL.js";import"./BaseLink-DLJPWV9V.js";import"./event-Cpvc01We.js";const H=h=>(M("data-v-b7f877fb"),h=h(),F(),h),K=["cx","cy","r","stroke-dasharray","stroke-dashoffset"],W=["x","y"],X=H(()=>i("hr",null,null,-1)),Y={id:"chart-content-clip"},ee=["cx","cy","r"],ae={"clip-path":"url(#chart-content-clip)"},te=["height","width","x","y"],L=P({__name:"DoughnutChart",props:{axises:{},datasets:{},options:{default:()=>({offset:{x:0,y:0},radius:0})}},setup(h){const g=h,O=S(),{width:$,height:v}=V(O),{axises:q,datasets:w}=E({type:"doughnut",data:g.datasets,axises:g.axises}),d=b(()=>u.clamp(u.min($.value-g.options.offset.x,v.value-g.options.offset.y)/2,0,1/0)),f=b(()=>g.options.round?30:15),c=b(()=>d.value*2*u.PI),y=b(()=>({x:$.value/2,y:v.value/2})),G=b(()=>w.value.map(e=>e.series.reduce((k,a)=>k+a.y.normalized,0))),T=b(()=>w.value.map((e,k)=>({...e,series:e.series.map(a=>({...a,y:{...a.y,normalized:u.clamp(a.y.normalized/G.value[k]-f.value/c.value,0,1)}})).filter(a=>a.y.normalized>f.value/c.value/2).map((a,n,p)=>({...a,y:{...a.y,normalized:a.y.normalized/p.reduce((m,l)=>m+l.y.normalized,0)}})).map((a,n,p)=>({...a,y:{...a.y,normalized:u.clamp(a.y.normalized/p.reduce((m,l)=>m+l.y.normalized,0)-f.value/c.value,0,1)}})).map((a,n,p)=>({...a,y:{...a.y,offset:p.slice(0,n).reduce((m,l)=>m+l.y.normalized,0)}})).map((a,n)=>({...a,x:{...a.x,label:u.cos(u.rad((a.y.offset+a.y.normalized/2+f.value/c.value*n)*360-90))},y:{...a.y,label:u.sin(u.rad((a.y.offset+a.y.normalized/2+f.value/c.value*n)*360-90))}}))})));return(e,k)=>(o(),s("div",{ref_key:"wrapperRef$",ref:O,class:r(e.$style["chart-container"])},[z(Z,{height:t(v),width:t($)},{path:B(()=>[i("g",{class:r([e.$style["chart-group-plots"]])},[(o(!0),s(_,null,x(t(T),a=>(o(),s(_,{key:a.label},[(o(!0),s(_,null,x(a.series,(n,p)=>(o(),s("g",{key:`plot-${p}`,class:r(e.$style["chart-area"])},[i("circle",{class:r([e.$style.behavior,e.$style["chart-area"],e.$style.doughnut,e.$style.plot,e.$style.clickable,{[e.$style.round]:g.options.round}]),cx:t(y).x,cy:t(y).y,r:t(d),"stroke-dasharray":`${n.y.normalized*t(c)} ${(1-n.y.normalized)*t(c)}`,"stroke-dashoffset":n.y.offset*t(c)*-1-t(f)*p+.25*t(c),"pointer-events":"visibleStroke"},null,10,K),(o(),s("foreignObject",{class:r([e.$style["chart-area"],e.$style["legend-container"]]),x:t(y).x+t(d)*n.x.label-260*+(n.x.label<0),y:t(y).y+t(d)*n.y.label-240*+(n.y.label<0),height:"240",width:"260"},[z(J,{class:r([e.$style["chart-area"],e.$style["legend-wrapper"]]),radius:"var(--agh-ref-border-radius-500)"},{default:B(()=>[g.options.title?(o(),s(_,{key:0},[i("h1",{class:r([e.$style["chart-area"],e.$style["legend-title"],e.$style.doughnut])},[i("span",null,C(n.x.value),1)],2),X],64)):U("",!0),(o(!0),s(_,null,x(t(q),(m,l)=>(o(),s(_,{key:l},[!/(x)/.test(l)&&m&&n[l]?(o(),s("div",{key:0,class:r([e.$style["chart-area"],e.$style["legend-group"],e.$style.doughnut])},[i("label",{class:r([e.$style["chart-area"],e.$style["legend-label"]])},C(m.label),3),i("p",{class:r([e.$style["chart-area"],e.$style["legend-value"]])},C(n[l].value),3)],2)):U("",!0)],64))),128))]),_:2},1032,["class"])],10,W))],2))),128))],64))),128))],2),i("clipPath",Y,[i("circle",{cx:t(y).x,cy:t(y).y,r:t(d)-10},null,8,ee)]),i("g",ae,[(o(),s("foreignObject",{class:r(e.$style["chart-content-wrapper"]),height:t(d)*2,width:t(d)*2,x:t(y).x-t(d),y:t(y).y-t(d)},[A(e.$slots,"default",{},void 0,!0)],10,te))])]),_:3},8,["height","width"])],2))}}),ne="_behavior_1j8l6_1",se="_clickable_1j8l6_1",re="_disabled_1j8l6_4",oe="_draggable_1j8l6_7",le="_move_1j8l6_7",ie="_loading_1j8l6_10",de="_path_1j8l6_24",ce="_radar_1j8l6_29",ue="_label_1j8l6_32",ye="_plot_1j8l6_85",pe="_point_1j8l6_85",me="_doughnut_1j8l6_96",he="_bg_1j8l6_102",ge="_round_1j8l6_106",fe="_line_1j8l6_119",_e={behavior:ne,clickable:se,disabled:re,draggable:oe,move:le,loading:ie,"chart-container":"_chart-container_1j8l6_14","chart-axis":"_chart-axis_1j8l6_24",path:de,radar:ce,label:ue,"font-align--center":"_font-align--center_1j8l6_45","font-align--right":"_font-align--right_1j8l6_48","font-align--left":"_font-align--left_1j8l6_51","box-align--center":"_box-align--center_1j8l6_54","box-align--left":"_box-align--left_1j8l6_57","box-align--right":"_box-align--right_1j8l6_60","chart-group-plots":"_chart-group-plots_1j8l6_67","chart-area":"_chart-area_1j8l6_67",plot:ye,point:pe,doughnut:me,"legend-container":"_legend-container_1j8l6_96",bg:he,round:ge,line:fe,"legend-wrapper":"_legend-wrapper_1j8l6_147","legend-group":"_legend-group_1j8l6_158","legend-value":"_legend-value_1j8l6_166","legend-label":"_legend-label_1j8l6_169","legend-title":"_legend-title_1j8l6_173"},be={$style:_e},D=Q(L,[["__cssModules",be],["__scopeId","data-v-b7f877fb"]]);L.__docgenInfo={exportName:"default",displayName:"DoughnutChart",type:1,props:[{name:"options",global:!1,description:"",tags:[],required:!1,type:"Options | undefined",declarations:[],schema:{kind:"enum",type:"Options | undefined",schema:["undefined",{kind:"object",type:"Options"}]},default:`{
    offset: {
        x: 0,
        y: 0
    },
    radius: 0
}`},{name:"axises",global:!1,description:"",tags:[],required:!0,type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",global:!1,description:"",tags:[],required:!0,type:"ObjectLike | ObjectLike[]",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"axises",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>',description:"",declarations:[],schema:{kind:"object",type:'Record<"x" | "y", Axis> & Partial<Record<Char, Axis>>'}},{name:"datasets",type:"ObjectLike | ObjectLike[]",description:"",declarations:[],schema:{kind:"enum",type:"ObjectLike | ObjectLike[]",schema:["ObjectLike",{kind:"array",type:"ObjectLike[]"}]}},{name:"options",type:"Options",description:"",declarations:[],schema:{kind:"object",type:"Options"}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/chart/DoughnutChart.vue"};const Ze={title:"Components / Chart / DoughnutChart",component:D,tags:["autodocs"]},ke=h=>({components:{DoughnutChart:D},setup(){return{args:h}},template:`
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
  `}),j={render:ke,args:{datasets:[{name:"Nginx Techniques",storage:"72.1 GB",recentlyUsed:"2021-07-01T00:00:00.000Z"},{name:"IIS Techniques",storage:"48.0 GB",recentlyUsed:"2021-07-01T00:00:00.000Z"},{name:"FIN-2023",storage:"28.0 GB",recentlyUsed:"2021-07-01T00:00:00.000Z"},{name:"Others",storage:"63.9 GB",recentlyUsed:""},{name:"Free",storage:"98.0 GB",recentlyUsed:""}],axises:{x:{label:"Name",accessor:"{{ $.name }}",selector:"$.name",type:"string"},y:{label:"Value",accessor:"{{ $.storage }}",selector:"$.storage",type:"number",max:"auto"},z:{label:"Recently Used",accessor:"{{ $.recentlyUsed | date : yyyy/MM/dd }}",selector:"$.recentlyUsed",type:"date"}},options:{title:"{{ $.name }}",round:!0,offset:{x:20,y:20}}}};var N,R,I;j.parameters={...j.parameters,docs:{...(N=j.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(R=j.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const Je=["DefaultDoughnutChart"];export{j as DefaultDoughnutChart,Je as __namedExportsOrder,Ze as default};
