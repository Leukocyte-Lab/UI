import{f as A}from"./index-C_FWhylE.js";import{d as F,U as H,V as Z,W as J,b as d,m as p,G as y,H as k,R as Q,S as X,I as s,x as M,C as Y,Z as ee,M as $,K as ae,B as r,u as ne,L as te,D as oe}from"./vue.esm-bundler-QoWY_FuJ.js";import{I as se}from"./offline-VP9Gt1e5.js";import{u as re}from"./uuid-DspEPv_z.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ce=["onClick"],P=F({__name:"TabGroup",props:H({tabs:{},modelValue:{},level:{default:"primary"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){ae(e=>({"4c036afc":L.value})),Z();const n=l,a=J(l,"modelValue",{get(){return n.modelValue??g.value??v.value.values().next().value},set(e){return n.modelValue||(g.value=e),f.value!==t.value&&(f.value=t.value),e}}),E=d(),K=d([]),g=d(void 0),f=d(null),t=p(()=>a.value?[...v.value.keys()].indexOf(a.value.id)??0:0),L=p(()=>`--tab-anchor--${re()}--${t.value}`),c=p(()=>(f.value??t.value)<=t.value?"left":"right"),v=p(()=>Array.isArray(n.tabs)?new Map(n.tabs.map(e=>[e.id,e])):n.tabs),O=e=>{a.value=e};return(e,Ie)=>(r(),y("div",{class:s([e.$style["tab-group-container"],e.$style.wrapper,e.$style.flex,e.$style.vertical])},[k("div",{ref_key:"tabWrapperRef$",ref:E,class:s([e.$style["tab-group-wrapper"],e.$style.wrapper,e.$style.flex,e.$style.horizontal,e.$style[n.level]])},[(r(!0),y(Q,null,X(v.value,([h,i])=>{var T;return r(),y("div",{key:h,ref_for:!0,ref_key:"tabRefs$",ref:K,onClick:De=>O(i),class:s([e.$style["tab-group"],e.$style.wrapper,e.$style.flex,e.$style.horizontal,e.$style.behavior,e.$style.clickable,{[e.$style.active]:((T=a.value)==null?void 0:T.id)===h}])},[i.icon?(r(),M(ne(se),{key:0,class:s(e.$style.icon),icon:i.icon},null,8,["class","icon"])):$("",!0),k("p",null,te(i.name),1)],10,ce)}),128))],2),a.value?(r(),M(ee,{key:0,class:s(e.$style.transition),"enter-active-class":e.$style[`slide-${c.value}-enter-active`],"enter-from-class":e.$style[`slide-${c.value}-enter-from`],"leave-active-class":e.$style[`slide-${c.value}-leave-active`],"leave-from-class":e.$style[`slide-${c.value}-leave-from`],mode:"out-in",appear:""},{default:Y(()=>[oe(e.$slots,a.value.id,{id:a.value.id,index:t.value,tab:a.value},void 0,!0)]),_:3},8,["class","enter-active-class","enter-from-class","leave-active-class","leave-from-class"])):$("",!0)],2))}}),ie="_wrapper_1spnc_1",de="_flex_1spnc_12",pe="_horizontal_1spnc_48",ue="_wrap_1spnc_1",me="_vertical_1spnc_60",be="_grid_1spnc_72",_e="_behavior_1spnc_78",fe="_clickable_1spnc_78",ve="_disabled_1spnc_81",ye="_draggable_1spnc_84",ge="_move_1spnc_84",he="_loading_1spnc_87",Te="_transition_1spnc_91",ke="_primary_1spnc_132",Me="_secondary_1spnc_138",$e="_active_1spnc_160",we="_icon_1spnc_166",Ve={wrapper:ie,flex:de,"col-1":"_col-1_1spnc_12","col-2":"_col-2_1spnc_15","col-3":"_col-3_1spnc_18","col-4":"_col-4_1spnc_21","col-5":"_col-5_1spnc_24","col-6":"_col-6_1spnc_27","col-7":"_col-7_1spnc_30","col-8":"_col-8_1spnc_33","col-9":"_col-9_1spnc_36","col-10":"_col-10_1spnc_39","col-11":"_col-11_1spnc_42","col-12":"_col-12_1spnc_45",horizontal:pe,wrap:ue,vertical:me,grid:be,behavior:_e,clickable:fe,disabled:ve,draggable:ye,move:ge,loading:he,transition:Te,"slide-left-enter-from":"_slide-left-enter-from_1spnc_91","slide-left-enter-active":"_slide-left-enter-active_1spnc_91","slide-left-leave-from":"_slide-left-leave-from_1spnc_91","slide-left-leave-active":"_slide-left-leave-active_1spnc_91","slide-right-enter-from":"_slide-right-enter-from_1spnc_91","slide-right-enter-active":"_slide-right-enter-active_1spnc_91","slide-right-leave-from":"_slide-right-leave-from_1spnc_91","slide-right-leave-active":"_slide-right-leave-active_1spnc_91","slide-down-enter-from":"_slide-down-enter-from_1spnc_94","slide-down-enter-active":"_slide-down-enter-active_1spnc_94","slide-down-leave-from":"_slide-down-leave-from_1spnc_94","slide-down-leave-active":"_slide-down-leave-active_1spnc_94","fade-enter-from":"_fade-enter-from_1spnc_97","fade-enter-active":"_fade-enter-active_1spnc_97","fade-leave-from":"_fade-leave-from_1spnc_97","fade-leave-active":"_fade-leave-active_1spnc_97","tab-group":"_tab-group_1spnc_117","tab-group-container":"_tab-group-container_1spnc_123","tab-group-wrapper":"_tab-group-wrapper_1spnc_128",primary:ke,secondary:Me,"tab-group-viewport-leaving":"_tab-group-viewport-leaving_1spnc_157",active:$e,icon:we},Ge={$style:Ve},x=le(P,[["__cssModules",Ge],["__scopeId","data-v-135df12b"]]);P.__docgenInfo={exportName:"default",displayName:"TabGroup",type:1,props:[{name:"level",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | undefined',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | undefined',schema:["undefined",'"primary"','"secondary"']},default:'"primary"'},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"Model | undefined",declarations:[],schema:{kind:"enum",type:"Model | undefined",schema:["undefined",{kind:"object",type:"Model"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"tabs",global:!1,description:"",tags:[],required:!0,type:"Model[] | Map<string, Model>",declarations:[],schema:{kind:"enum",type:"Model[] | Map<string, Model>",schema:[{kind:"array",type:"Model[]"},"Map<string, Model>"]}}],events:[{name:"update:modelValue",description:"",tags:[],type:"[modelValue: Model]",signature:'(event: "update:modelValue", modelValue: Model): void',declarations:[],schema:[{kind:"object",type:"Model"}]}],slots:[],exposed:[{name:"modelValue",type:"Model | undefined",description:"",declarations:[],schema:{kind:"enum",type:"Model | undefined",schema:["undefined",{kind:"object",type:"Model"}]}},{name:"level",type:'"primary" | "secondary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary"',schema:['"primary"','"secondary"']}},{name:"tabs",type:"Model[] | Map<string, Model>",description:"",declarations:[],schema:{kind:"enum",type:"Model[] | Map<string, Model>",schema:[{kind:"array",type:"Model[]"},"Map<string, Model>"]}}],sourceFiles:"/home/runner/work/UI/UI/src/components/layout/tab/TabGroup.vue"};const Ue={title:"Components / Layout / TabGroup",component:x,tags:["autodocs"],argTypes:{tabs:{control:"object",description:"Tabs for the TabGroup."},modelValue:{control:"object",description:"TabGroup value, use by `v-model`."},"onUpdate:modelValue":{action:"selected"}},args:{"onUpdate:modelValue":A()}},Se=l=>({components:{TabGroup:x},setup(){return{args:l}},template:`
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
  `}),u={args:{tabs:[{id:"tab-1",name:"Tab 1",content:"Tab 1 content"},{id:"tab-2",name:"Tab 2",content:"Tab 2 content"},{id:"tab-3",name:"Tab 3",content:"Tab 3 content"}],modelValue:{id:"tab-1",name:"Tab 1",content:"Tab 1 content"}}},m={args:{tabs:[{id:"tab-1",name:"Tab 1",content:"Tab 1 content"},{id:"tab-2",name:"Tab 2",content:"Tab 2 content"},{id:"tab-3",name:"Tab 3",content:"Tab 3 content"}]}},o={args:{tabs:[{id:"tab-1",name:"Reminder",icon:"fa6-solid:list",content:"Tab 1 content"},{id:"tab-2",name:"Schedule",icon:"fa6-solid:calendar",content:"Tab 2 content"},{id:"tab-3",name:"Settings",icon:"fa6-solid:gears",content:"Tab 3 content"}],modelValue:{id:"tab-1",name:"Reminder",icon:"fa6-solid:list",content:"Tab 1 content"}}},b={args:{...o.args,level:"secondary"}},_={render:Se,args:{...o.args}};var w,V,G;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(G=(V=u.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var S,I,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var R,C,W;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(C=o.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var q,N,U;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...DefaultTabGroupWithIcon.args,
    level: 'secondary'
  }
}`,...(U=(N=b.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var z,B,j;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: UseSlotTemplate,
  args: {
    ...DefaultTabGroupWithIcon.args
  }
}`,...(j=(B=_.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const ze=["DefaultTabGroup","DefaultTabGroupWithoutParentModel","DefaultTabGroupWithIcon","SecondaryTabGroup","DefaultTabGroupWithSlot"];export{u as DefaultTabGroup,o as DefaultTabGroupWithIcon,_ as DefaultTabGroupWithSlot,m as DefaultTabGroupWithoutParentModel,b as SecondaryTabGroup,ze as __namedExportsOrder,Ue as default};
