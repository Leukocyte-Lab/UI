import{f as S}from"./index-C_FWhylE.js";import{S as ge}from"./SelectMenu-CLxzJonS.js";import"./vue.esm-bundler-BpHB5au2.js";import"./offline-D50ZPfOp.js";import"./index-fh8yLtER.js";import"./index-LawT-h5P.js";import"./ButtonBox-tMsUyQyC.js";import"./BaseLink-DLJPWV9V.js";import"./BasePoly-DSEL_Kpu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./event-D4DwHhTB.js";import"./signal-aVDzw2N4.js";import"./CardBox-D6dYwIm9.js";import"./TextField-D_M-T5j9.js";import"./validation-CyA4SfeB.js";import"./_mapToArray-VNT0Ttt3.js";import"./_getNative-BogmDzHj.js";import"./_flatRest-BAEVAHO-.js";import"./_overRest-zK1fGxME.js";import"./last-D-rYfuUG.js";import"./parser-BWHUHmdy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./map-DlRUZNXA.js";import"./toNumber-t3fhV6Fy.js";import"./map-cdTs1dOm.js";import"./_basePickBy-Doj5-EjY.js";import"./groupBy-CnAJZ23M.js";const ze={title:"Components / Element / Menu / SelectMenu",component:ge,tags:["autodocs"],argTypes:{options:{control:"object",description:"Data to be displayed in the menu."},fields:{control:"object",description:"Fields to control options displayed in the menu."},modelValue:{control:"object",description:"SelectMenu value, use by `v-model`."},query:{if:{arg:"useSearch",eq:!0},control:"text",description:"Search query."},multiple:{control:"boolean",description:"Whether the menu allows multiple selections."},groupBy:{control:"text",description:"Group options by a field."},label:{control:"text",description:"Label for the menu."},useSearch:{control:"boolean",description:"Enable search functionality."},showAll:{if:{arg:"useSearch",eq:!0},control:"boolean",description:"Always show all options when search is enabled."},"onUpdate:modelValue":{action:"selected"},"onUpdate:query":{action:"search"}},args:{modelValue:void 0,"onUpdate:modelValue":S(),"onUpdate:query":S()}},n={args:{options:[{name:"APT-38",description:"APT-38 is a threat group that has been attributed to the North Korean government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-39",description:"APT-39 is a threat group that has been attributed to the Iranian government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z",disabled:!0},{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Nginx Techniques",description:"Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Apache Techniques",description:"Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}],fields:{key:"name",title:"{{ $.name }}",disabled:"disabled"},multiple:!1}},e={args:{...n.args,modelValue:{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}}},s={args:{...e.args,fields:{...e.args.fields,searchKeys:["name","description"]},useSearch:!0,showAll:!1}},i={args:{...e.args,fields:{...e.args.fields,searchKeys:["name","description"]},query:"apt",useSearch:!0,showAll:!1}},o={args:{...n.args,modelValue:{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},fields:{key:"name",title:"{{ $.name }}",content:"{{ $.category }}"}}},c={args:{...e.args,groupBy:"category"}},l={args:{...o.args,fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},groupBy:"category"}},a={args:{...n.args,modelValue:[{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}],label:"Playbook",multiple:!0}},u={args:{...a.args,fields:{...a.args.fields,searchKeys:["name","description"]},useSearch:!0,showAll:!1}},t={args:{...a.args,modelValue:[{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00.000Z"},{name:"Apache Techniques",description:"Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00.000Z"}],fields:{key:"name",title:"{{ $.name }}",content:"{{ $.category }}"},multiple:!0}},d={args:{...a.args,multiple:!0,groupBy:"category"}},p={args:{...t.args,fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},multiple:!0,groupBy:"category"}},r={args:{...t.args,options:[...t.args.options,{name:"APT-41",description:"APT-41 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-42",description:"APT-42 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-43",description:"APT-43 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-44",description:"APT-44 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-45",description:"APT-45 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}],fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},multiple:!0,groupBy:"category"}},m={args:{...r.args,fields:{...r.args.fields,searchKeys:["name","description"]},useSearch:!0,showAll:!1}},h={args:{...t.args,fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},query:"apt",multiple:!0,useSearch:!0,showAll:!0,groupBy:"category",alterStr:{clearSelection:"Clear All Selections",noData:"No Data Found"}}},g={render:ye=>({components:{SelectMenu:ge},setup(){return{args:ye}},template:`
      <SelectMenu v-bind="args">
        <template #empty-placeholder="{ groupName }">
          <div>No matched data found for group:<br /><em><strong>{{ groupName }}</strong></em></div>
        </template>
        <template #clear-selection="{ clearSelection }">
          <button @click="clearSelection">Clear Selection</button>
        </template>
      </SelectMenu>
    `}),args:{...t.args,fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},query:"apt",multiple:!0,useSearch:!0,showAll:!0,groupBy:"category"}},y={args:{options:[{action:"Sort by Time",direction:"Latest First",icon:"fa6-solid:arrow-down-wide-short"},{action:"Sort by Time",direction:"Oldest First",icon:"fa6-solid:arrow-up-wide-short"},{action:"Sort by Name",direction:"Ascending (A to Z)",icon:"fa6-solid:arrow-down-a-z"},{action:"Sort by Name",direction:"Descending (Z to A)",icon:"fa6-solid:arrow-up-z-a"}],fields:{key:"direction",title:"{{ $.action }}",content:"{{ $.direction }}",icon:"icon"}}};var T,b,M;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(b=n.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var A,P,f;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...DefaultSelectMenu.args,
    modelValue: {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }
  }
}`,...(f=(P=e.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var U,v,w;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...SingleSelectMenu.args,
    fields: {
      ...SingleSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true,
    showAll: false
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var D,G,W;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(G=i.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var Z,$,C;o.parameters={...o.parameters,docs:{...(Z=o.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(C=($=o.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var q,x,k;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...SingleSelectMenu.args,
    groupBy: 'category'
  }
}`,...(k=(x=c.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var N,B,L;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...SingleWithSubtitleSelectMenu.args,
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    groupBy: 'category'
  }
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var V,K,O;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(O=(K=a.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var F,H,z;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...MultiSelectMenu.args,
    fields: {
      ...MultiSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true,
    showAll: false
  }
}`,...(z=(H=u.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var I,j,E;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(j=t.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var Q,_,J;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...MultiSelectMenu.args,
    multiple: true,
    groupBy: 'category'
  }
}`,...(J=(_=d.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var R,X,Y;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,te,ae;r.parameters={...r.parameters,docs:{...(ee=r.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=r.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,oe;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...GroupOverflowWithSubtitleMultiSelectMenu.args,
    fields: {
      ...GroupOverflowWithSubtitleMultiSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true,
    showAll: false
  }
}`,...(oe=(re=m.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ie,ce;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...MultiWithSubtitleSelectMenu.args,
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    query: 'apt',
    multiple: true,
    useSearch: true,
    showAll: true,
    groupBy: 'category',
    alterStr: {
      clearSelection: 'Clear All Selections',
      noData: 'No Data Found'
    }
  }
}`,...(ce=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,ue,de;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SelectMenu
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <SelectMenu v-bind="args">
        <template #empty-placeholder="{ groupName }">
          <div>No matched data found for group:<br /><em><strong>{{ groupName }}</strong></em></div>
        </template>
        <template #clear-selection="{ clearSelection }">
          <button @click="clearSelection">Clear Selection</button>
        </template>
      </SelectMenu>
    \`
  }),
  args: {
    ...MultiWithSubtitleSelectMenu.args,
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    query: 'apt',
    multiple: true,
    useSearch: true,
    showAll: true,
    groupBy: 'category'
  }
}`,...(de=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,he;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(me=y.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};const Ie=["DefaultSelectMenu","SingleSelectMenu","SingleSelectMenuWithSearch","SingleSelectMenuWithSearchWithPredefinedQuery","SingleWithSubtitleSelectMenu","GroupSingleSelectMenu","GroupWithSubtitleSingleSelectMenu","MultiSelectMenu","MultiSelectMenuWithSearch","MultiWithSubtitleSelectMenu","GroupMultiSelectMenu","GroupWithSubtitleMultiSelectMenu","GroupOverflowWithSubtitleMultiSelectMenu","GroupOverflowWithSubtitleMultiSelectWithSearchMenu","SelectMenuWithCustomText","SelectMenuWithCustomSlots","IconWithSubtitleSelectMenu"];export{n as DefaultSelectMenu,d as GroupMultiSelectMenu,r as GroupOverflowWithSubtitleMultiSelectMenu,m as GroupOverflowWithSubtitleMultiSelectWithSearchMenu,c as GroupSingleSelectMenu,p as GroupWithSubtitleMultiSelectMenu,l as GroupWithSubtitleSingleSelectMenu,y as IconWithSubtitleSelectMenu,a as MultiSelectMenu,u as MultiSelectMenuWithSearch,t as MultiWithSubtitleSelectMenu,g as SelectMenuWithCustomSlots,h as SelectMenuWithCustomText,e as SingleSelectMenu,s as SingleSelectMenuWithSearch,i as SingleSelectMenuWithSearchWithPredefinedQuery,o as SingleWithSubtitleSelectMenu,Ie as __namedExportsOrder,ze as default};
