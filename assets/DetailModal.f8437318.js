import{B as e}from"./index.fa9a22d0.js";import{D as t}from"./index.a9d9377e.js";import{e as s}from"./index.8bfaff0d.js";import{getDescSchema as r}from"./data.8512a0e6.js";import{u as o}from"./useDescription.59477d66.js";import{k as a,L as i,n,q as d,Q as m,x as p,O as c}from"./vendor.5450320c.js";import"./useWindowSizeFn.aa6bbe4b.js";/* empty css              *//* empty css              */var f=a({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:e}=s(),[t]=o({column:2,schema:r()});return{register:t,useI18n:s,t:e}}});f.render=function(e,t,s,r,o,a){const f=i("Description"),l=i("BasicModal");return n(),d(l,c({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:m((()=>[p(f,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default f;
