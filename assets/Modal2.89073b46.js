import{B as e,a as s}from"./index.0b29d24d.js";import{k as o,L as t,n as a,q as r,Q as l,x as d,O as i,_ as n}from"./vendor.8d42bd08.js";import"./index.1d1d677c.js";import"./useWindowSizeFn.e1870d23.js";var c=o({components:{BasicModal:e},setup(){const[e,{closeModal:o,setModalProps:t}]=s();return{register:e,closeModal:o,setModalProps:()=>{t({title:"Modal New Title"})}}}});const p=n(" 从内部关闭弹窗 "),M=n(" 从内部修改title ");c.render=function(e,s,o,n,c,m){const u=t("a-button"),f=t("BasicModal");return a(),r(f,i(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:l((()=>[d(u,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:l((()=>[p])),_:1},8,["onClick"]),d(u,{type:"primary",onClick:e.setModalProps},{default:l((()=>[M])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default c;
