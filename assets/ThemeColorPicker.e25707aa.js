import{c as e}from"./index.8bfaff0d.js";import{b as i}from"./index.d09e3cc7.js";import{k as t,bT as s,L as r,n,q as o,X as a,aj as d,x as p}from"./vendor.5450320c.js";import"./index.0c8b94fd.js";/* empty css              *//* empty css              */import"./index.c82faaee.js";import"./index.01da8ff2.js";import"./useWindowSizeFn.aa6bbe4b.js";import"./useContentViewHeight.05938b6f.js";/* empty css              */import"./useSortable.f3096002.js";import"./lock.6152003d.js";var c=t({name:"ThemeColorPicker",components:{CheckOutlined:s},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(t){const{prefixCls:s}=e("setting-theme-picker");return{prefixCls:s,handleClick:function(e){t.event&&i(t.event,e)}}}});c.render=function(e,i,t,s,c,f){const l=r("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(a,null,d(e.colorList||[],(i=>(n(),o("span",{key:i,onClick:t=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[p(l)],14,["onClick"])))),128))],2)};export default c;
