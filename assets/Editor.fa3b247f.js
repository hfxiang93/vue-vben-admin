import{_ as e}from"./BasicForm.ba4868e2.js";import{ad as i,h as t}from"./index.466bfd54.js";import{T as s}from"./index.2c6c26ba.js";import{P as a}from"./index.7310b334.js";import{k as o,a3 as n,L as r,n as d,q as m,Q as p,x as l}from"./vendor.5450320c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.550b826b.js";/* empty css              *//* empty css              *//* empty css              */import"./index.187dc9bf.js";import"./useWindowSizeFn.aa6bbe4b.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.30b7d287.js";import"./base64Conver.bb012c73.js";import"./index.80dacf8c.js";import"./onMountedOrActivated.9b0530c4.js";/* empty css              *//* empty css              */import"./useContentViewHeight.f2878ee9.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:i})=>n(s,{value:e[i],onChange:t=>{e[i]=t}})}];var u=o({components:{BasicForm:e,CollapseContainer:i,PageWrapper:a},setup(){const{createMessage:e}=t();return{schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});u.render=function(e,i,t,s,a,o){const n=r("BasicForm"),c=r("CollapseContainer"),u=r("PageWrapper");return d(),m(u,{title:"富文本嵌入表单示例"},{default:p((()=>[l(c,{title:"富文本表单"},{default:p((()=>[l(n,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;
