var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;import o from"./Step1.a83100db.js";import a from"./Step2.cdf41df7.js";import p from"./Step3.acbbcdda.js";import{P as s}from"./index.0bdad8ba.js";import{k as d,cf as c,r as m,B as l,I as f,l as j,m as b,N as u,n as x,q as S,z as v,x as h,w as P,v as y,Z as N}from"./vendor.f02ce484.js";/* empty css              */import"./BasicForm.43eeb3ee.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.7a4130db.js";import"./index.cef6e1e0.js";/* empty css              *//* empty css              *//* empty css              */import"./index.3b86badb.js";import"./useWindowSizeFn.6b41957c.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.bb595ad2.js";import"./base64Conver.bb012c73.js";import"./index.d6952157.js";import"./useForm.ec88f131.js";import"./data.2505cb7f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.df40a6fc.js";import"./useContentViewHeight.1376cd39.js";var w=d({components:{Step1:o,Step2:a,Step3:p,PageWrapper:s,[c.name]:c,[c.Step.name]:c.Step},setup(){const e=m(0),o=l({initSetp2:!1,initSetp3:!1});return((e,o)=>{for(var a in o||(o={}))n.call(o,a)&&i(e,a,o[a]);if(t)for(var a of t(o))r.call(o,a)&&i(e,a,o[a]);return e})({current:e,handleStep1Next:function(t){e.value++,o.initSetp2=!0},handleStep2Next:function(t){e.value++,o.initSetp3=!0},handleRedo:function(){e.value=0,o.initSetp2=!1,o.initSetp3=!1},handleStepPrev:function(){e.value--}},f(o))}});const O=v();j("data-v-ad8968cc");const g={class:"step-form-form"},k={class:"mt-5"};b();const R=O(((e,t,n,r,i,o)=>{const a=u("a-step"),p=u("a-steps"),s=u("Step1"),d=u("Step2"),c=u("Step3"),m=u("PageWrapper");return x(),S(m,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:O((()=>[h("div",g,[h(p,{current:e.current},{default:O((()=>[h(a,{title:"填写转账信息"}),h(a,{title:"确认转账信息"}),h(a,{title:"完成"})])),_:1},8,["current"])]),h("div",k,[P(h(s,{onNext:e.handleStep1Next},null,8,["onNext"]),[[y,0===e.current]]),e.initSetp2?P((x(),S(d,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[y,1===e.current]]):N("",!0),e.initSetp3?P((x(),S(c,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[y,2===e.current]]):N("",!0)])])),_:1})}));w.render=R,w.__scopeId="data-v-ad8968cc";export default w;
