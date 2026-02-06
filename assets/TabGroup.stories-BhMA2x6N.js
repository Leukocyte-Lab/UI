import{d as R,x as C,y as W,h as s,a as y,i as h,F as q,r as O,n as l,c as k,Z as U,e as M,D as N,k as u,u as j,o as i,b as z,I as B,t as P,w as E,j as F}from"./iframe-Dh87b88C.js";import{u as K}from"./uuid-Cakt1EUJ.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const x=["onClick"],$=R({__name:"TabGroup",props:N({tabs:{},modelValue:{},level:{default:"primary"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(d){j(e=>({v75ac6018:D.value})),C();const t=d,a=W(d,"modelValue",{get(){return t.modelValue??g.value??v.value.values().next().value},set(e){return t.modelValue||(g.value=e),f.value!==n.value&&(f.value=n.value),e}}),V=s(),G=s([]),g=s(void 0),f=s(null),S=s(K()),n=u(()=>a.value?[...v.value.keys()].indexOf(a.value.id)??0:0),D=u(()=>`--tab-anchor--${S.value}--${n.value}`),c=u(()=>(f.value??n.value)<=n.value?"left":"right"),v=u(()=>Array.isArray(t.tabs)?new Map(t.tabs.map(e=>[e.id,e])):t.tabs),I=e=>{e.disabled||(a.value=e)};return(e,be)=>(i(),y("div",{class:l([e.$style["tab-group-container"],e.$style.wrapper,e.$style.flex,e.$style.vertical])},[h("div",{ref_key:"tabWrapperRef$",ref:V,class:l([e.$style["tab-group-wrapper"],e.$style.wrapper,e.$style.flex,e.$style.horizontal,e.$style[t.level]])},[(i(!0),y(q,null,O(v.value,([T,r])=>(i(),y("div",{key:T,ref_for:!0,ref_key:"tabRefs$",ref:G,onClick:_e=>I(r),class:l([e.$style["tab-group"],e.$style.wrapper,e.$style.flex,e.$style.horizontal,e.$style.behavior,r.disabled?e.$style.disabled:e.$style.clickable,a.value?.id===T&&e.$style.active])},[r.icon?(i(),k(z(B),{key:0,class:l(e.$style.icon),icon:r.icon},null,8,["class","icon"])):M("",!0),h("p",null,P(r.name),1)],10,x))),128))],2),a.value?(i(),k(U,{key:0,class:l(e.$style.transition),"enter-active-class":e.$style[`slide-${c.value}-enter-active`],"enter-from-class":e.$style[`slide-${c.value}-enter-from`],"leave-active-class":e.$style[`slide-${c.value}-leave-active`],"leave-from-class":e.$style[`slide-${c.value}-leave-from`],mode:"out-in",appear:""},{default:E(()=>[F(e.$slots,a.value.id,{id:a.value.id,index:n.value,tab:a.value},void 0,!0)]),_:3},8,["class","enter-active-class","enter-from-class","leave-active-class","leave-from-class"])):M("",!0)],2))}}),A="_wrapper_1a95t_1",Y="_flex_1a95t_12",Z="_horizontal_1a95t_48",H="_wrap_1a95t_1",J="_vertical_1a95t_60",Q="_grid_1a95t_72",X="_behavior_1a95t_78",ee="_clickable_1a95t_78",ae="_disabled_1a95t_81",te="_draggable_1a95t_84",ne="_move_1a95t_84",oe="_loading_1a95t_87",re="_transition_1a95t_91",se="_primary_1a95t_126",le="_secondary_1a95t_132",ie="_active_1a95t_163",de="_icon_1a95t_169",ce={wrapper:A,flex:Y,"col-1":"_col-1_1a95t_12","col-2":"_col-2_1a95t_15","col-3":"_col-3_1a95t_18","col-4":"_col-4_1a95t_21","col-5":"_col-5_1a95t_24","col-6":"_col-6_1a95t_27","col-7":"_col-7_1a95t_30","col-8":"_col-8_1a95t_33","col-9":"_col-9_1a95t_36","col-10":"_col-10_1a95t_39","col-11":"_col-11_1a95t_42","col-12":"_col-12_1a95t_45",horizontal:Z,wrap:H,vertical:J,grid:Q,behavior:X,clickable:ee,disabled:ae,draggable:te,move:ne,loading:oe,transition:re,"slide-left-enter-from":"_slide-left-enter-from_1a95t_91","slide-left-enter-active":"_slide-left-enter-active_1a95t_91","slide-left-leave-from":"_slide-left-leave-from_1a95t_91","slide-left-leave-active":"_slide-left-leave-active_1a95t_91","slide-right-enter-from":"_slide-right-enter-from_1a95t_91","slide-right-enter-active":"_slide-right-enter-active_1a95t_91","slide-right-leave-from":"_slide-right-leave-from_1a95t_91","slide-right-leave-active":"_slide-right-leave-active_1a95t_91","slide-down-enter-from":"_slide-down-enter-from_1a95t_94","slide-down-enter-active":"_slide-down-enter-active_1a95t_94","slide-down-leave-from":"_slide-down-leave-from_1a95t_94","slide-down-leave-active":"_slide-down-leave-active_1a95t_94","fade-enter-from":"_fade-enter-from_1a95t_97","fade-enter-active":"_fade-enter-active_1a95t_97","fade-leave-from":"_fade-leave-from_1a95t_97","fade-leave-active":"_fade-leave-active_1a95t_97","tab-group-container":"_tab-group-container_1a95t_117","tab-group-wrapper":"_tab-group-wrapper_1a95t_122",primary:se,secondary:le,"tab-group-viewport-leaving":"_tab-group-viewport-leaving_1a95t_151","tab-group":"_tab-group_1a95t_117",active:ie,icon:de},ue={$style:ce},w=L($,[["__cssModules",ue],["__scopeId","data-v-aaed6900"]]);$.__docgenInfo={exportName:"default",displayName:"TabGroup",type:1,props:[{name:"tabs",global:!1,description:"",tags:[],required:!0,type:"Map<string, Model> | Model[]",declarations:[],schema:{kind:"enum",type:"Map<string, Model> | Model[]",schema:["Map<string, Model>",{kind:"array",type:"Model[]"}]}},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"Model | undefined",declarations:[],schema:{kind:"enum",type:"Model | undefined",schema:["undefined",{kind:"object",type:"Model"}]}},{name:"level",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | undefined',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | undefined',schema:["undefined",'"primary"','"secondary"']},default:'"primary"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: Model | undefined]",signature:'(event: "update:modelValue", value: Model | undefined): void',declarations:[],schema:[{kind:"enum",type:"Model | undefined",schema:["undefined",{kind:"object",type:"Model"}]}]}],slots:[],exposed:[{name:"level",type:'"primary" | "secondary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary"',schema:['"primary"','"secondary"']}},{name:"modelValue",type:"Model | undefined",description:"",declarations:[],schema:{kind:"enum",type:"Model | undefined",schema:["undefined",{kind:"object",type:"Model"}]}},{name:"tabs",type:"Map<string, Model> | Model[]",description:"",declarations:[],schema:{kind:"enum",type:"Map<string, Model> | Model[]",schema:["Map<string, Model>",{kind:"array",type:"Model[]"}]}}],sourceFiles:"/home/runner/work/UI/UI/src/components/layout/tab/TabGroup.vue"};const{fn:pe}=__STORYBOOK_MODULE_TEST__,Te={title:"Components / Layout / TabGroup",component:w,tags:["autodocs"],argTypes:{tabs:{control:"object",description:"Tabs for the TabGroup."},modelValue:{control:"object",description:"TabGroup value, use by `v-model`."},"onUpdate:modelValue":{action:"selected"}},args:{"onUpdate:modelValue":pe()}},me=d=>({components:{TabGroup:w},setup(){return{args:d}},template:`
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
  `}),p={args:{tabs:[{id:"tab-1",name:"Tab 1",content:"Tab 1 content"},{id:"tab-2",name:"Tab 2",content:"Tab 2 content"},{id:"tab-3",name:"Tab 3",content:"Tab 3 content"},{id:"tab-4",name:"Tab 4",content:"Tab 4 content",disabled:!0}],modelValue:{id:"tab-1",name:"Tab 1",content:"Tab 1 content"}}},m={args:{tabs:[{id:"tab-1",name:"Tab 1",content:"Tab 1 content"},{id:"tab-2",name:"Tab 2",content:"Tab 2 content"},{id:"tab-3",name:"Tab 3",content:"Tab 3 content"}]}},o={args:{tabs:[{id:"tab-1",name:"Reminder",icon:"fa6-solid:list",content:"Tab 1 content"},{id:"tab-2",name:"Schedule",icon:"fa6-solid:calendar",content:"Tab 2 content"},{id:"tab-3",name:"Settings",icon:"fa6-solid:gears",content:"Tab 3 content"}],modelValue:{id:"tab-1",name:"Reminder",icon:"fa6-solid:list",content:"Tab 1 content"}}},b={args:{...o.args,level:"secondary"}},_={render:me,args:{...o.args}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    }, {
      id: 'tab-4',
      name: 'Tab 4',
      content: 'Tab 4 content',
      disabled: true
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
}`,..._.parameters?.docs?.source}}};const he=["DefaultTabGroup","DefaultTabGroupWithoutParentModel","DefaultTabGroupWithIcon","SecondaryTabGroup","DefaultTabGroupWithSlot"];export{p as DefaultTabGroup,o as DefaultTabGroupWithIcon,_ as DefaultTabGroupWithSlot,m as DefaultTabGroupWithoutParentModel,b as SecondaryTabGroup,he as __namedExportsOrder,Te as default};
