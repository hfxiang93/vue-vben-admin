import{_ as e}from"./TableImg.0c7780f7.js";import"./BasicForm.692575e9.js";import{u as i}from"./useTable.903eaf08.js";import{getBasicColumns as o,getTreeTableData as s}from"./tableData.83d6955e.js";import{k as t,L as r,n as d,q as a,x as n,Q as p,_ as l}from"./vendor.8d42bd08.js";/* empty css              *//* empty css              */import"./useForm.46c2c9bf.js";import"./index.1d1d677c.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.e1870d23.js";import"./index.0b29d24d.js";import"./onMountedOrActivated.7f66d5d1.js";/* empty css              */import"./useSortable.e8d4e3d5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.dc9593f7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.fd459a09.js";import"./base64Conver.bb012c73.js";import"./index.2fe5754f.js";var m=t({components:{BasicTable:e},setup(){const[e,{expandAll:t,collapseAll:r}]=i({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:o(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:t,collapseAll:r}}});const c={class:"p-4"},j=l("展开全部"),x=l("折叠全部");m.render=function(e,i,o,s,t,l){const m=r("a-button"),b=r("BasicTable");return d(),a("div",c,[n(b,{onRegister:e.register},{toolbar:p((()=>[n(m,{type:"primary",onClick:e.expandAll},{default:p((()=>[j])),_:1},8,["onClick"]),n(m,{type:"primary",onClick:e.collapseAll},{default:p((()=>[x])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default m;
