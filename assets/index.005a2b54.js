import{_ as e}from"./TableImg.0c7780f7.js";import{f as i}from"./BasicForm.692575e9.js";import{u as o}from"./useTable.903eaf08.js";import{d as n}from"./system.bed10c2c.js";import{u as t}from"./index.4757315f.js";import{_ as r,c as s,s as d}from"./MenuDrawer.d739da68.js";import{k as a,L as c,n as m,q as l,x as p,Q as u,_ as f}from"./vendor.8d42bd08.js";/* empty css              *//* empty css              */import"./useForm.46c2c9bf.js";import"./index.1d1d677c.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.e1870d23.js";import"./index.0b29d24d.js";import"./onMountedOrActivated.7f66d5d1.js";/* empty css              */import"./useSortable.e8d4e3d5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.dc9593f7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.fd459a09.js";import"./base64Conver.bb012c73.js";import"./index.2fe5754f.js";/* empty css              */var j=a({name:"MenuManagement",components:{BasicTable:e,MenuDrawer:r,TableAction:i},setup(){const[e,{openDrawer:i}]=t(),[r,{reload:a}]=o({title:"菜单列表",api:n,columns:s,formConfig:{labelWidth:120,schemas:d},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:r,registerDrawer:e,handleCreate:function(){i(!0,{isUpdate:!1})},handleEdit:function(e){i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){a()}}}});const b=f(" 新增菜单 ");j.render=function(e,i,o,n,t,r){const s=c("a-button"),d=c("TableAction"),a=c("BasicTable"),f=c("MenuDrawer");return m(),l("div",null,[p(a,{onRegister:e.registerTable},{toolbar:u((()=>[p(s,{type:"primary",onClick:e.handleCreate},{default:u((()=>[b])),_:1},8,["onClick"])])),action:u((({record:i})=>[p(d,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(f,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;
