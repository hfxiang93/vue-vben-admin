import{_ as e}from"./TableImg.9cf3583b.js";import"./BasicForm.8e0e03ac.js";import{u as o}from"./useTable.99e152f7.js";import{getBasicColumns as t,getFormConfig as i}from"./tableData.83d6955e.js";import{d as r}from"./table.c89cccdc.js";import{k as s,L as a,n as m,q as n,Q as d,x as c,_ as p}from"./vendor.5450320c.js";/* empty css              *//* empty css              */import"./useForm.b79f2c59.js";import"./index.8bfaff0d.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.aa6bbe4b.js";import"./index.fa9a22d0.js";import"./onMountedOrActivated.9b0530c4.js";/* empty css              */import"./useSortable.f3096002.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.810acdcb.js";/* empty css              *//* empty css              *//* empty css              */import"./download.0734d556.js";import"./base64Conver.bb012c73.js";import"./index.460b6479.js";var b=s({components:{BasicTable:e},setup(){const[e,{getForm:s}]=o({title:"开启搜索区域",api:r,columns:t(),useSearchForm:!0,formConfig:i(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:e,getFormValues:function(){}}}});const j=p(" custom-slot "),f=p("获取表单数据");b.render=function(e,o,t,i,r,s){const p=a("a-button"),b=a("BasicTable");return m(),n(b,{onRegister:e.registerTable},{"form-custom":d((()=>[j])),toolbar:d((()=>[c(p,{type:"primary",onClick:e.getFormValues},{default:d((()=>[f])),_:1},8,["onClick"])])),_:1},8,["onRegister"])};export default b;
