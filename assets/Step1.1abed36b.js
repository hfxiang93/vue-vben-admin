import{_ as e}from"./BasicForm.ba4868e2.js";import{u as t}from"./useForm.419667d9.js";import{step1Schemas as a}from"./data.2505cb7f.js";import{k as s,by as o,af as i,a_ as n,l as r,m as d,L as p,n as l,q as m,x as c,z as u,_ as f}from"./vendor.5450320c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.466bfd54.js";import"./index.550b826b.js";/* empty css              *//* empty css              *//* empty css              */import"./index.187dc9bf.js";import"./useWindowSizeFn.aa6bbe4b.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.30b7d287.js";import"./base64Conver.bb012c73.js";import"./index.80dacf8c.js";var b=s({components:{BasicForm:e,[o.name]:o,ASelectOption:o.Option,[i.name]:i,[i.Group.name]:i.Group,[n.name]:n},emits:["next"],setup(e,{emit:s}){const[o,{validate:i}]=t({labelWidth:100,schemas:a,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:function(){return e=this,t=null,a=function*(){try{const e=yield i();s("next",e)}catch(e){}},new Promise(((s,o)=>{var i=e=>{try{r(a.next(e))}catch(t){o(t)}},n=e=>{try{r(a.throw(e))}catch(t){o(t)}},r=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,n);r((a=a.apply(e,t)).next())}));var e,t,a}});return{register:o}}});const j=u();r("data-v-4c120de8");const v={class:"step1"},x={class:"step1-form"},h=f(" 支付宝 "),y=f(" 银联 "),_=c("h3",null,"说明",-1),F=c("h4",null,"转账到支付宝账户",-1),g=c("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),w=c("h4",null,"转账到银行卡",-1),B=c("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);d();const O=j(((e,t,a,s,o,i)=>{const n=p("a-select-option"),r=p("a-select"),d=p("a-input"),u=p("a-input-group"),f=p("BasicForm"),b=p("a-divider");return l(),m("div",v,[c("div",x,[c(f,{onRegister:e.register},{fac:j((({model:e,field:t})=>[c(u,{compact:""},{default:j((()=>[c(r,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:j((()=>[c(n,{value:"zfb"},{default:j((()=>[h])),_:1}),c(n,{value:"yl"},{default:j((()=>[y])),_:1})])),_:2},1032,["value","onUpdate:value"]),c(d,{class:"pay-input",value:e[t],"onUpdate:value":a=>e[t]=a},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),c(b),_,F,g,w,B])}));b.render=O,b.__scopeId="data-v-4c120de8";export default b;
