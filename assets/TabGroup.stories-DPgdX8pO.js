import{d as R,x as C,y as W,h as r,a as y,i as h,F as q,r as O,n as s,c as T,Z as U,e as k,D as N,k as u,u as j,o as l,b as z,I as B,t as P,w as E,j as x}from"./iframe-L6BUPGFX.js";import{u as F}from"./uuid-Cakt1EUJ.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const L=["onClick"],M=R({__name:"TabGroup",props:N({tabs:{},modelValue:{},level:{default:"primary"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(i){j(e=>({ce839702:D.value})),C();const n=i,a=W(i,"modelValue",{get(){return n.modelValue??g.value??v.value.values().next().value},set(e){return n.modelValue||(g.value=e),f.value!==t.value&&(f.value=t.value),e}}),V=r(),G=r([]),g=r(void 0),f=r(null),S=r(F()),t=u(()=>a.value?[...v.value.keys()].indexOf(a.value.id)??0:0),D=u(()=>`--tab-anchor--${S.value}--${t.value}`),d=u(()=>(f.value??t.value)<=t.value?"left":"right"),v=u(()=>Array.isArray(n.tabs)?new Map(n.tabs.map(e=>[e.id,e])):n.tabs),I=e=>{a.value=e};return(e,be)=>(l(),y("div",{class:s([e.$style["tab-group-container"],e.$style.wrapper,e.$style.flex,e.$style.vertical])},[h("div",{ref_key:"tabWrapperRef$",ref:V,class:s([e.$style["tab-group-wrapper"],e.$style.wrapper,e.$style.flex,e.$style.horizontal,e.$style[n.level]])},[(l(!0),y(q,null,O(v.value,([w,c])=>(l(),y("div",{key:w,ref_for:!0,ref_key:"tabRefs$",ref:G,onClick:_e=>I(c),class:s([e.$style["tab-group"],e.$style.wrapper,e.$style.flex,e.$style.horizontal,e.$style.behavior,e.$style.clickable,a.value?.id===w&&e.$style.active])},[c.icon?(l(),T(z(B),{key:0,class:s(e.$style.icon),icon:c.icon},null,8,["class","icon"])):k("",!0),h("p",null,P(c.name),1)],10,L))),128))],2),a.value?(l(),T(U,{key:0,class:s(e.$style.transition),"enter-active-class":e.$style[`slide-${d.value}-enter-active`],"enter-from-class":e.$style[`slide-${d.value}-enter-from`],"leave-active-class":e.$style[`slide-${d.value}-leave-active`],"leave-from-class":e.$style[`slide-${d.value}-leave-from`],mode:"out-in",appear:""},{default:E(()=>[x(e.$slots,a.value.id,{id:a.value.id,index:t.value,tab:a.value},void 0,!0)]),_:3},8,["class","enter-active-class","enter-from-class","leave-active-class","leave-from-class"])):k("",!0)],2))}}),A="_wrapper_u0ew5_1",Y="_flex_u0ew5_12",Z="_horizontal_u0ew5_48",H="_wrap_u0ew5_1",J="_vertical_u0ew5_60",Q="_grid_u0ew5_72",X="_behavior_u0ew5_78",ee="_clickable_u0ew5_78",ae="_disabled_u0ew5_81",ne="_draggable_u0ew5_84",te="_move_u0ew5_84",oe="_loading_u0ew5_87",re="_transition_u0ew5_91",se="_primary_u0ew5_126",le="_secondary_u0ew5_132",ie="_active_u0ew5_160",de="_icon_u0ew5_166",ce={wrapper:A,flex:Y,"col-1":"_col-1_u0ew5_12","col-2":"_col-2_u0ew5_15","col-3":"_col-3_u0ew5_18","col-4":"_col-4_u0ew5_21","col-5":"_col-5_u0ew5_24","col-6":"_col-6_u0ew5_27","col-7":"_col-7_u0ew5_30","col-8":"_col-8_u0ew5_33","col-9":"_col-9_u0ew5_36","col-10":"_col-10_u0ew5_39","col-11":"_col-11_u0ew5_42","col-12":"_col-12_u0ew5_45",horizontal:Z,wrap:H,vertical:J,grid:Q,behavior:X,clickable:ee,disabled:ae,draggable:ne,move:te,loading:oe,transition:re,"slide-left-enter-from":"_slide-left-enter-from_u0ew5_91","slide-left-enter-active":"_slide-left-enter-active_u0ew5_91","slide-left-leave-from":"_slide-left-leave-from_u0ew5_91","slide-left-leave-active":"_slide-left-leave-active_u0ew5_91","slide-right-enter-from":"_slide-right-enter-from_u0ew5_91","slide-right-enter-active":"_slide-right-enter-active_u0ew5_91","slide-right-leave-from":"_slide-right-leave-from_u0ew5_91","slide-right-leave-active":"_slide-right-leave-active_u0ew5_91","slide-down-enter-from":"_slide-down-enter-from_u0ew5_94","slide-down-enter-active":"_slide-down-enter-active_u0ew5_94","slide-down-leave-from":"_slide-down-leave-from_u0ew5_94","slide-down-leave-active":"_slide-down-leave-active_u0ew5_94","fade-enter-from":"_fade-enter-from_u0ew5_97","fade-enter-active":"_fade-enter-active_u0ew5_97","fade-leave-from":"_fade-leave-from_u0ew5_97","fade-leave-active":"_fade-leave-active_u0ew5_97","tab-group-container":"_tab-group-container_u0ew5_117","tab-group-wrapper":"_tab-group-wrapper_u0ew5_122",primary:se,secondary:le,"tab-group-viewport-leaving":"_tab-group-viewport-leaving_u0ew5_151","tab-group":"_tab-group_u0ew5_117",active:ie,icon:de},ue={$style:ce},$=K(M,[["__cssModules",ue],["__scopeId","data-v-3a7acdc3"]]);M.__docgenInfo={exportName:"default",displayName:"TabGroup",type:1,props:[{name:"tabs",global:!1,description:"",tags:[],required:!0,type:"Map<string, Model> | Model[]",declarations:[],schema:{kind:"enum",type:"Map<string, Model> | Model[]",schema:["Map<string, Model>",{kind:"array",type:"Model[]"}]}},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"Model | undefined",declarations:[],schema:{kind:"enum",type:"Model | undefined",schema:["undefined",{kind:"object",type:"Model"}]}},{name:"level",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | undefined',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | undefined',schema:["undefined",'"primary"','"secondary"']},default:'"primary"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: Model | undefined]",signature:'(event: "update:modelValue", value: Model | undefined): void',declarations:[],schema:[{kind:"enum",type:"Model | undefined",schema:["undefined",{kind:"object",type:"Model"}]}]}],slots:[],exposed:[{name:"level",type:'"primary" | "secondary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary"',schema:['"primary"','"secondary"']}},{name:"modelValue",type:"Model | undefined",description:"",declarations:[],schema:{kind:"enum",type:"Model | undefined",schema:["undefined",{kind:"object",type:"Model"}]}},{name:"tabs",type:"Map<string, Model> | Model[]",description:"",declarations:[],schema:{kind:"enum",type:"Map<string, Model> | Model[]",schema:["Map<string, Model>",{kind:"array",type:"Model[]"}]}}],sourceFiles:"/home/runner/work/UI/UI/src/components/layout/tab/TabGroup.vue"};const{fn:pe}=__STORYBOOK_MODULE_TEST__,we={title:"Components / Layout / TabGroup",component:$,tags:["autodocs"],argTypes:{tabs:{control:"object",description:"Tabs for the TabGroup."},modelValue:{control:"object",description:"TabGroup value, use by `v-model`."},"onUpdate:modelValue":{action:"selected"}},args:{"onUpdate:modelValue":pe()}},me=i=>({components:{TabGroup:$},setup(){return{args:i}},template:`
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
  `}),p={args:{tabs:[{id:"tab-1",name:"Tab 1",content:"Tab 1 content"},{id:"tab-2",name:"Tab 2",content:"Tab 2 content"},{id:"tab-3",name:"Tab 3",content:"Tab 3 content"}],modelValue:{id:"tab-1",name:"Tab 1",content:"Tab 1 content"}}},m={args:{tabs:[{id:"tab-1",name:"Tab 1",content:"Tab 1 content"},{id:"tab-2",name:"Tab 2",content:"Tab 2 content"},{id:"tab-3",name:"Tab 3",content:"Tab 3 content"}]}},o={args:{tabs:[{id:"tab-1",name:"Reminder",icon:"fa6-solid:list",content:"Tab 1 content"},{id:"tab-2",name:"Schedule",icon:"fa6-solid:calendar",content:"Tab 2 content"},{id:"tab-3",name:"Settings",icon:"fa6-solid:gears",content:"Tab 3 content"}],modelValue:{id:"tab-1",name:"Reminder",icon:"fa6-solid:list",content:"Tab 1 content"}}},b={args:{...o.args,level:"secondary"}},_={render:me,args:{...o.args}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultTabGroupWithIcon.args,
    level: 'secondary'
  }
}`,...b.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: UseSlotTemplate,
  args: {
    ...DefaultTabGroupWithIcon.args
  }
}`,..._.parameters?.docs?.source}}};const he=["DefaultTabGroup","DefaultTabGroupWithoutParentModel","DefaultTabGroupWithIcon","SecondaryTabGroup","DefaultTabGroupWithSlot"];export{p as DefaultTabGroup,o as DefaultTabGroupWithIcon,_ as DefaultTabGroupWithSlot,m as DefaultTabGroupWithoutParentModel,b as SecondaryTabGroup,he as __namedExportsOrder,we as default};
