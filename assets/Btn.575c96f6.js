import{k as e,bE as s,a_ as o,j as a,l as r,m as t,L as i,au as n,n as d,q as c,x as l,y as m,X as u,Z as p,w as f,z as b,_}from"./vendor.8d42bd08.js";/* empty css              *//* empty css              */import y from"./CurrentPermissionMode.f356bdb0.js";import{ak as x,I as P,U as h,f as k,b2 as v}from"./index.1d1d677c.js";import{A as j}from"./index.8a74d9ba.js";import{P as C}from"./index.b50c4775.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.7f66d5d1.js";import"./useWindowSizeFn.e1870d23.js";import"./useContentViewHeight.4910cb1f.js";var g=e({components:{Alert:s,PageWrapper:C,CurrentPermissionMode:y,Divider:o,Authority:j},setup(){const{hasPermission:e}=x(),s=P(),o=h(),r=k(),t=a((()=>o.getProjectConfig.permissionMode===v.BACK));return{hasPermission:e,permissionStore:s,switchToken:function(e){return o=this,a=null,t=function*(){const o="fakeToken"+e;r.setToken(o),r.getUserInfoAction(),s.changePermissionCode()},new Promise(((e,s)=>{var r=e=>{try{n(t.next(e))}catch(o){s(o)}},i=e=>{try{n(t.throw(e))}catch(o){s(o)}},n=s=>s.done?e(s.value):Promise.resolve(s.value).then(r,i);n((t=t.apply(o,a)).next())}));var o,a,t},isBackPremissionMode:t}}});const w=b();r("data-v-bab1a030");const M=_(" 当前拥有的code列表: "),A=_(" 点击切换按钮权限(用户id为2) "),B=_(" 点击切换按钮权限(用户id为1,默认) "),T=_("组件方式判断权限"),I=_(" 拥有code ['1000']权限可见 "),S=_(" 拥有code ['2000']权限可见 "),W=_(" 拥有code ['1000','2000']角色权限可见 "),z=_("函数方式方式判断权限"),D=_(" 拥有code ['1000']权限可见 "),L=_(" 拥有code ['2000']权限可见 "),U=_(" 拥有code ['1000','2000']角色权限可见 "),q=_("指令方式方式判断权限(该方式不能动态修改权限.)"),E=_(" 拥有code ['1000']权限可见 "),F=_(" 拥有code ['2000']权限可见 "),H=_(" 拥有code ['1000','2000']角色权限可见 ");t();const K=w(((e,s,o,a,r,t)=>{const b=i("CurrentPermissionMode"),_=i("Divider"),y=i("Alert"),x=i("a-button"),P=i("Authority"),h=i("PageWrapper"),k=n("auth");return d(),c(h,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:w((()=>[l(b),l("p",null,[M,l("a",null,m(e.permissionStore.getPermCodeList),1)]),l(_),l(y,{class:"mt-4",type:"info",message:"点击后请查看按钮变化(必须处于后台权限模式才可测试此页面所展示的功能)","show-icon":""}),l(_),l(x,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.switchToken(2)),disabled:!e.isBackPremissionMode},{default:w((()=>[A])),_:1},8,["disabled"]),l(x,{type:"primary",onClick:s[2]||(s[2]=s=>e.switchToken(1)),disabled:!e.isBackPremissionMode},{default:w((()=>[B])),_:1},8,["disabled"]),e.isBackPremissionMode?(d(),c(u,{key:0},[l(_,null,{default:w((()=>[T])),_:1}),l(P,{value:"1000"},{default:w((()=>[l(x,{type:"primary",class:"mx-4"},{default:w((()=>[I])),_:1})])),_:1}),l(P,{value:"2000"},{default:w((()=>[l(x,{color:"success",class:"mx-4"},{default:w((()=>[S])),_:1})])),_:1}),l(P,{value:["1000","2000"]},{default:w((()=>[l(x,{color:"error",class:"mx-4"},{default:w((()=>[W])),_:1})])),_:1}),l(_,null,{default:w((()=>[z])),_:1}),e.hasPermission("1000")?(d(),c(x,{key:0,type:"primary",class:"mx-4"},{default:w((()=>[D])),_:1})):p("",!0),e.hasPermission("2000")?(d(),c(x,{key:1,color:"success",class:"mx-4"},{default:w((()=>[L])),_:1})):p("",!0),e.hasPermission(["1000","2000"])?(d(),c(x,{key:2,color:"error",class:"mx-4"},{default:w((()=>[U])),_:1})):p("",!0),l(_,null,{default:w((()=>[q])),_:1}),f(l(x,{type:"primary",class:"mx-4"},{default:w((()=>[E])),_:1},512),[[k,"1000"]]),f(l(x,{color:"success",class:"mx-4"},{default:w((()=>[F])),_:1},512),[[k,"2000"]]),f(l(x,{color:"error",class:"mx-4"},{default:w((()=>[H])),_:1},512),[[k,["1000","2000"]]])],64)):p("",!0)])),_:1})}));g.render=K,g.__scopeId="data-v-bab1a030";export default g;
