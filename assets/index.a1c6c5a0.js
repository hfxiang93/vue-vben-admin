import{k as e,aL as a,r as n,j as t,J as s,u as r,K as i,L as o,n as l,q as c,x as d,z as p}from"./vendor.8d42bd08.js";import{p as f,c as m,aa as u}from"./index.1d1d677c.js";import{u as g}from"./useWindowSizeFn.e1870d23.js";var v=e({name:"IFrame",components:{Spin:a},props:{frameSrc:f.string.def("")},setup(){const e=n(!1),a=n(50),o=n(window.innerHeight),l=n(null),{prefixCls:c}=m("iframe-page");g(p,150,{immediate:!0});const d=t((()=>({height:`${r(o)}px`})));function p(){const e=r(l);if(!e)return;let{top:n}=u(e);n+=20,a.value=n,o.value=window.innerHeight-n;const t=document.documentElement.clientHeight-n;e.style.height=`${t}px`}function f(){e.value=!1,p()}return s((()=>{e.value=!0,i((()=>{const e=r(l);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",(()=>{f()})):e.onload=()=>{f()}}))})),{getWrapStyle:d,loading:e,frameRef:l,prefixCls:c}}});const h=p(),x=h(((e,a,n,t,s,r)=>{const i=o("Spin");return l(),c("div",{class:e.prefixCls,style:e.getWrapStyle},[d(i,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:h((()=>[d("iframe",{src:e.frameSrc,class:`${e.prefixCls}__main`,ref:"frameRef"},null,10,["src"])])),_:1},8,["spinning","style"])],6)}));v.render=x,v.__scopeId="data-v-0c15c6d8";export default v;
