import{k as a,by as e,r as s,l as t,m as n,L as o,n as i,q as l,x as r,a6 as d,w as c,v as p,z as u,_ as v}from"./vendor.8d42bd08.js";import{P as S}from"./index.b50c4775.js";import{aD as m,aE as T,aF as f,aG as x,aH as b,aI as R,aJ as X,aK as j,aL as Y,aM as w,aN as _,aO as h,aP as y}from"./index.1d1d677c.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.7f66d5d1.js";import"./useWindowSizeFn.e1870d23.js";import"./useContentViewHeight.4910cb1f.js";const E=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((a=>({label:a,value:a,key:a})));var F=a({components:{Select:e,PageWrapper:S,FadeTransition:m,ScaleTransition:T,SlideYTransition:f,ScrollYTransition:x,SlideYReverseTransition:b,ScrollYReverseTransition:R,SlideXTransition:X,ScrollXTransition:j,SlideXReverseTransition:Y,ScrollXReverseTransition:w,ScaleRotateTransition:_,ExpandXTransition:h,ExpandTransition:y},setup(){const a=s("Fade"),e=s(!0);return{options:E,value:a,start:function(){e.value=!1,setTimeout((()=>{e.value=!0}),300)},show:e}}});const k=u();t("data-v-8aaf1bc4");const P={class:"flex"},g=v(" start "),C={class:"box"};n();const W=k(((a,e,s,t,n,u)=>{const v=o("Select"),S=o("a-button"),m=o("PageWrapper");return i(),l(m,{title:"动画组件示例"},{default:k((()=>[r("div",P,[r(v,{options:a.options,value:a.value,"onUpdate:value":e[1]||(e[1]=e=>a.value=e),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),r(S,{type:"primary",class:"ml-4",onClick:a.start},{default:k((()=>[g])),_:1},8,["onClick"])]),(i(),l(d(`${a.value}Transition`),null,{default:k((()=>[c(r("div",C,null,512),[[p,a.show]])])),_:1}))])),_:1})}));F.render=W,F.__scopeId="data-v-8aaf1bc4";export default F;
