import{_ as e}from"./TableImg.bcb7c008.js";import"./BasicForm.d66dec9c.js";import"./index.98269aa6.js";import{c as o,d as i,a,b as t,e as s}from"./data.71f890d5.js";import{P as d}from"./index.dc2dea9d.js";import{k as r,L as n,n as m,q as c,Q as p,x as j,_ as x}from"./vendor.5450320c.js";/* empty css              *//* empty css              */import"./useForm.ed9f8ca7.js";import"./index.49a9f596.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.aa6bbe4b.js";import"./index.d70d1e77.js";import"./onMountedOrActivated.9b0530c4.js";/* empty css              */import"./useSortable.dc90a630.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.4be89c8a.js";/* empty css              *//* empty css              *//* empty css              */import"./download.9ee3d74d.js";import"./base64Conver.bb012c73.js";import"./index.c763d9e0.js";/* empty css              *//* empty css              */import"./useContentViewHeight.5359ac9a.js";var b=r({components:{BasicTable:e,PageWrapper:d},setup:()=>({aoaToExcel:function(){a({data:t,header:s,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:i})});const l=x(" 导出 ");b.render=function(e,o,i,a,t,s){const d=n("a-button"),r=n("BasicTable"),x=n("PageWrapper");return m(),c(x,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:p((()=>[j(r,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:p((()=>[j(d,{onClick:e.aoaToExcel},{default:p((()=>[l])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default b;
