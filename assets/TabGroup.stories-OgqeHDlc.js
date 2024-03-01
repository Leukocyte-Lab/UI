import{d as Q,U as X,V as q,W as Y,f as g,k as l,E as w,F as V,Q as Z,P as ee,G as s,v as S,x as ae,X as te,K as I,I as ne,B as i,u as oe,J as re,C as le}from"./vue.esm-bundler-B89vGqrN.js";import{I as se}from"./offline-CDMD0XjW.js";import{a as D}from"./index-B4HhDjyf.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BtH2KZwi.js";const de=["onClick"],L=Q({__name:"TabGroup",props:X({tabs:{},modelValue:{},level:{default:"primary"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){ne(e=>({"30610a06":J.value,"7de08df3":H.value})),q();const r=a,t=Y(a,"modelValue",{get(){return r.modelValue??T.value??f.value.values().next().value},set(e){return r.modelValue||(T.value=e),h.value!==n.value&&(h.value=n.value),e}}),m=g([]),T=g(void 0),h=g(null),n=l(()=>t.value?[...f.value.keys()].indexOf(t.value.id)??0:0),_=l(()=>(h.value??n.value)<=n.value?"left":"right"),f=l(()=>Array.isArray(r.tabs)?new Map(r.tabs.map(e=>[e.id,e])):r.tabs),H=l(()=>m.value[n.value]?D(m.value[n.value]).width.value:0),J=l(()=>m.value.slice(0,n.value).reduce((e,y)=>e+D(y).width.value,0)),K=e=>{t.value=e};return(e,y)=>(i(),w("div",{class:s([e.$style["tab-group-container"],e.$style.wrapper,e.$style.flex,e.$style.vertical])},[V("div",{class:s([e.$style["tab-group-wrapper"],e.$style.wrapper,e.$style.flex,e.$style.horizontal,e.$style[r.level]])},[(i(!0),w(Z,null,ee(f.value,([G,b])=>{var $;return i(),w("div",{key:G,ref_for:!0,ref_key:"tabRefs$",ref:m,class:s([e.$style["tab-group"],e.$style.wrapper,e.$style.flex,e.$style.horizontal,e.$style.behavior,e.$style.clickable,{[e.$style.active]:(($=t.value)==null?void 0:$.id)===G}]),onClick:Ce=>K(b)},[b.icon?(i(),S(oe(se),{key:0,class:s(e.$style.icon),icon:b.icon},null,8,["class","icon"])):I("",!0),V("p",null,re(b.name),1)],10,de)}),128))],2),t.value?(i(),S(te,{key:0,class:s(e.$style.transition),"enter-from-class":e.$style[`slide-${_.value}-enter-from`],"enter-active-class":e.$style[`slide-${_.value}-enter-active`],"leave-from-class":e.$style[`slide-${_.value}-leave-from`],"leave-active-class":e.$style[`slide-${_.value}-leave-active`],mode:"out-in",appear:""},{default:ae(()=>[le(e.$slots,t.value.id,{tab:t.value,id:t.value.id,index:n.value},void 0,!0)]),_:3},8,["class","enter-from-class","enter-active-class","leave-from-class","leave-active-class"])):I("",!0)],2))}}),ce="_wrapper_1khw8_1",pe="_flex_1khw8_12",ue="_horizontal_1khw8_48",me="_wrap_1khw8_1",_e="_vertical_1khw8_60",be="_grid_1khw8_72",ve="_behavior_1khw8_78",he="_clickable_1khw8_78",fe="_disabled_1khw8_81",ge="_draggable_1khw8_84",we="_move_1khw8_84",ke="_loading_1khw8_87",Te="_transition_1khw8_91",ye="_primary_1khw8_132",Ge="_secondary_1khw8_138",$e="_active_1khw8_159",Ve="_icon_1khw8_161",Se={wrapper:ce,flex:pe,"col-1":"_col-1_1khw8_12","col-2":"_col-2_1khw8_15","col-3":"_col-3_1khw8_18","col-4":"_col-4_1khw8_21","col-5":"_col-5_1khw8_24","col-6":"_col-6_1khw8_27","col-7":"_col-7_1khw8_30","col-8":"_col-8_1khw8_33","col-9":"_col-9_1khw8_36","col-10":"_col-10_1khw8_39","col-11":"_col-11_1khw8_42","col-12":"_col-12_1khw8_45",horizontal:ue,wrap:me,vertical:_e,grid:be,behavior:ve,clickable:he,disabled:fe,draggable:ge,move:we,loading:ke,transition:Te,"slide-left-enter-from":"_slide-left-enter-from_1khw8_91","slide-left-enter-active":"_slide-left-enter-active_1khw8_91","slide-left-leave-from":"_slide-left-leave-from_1khw8_91","slide-left-leave-active":"_slide-left-leave-active_1khw8_91","slide-right-enter-from":"_slide-right-enter-from_1khw8_91","slide-right-enter-active":"_slide-right-enter-active_1khw8_91","slide-right-leave-from":"_slide-right-leave-from_1khw8_91","slide-right-leave-active":"_slide-right-leave-active_1khw8_91","slide-down-enter-from":"_slide-down-enter-from_1khw8_94","slide-down-enter-active":"_slide-down-enter-active_1khw8_94","slide-down-leave-from":"_slide-down-leave-from_1khw8_94","slide-down-leave-active":"_slide-down-leave-active_1khw8_94","fade-enter-from":"_fade-enter-from_1khw8_97","fade-enter-active":"_fade-enter-active_1khw8_97","fade-leave-from":"_fade-leave-from_1khw8_97","fade-leave-active":"_fade-leave-active_1khw8_97","tab-group":"_tab-group_1khw8_117","tab-group-container":"_tab-group-container_1khw8_123","tab-group-wrapper":"_tab-group-wrapper_1khw8_128",primary:ye,secondary:Ge,"tab-group-viewport-leaving":"_tab-group-viewport-leaving_1khw8_156",active:$e,icon:Ve},Ie={$style:Se},v=ie(L,[["__cssModules",Ie],["__scopeId","data-v-3820d0b0"]]);L.__docgenInfo={exportName:"default",displayName:"TabGroup",description:"",tags:{},props:[{name:"level",defaultValue:{func:!1,value:"'primary'"}}],slots:[{name:"selected.id",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"tab",title:"binding"},{name:"id",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/home/runner/work/UI/UI/src/components/layout/tab/TabGroup.vue"]};const Ee={title:"Components / Layout / TabGroup",component:v,tags:["autodocs"],argTypes:{tabs:{control:"object",description:"Tabs for the TabGroup."},modelValue:{control:"object",description:"TabGroup value, use by `v-model`."},"onUpdate:modelValue":{action:"selected"}}},k=a=>({components:{TabGroup:v},setup(){return{args:a}},template:'<TabGroup v-model="args.modelValue" v-bind="args" />'}),De=a=>({components:{TabGroup:v},setup(){return{args:a}},template:'<TabGroup v-bind="args" />'}),xe=a=>({components:{TabGroup:v},setup(){return{args:a}},template:`
    <TabGroup v-model="args.modelValue" v-bind="args">
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
  `}),d=k.bind({});d.args={tabs:[{id:"tab-1",name:"Tab 1",content:"Tab 1 content"},{id:"tab-2",name:"Tab 2",content:"Tab 2 content"},{id:"tab-3",name:"Tab 3",content:"Tab 3 content"}],modelValue:{id:"tab-1",name:"Tab 1",content:"Tab 1 content"}};const c=De.bind({});c.args={tabs:[{id:"tab-1",name:"Tab 1",content:"Tab 1 content"},{id:"tab-2",name:"Tab 2",content:"Tab 2 content"},{id:"tab-3",name:"Tab 3",content:"Tab 3 content"}]};const o=k.bind({});o.args={tabs:[{id:"tab-1",name:"Reminder",icon:"fa6-solid:list",content:"Tab 1 content"},{id:"tab-2",name:"Schedule",icon:"fa6-solid:calendar",content:"Tab 2 content"},{id:"tab-3",name:"Settings",icon:"fa6-solid:gears",content:"Tab 3 content"}],modelValue:{id:"tab-1",name:"Reminder",icon:"fa6-solid:list",content:"Tab 1 content"}};const p=k.bind({});p.args={...o.args,level:"secondary"};const u=xe.bind({});u.args={...o.args};var x,C,M;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    TabGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TabGroup v-model="args.modelValue" v-bind="args" />'
})`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var W,z,B;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    TabGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TabGroup v-bind="args" />'
})`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var U,E,N;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    TabGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TabGroup v-model="args.modelValue" v-bind="args" />'
})`,...(N=(E=o.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var R,F,O;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    TabGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TabGroup v-model="args.modelValue" v-bind="args" />'
})`,...(O=(F=p.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var P,j,A;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    TabGroup
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <TabGroup v-model="args.modelValue" v-bind="args">
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
  \`
})`,...(A=(j=u.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const Ne=["DefaultTabGroup","DefaultTabGroupWithoutParentModel","DefaultTabGroupWithIcon","SecondaryTabGroup","DefaultTabGroupWithSlot"];export{d as DefaultTabGroup,o as DefaultTabGroupWithIcon,u as DefaultTabGroupWithSlot,c as DefaultTabGroupWithoutParentModel,p as SecondaryTabGroup,Ne as __namedExportsOrder,Ee as default};
