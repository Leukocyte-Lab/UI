import{S as r}from"./SearchBar-mfQg9OzU.js";import"./iframe-CVy2nIPv.js";import"./preload-helper-PPVm8Dsz.js";import"./SelectMenu-9xfeBLON.js";import"./index-CKz7kgpi.js";import"./index-Bqtqvw-x.js";import"./ButtonBox-egAKjUZd.js";import"./BaseLink-CWj6Rkgy.js";import"./BasePoly-B7tbFLGO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./event-CBo5H8fu.js";import"./signal-BNPJFyDq.js";import"./CardBox-Dl4yYe8E.js";import"./TextField-lv9P6dtS.js";import"./validation-zVG9lBPq.js";import"./_mapToArray-B6QWFevT.js";import"./_getNative-B6kbqn7W.js";import"./_flatRest-DscWrHRt.js";import"./_overRest-BTimdpjk.js";import"./last-D-rYfuUG.js";import"./fn-DSKCZ1pj.js";import"./parser-C5igm0d3.js";import"./map-LfImqO5-.js";import"./toNumber-Bryb-nJS.js";import"./map-DlFn5-zT.js";import"./_basePickBy-CjrHyFLl.js";import"./groupBy-CQVXrZzi.js";import"./index-Bq5cvhhs.js";import"./math-Bsm6xtTW.js";import"./fromPairs-Dx9PT-t0.js";import"./string-CdhieEss.js";import"./uuid-Cakt1EUJ.js";const K={title:"Components / Element / SearchBar",component:r,tags:["autodocs"],argTypes:{options:{control:"object",description:"Data to be displayed in the menu."},modelValue:{control:"text",description:"SearchBar value, use by `v-model`."},disabled:{control:"boolean",description:"SearchBar disabled (optional)"},autocomplete:{control:"boolean",description:"SearchBar autocomplete (optional)"},"onUpdate:modelValue":{action:"query"},onSearch:{action:"search"},onSelect:{action:"select"}}},e={args:{options:[{name:"APT-38",description:"APT-38 is a threat group that has been attributed to the North Korean government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-39",description:"APT-39 is a threat group that has been attributed to the Iranian government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"APT-40",description:"APT-40 is a threat group that has been attributed to the Chinese government.",category:"APT Group Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Nginx test Techniques",description:"Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",recentlyUsed:"2021-01-01T00:00:00Z"},{name:"Apache test Techniques",description:"Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",category:"Technique Simulation Data",framework:{technique:"T1012s"},recentlyUsed:"2021-01-01T00:00:00Z"}],fields:{key:"name",title:"{{ $.name }}",content:"{{ $.category }}",searchKeys:["name","category"]}}},a={args:{...e.args,autocomplete:!0}},t={args:{...e.args,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultSearchBar.args,
    autocomplete: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultSearchBar.args,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const $=["DefaultSearchBar","DefaultSearchBarWithAutoComplete","DisabledSearchBar"];export{e as DefaultSearchBar,a as DefaultSearchBarWithAutoComplete,t as DisabledSearchBar,$ as __namedExportsOrder,K as default};
