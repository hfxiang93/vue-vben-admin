import{_ as e}from"./TableImg.bcb7c008.js";import"./BasicForm.d66dec9c.js";import"./index.98269aa6.js";import{c as i,d as a,j as d}from"./data.71f890d5.js";import{P as t}from"./index.dc2dea9d.js";import{k as o,L as s,n as r,q as n,Q as m,x as c,_ as p}from"./vendor.5450320c.js";/* empty css              *//* empty css              */import"./useForm.ed9f8ca7.js";import"./index.49a9f596.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.aa6bbe4b.js";import"./index.d70d1e77.js";import"./onMountedOrActivated.9b0530c4.js";/* empty css              */import"./useSortable.dc90a630.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.4be89c8a.js";/* empty css              *//* empty css              *//* empty css              */import"./download.9ee3d74d.js";import"./base64Conver.bb012c73.js";import"./index.c763d9e0.js";/* empty css              *//* empty css              */import"./useContentViewHeight.5359ac9a.js";var j=o({components:{BasicTable:e,PageWrapper:t},setup:()=>({defaultHeader:function(){d({data:a,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){d({data:a,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:i,data:a})});const u=p(" 导出：默认头部 "),x=p(" 导出：自定义头部 ");j.render=function(e,i,a,d,t,o){const p=s("a-button"),j=s("BasicTable"),b=s("PageWrapper");return r(),n(b,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[c(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[c(p,{onClick:e.defaultHeader},{default:m((()=>[u])),_:1},8,["onClick"]),c(p,{onClick:e.customHeader},{default:m((()=>[x])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default j;
