import{_ as e}from"./TableImg.0c7780f7.js";import"./BasicForm.692575e9.js";import"./index.87691d0e.js";import{c as o,d as i,a as t,b as d,e as s}from"./data.4ecda588.js";import{P as a}from"./index.b50c4775.js";import{k as r,L as n,n as m,q as p,Q as c,x as j,_ as x}from"./vendor.8d42bd08.js";/* empty css              *//* empty css              */import"./useForm.46c2c9bf.js";import"./index.1d1d677c.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.e1870d23.js";import"./index.0b29d24d.js";import"./onMountedOrActivated.7f66d5d1.js";/* empty css              */import"./useSortable.e8d4e3d5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.dc9593f7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.fd459a09.js";import"./base64Conver.bb012c73.js";import"./index.2fe5754f.js";/* empty css              *//* empty css              */import"./useContentViewHeight.4910cb1f.js";var b=r({components:{BasicTable:e,PageWrapper:a},setup:()=>({aoaToExcel:function(){t({data:d,header:s,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:i})});const f=x(" 导出 ");b.render=function(e,o,i,t,d,s){const a=n("a-button"),r=n("BasicTable"),x=n("PageWrapper");return m(),p(x,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:c((()=>[j(r,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[j(a,{onClick:e.aoaToExcel},{default:c((()=>[f])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default b;
