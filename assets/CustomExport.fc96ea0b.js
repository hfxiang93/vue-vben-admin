import{_ as e}from"./TableImg.01e1ba51.js";import"./BasicForm.ba4868e2.js";import{E as o}from"./index.628fdf78.js";import{c as i,d as t,j as s}from"./data.8c0e1384.js";import{b as r}from"./index.187dc9bf.js";import{P as a}from"./index.7310b334.js";import{k as d,L as n,n as m,q as p,Q as c,x as b,_ as j}from"./vendor.5450320c.js";/* empty css              *//* empty css              */import"./useForm.419667d9.js";import"./index.466bfd54.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.aa6bbe4b.js";import"./onMountedOrActivated.9b0530c4.js";/* empty css              */import"./useSortable.a2be1794.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.550b826b.js";/* empty css              *//* empty css              *//* empty css              */import"./download.30b7d287.js";import"./base64Conver.bb012c73.js";import"./index.80dacf8c.js";/* empty css              *//* empty css              */import"./useContentViewHeight.f2878ee9.js";var l=d({components:{BasicTable:e,ExpExcelModal:o,PageWrapper:a},setup(){const[e,{openModal:o}]=r();return{defaultHeader:function({filename:e,bookType:o}){s({data:t,filename:e,write2excelOpts:{bookType:o}})},columns:i,data:t,register:e,openModal:o}}});const x=j(" 导出 ");l.render=function(e,o,i,t,s,r){const a=n("a-button"),d=n("BasicTable"),j=n("ExpExcelModal"),l=n("PageWrapper");return m(),p(l,{title:"导出示例",content:"可以选择导出格式"},{default:c((()=>[b(d,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[b(a,{onClick:e.openModal},{default:c((()=>[x])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),b(j,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;
