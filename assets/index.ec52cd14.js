import{_ as e}from"./BasicForm.ba4868e2.js";import{u as o}from"./useForm.419667d9.js";import t from"./PersonTable.98a90c1b.js";import{P as r}from"./index.7310b334.js";import{k as s,br as n,r as i,l,m as a,L as p,n as d,q as c,x as m,z as f,_ as b}from"./vendor.5450320c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.466bfd54.js";import"./index.550b826b.js";/* empty css              *//* empty css              *//* empty css              */import"./index.187dc9bf.js";import"./useWindowSizeFn.aa6bbe4b.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.30b7d287.js";import"./base64Conver.bb012c73.js";import"./index.80dacf8c.js";import"./TableImg.01e1ba51.js";import"./onMountedOrActivated.9b0530c4.js";import"./useSortable.a2be1794.js";/* empty css              */import"./useTable.7bf3324c.js";/* empty css              *//* empty css              */import"./useContentViewHeight.f2878ee9.js";const u=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],j=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:u},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:j},required:!0,colProps:{offset:2}}],x=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:u},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:j},required:!0,colProps:{offset:2}}];var v=s({components:{BasicForm:e,PersonTable:t,PageWrapper:r,[n.name]:n},setup(){const e=i(null),[t,{validate:r}]=o({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[s,{validate:n}]=o({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1});return{register:t,registerTask:s,submitAll:function(){return o=this,t=null,s=function*(){try{e.value;const[o,t]=yield Promise.all([r(),n()])}catch(o){}},new Promise(((e,r)=>{var n=e=>{try{l(s.next(e))}catch(o){r(o)}},i=e=>{try{l(s.throw(e))}catch(o){r(o)}},l=o=>o.done?e(o.value):Promise.resolve(o.value).then(n,i);l((s=s.apply(o,t)).next())}));var o,t,s},tableRef:e}}});const h=f();l("data-v-2845c621");const g=b(" 提交 ");a();const q=h(((e,o,t,r,s,n)=>{const i=p("BasicForm"),l=p("a-card"),a=p("PersonTable"),f=p("a-button"),b=p("PageWrapper");return d(),c(b,{class:"high-form",title:"高级表单",content:" 高级表单常见于一次性输入和提交大批量数据的场景。"},{rightFooter:h((()=>[m(f,{type:"primary",onClick:e.submitAll},{default:h((()=>[g])),_:1},8,["onClick"])])),default:h((()=>[m(l,{title:"仓库管理",bordered:!1},{default:h((()=>[m(i,{onRegister:e.register},null,8,["onRegister"])])),_:1}),m(l,{title:"任务管理",bordered:!1,class:"!mt-5"},{default:h((()=>[m(i,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),m(l,{title:"成员管理",bordered:!1},{default:h((()=>[m(a,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));v.render=q,v.__scopeId="data-v-2845c621";export default v;
