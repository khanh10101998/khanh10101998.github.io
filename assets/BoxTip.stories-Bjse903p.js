import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as o,B as m,P as i}from"./BoxTip-CL-wrSpo.js";import"./iframe-BRTD5h-j.js";import"./client-DrJT_IuA.js";import"./index-BJ4XniLQ.js";const s=a=>e.jsx(o.View,{style:f.container,children:e.jsx(m,{...a,children:e.jsxs(o.View,{style:{padding:12},children:[e.jsx(o.Text,{children:" Demo ne hehe "}),e.jsx(o.Text,{children:" Demo ne hehe "}),e.jsx(o.Text,{children:" Demo ne hehe "})]})})}),f=o.StyleSheet.create({container:{backgroundColor:"#808080",width:"300",padding:30}});s.propTypes={backgroundColor:i.string,position:i.oneOf(["left","right"]),style:i.object};s.defaultProps={backgroundColor:"white",position:"left"};s.__docgenInfo={description:"import {BoxTip} from '@momo-platform/ui-kits'",methods:[],displayName:"BoxTip",props:{backgroundColor:{defaultValue:{value:"'white'",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},position:{defaultValue:{value:"'left'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},style:{description:"",type:{name:"object"},required:!1}}};const{fn:T}=__STORYBOOK_MODULE_TEST__,j={title:"Example/BoxTip",component:s,decorators:[a=>e.jsx(o.View,{style:{flex:1,alignItems:"flex-start"},children:e.jsx(a,{})})],tags:["autodocs"],args:{backgroundColor:"white",position:"left"}},t={args:{backgroundColor:"white",position:"left"}},r={args:{backgroundColor:"#5db2df",position:"right"}};var n,l,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'white',
    position: 'left'
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,c,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    backgroundColor: '#5db2df',
    position: 'right'
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const k=["Left","Right"];export{t as Left,r as Right,k as __namedExportsOrder,j as default};
