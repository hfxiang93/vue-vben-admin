import{_ as e,u as s,L as n}from"./LoginFormTitle.c9d57c1c.js";import{k as t,aN as a,aZ as o,j as r,u as i,N as l,n as c,q as d,x as m,S as g,_ as u,y as f,X as x,Z as p}from"./vendor.f02ce484.js";/* empty css              */import{Q as b}from"./index.32841206.js";import{e as j}from"./index.7a4130db.js";import"./download.bb595ad2.js";import"./base64Conver.bb012c73.js";var v=t({name:"QrCodeForm",components:{Button:a,QrCode:b,Divider:o,LoginFormTitle:e},setup(){const{t:e}=j(),{handleBackLogin:t,getLoginState:a}=s();return{t:e,handleBackLogin:t,qrCodeUrl:"https://vvbin.cn/next/login",getShow:r((()=>i(a)===n.QR_CODE))}}});const k={class:"enter-x min-w-64 min-h-64"};v.render=function(e,s,n,t,a,o){const r=l("LoginFormTitle"),i=l("QrCode"),b=l("Divider"),j=l("Button");return e.getShow?(c(),d(x,{key:0},[m(r,{class:"enter-x"}),m("div",k,[m(i,{value:e.qrCodeUrl,class:"enter-x flex justify-center xl:justify-start",width:280},null,8,["value"]),m(b,{class:"enter-x"},{default:g((()=>[u(f(e.t("sys.login.scanSign")),1)])),_:1}),m(j,{size:"large",block:"",class:"mt-4 enter-x",onClick:e.handleBackLogin},{default:g((()=>[u(f(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])],64)):p("",!0)};export default v;
