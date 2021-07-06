var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,t)=>{for(var o in t||(t={}))r.call(t,o)&&l(e,o,t[o]);if(n)for(var o of n(t))s.call(t,o)&&l(e,o,t[o]);return e};import{c as i,q as c,aa as u,p as d,w as f}from"./index.1d1d677c.js";import{k as g,n as p,q as h,x as m,V as v,z as y,r as C,K as b,u as H,F,bm as x,j,o as $,L as w,O as P,aA as O,aj as S,Q as R,Z as _,X as k,_ as E,y as L}from"./vendor.8d42bd08.js";/* empty css              *//* empty css              */import{o as W}from"./onMountedOrActivated.7f66d5d1.js";import{u as A}from"./useWindowSizeFn.e1870d23.js";import{a as B}from"./useContentViewHeight.4910cb1f.js";var I=g({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=i("page-footer"),{getCalcContentWidth:t}=c();return{prefixCls:e,getCalcContentWidth:t}}});const q=y()(((e,t,o,n,r,s)=>(p(),h("div",{class:e.prefixCls,style:{width:e.getCalcContentWidth}},[m("div",{class:`${e.prefixCls}__left`},[v(e.$slots,"left",{},void 0,!0)],2),v(e.$slots,"default",{},void 0,!0),m("div",{class:`${e.prefixCls}__right`},[v(e.$slots,"right",{},void 0,!0)],2)],6))));I.render=q,I.__scopeId="data-v-4a29b7a0";function z(e,t,o,n,r=C(0)){const s=C(null),{footerHeightRef:l}=B();let a={useLayoutFooter:!0};function i(e){return null==e?null:e instanceof HTMLDivElement?e:e.$el}function c(){return c=this,d=null,f=function*(){if(!e.value)return;yield b();const c=i(H(t));if(!c)return;const{bottomIncludeBody:d}=u(c);let f=0;o.forEach((e=>{var t,o;f+=null!=(o=null==(t=i(H(e)))?void 0:t.offsetHeight)?o:0}));let g=0;n.forEach((e=>{g+=function(e){var t,o;let n=0;const r="0px";let s=r,l=r;if(e){const n=getComputedStyle(e);s=null!=(t=null==n?void 0:n.marginBottom)?t:r,l=null!=(o=null==n?void 0:n.marginTop)?o:r}return s&&(n+=Number(s.replace(/[^\d]/g,""))),l&&(n+=Number(l.replace(/[^\d]/g,""))),n}(i(H(e)))}));let p=d-H(l)-H(r)-f-g;const h=()=>{var e;null==(e=a.elements)||e.forEach((e=>{var t,o;p+=null!=(o=null==(t=i(H(e)))?void 0:t.offsetHeight)?o:0}))};a.useLayoutFooter&&H(l),h(),s.value=p},new Promise(((e,t)=>{var o=e=>{try{r(f.next(e))}catch(o){t(o)}},n=e=>{try{r(f.throw(e))}catch(o){t(o)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,n);r((f=f.apply(c,d)).next())}));var c,d,f}return W((()=>{b((()=>{c()}))})),A((()=>{c()}),50,{immediate:!0}),F((()=>[l.value]),(()=>{c()}),{flush:"post",immediate:!0}),{redoHeight:function(){b((()=>{c()}))},setCompensation:e=>{a=e},contentHeight:s}}var D=g({name:"PageWrapper",components:{PageFooter:I,PageHeader:x},inheritAttrs:!1,props:{title:d.string,dense:d.bool,ghost:d.bool,content:d.string,contentStyle:{type:Object},contentBackground:d.bool,contentFullHeight:d.bool,contentClass:d.string,fixedHeight:d.bool},setup(e,{slots:n}){const r=C(null),s=C(null),l=C(null),c=C(null),{prefixCls:u}=i("page-wrapper"),d=j((()=>e.contentFullHeight)),{redoHeight:f,setCompensation:g,contentHeight:p}=z(d,r,[s,c],[l]);g({useLayoutFooter:!0,elements:[c]});const h=j((()=>[u,{[`${u}--dense`]:e.dense}])),m=j((()=>(null==n?void 0:n.leftFooter)||(null==n?void 0:n.rightFooter))),v=j((()=>Object.keys($(n,"default","leftFooter","rightFooter","headerContent")))),y=j((()=>{const{contentFullHeight:n,contentStyle:r,fixedHeight:s}=e;if(!n)return a({},r);const l=`${H(p)}px`;return a((i=a({},r),t(i,o({minHeight:l}))),s?{height:l}:{});var i})),b=j((()=>{const{contentBackground:t,contentClass:o}=e;return[`${u}-content`,o,{[`${u}-content-bg`]:t}]}));return F((()=>[m.value]),(()=>{f()}),{flush:"post",immediate:!0}),{getContentStyle:y,wrapperRef:r,headerRef:s,contentRef:l,footerRef:c,getClass:h,getHeaderSlots:v,prefixCls:u,getShowFooter:m,omit:$,getContentClass:b}}});D.render=function(e,t,o,n,r,s){const l=w("PageHeader"),a=w("PageFooter");return p(),h("div",{class:e.getClass,ref:"wrapperRef"},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(p(),h(l,P({key:0,ghost:e.ghost,title:e.title},e.$attrs,{ref:"headerRef"}),O({default:R((()=>[e.content?(p(),h(k,{key:0},[E(L(e.content),1)],64)):v(e.$slots,"headerContent",{key:1})])),_:2},[S(e.getHeaderSlots,(t=>({name:t,fn:R((o=>[v(e.$slots,t,o)]))})))]),1040,["ghost","title"])):_("",!0),m("div",{class:["overflow-hidden",e.getContentClass],style:e.getContentStyle,ref:"contentRef"},[v(e.$slots,"default")],6),e.getShowFooter?(p(),h(a,{key:1,ref:"footerRef"},{left:R((()=>[v(e.$slots,"leftFooter")])),right:R((()=>[v(e.$slots,"rightFooter")])),_:1},512)):_("",!0)],2)},f(I);const M=f(D);export{M as P};
