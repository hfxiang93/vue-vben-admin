import{_ as e}from"./TableImg.01e1ba51.js";import"./BasicForm.ba4868e2.js";import{u as i}from"./useTable.7bf3324c.js";import{getBasicColumns as o}from"./tableData.83d6955e.js";import{d as r}from"./table.6ace9d72.js";import{k as s,L as t,n,q as d,x as a}from"./vendor.5450320c.js";/* empty css              *//* empty css              */import"./useForm.419667d9.js";import"./index.466bfd54.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.aa6bbe4b.js";import"./index.187dc9bf.js";import"./onMountedOrActivated.9b0530c4.js";/* empty css              */import"./useSortable.a2be1794.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.550b826b.js";/* empty css              *//* empty css              *//* empty css              */import"./download.30b7d287.js";import"./base64Conver.bb012c73.js";import"./index.80dacf8c.js";var m=s({components:{BasicTable:e},setup(){const[e]=i({title:"表尾行合计示例",api:r,rowSelection:{type:"checkbox"},columns:o(),showSummary:!0,summaryFunc:function(e){const i=e.reduce(((e,i)=>e+=i.no),0);return[{_row:"合计",_index:"平均值",no:i},{_row:"合计",_index:"平均值",no:i}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const p={class:"p-4"};m.render=function(e,i,o,r,s,m){const c=t("BasicTable");return n(),d("div",p,[a(c,{onRegister:e.registerTable},null,8,["onRegister"])])};export default m;
