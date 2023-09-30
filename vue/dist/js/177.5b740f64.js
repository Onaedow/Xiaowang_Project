"use strict";(self["webpackChunkspringboot_vue_demo"]=self["webpackChunkspringboot_vue_demo"]||[]).push([[177],{9177:function(e,l,a){a.r(l),a.d(l,{default:function(){return v}});var o=a(6252);const t={style:{padding:"10px"}},s={style:{margin:"10px 0"}},i=(0,o.Uk)("新增"),d={style:{margin:"10px 0"}},r=(0,o.Uk)("查询"),m={key:0},n={key:1},u=(0,o.Uk)("查看图书列表"),p=(0,o.Uk)("编辑"),g=(0,o.Uk)("删除"),h={style:{"margin-left":"10px"}},c={class:"my-2 flex items-center text-sm"},f=(0,o.Uk)("男"),b=(0,o.Uk)("女"),w=(0,o.Uk)("非二元性别"),k=(0,o.Uk)("未知"),W={class:"dialog-footer"},y=(0,o.Uk)("取消"),V=(0,o.Uk)("确定");function _(e,l,a,_,C,U){const z=(0,o.up)("el-button"),x=(0,o.up)("el-input"),v=(0,o.up)("el-table-column"),S=(0,o.up)("el-popconfirm"),D=(0,o.up)("el-table"),P=(0,o.up)("el-pagination"),Z=(0,o.up)("el-form-item"),$=(0,o.up)("el-radio"),N=(0,o.up)("el-radio-group"),L=(0,o.up)("el-form"),q=(0,o.up)("el-dialog");return(0,o.wg)(),(0,o.iD)("div",t,[(0,o._)("div",s,[(0,o.Wm)(z,{type:"primary",onClick:U.add},{default:(0,o.w5)((()=>[i])),_:1},8,["onClick"])]),(0,o._)("div",d,[(0,o.Wm)(x,{modelValue:C.search,"onUpdate:modelValue":l[0]||(l[0]=e=>C.search=e),placeholder:"请输入关键字",style:{width:"20%"},clearable:""},null,8,["modelValue"]),(0,o.Wm)(z,{type:"primary",style:{"margin-left":"5px"},size:"small",onClick:U.load},{default:(0,o.w5)((()=>[r])),_:1},8,["onClick"])]),(0,o.Wm)(D,{data:C.tableData,border:"",stripe:"",style:{width:"100%"},"row-class-name":e.tableRowClassName},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{prop:"id",label:"ID",sortable:""}),(0,o.Wm)(v,{prop:"username",label:"用户名"}),(0,o.Wm)(v,{prop:"password",label:"密码"}),(0,o.Wm)(v,{prop:"nickname",label:"昵称"}),(0,o.Wm)(v,{prop:"age",label:"年龄"}),(0,o.Wm)(v,{prop:"sex",label:"性别"}),(0,o.Wm)(v,{prop:"address",label:"地址"}),(0,o.Wm)(v,{label:"角色"},{default:(0,o.w5)((e=>[1===e.row.role?((0,o.wg)(),(0,o.iD)("span",m,"管理员")):(0,o.kq)("",!0),2===e.row.role?((0,o.wg)(),(0,o.iD)("span",n,"普通用户")):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(v,{fixed:"right",label:"操作",width:"120"},{default:(0,o.w5)((e=>[(0,o.Wm)(z,{type:"success",size:"mini",plain:"",onClick:l=>U.showBooks(e.row.bookList)},{default:(0,o.w5)((()=>[u])),_:2},1032,["onClick"]),(0,o.Wm)(z,{type:"primary",size:"mini",onClick:l=>U.handleEdit(e.row)},{default:(0,o.w5)((()=>[p])),_:2},1032,["onClick"]),(0,o.Wm)(S,{title:"确定删除?",onConfirm:l=>U.handleDelete(e.row.id)},{reference:(0,o.w5)((()=>[(0,o.Wm)(z,{type:"danger",size:"mini"},{default:(0,o.w5)((()=>[g])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data","row-class-name"]),(0,o._)("div",h,[(0,o.Wm)(P,{currentPage:C.currentPage,"onUpdate:currentPage":l[1]||(l[1]=e=>C.currentPage=e),"page-size":C.pageSize,"onUpdate:page-size":l[2]||(l[2]=e=>C.pageSize=e),"page-sizes":[5,10,15,20],small:e.small,disabled:e.disabled,background:e.background,layout:"total, sizes, prev, pager, next, jumper",total:C.total,onSizeChange:U.handleSizeChange,onCurrentChange:U.handleCurrentChange},null,8,["currentPage","page-size","small","disabled","background","total","onSizeChange","onCurrentChange"]),(0,o.Wm)(q,{modelValue:C.dialogVisible,"onUpdate:modelValue":l[10]||(l[10]=e=>C.dialogVisible=e),title:"Tips",width:"30%","before-close":e.handleClose},{footer:(0,o.w5)((()=>[(0,o._)("span",W,[(0,o.Wm)(z,{onClick:l[9]||(l[9]=e=>C.dialogVisible=!1)},{default:(0,o.w5)((()=>[y])),_:1}),(0,o.Wm)(z,{type:"primary",onClick:U.save},{default:(0,o.w5)((()=>[V])),_:1},8,["onClick"])])])),default:(0,o.w5)((()=>[(0,o.Wm)(L,{model:C.form,"label-width":"120px"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{label:"用户名"},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{modelValue:C.form.username,"onUpdate:modelValue":l[3]||(l[3]=e=>C.form.username=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,o.Wm)(Z,{label:"密码"},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{modelValue:C.form.password,"onUpdate:modelValue":l[4]||(l[4]=e=>C.form.password=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,o.Wm)(Z,{label:"昵称"},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{modelValue:C.form.nickname,"onUpdate:modelValue":l[5]||(l[5]=e=>C.form.nickname=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,o.Wm)(Z,{label:"年龄"},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{modelValue:C.form.age,"onUpdate:modelValue":l[6]||(l[6]=e=>C.form.age=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,o.Wm)(Z,{label:"性别"},{default:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o.Wm)(N,{modelValue:C.form.sex,"onUpdate:modelValue":l[7]||(l[7]=e=>C.form.sex=e),class:"ml-4",style:{width:"80%"}},{default:(0,o.w5)((()=>[(0,o.Wm)($,{label:"男"},{default:(0,o.w5)((()=>[f])),_:1}),(0,o.Wm)($,{label:"女"},{default:(0,o.w5)((()=>[b])),_:1}),(0,o.Wm)($,{label:"非二元性别"},{default:(0,o.w5)((()=>[w])),_:1}),(0,o.Wm)($,{label:"未知"},{default:(0,o.w5)((()=>[k])),_:1})])),_:1},8,["modelValue"])])])),_:1}),(0,o.Wm)(Z,{label:"地址"},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{type:"textarea",modelValue:C.form.address,"onUpdate:modelValue":l[8]||(l[8]=e=>C.form.address=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","before-close"])])])}var C=a(4471),U={name:"User",components:{},data(){return{form:{},dialogVisible:!1,bookVis:!1,search:"",currentPage:1,pageSize:10,total:0,tableData:[],bookList:[]}},created(){this.load()},methods:{showBooks(e){this.bookList=e,this.bookVis=!0},load(){C.Z.get("/user",{params:{pageNum:this.currentPage,pageSize:this.pageSize,search:this.search}}).then((e=>{console.log(e),this.tableData=e.data.records,this.total=e.data.total}))},add(){this.dialogVisible=!0,this.form={}},save(){this.form.id?C.Z.put("/user",this.form).then((e=>{console.log(e),"0"===e.code?this.$message({type:"success",message:"更新成功"}):this.$message({type:"error",message:e.msg}),this.load(),this.dialogVisible=!1})):C.Z.post("/user",this.form).then((e=>{console.log(e),"0"===e.code?this.$message({type:"success",message:"新增成功"}):this.$message({type:"error",message:e.msg}),this.load(),this.dialogVisible=!1})),C.Z.post("/user",this.form).then((e=>{console.log(e)}))},handleEdit(e){this.form=JSON.parse(JSON.stringify(e)),this.dialogVisible=!0},handleDelete(e){console.log(e),C.Z["delete"]("/user/"+e).then((e=>{"0"===e.code?this.$message({type:"success",message:"删除成功"}):this.$message({type:"error",message:e.msg})})),this.load()},handleSizeChange(e){this.pageSize=e,this.load()},handleCurrentChange(e){this.currentPage=e,this.load()}}},z=a(3744);const x=(0,z.Z)(U,[["render",_]]);var v=x}}]);
//# sourceMappingURL=177.5b740f64.js.map