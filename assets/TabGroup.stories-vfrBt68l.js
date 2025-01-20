import{f as Q}from"./index-B5ZI-g0m.js";import{d as X,U as Y,V as Z,W as ee,b as c,c as y,G as g,H as w,R as ae,S as ne,I as s,x as V,C as te,_ as oe,M as G,K as se,B as r,u as m,L as re,D as ie}from"./vue.esm-bundler-ci6tbuJ3.js";import{I as le}from"./offline-ChRR0KDp.js";import{e as S}from"./index-DWXNs7Ik.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DNcykg7C.js";const ce=["onClick"],K=X({__name:"TabGroup",props:Y({tabs:{},modelValue:{},level:{default:"primary"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(i){se(e=>({dd15554e:m(H),"90f62ff4":m(A),"683c0c40":m(F)})),Z();const n=i,a=ee(i,"modelValue",{get(){return n.modelValue??k.value??v.value.values().next().value},set(e){return n.modelValue||(k.value=e),f.value!==t.value&&(f.value=t.value),e}}),h=c(),T=c([]),k=c(void 0),f=c(null),t=y(()=>a.value?[...v.value.keys()].indexOf(a.value.id)??0:0),l=y(()=>(f.value??t.value)<=t.value?"left":"right"),v=y(()=>Array.isArray(n.tabs)?new Map(n.tabs.map(e=>[e.id,e])):n.tabs),{left:A}=S(h),{width:F,left:H}=S(()=>T.value[t.value]),J=e=>{a.value=e};return(e,Re)=>(r(),g("div",{class:s([e.$style["tab-group-container"],e.$style.wrapper,e.$style.flex,e.$style.vertical])},[w("div",{ref_key:"tabWrapperRef$",ref:h,class:s([e.$style["tab-group-wrapper"],e.$style.wrapper,e.$style.flex,e.$style.horizontal,e.$style[n.level]])},[(r(!0),g(ae,null,ne(v.value,([M,d])=>{var $;return r(),g("div",{key:M,ref_for:!0,ref_key:"tabRefs$",ref:T,onClick:We=>J(d),class:s([e.$style["tab-group"],e.$style.wrapper,e.$style.flex,e.$style.horizontal,e.$style.behavior,e.$style.clickable,{[e.$style.active]:(($=a.value)==null?void 0:$.id)===M}])},[d.icon?(r(),V(m(le),{key:0,class:s(e.$style.icon),icon:d.icon},null,8,["class","icon"])):G("",!0),w("p",null,re(d.name),1)],10,ce)}),128))],2),a.value?(r(),V(oe,{key:0,class:s(e.$style.transition),"enter-active-class":e.$style[`slide-${l.value}-enter-active`],"enter-from-class":e.$style[`slide-${l.value}-enter-from`],"leave-active-class":e.$style[`slide-${l.value}-leave-active`],"leave-from-class":e.$style[`slide-${l.value}-leave-from`],mode:"out-in",appear:""},{default:te(()=>[ie(e.$slots,a.value.id,{id:a.value.id,index:t.value,tab:a.value},void 0,!0)]),_:3},8,["class","enter-active-class","enter-from-class","leave-active-class","leave-from-class"])):G("",!0)],2))}}),me="_wrapper_1ism5_1",ue="_flex_1ism5_12",pe="_horizontal_1ism5_48",be="_wrap_1ism5_1",_e="_vertical_1ism5_60",fe="_grid_1ism5_72",ve="_behavior_1ism5_78",ye="_clickable_1ism5_78",ge="_disabled_1ism5_81",he="_draggable_1ism5_84",Te="_move_1ism5_84",ke="_loading_1ism5_87",Me="_transition_1ism5_91",$e="_primary_1ism5_132",we="_secondary_1ism5_138",Ve="_active_1ism5_159",Ge="_icon_1ism5_161",Se={wrapper:me,flex:ue,"col-1":"_col-1_1ism5_12","col-2":"_col-2_1ism5_15","col-3":"_col-3_1ism5_18","col-4":"_col-4_1ism5_21","col-5":"_col-5_1ism5_24","col-6":"_col-6_1ism5_27","col-7":"_col-7_1ism5_30","col-8":"_col-8_1ism5_33","col-9":"_col-9_1ism5_36","col-10":"_col-10_1ism5_39","col-11":"_col-11_1ism5_42","col-12":"_col-12_1ism5_45",horizontal:pe,wrap:be,vertical:_e,grid:fe,behavior:ve,clickable:ye,disabled:ge,draggable:he,move:Te,loading:ke,transition:Me,"slide-left-enter-from":"_slide-left-enter-from_1ism5_91","slide-left-enter-active":"_slide-left-enter-active_1ism5_91","slide-left-leave-from":"_slide-left-leave-from_1ism5_91","slide-left-leave-active":"_slide-left-leave-active_1ism5_91","slide-right-enter-from":"_slide-right-enter-from_1ism5_91","slide-right-enter-active":"_slide-right-enter-active_1ism5_91","slide-right-leave-from":"_slide-right-leave-from_1ism5_91","slide-right-leave-active":"_slide-right-leave-active_1ism5_91","slide-down-enter-from":"_slide-down-enter-from_1ism5_94","slide-down-enter-active":"_slide-down-enter-active_1ism5_94","slide-down-leave-from":"_slide-down-leave-from_1ism5_94","slide-down-leave-active":"_slide-down-leave-active_1ism5_94","fade-enter-from":"_fade-enter-from_1ism5_97","fade-enter-active":"_fade-enter-active_1ism5_97","fade-leave-from":"_fade-leave-from_1ism5_97","fade-leave-active":"_fade-leave-active_1ism5_97","tab-group":"_tab-group_1ism5_117","tab-group-container":"_tab-group-container_1ism5_123","tab-group-wrapper":"_tab-group-wrapper_1ism5_128",primary:$e,secondary:we,"tab-group-viewport-leaving":"_tab-group-viewport-leaving_1ism5_156",active:Ve,icon:Ge},Ie={$style:Se},L=de(K,[["__cssModules",Ie],["__scopeId","data-v-229b1332"]]);K.__docgenInfo={exportName:"default",displayName:"TabGroup",type:1,props:[{name:"level",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | undefined',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | undefined',schema:["undefined",'"primary"','"secondary"']},default:'"primary"'},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"Model | undefined",declarations:[],schema:{kind:"enum",type:"Model | undefined",schema:["undefined",{kind:"object",type:"Model"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"tabs",global:!1,description:"",tags:[],required:!0,type:"Model[] | Map<string, Model>",declarations:[],schema:{kind:"enum",type:"Model[] | Map<string, Model>",schema:[{kind:"array",type:"Model[]"},"Map<string, Model>"]}}],events:[{name:"update:modelValue",description:"",tags:[],type:"[modelValue: Model]",signature:'(event: "update:modelValue", modelValue: Model): void',declarations:[],schema:[{kind:"object",type:"Model"}]}],slots:[],exposed:[{name:"modelValue",type:"Model | undefined",description:"",declarations:[],schema:{kind:"enum",type:"Model | undefined",schema:["undefined",{kind:"object",type:"Model"}]}},{name:"level",type:'"primary" | "secondary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary"',schema:['"primary"','"secondary"']}},{name:"tabs",type:"Model[] | Map<string, Model>",description:"",declarations:[],schema:{kind:"enum",type:"Model[] | Map<string, Model>",schema:[{kind:"array",type:"Model[]"},"Map<string, Model>"]}}],sourceFiles:"/home/runner/work/UI/UI/src/components/layout/tab/TabGroup.vue"};const je={title:"Components / Layout / TabGroup",component:L,tags:["autodocs"],argTypes:{tabs:{control:"object",description:"Tabs for the TabGroup."},modelValue:{control:"object",description:"TabGroup value, use by `v-model`."},"onUpdate:modelValue":{action:"selected"}},args:{"onUpdate:modelValue":Q()}},De=i=>({components:{TabGroup:L},setup(){return{args:i}},template:`
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
  `}),u={args:{tabs:[{id:"tab-1",name:"Tab 1",content:"Tab 1 content"},{id:"tab-2",name:"Tab 2",content:"Tab 2 content"},{id:"tab-3",name:"Tab 3",content:"Tab 3 content"}],modelValue:{id:"tab-1",name:"Tab 1",content:"Tab 1 content"}}},p={args:{tabs:[{id:"tab-1",name:"Tab 1",content:"Tab 1 content"},{id:"tab-2",name:"Tab 2",content:"Tab 2 content"},{id:"tab-3",name:"Tab 3",content:"Tab 3 content"}]}},o={args:{tabs:[{id:"tab-1",name:"Reminder",icon:"fa6-solid:list",content:"Tab 1 content"},{id:"tab-2",name:"Schedule",icon:"fa6-solid:calendar",content:"Tab 2 content"},{id:"tab-3",name:"Settings",icon:"fa6-solid:gears",content:"Tab 3 content"}],modelValue:{id:"tab-1",name:"Reminder",icon:"fa6-solid:list",content:"Tab 1 content"}}},b={args:{...o.args,level:"secondary"}},_={render:De,args:{...o.args}};var I,D,R;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(D=u.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var W,C,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(C=p.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var B,U,z;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(U=o.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var N,j,O;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...DefaultTabGroupWithIcon.args,
    level: 'secondary'
  }
}`,...(O=(j=b.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var P,E,x;_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: UseSlotTemplate,
  args: {
    ...DefaultTabGroupWithIcon.args
  }
}`,...(x=(E=_.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const Oe=["DefaultTabGroup","DefaultTabGroupWithoutParentModel","DefaultTabGroupWithIcon","SecondaryTabGroup","DefaultTabGroupWithSlot"];export{u as DefaultTabGroup,o as DefaultTabGroupWithIcon,_ as DefaultTabGroupWithSlot,p as DefaultTabGroupWithoutParentModel,b as SecondaryTabGroup,Oe as __namedExportsOrder,je as default};
