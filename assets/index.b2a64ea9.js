import{_ as e}from"./TableImg.9cf3583b.js";import{f as i}from"./BasicForm.8e0e03ac.js";import{u as o}from"./useTable.99e152f7.js";import{e as t}from"./system.d12d6024.js";import{b as n}from"./index.fa9a22d0.js";import{_ as s,c as a,s as r}from"./ShipModal.c7506f45.js";import{k as d,L as c,n as l,q as m,x as p,Q as b,_ as f}from"./vendor.5450320c.js";/* empty css              *//* empty css              */import"./useForm.b79f2c59.js";import"./index.8bfaff0d.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.aa6bbe4b.js";import"./onMountedOrActivated.9b0530c4.js";/* empty css              */import"./useSortable.f3096002.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.810acdcb.js";/* empty css              *//* empty css              *//* empty css              */import"./download.0734d556.js";import"./base64Conver.bb012c73.js";import"./index.460b6479.js";var u=d({name:"DeptManagement",components:{BasicTable:e,ShipModal:s,TableAction:i},setup(){const[e,{openModal:i}]=n(),[s,{reload:d}]=o({title:"船舶列表",api:t,columns:a,formConfig:{labelWidth:120,schemas:r},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:s,registerModal:e,handleCreate:function(){i(!0,{isUpdate:!1})},handleEdit:function(e){i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const j=f(" 新增船舶 ");u.render=function(e,i,o,t,n,s){const a=c("a-button"),r=c("TableAction"),d=c("BasicTable"),f=c("ShipModal");return l(),m("div",null,[p(d,{onRegister:e.registerTable},{toolbar:b((()=>[p(a,{type:"primary",onClick:e.handleCreate},{default:b((()=>[j])),_:1},8,["onClick"])])),action:b((({record:i})=>[p(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(f,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default u;
