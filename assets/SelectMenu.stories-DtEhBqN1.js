import{f as g}from"./index-C_FWhylE.js";import{S as ie}from"./SelectMenu-BA4iwD17.js";import"./vue.esm-bundler-Cgevx0fF.js";import"./offline-BywLNg82.js";import"./index-tuNnGjE_.js";import"./index-GhzsnJnn.js";import"./ButtonBox-DAEay1Ro.js";import"./BaseLink-4Vj3XkgT.js";import"./BasePoly-BGIOzI-m.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./event-CM_t5hrc.js";import"./signal-JkfiDz0j.js";import"./CardBox-BTOrmPFD.js";import"./TextField-DxkQu7iR.js";import"./validation-B_njML68.js";import"./_mapToArray-DQAMS4kQ.js";import"./_getNative-DtZiGuWL.js";import"./_flatRest-D8zUO0su.js";import"./_overRest-oQv66n7P.js";import"./last-D-rYfuUG.js";import"./parser-D2KxZbRK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./map-D4_8H8BK.js";import"./toNumber-BzTP0tFp.js";import"./map-cdTs1dOm.js";import"./groupBy-DruIr8DK.js";const qe={title:"Components / Element / Menu / SelectMenu",component:ie,tags:["autodocs"],argTypes:{options:{control:"object",description:"Data to be displayed in the menu."},fields:{control:"object",description:"Fields to control options displayed in the menu."},modelValue:{control:"object",description:"SelectMenu value, use by `v-model`."},multiple:{control:"boolean",description:"Whether the menu allows multiple selections."},groupBy:{control:"text",description:"Group options by a field."},label:{control:"text",description:"Label for the menu."},useSearch:{control:"boolean",description:"Enable search functionality."},showAll:{if:{arg:"useSearch",eq:!0},control:"boolean",description:"Always show all options when search is enabled."},"onUpdate:modelValue":{action:"selected"},"onUpdate:query":{action:"search"}},args:{modelValue:void 0,"onUpdate:modelValue":g(),"onUpdate:query":g()}},n={args:{options:[{name:"APT-38",description:"APT-38 is a threat group that has been attributed to the North Korean government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-39",description:"APT-39 is a threat group that has been attributed to the Iranian government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z",disabled:!0},{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Nginx Techniques",description:"Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Apache Techniques",description:"Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}],fields:{key:"name",title:"{{ $.name }}",disabled:"disabled"},multiple:!1}},e={args:{...n.args,modelValue:{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}}},s={args:{...e.args,fields:{...e.args.fields,searchKeys:["name","description"]},useSearch:!0,showAll:!1}},i={args:{...e.args,fields:{...e.args.fields,searchKeys:["name","description"]},query:"apt",useSearch:!0,showAll:!1}},o={args:{...n.args,modelValue:{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},fields:{key:"name",title:"{{ $.name }}",content:"{{ $.category }}"}}},c={args:{...e.args,groupBy:"category"}},l={args:{...o.args,fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},groupBy:"category"}},t={args:{...n.args,modelValue:[{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}],label:"Playbook",multiple:!0}},u={args:{...t.args,fields:{...t.args.fields,searchKeys:["name","description"]},useSearch:!0,showAll:!1}},a={args:{...t.args,modelValue:[{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00.000Z"},{name:"Apache Techniques",description:"Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00.000Z"}],fields:{key:"name",title:"{{ $.name }}",content:"{{ $.category }}"},multiple:!0}},d={args:{...t.args,multiple:!0,groupBy:"category"}},p={args:{...a.args,fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},multiple:!0,groupBy:"category"}},r={args:{...a.args,options:[...a.args.options,{name:"APT-41",description:"APT-41 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-42",description:"APT-42 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-43",description:"APT-43 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-44",description:"APT-44 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-45",description:"APT-45 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}],fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},multiple:!0,groupBy:"category"}},m={args:{...r.args,fields:{...r.args.fields,searchKeys:["name","description"]},useSearch:!0,showAll:!1}},h={args:{options:[{action:"Sort by Time",direction:"Latest First",icon:"fa6-solid:arrow-down-wide-short"},{action:"Sort by Time",direction:"Oldest First",icon:"fa6-solid:arrow-up-wide-short"},{action:"Sort by Name",direction:"Ascending (A to Z)",icon:"fa6-solid:arrow-down-a-z"},{action:"Sort by Name",direction:"Descending (Z to A)",icon:"fa6-solid:arrow-up-z-a"}],fields:{key:"direction",title:"{{ $.action }}",content:"{{ $.direction }}",icon:"icon"}}};var y,S,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options: [{
      name: 'APT-38',
      description: 'APT-38 is a threat group that has been attributed to the North Korean government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }, {
      name: 'APT-39',
      description: 'APT-39 is a threat group that has been attributed to the Iranian government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z',
      disabled: true
    }, {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }, {
      name: 'Nginx Techniques',
      description: 'Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
      category: 'Technique Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }, {
      name: 'Apache Techniques',
      description: 'Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
      category: 'Technique Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }],
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      disabled: 'disabled'
    },
    multiple: false
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var b,A,M;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...DefaultSelectMenu.args,
    modelValue: {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }
  }
}`,...(M=(A=e.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var P,f,U;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...SingleSelectMenu.args,
    fields: {
      ...SingleSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true,
    showAll: false
  }
}`,...(U=(f=s.parameters)==null?void 0:f.docs)==null?void 0:U.source}}};var v,w,G;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...SingleSelectMenu.args,
    fields: {
      ...SingleSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    query: 'apt',
    useSearch: true,
    showAll: false
  }
}`,...(G=(w=i.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var D,Z,W;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...DefaultSelectMenu.args,
    modelValue: {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    },
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: '{{ $.category }}'
    }
  }
}`,...(W=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:W.source}}};var $,C,x;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...SingleSelectMenu.args,
    groupBy: 'category'
  }
}`,...(x=(C=c.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var q,k,V;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...SingleWithSubtitleSelectMenu.args,
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    groupBy: 'category'
  }
}`,...(V=(k=l.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var B,K,N;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...DefaultSelectMenu.args,
    modelValue: [{
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }],
    label: 'Playbook',
    multiple: true
  }
}`,...(N=(K=t.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var L,O,H;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...MultiSelectMenu.args,
    fields: {
      ...MultiSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true,
    showAll: false
  }
}`,...(H=(O=u.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var F,z,I;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...MultiSelectMenu.args,
    modelValue: [{
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00.000Z'
    }, {
      name: 'Apache Techniques',
      description: 'Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
      category: 'Technique Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00.000Z'
    }],
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: '{{ $.category }}'
    },
    multiple: true
  }
}`,...(I=(z=a.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var j,E,Q;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...MultiSelectMenu.args,
    multiple: true,
    groupBy: 'category'
  }
}`,...(Q=(E=d.parameters)==null?void 0:E.docs)==null?void 0:Q.source}}};var _,J,R;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...MultiWithSubtitleSelectMenu.args,
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    multiple: true,
    groupBy: 'category'
  }
}`,...(R=(J=p.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var X,Y,ee;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...MultiWithSubtitleSelectMenu.args,
    options: [...MultiWithSubtitleSelectMenu.args!.options!, {
      name: 'APT-41',
      description: 'APT-41 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }, {
      name: 'APT-42',
      description: 'APT-42 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }, {
      name: 'APT-43',
      description: 'APT-43 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }, {
      name: 'APT-44',
      description: 'APT-44 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }, {
      name: 'APT-45',
      description: 'APT-45 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }],
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    multiple: true,
    groupBy: 'category'
  }
}`,...(ee=(Y=r.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,ne,ae;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...GroupOverflowWithSubtitleMultiSelectMenu.args,
    fields: {
      ...GroupOverflowWithSubtitleMultiSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true,
    showAll: false
  }
}`,...(ae=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,oe,se;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    options: [{
      action: 'Sort by Time',
      direction: 'Latest First',
      icon: 'fa6-solid:arrow-down-wide-short'
    }, {
      action: 'Sort by Time',
      direction: 'Oldest First',
      icon: 'fa6-solid:arrow-up-wide-short'
    }, {
      action: 'Sort by Name',
      direction: 'Ascending (A to Z)',
      icon: 'fa6-solid:arrow-down-a-z'
    }, {
      action: 'Sort by Name',
      direction: 'Descending (Z to A)',
      icon: 'fa6-solid:arrow-up-z-a'
    }],
    fields: {
      key: 'direction',
      title: '{{ $.action }}',
      content: '{{ $.direction }}',
      icon: 'icon'
    }
  }
}`,...(se=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const ke=["DefaultSelectMenu","SingleSelectMenu","SingleSelectMenuWithSearch","SingleSelectMenuWithSearchWithPredefinedQuery","SingleWithSubtitleSelectMenu","GroupSingleSelectMenu","GroupWithSubtitleSingleSelectMenu","MultiSelectMenu","MultiSelectMenuWithSearch","MultiWithSubtitleSelectMenu","GroupMultiSelectMenu","GroupWithSubtitleMultiSelectMenu","GroupOverflowWithSubtitleMultiSelectMenu","GroupOverflowWithSubtitleMultiSelectWithSearchMenu","IconWithSubtitleSelectMenu"];export{n as DefaultSelectMenu,d as GroupMultiSelectMenu,r as GroupOverflowWithSubtitleMultiSelectMenu,m as GroupOverflowWithSubtitleMultiSelectWithSearchMenu,c as GroupSingleSelectMenu,p as GroupWithSubtitleMultiSelectMenu,l as GroupWithSubtitleSingleSelectMenu,h as IconWithSubtitleSelectMenu,t as MultiSelectMenu,u as MultiSelectMenuWithSearch,a as MultiWithSubtitleSelectMenu,e as SingleSelectMenu,s as SingleSelectMenuWithSearch,i as SingleSelectMenuWithSearchWithPredefinedQuery,o as SingleWithSubtitleSelectMenu,ke as __namedExportsOrder,qe as default};
