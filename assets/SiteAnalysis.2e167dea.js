import{k as a,br as t,r as s,L as i,n as e,q as n,Q as r,x as o,Z as b,O as c}from"./vendor.5450320c.js";/* empty css              *//* empty css              *//* empty css              */import p from"./VisitAnalysis.ca0c4cf4.js";import y from"./VisitAnalysisBar.7279e2b2.js";import"./useECharts.be771b44.js";import"./index.8bfaff0d.js";import"./props.f48aca0b.js";var f=a({components:{Card:t,VisitAnalysis:p,VisitAnalysisBar:y},setup(){const a=s("tab1");return{tabListTitle:[{key:"tab1",tab:"流量趋势"},{key:"tab2",tab:"访问量"}],activeKey:a,onTabChange:function(t){a.value=t}}}});const l={key:0},m={key:1};f.render=function(a,t,s,p,y,f){const d=i("VisitAnalysis"),j=i("VisitAnalysisBar"),u=i("Card");return e(),n(u,c({"tab-list":a.tabListTitle},a.$attrs,{"active-tab-key":a.activeKey,onTabChange:a.onTabChange}),{default:r((()=>["tab1"===a.activeKey?(e(),n("p",l,[o(d)])):b("",!0),"tab2"===a.activeKey?(e(),n("p",m,[o(j)])):b("",!0)])),_:1},16,["tab-list","active-tab-key","onTabChange"])};export default f;
