import{_ as s}from"./TableImg.0c7780f7.js";import"./BasicForm.692575e9.js";import{u as e}from"./useTable.903eaf08.js";import{getCustomHeaderColumns as i}from"./tableData.83d6955e.js";import{d as o}from"./table.0d22f1dd.js";import{an as r}from"./index.1d1d677c.js";import{k as t,bQ as d,L as a,n as m,q as n,x as p,Q as c,_ as j}from"./vendor.8d42bd08.js";/* empty css              *//* empty css              */import"./useForm.46c2c9bf.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.e1870d23.js";import"./index.0b29d24d.js";import"./onMountedOrActivated.7f66d5d1.js";/* empty css              */import"./useSortable.e8d4e3d5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.dc9593f7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.fd459a09.js";import"./base64Conver.bb012c73.js";import"./index.2fe5754f.js";var l=t({components:{BasicTable:s,FormOutlined:d,BasicHelp:r},setup(){const[s]=e({title:"定高/头部自定义",api:o,columns:i(),canResize:!1,scroll:{y:100}});return{registerTable:s}}});const f={class:"p-4"},b=j(" 姓名 "),x=j(" 地址 ");l.render=function(s,e,i,o,r,t){const d=a("BasicHelp"),j=a("FormOutlined"),l=a("BasicTable");return m(),n("div",f,[p(l,{onRegister:s.registerTable},{customTitle:c((()=>[p("span",null,[b,p(d,{class:"ml-2",text:"姓名"})])])),customAddress:c((()=>[x,p(j,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default l;
