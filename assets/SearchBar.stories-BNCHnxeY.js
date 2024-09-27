import{d as A,b as q,w as B,E as V,L as x,u as a,c as D,G as c,x as j,K as U,B as p}from"./vue.esm-bundler-Cgevx0fF.js";import{u as _,S as O,v as w}from"./SelectMenu-BUZtytO6.js";import{T as L}from"./TextField-CLL54UbT.js";import{s as N}from"./signal-JkfiDz0j.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./offline-BywLNg82.js";import"./index-tuNnGjE_.js";import"./index-GhzsnJnn.js";import"./ButtonBox-CA9eCT8G.js";import"./BaseLink-4Vj3XkgT.js";import"./BasePoly-BGIOzI-m.js";import"./event-CM_t5hrc.js";import"./CardBox-BScmG8nP.js";import"./parser-D2KxZbRK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_mapToArray-DQAMS4kQ.js";import"./_getNative-DtZiGuWL.js";import"./map-D4_8H8BK.js";import"./last-D-rYfuUG.js";import"./toNumber-BzTP0tFp.js";import"./map-cdTs1dOm.js";import"./validation-B_njML68.js";import"./_flatRest-D8zUO0su.js";import"./_overRest-oQv66n7P.js";import"./groupBy-DruIr8DK.js";const k=A({__name:"SearchBar",props:{fields:{},modelValue:{default:""},items:{default:()=>[]},disabled:{type:Boolean}},emits:["update:modelValue","select"],setup(v,{emit:S}){const s=v,u=S,l=q(),r=N(!1),P=t=>{t&&(u("update:modelValue",w(t,s.fields.key)),u("select",t),r.set(!0))},{result:m,query:i}=_(s.items,{getters:s.fields.searchKeys??[],options:{strict:!0}});return B(l,P),(t,e)=>(p(),V("div",{class:c(t.$style["search-bar--container"])},[x(L,{modelValue:a(i),"onUpdate:modelValue":e[0]||(e[0]=n=>D(i)?i.value=n:null),onBlur:e[1]||(e[1]=n=>a(r).set(!0)),onClick:e[2]||(e[2]=n=>a(r).set(!1)),onFocus:e[3]||(e[3]=n=>a(r).set(!1)),class:c(t.$style["search-bar--input"]),disabled:s.disabled,type:"search"},null,8,["modelValue","class","disabled"]),a(i)&&a(m).length>0&&!a(r)()?(p(),j(O,{key:0,modelValue:l.value,"onUpdate:modelValue":e[4]||(e[4]=n=>l.value=n),class:c(t.$style["search-bar--menu"]),fields:s.fields,options:a(m)},null,8,["modelValue","class","fields","options"])):U("",!0)],2))}}),Z={"search-bar--container":"_search-bar--container_1ggln_1","search-bar--input":"_search-bar--input_1ggln_7","search-bar--menu":"_search-bar--menu_1ggln_10"},C={$style:Z},G=$(k,[["__cssModules",C],["__scopeId","data-v-348624ed"]]);k.__docgenInfo={exportName:"default",displayName:"SearchBar",type:1,props:[{name:"items",global:!1,description:"",tags:[],required:!1,type:"ObjectLike[] | undefined",declarations:[],schema:{kind:"enum",type:"ObjectLike[] | undefined",schema:["undefined",{kind:"array",type:"ObjectLike[]"}]},default:"[]"},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"fields",global:!1,description:"",tags:[],required:!0,type:"Fields<ObjectLike>",declarations:[],schema:{kind:"object",type:"Fields<ObjectLike>"}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[option: any]",signature:'(event: "update:modelValue", option: any): void',declarations:[],schema:["any"]},{name:"select",description:"",tags:[],type:"[option: ObjectLike]",signature:'(event: "select", option: ObjectLike): void',declarations:[],schema:["ObjectLike"]}],slots:[],exposed:[{name:"items",type:"ObjectLike[]",description:"",declarations:[],schema:{kind:"array",type:"ObjectLike[]"}},{name:"fields",type:"Fields<ObjectLike>",description:"",declarations:[],schema:{kind:"object",type:"Fields<ObjectLike>"}},{name:"modelValue",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean | undefined",description:"",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/UI/UI/src/components/element/search-bar/SearchBar.vue"};const me={title:"Components / Element / SearchBar",component:G,tags:["autodocs"],argTypes:{items:{control:"object",description:"Data to be displayed in the menu."},modelValue:{control:"text",description:"SearchBar value, use by `v-model`."},disabled:{control:"boolean",description:"SearchBar disabled (optional)"},"onUpdate:modelValue":{action:"search"},onSelect:{action:"selected"}}},o={args:{items:[{name:"APT-38",description:"APT-38 is a threat group that has been attributed to the North Korean government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-39",description:"APT-39 is a threat group that has been attributed to the Iranian government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Nginx test Techniques",description:"Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Apache test Techniques",description:"Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",framework:{technique:"T1012s"},recentlyUsed:"2021-01-01T00:00:00Z"}],fields:{key:"name",title:"{{ $.name }}",content:"{{ $.category }}",searchKeys:["name","category"]}}},d={args:{...o.args,disabled:!0}};var y,h,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'APT-38',
      description: 'APT-38 is a threat group that has been attributed to the North Korean government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }, {
      name: 'APT-39',
      description: 'APT-39 is a threat group that has been attributed to the Iranian government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }, {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }, {
      name: 'Nginx test Techniques',
      description: 'Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
      category: 'Technique Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }, {
      name: 'Apache test Techniques',
      description: 'Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
      category: 'Technique Simulation Data',
      framework: {
        technique: 'T1012s'
      },
      recentlyUsed: '2021-01-01T00:00:00Z'
    }],
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: '{{ $.category }}',
      searchKeys: ['name', 'category']
    }
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,b,T;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...DefaultSearchBar.args,
    disabled: true
  }
}`,...(T=(b=d.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const pe=["DefaultSearchBar","DisabledSearchBar"];export{o as DefaultSearchBar,d as DisabledSearchBar,pe as __namedExportsOrder,me as default};
