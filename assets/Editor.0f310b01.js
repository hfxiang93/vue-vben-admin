import{_ as e}from"./BasicForm.d66dec9c.js";import{ad as i,h as t}from"./index.49a9f596.js";import{T as s}from"./index.54c47456.js";import{P as a}from"./index.dc2dea9d.js";import{k as o,a3 as d,L as n,n as r,q as m,Q as p,x as c}from"./vendor.5450320c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.4be89c8a.js";/* empty css              *//* empty css              *//* empty css              */import"./index.d70d1e77.js";import"./useWindowSizeFn.aa6bbe4b.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.9ee3d74d.js";import"./base64Conver.bb012c73.js";import"./index.c763d9e0.js";import"./onMountedOrActivated.9b0530c4.js";/* empty css              *//* empty css              */import"./useContentViewHeight.5359ac9a.js";const l=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:i})=>d(s,{value:e[i],onChange:t=>{e[i]=t}})}];var u=o({components:{BasicForm:e,CollapseContainer:i,PageWrapper:a},setup(){const{createMessage:e}=t();return{schemas:l,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});u.render=function(e,i,t,s,a,o){const d=n("BasicForm"),l=n("CollapseContainer"),u=n("PageWrapper");return r(),m(u,{title:"富文本嵌入表单示例"},{default:p((()=>[c(l,{title:"富文本表单"},{default:p((()=>[c(d,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;
