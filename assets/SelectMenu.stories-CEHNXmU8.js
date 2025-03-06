import{f as A}from"./index-B5ZI-g0m.js";import{S as xe}from"./SelectMenu-BFjRJZlh.js";import"./vue.esm-bundler-ci6tbuJ3.js";import"./offline-ChRR0KDp.js";import"./index-kfNwdgEE.js";import"./index-DNcykg7C.js";import"./ButtonBox-DOyq-EZ9.js";import"./BaseLink-Dp3waMOx.js";import"./BasePoly-B76thUAg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./event-C_87_Ct4.js";import"./signal-tm0tqg-l.js";import"./CardBox-DlWXg0f4.js";import"./TextField-Bu-aa_Gi.js";import"./validation-CyA4SfeB.js";import"./_mapToArray-VNT0Ttt3.js";import"./_getNative-BogmDzHj.js";import"./_flatRest-BAEVAHO-.js";import"./_overRest-zK1fGxME.js";import"./last-D-rYfuUG.js";import"./parser-B_CS4nKE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./map-DlRUZNXA.js";import"./toNumber-t3fhV6Fy.js";import"./map-cdTs1dOm.js";import"./_basePickBy-Doj5-EjY.js";import"./groupBy-CnAJZ23M.js";const ot={title:"Components / Element / Menu / SelectMenu",component:xe,tags:["autodocs"],argTypes:{options:{control:"object",description:"Data to be displayed in the menu."},fields:{control:"object",description:"Fields to control options displayed in the menu."},modelValue:{control:"object",description:"SelectMenu value, use by `v-model`."},query:{if:{arg:"useSearch",eq:!0},control:"text",description:"Search query."},multiple:{control:"boolean",description:"Whether the menu allows multiple selections."},groupBy:{control:"text",description:"Group options by a field."},label:{control:"text",description:"Label for the menu."},useSearch:{control:"boolean",description:"Enable search functionality."},showAll:{if:{arg:"useSearch",eq:!0},control:"boolean",description:"Always show all options when search is enabled."},"onUpdate:modelValue":{action:"selected"},"onUpdate:query":{action:"search"}},args:{modelValue:void 0,"onUpdate:modelValue":A(),"onUpdate:query":A()}},r={args:{options:[{name:"APT-38",description:"APT-38 is a threat group that has been attributed to the North Korean government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-39",description:"APT-39 is a threat group that has been attributed to the Iranian government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z",disabled:!0},{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Nginx Techniques",description:"Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Apache Techniques",description:"Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}],fields:{key:"name",title:"{{ $.name }}",disabled:"disabled"},multiple:!1}},s={args:{options:["Option 1","Option 2","Option 3"]}},i={args:{options:["Option 1","Option 2","Option 3"],label:"Options",multiple:!0}},l={args:{options:["Option 1","Option 2","Option 3"],useSearch:!0}},t={args:{...r.args,modelValue:{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}}},c={args:{...t.args,fields:{...t.args.fields,searchKeys:["name","description"]},useSearch:!0,showAll:!1}},u={args:{...t.args,fields:{...t.args.fields,searchKeys:["name","description"]},query:"apt",useSearch:!0,showAll:!1}},o={args:{...r.args,modelValue:{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},fields:{key:"name",title:"{{ $.name }}",content:"{{ $.category }}"}}},p={args:{...t.args,groupBy:"category"}},d={args:{...o.args,fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},groupBy:"category"}},a={args:{...r.args,modelValue:[{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}],label:"Playbook",multiple:!0}},m={args:{...a.args,fields:{...a.args.fields,searchKeys:["name","description"]},useSearch:!0,showAll:!1}},e={args:{...a.args,modelValue:[{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00.000Z"},{name:"Apache Techniques",description:"Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00.000Z"}],fields:{key:"name",title:"{{ $.name }}",content:"{{ $.category }}"},multiple:!0}},h={args:{...a.args,multiple:!0,groupBy:"category"}},g={args:{...e.args,fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},multiple:!0,groupBy:"category"}},n={args:{...e.args,options:[...e.args.options,{name:"APT-41",description:"APT-41 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-42",description:"APT-42 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-43",description:"APT-43 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-44",description:"APT-44 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-45",description:"APT-45 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"}],fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},multiple:!0,groupBy:"category"}},y={args:{...n.args,fields:{...n.args.fields,searchKeys:["name","description"]},useSearch:!0,showAll:!1}},S={args:{...e.args,fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},query:"apt",multiple:!0,useSearch:!0,showAll:!0,groupBy:"category",alterStr:{clearSelection:"Clear All Selections",noData:"No Data Found"}}},b={args:{...e.args,fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},query:"apt",multiple:!0,useSearch:!0,showAll:!0,groupBy:"category"},parameters:{slots:{"empty-placeholder":{template:`
          <template #empty-placeholder="{ groupName }">
            <div>No data here!</div>
          </template>`},"clear-selection":{template:`
          <template #clear-selection="{ clearSelection }">
            <button @click="clearSelection">Clear Selection</button>
          </template>
        `},"no-match-placeholder":{template:`
          <template #no-match-placeholder="{ groupName }">
            <div style="padding: 16px; border: 1px dashed #888; border-radius: 8px;">
              <p>No matched data found for group:</p><br />
              <em><strong>{{ groupName }}</strong></em>
            </div>
          </template>
        `}}}},T={args:{...e.args,fields:{key:"name",title:"{{ $.name }}",content:"Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}"},query:"apt",multiple:!0,useSearch:!0,showAll:!0,groupBy:"category"},parameters:{slots:{header:{template:`
          <template #header="{ selection, multiple, useSearch, searchQuery, result, label, clearSelection }">
            <label>{{ label }}</label>
            <p>
              <span
                >{{ String(selection.size ?? selection.length).padStart(2, '0') }}
                Selected</span
              >
              <button @click="clearSelection">⟳</button>
            </p>
            <template v-if="useSearch">
              <input v-model="args.query" type="search" placeholder="Search..." />
            </template>
          </template>
        `},default:{template:`
          <template #default="{ option }">
            {{ option.selected ? '😀' : '🫥' }}
            <div>
              <strong>{{ option.payload.name }}</strong>
              <p>{{ option.payload.category }}</p>
            </div>
          </template>
        `},footer:{template:`
          <template #footer="{ label }">
            <button
              @click="args.options.push({
                name: \`APT-\${(Math.random() * 100).toFixed(0).padStart(2, '0')}\`,
                description: \`APT-\${(Math.random() * 100).toFixed(0)} is a threat group that has been attributed to the Chinese government.\`,
                category: 'APT Group Simulation Data',
                recentlyUsed: '2021-01-01T00:00:00Z'
              })"
              style="
                appearance: none;
                padding: 8px;
                background-color: #000;
                color: #fff;
                border: 0;
              "
            >
              Add more {{ label }}
            </button>
          </template>
        `},"no-match-placeholder":{template:`
          <template #no-match-placeholder="{ groupName }">
            <div style="padding: 16px; border: 1px dashed #888; border-radius: 8px;">
              <p>No matched data found for group:</p><br />
              <em><strong>{{ groupName }}</strong></em>
            </div>
          </template>
        `}}}},M={args:{options:[{action:"Sort by Time",direction:"Latest First",icon:"fa6-solid:arrow-down-wide-short"},{action:"Sort by Time",direction:"Oldest First",icon:"fa6-solid:arrow-up-wide-short"},{action:"Sort by Name",direction:"Ascending (A to Z)",icon:"fa6-solid:arrow-down-a-z"},{action:"Sort by Name",direction:"Descending (Z to A)",icon:"fa6-solid:arrow-up-z-a"}],fields:{key:"direction",title:"{{ $.action }}",content:"{{ $.direction }}",icon:"icon"}}};var f,P,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(P=r.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var U,w,D;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options: ['Option 1', 'Option 2', 'Option 3']
  }
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var W,G,$;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Options',
    multiple: true
  }
}`,...($=(G=i.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var x,Z,C;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    useSearch: true
  }
}`,...(C=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:C.source}}};var k,O,q;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...DefaultSelectMenu.args,
    modelValue: {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }
  }
}`,...(q=(O=t.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var N,B,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...SingleSelectMenu.args,
    fields: {
      ...SingleSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true,
    showAll: false
  }
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var V,F,K;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(K=(F=u.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var z,H,I;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=(H=o.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var Q,j,E;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...SingleSelectMenu.args,
    groupBy: 'category'
  }
}`,...(E=(j=p.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var _,J,R;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...SingleWithSubtitleSelectMenu.args,
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    groupBy: 'category'
  }
}`,...(R=(J=d.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var X,Y,ee;a.parameters={...a.parameters,docs:{...(X=a.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Y=a.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,ae,re;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...MultiSelectMenu.args,
    fields: {
      ...MultiSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true,
    showAll: false
  }
}`,...(re=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,oe,se;e.parameters={...e.parameters,docs:{...(ne=e.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(oe=e.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,le,ce;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...MultiSelectMenu.args,
    multiple: true,
    groupBy: 'category'
  }
}`,...(ce=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,pe,de;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,he,ge;n.parameters={...n.parameters,docs:{...(me=n.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(he=n.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ye,Se,be;y.parameters={...y.parameters,docs:{...(ye=y.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...GroupOverflowWithSubtitleMultiSelectMenu.args,
    fields: {
      ...GroupOverflowWithSubtitleMultiSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true,
    showAll: false
  }
}`,...(be=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var Te,Me,Ae;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ae=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:Ae.source}}};var fe,Pe,ve;b.parameters={...b.parameters,docs:{...(fe=b.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
  },
  parameters: {
    slots: {
      'empty-placeholder': {
        template: \`
          <template #empty-placeholder="{ groupName }">
            <div>No data here!</div>
          </template>\`
      },
      'clear-selection': {
        template: \`
          <template #clear-selection="{ clearSelection }">
            <button @click="clearSelection">Clear Selection</button>
          </template>
        \`
      },
      'no-match-placeholder': {
        template: \`
          <template #no-match-placeholder="{ groupName }">
            <div style="padding: 16px; border: 1px dashed #888; border-radius: 8px;">
              <p>No matched data found for group:</p><br />
              <em><strong>{{ groupName }}</strong></em>
            </div>
          </template>
        \`
      }
    }
  }
}`,...(ve=(Pe=b.parameters)==null?void 0:Pe.docs)==null?void 0:ve.source}}};var Ue,we,De;T.parameters={...T.parameters,docs:{...(Ue=T.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
  },
  parameters: {
    slots: {
      header: {
        template: \`
          <template #header="{ selection, multiple, useSearch, searchQuery, result, label, clearSelection }">
            <label>{{ label }}</label>
            <p>
              <span
                >{{ String(selection.size ?? selection.length).padStart(2, '0') }}
                Selected</span
              >
              <button @click="clearSelection">⟳</button>
            </p>
            <template v-if="useSearch">
              <input v-model="args.query" type="search" placeholder="Search..." />
            </template>
          </template>
        \`
      },
      default: {
        template: \`
          <template #default="{ option }">
            {{ option.selected ? '😀' : '🫥' }}
            <div>
              <strong>{{ option.payload.name }}</strong>
              <p>{{ option.payload.category }}</p>
            </div>
          </template>
        \`
      },
      footer: {
        template: \`
          <template #footer="{ label }">
            <button
              @click="args.options.push({
                name: \\\`APT-\\\${(Math.random() * 100).toFixed(0).padStart(2, '0')}\\\`,
                description: \\\`APT-\\\${(Math.random() * 100).toFixed(0)} is a threat group that has been attributed to the Chinese government.\\\`,
                category: 'APT Group Simulation Data',
                recentlyUsed: '2021-01-01T00:00:00Z'
              })"
              style="
                appearance: none;
                padding: 8px;
                background-color: #000;
                color: #fff;
                border: 0;
              "
            >
              Add more {{ label }}
            </button>
          </template>
        \`
      },
      'no-match-placeholder': {
        template: \`
          <template #no-match-placeholder="{ groupName }">
            <div style="padding: 16px; border: 1px dashed #888; border-radius: 8px;">
              <p>No matched data found for group:</p><br />
              <em><strong>{{ groupName }}</strong></em>
            </div>
          </template>
        \`
      }
    }
  }
}`,...(De=(we=T.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var We,Ge,$e;M.parameters={...M.parameters,docs:{...(We=M.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...($e=(Ge=M.parameters)==null?void 0:Ge.docs)==null?void 0:$e.source}}};const st=["DefaultSelectMenu","SimpleArrayMenu","SimpleArrayWithMultiSelectMenu","SimpleArrayWithSearchMenu","SingleSelectMenu","SingleSelectMenuWithSearch","SingleSelectMenuWithSearchWithPredefinedQuery","SingleWithSubtitleSelectMenu","GroupSingleSelectMenu","GroupWithSubtitleSingleSelectMenu","MultiSelectMenu","MultiSelectMenuWithSearch","MultiWithSubtitleSelectMenu","GroupMultiSelectMenu","GroupWithSubtitleMultiSelectMenu","GroupOverflowWithSubtitleMultiSelectMenu","GroupOverflowWithSubtitleMultiSelectWithSearchMenu","SelectMenuWithCustomText","SelectMenuWithCustomGadgetSlots","SelectMenuWithCustomLayoutSlots","IconWithSubtitleSelectMenu"];export{r as DefaultSelectMenu,h as GroupMultiSelectMenu,n as GroupOverflowWithSubtitleMultiSelectMenu,y as GroupOverflowWithSubtitleMultiSelectWithSearchMenu,p as GroupSingleSelectMenu,g as GroupWithSubtitleMultiSelectMenu,d as GroupWithSubtitleSingleSelectMenu,M as IconWithSubtitleSelectMenu,a as MultiSelectMenu,m as MultiSelectMenuWithSearch,e as MultiWithSubtitleSelectMenu,b as SelectMenuWithCustomGadgetSlots,T as SelectMenuWithCustomLayoutSlots,S as SelectMenuWithCustomText,s as SimpleArrayMenu,i as SimpleArrayWithMultiSelectMenu,l as SimpleArrayWithSearchMenu,t as SingleSelectMenu,c as SingleSelectMenuWithSearch,u as SingleSelectMenuWithSearchWithPredefinedQuery,o as SingleWithSubtitleSelectMenu,st as __namedExportsOrder,ot as default};
