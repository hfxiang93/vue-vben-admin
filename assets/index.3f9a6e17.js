var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{k as o,af as i,bl as d,B as c,cd as u,a7 as p,j as m,I as f,L as v,n as g,q as b,Q as y,x,_ as h,y as j,X as O,aj as w}from"./vendor.8d42bd08.js";/* empty css              */import{P as T}from"./index.b50c4775.js";import{aQ as I}from"./index.1d1d677c.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.7f66d5d1.js";import"./useWindowSizeFn.e1870d23.js";import"./useContentViewHeight.4910cb1f.js";var P=o({components:{PageWrapper:T,[i.name]:i,InputTextArea:i.TextArea,Tag:d},setup(){const e=c({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:o,data:i,send:d,close:v,open:g}=u(e.server,{autoReconnect:!1,heartbeat:!0});p((()=>{if(i.value)try{const t=JSON.parse(i.value);e.recordList.push(t)}catch(t){e.recordList.push({res:i.value,id:Math.ceil(1e3*Math.random()),time:(new Date).getTime()})}}));const b=m((()=>"OPEN"===o.value)),y=m((()=>b.value?"success":"red")),x=m((()=>[...e.recordList].reverse()));return h=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&n(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&n(e,a,t[a]);return e})({status:o,formatToDateTime:I},f(e)),t(h,a({handlerSend:function(){d(e.sendValue),e.sendValue=""},getList:x,toggle:function(){b.value?v():g()},getIsOpen:b,getTagColor:y}));var h}});const k={class:"flex"},C={class:"w-1/3 bg-white p-4"},L={class:"flex items-center"},S=x("span",{class:"text-lg font-medium mr-4"}," 连接状态: ",-1),V=x("hr",{class:"my-4"},null,-1),_={class:"flex"},A=h(" 服务地址 "),D=x("p",{class:"text-lg font-medium mt-4"},"设置",-1),W=x("hr",{class:"my-4"},null,-1),M=h(" 发送 "),B={class:"w-2/3 bg-white ml-4 p-4"},E=x("span",{class:"text-lg font-medium mr-4"}," 消息记录: ",-1),N=x("hr",{class:"my-4"},null,-1),Q={class:"max-h-80 overflow-auto"},U={class:"flex items-center"},q=x("span",{class:"mr-2 text-primary font-medium"},"收到消息:",-1);P.render=function(e,t,a,s,r,l){const n=v("Tag"),o=v("a-input"),i=v("a-button"),d=v("InputTextArea"),c=v("PageWrapper");return g(),b(c,{title:"WebSocket 示例"},{default:y((()=>[x("div",k,[x("div",C,[x("div",L,[S,x(n,{color:e.getTagColor},{default:y((()=>[h(j(e.status),1)])),_:1},8,["color"])]),V,x("div",_,[x(o,{value:e.server,"onUpdate:value":t[1]||(t[1]=t=>e.server=t),disabled:""},{addonBefore:y((()=>[A])),_:1},8,["value"]),x(i,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle},{default:y((()=>[h(j(e.getIsOpen?"关闭连接":"开启连接"),1)])),_:1},8,["type","onClick"])]),D,W,x(d,{placeholder:"需要发送到服务器的内容",disabled:!e.getIsOpen,value:e.sendValue,"onUpdate:value":t[2]||(t[2]=t=>e.sendValue=t),allowClear:""},null,8,["disabled","value"]),x(i,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:y((()=>[M])),_:1},8,["disabled","onClick"])]),x("div",B,[E,N,x("div",Q,[x("ul",null,[(g(!0),b(O,null,w(e.getList,(t=>(g(),b("li",{class:"mt-2",key:t.time},[x("div",U,[q,x("span",null,j(e.formatToDateTime(t.time)),1)]),x("div",null,j(t.res),1)])))),128))])])])])])),_:1})};export default P;
