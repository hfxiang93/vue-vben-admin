import{k as a,af as e,a as n,r as t,j as l,u as r,L as s,n as u,q as o,Q as i,_ as p,y as c,x as d}from"./vendor.5450320c.js";import{P as m}from"./index.dc2dea9d.js";import"./index.49a9f596.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.9b0530c4.js";import"./useWindowSizeFn.aa6bbe4b.js";import"./useContentViewHeight.5359ac9a.js";var b=a({name:"TestMenu",components:{PageWrapper:m,Input:e},setup(){const{currentRoute:a,replace:e}=n(),s=t("");return{value:s,handleClickGo:()=>{const{name:n}=r(a);e({name:n,params:{id:r(s)}})},params:l((()=>r(a).params))}}});const j=d("br",null,null,-1),v=p(" 输入参数切换路由： "),f=p("切换路由"),x=d("br",null,null,-1),k=p(" 切换路由后 "),C=d("ul",null,[d("li",null,"可刷新页面测试路由参数情况是否正常。"),d("li",null,"可于左侧菜单中展开子菜单，点击测试参数是否携带正常。")],-1);b.render=function(a,e,n,t,l,r){const m=s("Input"),b=s("a-button"),h=s("PageWrapper");return u(),o(h,{title:"带参数菜单（路由）",content:"支持多级参数"},{default:i((()=>[p(" 当前参数："+c(a.params)+" ",1),j,v,d(m,{value:a.value,"onUpdate:value":e[1]||(e[1]=e=>a.value=e),placeholder:"建议为url标准字符，输入后点击切换"},null,8,["value"]),d(b,{type:"primary",onClick:a.handleClickGo},{default:i((()=>[f])),_:1},8,["onClick"]),x,k,C])),_:1})};export default b;
