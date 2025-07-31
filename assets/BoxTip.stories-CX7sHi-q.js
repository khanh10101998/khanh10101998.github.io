import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as o,P as n}from"./index-B0SNirli.js";import{B as f}from"./BoxTip-nFziTnD0.js";import"./iframe--k3L4Kte.js";import"./client-CbJLjRa5.js";import"./index-DkTdTcG_.js";const s=({backgroundColor:a="#ffffff",position:m="left"})=>e.jsx(o.View,{style:g.container,children:e.jsx(f,{style:{},backgroundColor:a,position:m,children:e.jsxs(o.View,{style:{padding:12},children:[e.jsx(o.Text,{children:" Demo ne hehe "}),e.jsx(o.Text,{children:" Demo ne hehe "}),e.jsx(o.Text,{children:" Demo ne hehe "})]})})}),g=o.StyleSheet.create({container:{backgroundColor:"#808080",width:"300",padding:30}});s.propTypes={backgroundColor:n.string,position:n.oneOf(["left","right"]),style:n.object};s.defaultProps={backgroundColor:"white",position:"left"};s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"BoxTip",props:{backgroundColor:{defaultValue:{value:"'white'",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},position:{defaultValue:{value:"'left'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},style:{description:"",type:{name:"object"},required:!1}}};const{fn:h}=__STORYBOOK_MODULE_TEST__,k={title:"Example/BoxTip",component:s,decorators:[a=>e.jsx(o.View,{style:{flex:1,alignItems:"flex-start"},children:e.jsx(a,{})})],tags:["autodocs"],args:{onPress:h()}},t={args:{backgroundColor:"white",position:"left"}},r={args:{backgroundColor:"#5db2df",position:"right"}};var i,l,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'white',
    position: 'left'
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    backgroundColor: '#5db2df',
    position: 'right'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const w=["Left","Right"];export{t as Left,r as Right,w as __namedExportsOrder,k as default};
