import{ag as t,ac as e,w as i}from"./index.7a4130db.js";import{k as s,r as a,B as r,j as l,u as n,F as o,K as m,L as d,x as c,aZ as u,l as h,m as p,N as g,n as f,q as v,y as b,z as _,_ as x}from"./vendor.f02ce484.js";/* empty css              */import{P as H}from"./index.0bdad8ba.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.df40a6fc.js";import"./useWindowSizeFn.6b41957c.js";import"./useContentViewHeight.1376cd39.js";function S(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}var N=s({name:"VirtualScroll",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},setup(i,{slots:s}){const u=a(null),h=r({first:0,last:0,scrollTop:0}),p=l((()=>parseInt(i.bench,10))),g=l((()=>parseInt(i.itemHeight,10))),f=l((()=>Math.max(0,h.first-n(p)))),v=l((()=>Math.min((i.items||[]).length,h.last+n(p)))),b=l((()=>({height:S((i.items||[]).length*n(g))}))),_=l((()=>{const t={},e=S(i.height),s=S(i.minHeight),a=S(i.minWidth),r=S(i.maxHeight),l=S(i.maxWidth),n=S(i.width);return e&&(t.height=e),s&&(t.minHeight=s),a&&(t.minWidth=a),r&&(t.maxHeight=r),l&&(t.maxWidth=l),n&&(t.width=n),t}));function x(t){const e=n(u);if(!e)return 0;const s=parseInt(i.height||0,10)||e.clientHeight;return t+Math.ceil(s/n(g))}function H(){const t=n(u);t&&(h.scrollTop=t.scrollTop,h.first=Math.floor(h.scrollTop/n(g)),h.last=x(h.first))}function N(){const{items:t=[]}=i;return t.slice(n(f),n(v)).map(w)}function w(t,i){const a=S((i+=n(f))*n(g));return c("div",{class:"virtual-scroll__item",style:{top:a},key:i},[e(s,"default",{index:i,item:t})])}return o([()=>i.itemHeight,()=>i.height],(()=>{H()})),m((()=>{h.last=x(0),d((()=>{const e=n(u);e&&t({el:e,name:"scroll",listener:H,wait:0})}))})),()=>c("div",{class:"virtual-scroll",style:n(_),ref:u},[c("div",{class:"virtual-scroll__container",style:n(b)},[N()])])}});N.__scopeId="data-v-dd7becb6";const w=i(N),j=(()=>{const t=[];for(let e=1;e<2e4;e++)t.push({title:"列表项"+e});return t})();var y=s({components:{VScroll:w,Divider:u,PageWrapper:H},setup:()=>({data:j})});const W=_();h("data-v-002a1a68");const I=x("基础滚动示例"),M={class:"virtual-scroll-demo-wrap"},T={class:"virtual-scroll-demo__item"},V=x("即使不可见，也预先加载50条数据，防止空白"),P={class:"virtual-scroll-demo-wrap"},k={class:"virtual-scroll-demo__item"};p();const q=W(((t,e,i,s,a,r)=>{const l=g("Divider"),n=g("VScroll"),o=g("PageWrapper");return f(),v(o,{class:"virtual-scroll-demo"},{default:W((()=>[c(l,null,{default:W((()=>[I])),_:1}),c("div",M,[c(n,{itemHeight:41,items:t.data,height:300,width:300},{default:W((({item:t})=>[c("div",T,b(t.title),1)])),_:1},8,["items"])]),c(l,null,{default:W((()=>[V])),_:1}),c("div",P,[c(n,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:W((({item:t})=>[c("div",k,b(t.title),1)])),_:1},8,["items"])])])),_:1})}));y.render=q,y.__scopeId="data-v-002a1a68";export default y;
