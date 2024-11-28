import{f as H}from"./index-C_FWhylE.js";import{d as Z,U as J,V as Q,W as X,b as h,m as r,G as y,H as M,R as Y,S as ee,I as s,x as $,C as ae,Z as ne,M as V,K as te,B as l,u as oe,L as re,D as se}from"./vue.esm-bundler-QoWY_FuJ.js";import{I as le}from"./offline-VP9Gt1e5.js";import{u as G}from"./index-8kxm7WVi.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-ele9T-Ik.js";const de=["onClick"],x=Z({__name:"TabGroup",props:J({tabs:{},modelValue:{},level:{default:"primary"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(i){te(e=>({b793392a:A.value,26101824:L.value})),Q();const t=i,a=X(i,"modelValue",{get(){return t.modelValue??g.value??v.value.values().next().value},set(e){return t.modelValue||(g.value=e),f.value!==n.value&&(f.value=n.value),e}}),d=h([]),g=h(void 0),f=h(null),n=r(()=>a.value?[...v.value.keys()].indexOf(a.value.id)??0:0),c=r(()=>(f.value??n.value)<=n.value?"left":"right"),v=r(()=>Array.isArray(t.tabs)?new Map(t.tabs.map(e=>[e.id,e])):t.tabs),L=r(()=>d.value[n.value]?G(d.value[n.value]).width.value:0),A=r(()=>d.value.slice(0,n.value).reduce((e,k)=>e+G(k).width.value,0)),F=e=>{a.value=e};return(e,k)=>(l(),y("div",{class:s([e.$style["tab-group-container"],e.$style.wrapper,e.$style.flex,e.$style.vertical])},[M("div",{class:s([e.$style["tab-group-wrapper"],e.$style.wrapper,e.$style.flex,e.$style.horizontal,e.$style[t.level]])},[(l(!0),y(Y,null,ee(v.value,([w,u])=>{var T;return l(),y("div",{key:w,ref_for:!0,ref_key:"tabRefs$",ref:d,onClick:De=>F(u),class:s([e.$style["tab-group"],e.$style.wrapper,e.$style.flex,e.$style.horizontal,e.$style.behavior,e.$style.clickable,{[e.$style.active]:((T=a.value)==null?void 0:T.id)===w}])},[u.icon?(l(),$(oe(le),{key:0,class:s(e.$style.icon),icon:u.icon},null,8,["class","icon"])):V("",!0),M("p",null,re(u.name),1)],10,de)}),128))],2),a.value?(l(),$(ne,{key:0,class:s(e.$style.transition),"enter-active-class":e.$style[`slide-${c.value}-enter-active`],"enter-from-class":e.$style[`slide-${c.value}-enter-from`],"leave-active-class":e.$style[`slide-${c.value}-leave-active`],"leave-from-class":e.$style[`slide-${c.value}-leave-from`],mode:"out-in",appear:""},{default:ae(()=>[se(e.$slots,a.value.id,{id:a.value.id,index:n.value,tab:a.value},void 0,!0)]),_:3},8,["class","enter-active-class","enter-from-class","leave-active-class","leave-from-class"])):V("",!0)],2))}}),ce="_wrapper_1khw8_1",ue="_flex_1khw8_12",me="_horizontal_1khw8_48",pe="_wrap_1khw8_1",be="_vertical_1khw8_60",_e="_grid_1khw8_72",fe="_behavior_1khw8_78",ve="_clickable_1khw8_78",he="_disabled_1khw8_81",ye="_draggable_1khw8_84",ge="_move_1khw8_84",ke="_loading_1khw8_87",we="_transition_1khw8_91",Te="_primary_1khw8_132",Me="_secondary_1khw8_138",$e="_active_1khw8_159",Ve="_icon_1khw8_161",Ge={wrapper:ce,flex:ue,"col-1":"_col-1_1khw8_12","col-2":"_col-2_1khw8_15","col-3":"_col-3_1khw8_18","col-4":"_col-4_1khw8_21","col-5":"_col-5_1khw8_24","col-6":"_col-6_1khw8_27","col-7":"_col-7_1khw8_30","col-8":"_col-8_1khw8_33","col-9":"_col-9_1khw8_36","col-10":"_col-10_1khw8_39","col-11":"_col-11_1khw8_42","col-12":"_col-12_1khw8_45",horizontal:me,wrap:pe,vertical:be,grid:_e,behavior:fe,clickable:ve,disabled:he,draggable:ye,move:ge,loading:ke,transition:we,"slide-left-enter-from":"_slide-left-enter-from_1khw8_91","slide-left-enter-active":"_slide-left-enter-active_1khw8_91","slide-left-leave-from":"_slide-left-leave-from_1khw8_91","slide-left-leave-active":"_slide-left-leave-active_1khw8_91","slide-right-enter-from":"_slide-right-enter-from_1khw8_91","slide-right-enter-active":"_slide-right-enter-active_1khw8_91","slide-right-leave-from":"_slide-right-leave-from_1khw8_91","slide-right-leave-active":"_slide-right-leave-active_1khw8_91","slide-down-enter-from":"_slide-down-enter-from_1khw8_94","slide-down-enter-active":"_slide-down-enter-active_1khw8_94","slide-down-leave-from":"_slide-down-leave-from_1khw8_94","slide-down-leave-active":"_slide-down-leave-active_1khw8_94","fade-enter-from":"_fade-enter-from_1khw8_97","fade-enter-active":"_fade-enter-active_1khw8_97","fade-leave-from":"_fade-leave-from_1khw8_97","fade-leave-active":"_fade-leave-active_1khw8_97","tab-group":"_tab-group_1khw8_117","tab-group-container":"_tab-group-container_1khw8_123","tab-group-wrapper":"_tab-group-wrapper_1khw8_128",primary:Te,secondary:Me,"tab-group-viewport-leaving":"_tab-group-viewport-leaving_1khw8_156",active:$e,icon:Ve},Se={$style:Ge},K=ie(x,[["__cssModules",Se],["__scopeId","data-v-a8354c4d"]]);x.__docgenInfo={exportName:"default",displayName:"TabGroup",type:1,props:[{name:"level",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | undefined',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | undefined',schema:["undefined",'"primary"','"secondary"']},default:'"primary"'},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"Model | undefined",declarations:[],schema:{kind:"enum",type:"Model | undefined",schema:["undefined",{kind:"object",type:"Model"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"tabs",global:!1,description:"",tags:[],required:!0,type:"Model[] | Map<string, Model>",declarations:[],schema:{kind:"enum",type:"Model[] | Map<string, Model>",schema:[{kind:"array",type:"Model[]"},"Map<string, Model>"]}}],events:[{name:"update:modelValue",description:"",tags:[],type:"[modelValue: Model]",signature:'(event: "update:modelValue", modelValue: Model): void',declarations:[],schema:[{kind:"object",type:"Model"}]}],slots:[],exposed:[{name:"modelValue",type:"Model | undefined",description:"",declarations:[],schema:{kind:"enum",type:"Model | undefined",schema:["undefined",{kind:"object",type:"Model"}]}},{name:"tabs",type:"Model[] | Map<string, Model>",description:"",declarations:[],schema:{kind:"enum",type:"Model[] | Map<string, Model>",schema:[{kind:"array",type:"Model[]"},"Map<string, Model>"]}},{name:"level",type:'"primary" | "secondary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary"',schema:['"primary"','"secondary"']}}],sourceFiles:"/home/runner/work/UI/UI/src/components/layout/tab/TabGroup.vue"};const Ue={title:"Components / Layout / TabGroup",component:K,tags:["autodocs"],argTypes:{tabs:{control:"object",description:"Tabs for the TabGroup."},modelValue:{control:"object",description:"TabGroup value, use by `v-model`."},"onUpdate:modelValue":{action:"selected"}},args:{"onUpdate:modelValue":H()}},Ie=i=>({components:{TabGroup:K},setup(){return{args:i}},template:`
    <TabGroup
      v-bind="args"
    >
      <template #tab-1="{ tab, id, index }">
        <div>
          <pre>#{{ id }} - {{ index }}</pre>
          <h1>{{ tab.name }}</h1>
          <p>{{ tab.content }}</p>
        </div>
      </template>
      <template #tab-2="{ tab, id, index }">
        <div>
          <pre>#{{ id }} - {{ index }}</pre>
          <h1>{{ tab.name }}</h1>
          <p>{{ tab.content }}</p>
        </div>
      </template>
      <template #tab-3="{ tab, id, index }">
        <div>
          <pre>#{{ id }} - {{ index }}</pre>
          <h1>{{ tab.name }}</h1>
          <p>{{ tab.content }}</p>
        </div>
      </template>
    </TabGroup>
  `}),m={args:{tabs:[{id:"tab-1",name:"Tab 1",content:"Tab 1 content"},{id:"tab-2",name:"Tab 2",content:"Tab 2 content"},{id:"tab-3",name:"Tab 3",content:"Tab 3 content"}],modelValue:{id:"tab-1",name:"Tab 1",content:"Tab 1 content"}}},p={args:{tabs:[{id:"tab-1",name:"Tab 1",content:"Tab 1 content"},{id:"tab-2",name:"Tab 2",content:"Tab 2 content"},{id:"tab-3",name:"Tab 3",content:"Tab 3 content"}]}},o={args:{tabs:[{id:"tab-1",name:"Reminder",icon:"fa6-solid:list",content:"Tab 1 content"},{id:"tab-2",name:"Schedule",icon:"fa6-solid:calendar",content:"Tab 2 content"},{id:"tab-3",name:"Settings",icon:"fa6-solid:gears",content:"Tab 3 content"}],modelValue:{id:"tab-1",name:"Reminder",icon:"fa6-solid:list",content:"Tab 1 content"}}},b={args:{...o.args,level:"secondary"}},_={render:Ie,args:{...o.args}};var S,I,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'tab-1',
      name: 'Tab 1',
      content: 'Tab 1 content'
    }, {
      id: 'tab-2',
      name: 'Tab 2',
      content: 'Tab 2 content'
    }, {
      id: 'tab-3',
      name: 'Tab 3',
      content: 'Tab 3 content'
    }],
    modelValue: {
      id: 'tab-1',
      name: 'Tab 1',
      content: 'Tab 1 content'
    }
  }
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var C,R,W;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'tab-1',
      name: 'Tab 1',
      content: 'Tab 1 content'
    }, {
      id: 'tab-2',
      name: 'Tab 2',
      content: 'Tab 2 content'
    }, {
      id: 'tab-3',
      name: 'Tab 3',
      content: 'Tab 3 content'
    }]
  }
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var q,B,z;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'tab-1',
      name: 'Reminder',
      icon: 'fa6-solid:list',
      content: 'Tab 1 content'
    }, {
      id: 'tab-2',
      name: 'Schedule',
      icon: 'fa6-solid:calendar',
      content: 'Tab 2 content'
    }, {
      id: 'tab-3',
      name: 'Settings',
      icon: 'fa6-solid:gears',
      content: 'Tab 3 content'
    }],
    modelValue: {
      id: 'tab-1',
      name: 'Reminder',
      icon: 'fa6-solid:list',
      content: 'Tab 1 content'
    }
  }
}`,...(z=(B=o.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var U,N,j;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...DefaultTabGroupWithIcon.args,
    level: 'secondary'
  }
}`,...(j=(N=b.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var P,E,O;_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: UseSlotTemplate,
  args: {
    ...DefaultTabGroupWithIcon.args
  }
}`,...(O=(E=_.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const Ne=["DefaultTabGroup","DefaultTabGroupWithoutParentModel","DefaultTabGroupWithIcon","SecondaryTabGroup","DefaultTabGroupWithSlot"];export{m as DefaultTabGroup,o as DefaultTabGroupWithIcon,_ as DefaultTabGroupWithSlot,p as DefaultTabGroupWithoutParentModel,b as SecondaryTabGroup,Ne as __namedExportsOrder,Ue as default};
