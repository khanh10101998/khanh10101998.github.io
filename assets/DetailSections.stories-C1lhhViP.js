import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as a,D as c,P as t}from"./index-CGQCsZ7Z.js";import"./iframe-IEe77UtQ.js";import"./client-FAe2bDKS.js";import"./index-DQ2b4vFs.js";function u({children:e}){return n.jsx(a.View,{style:d.container,children:e})}const d=a.StyleSheet.create({container:{width:500,backgroundColor:"#ffd3d3",paddingHorizontal:12,paddingVertical:16}});u.__docgenInfo={description:"",methods:[],displayName:"BlockContainer"};const i=e=>n.jsx(u,{children:n.jsx(c,{...e})});i.propTypes={data:t.arrayOf({title:t.string,sections:t.arrayOf({title:t.string,value:t.string})}).isRequired};i.defaultProps={data:[{title:"Title",sections:[{title:"Subtitle",value:"Subtitle"}]},{title:"Title 2",sections:[{title:"Subtitle",value:"Subtitle"}]}]};i.__docgenInfo={description:"import {DetailSections} from '@momo-platform/ui-kits'",methods:[],displayName:"DetailSections",props:{data:{defaultValue:{value:`[
  {
    title: 'Title',
    sections: [
      {title: 'Subtitle', value: 'Subtitle'},
    ]
  },
  {
    title: 'Title 2',
    sections: [
      {title: 'Subtitle', value: 'Subtitle'},
    ]
  }
]`,computed:!1},description:"",type:{name:"arrayOf",value:{name:"custom",raw:`{
  title: PropTypes.string,
  sections: PropTypes.arrayOf({title: PropTypes.string, value: PropTypes.string})
}`}},required:!1}}};const{fn:V}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DetailSections",component:i,decorators:[e=>n.jsx(a.View,{style:{flex:1,alignItems:"flex-start"},children:n.jsx(e,{})})],tags:["autodocs"],args:{data:[{title:"Title",sections:[{title:"Subtitle",value:"Subtitle"}]}]}},l={args:{data:[{title:"Header title 1",sections:[{title:"Title ne 1",value:"Value ne he"},{title:"Title ne 2",value:"Value ne he"},{title:"Title ne 3",value:"Value ne he"},{title:"Title ne 4",value:"Value ne he"},{title:"Title ne 4",value:"Value ne he"}]},{title:"Header title 2",sections:[{title:"Title ne 1",value:"Value ne he"},{title:"Title ne 2",value:"Value ne he"},{title:"Title ne 3",value:"Value ne he"},{title:"Title ne 4",value:"Value ne he"},{title:"Title ne 4",value:"Value ne he"}]}]}};var s,o,r;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    data: [{
      title: 'Header title 1',
      sections: [{
        title: 'Title ne 1',
        value: 'Value ne he'
      }, {
        title: 'Title ne 2',
        value: 'Value ne he'
      }, {
        title: 'Title ne 3',
        value: 'Value ne he'
      }, {
        title: 'Title ne 4',
        value: 'Value ne he'
      }, {
        title: 'Title ne 4',
        value: 'Value ne he'
      }]
    }, {
      title: 'Header title 2',
      sections: [{
        title: 'Title ne 1',
        value: 'Value ne he'
      }, {
        title: 'Title ne 2',
        value: 'Value ne he'
      }, {
        title: 'Title ne 3',
        value: 'Value ne he'
      }, {
        title: 'Title ne 4',
        value: 'Value ne he'
      }, {
        title: 'Title ne 4',
        value: 'Value ne he'
      }]
    }]
  }
}`,...(r=(o=l.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const S=["defaultProps"];export{S as __namedExportsOrder,f as default,l as defaultProps};
