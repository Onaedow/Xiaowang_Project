"use strict";(self["webpackChunkspringboot_vue_demo"]=self["webpackChunkspringboot_vue_demo"]||[]).push([[130],{4130:function(e,l,a){a.r(l),a.d(l,{default:function(){return C}});var t=a(6252);const o={style:{padding:"10px"}},s={style:{margin:"10px 0"}},i=(0,t.Uk)("新增"),r={style:{margin:"10px 0"}},d=(0,t.Uk)("查询"),n=(0,t.Uk)("编辑"),m=(0,t.Uk)("> "),u=(0,t.Uk)("删除"),p={style:{"margin-left":"10px"}},c=(0,t.Uk)("点击上传"),h={class:"dialog-footer"},g=(0,t.Uk)("取消"),f=(0,t.Uk)("确定");function b(e,l,a,b,w,k){const y=(0,t.up)("el-button"),W=(0,t.up)("el-input"),C=(0,t.up)("el-table-column"),_=(0,t.up)("el-image"),V=(0,t.up)("el-popconfirm"),v=(0,t.up)("el-table"),z=(0,t.up)("el-pagination"),U=(0,t.up)("el-form-item"),S=(0,t.up)("el-date-picker"),x=(0,t.up)("el-upload"),$=(0,t.up)("el-form"),D=(0,t.up)("el-dialog");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",s,[1===w.user.role?((0,t.wg)(),(0,t.j4)(y,{key:0,type:"primary",onClick:k.add},{default:(0,t.w5)((()=>[i])),_:1},8,["onClick"])):(0,t.kq)("",!0)]),(0,t._)("div",r,[(0,t.Wm)(W,{modelValue:w.search,"onUpdate:modelValue":l[0]||(l[0]=e=>w.search=e),placeholder:"请输入关键字",style:{width:"20%"},clearable:""},null,8,["modelValue"]),(0,t.Wm)(y,{type:"primary",style:{"margin-left":"5px"},size:"small",onClick:k.load},{default:(0,t.w5)((()=>[d])),_:1},8,["onClick"])]),(0,t.Wm)(v,{data:w.tableData,border:"",stripe:"",style:{width:"100%"},"row-class-name":e.tableRowClassName},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{prop:"id",label:"ID",sortable:""}),(0,t.Wm)(C,{prop:"name",label:"名称"}),(0,t.Wm)(C,{prop:"price",label:"价格"}),(0,t.Wm)(C,{prop:"author",label:"作者"}),(0,t.Wm)(C,{prop:"createTime",label:"出版时间"}),(0,t.Wm)(C,{prop:"cover",label:"封面"},{default:(0,t.w5)((e=>[(0,t.Wm)(_,{style:{width:"100px",height:"100px"},src:"/api/files"+e.row.cover,"preview-src-list":[e.row.cover],"preview-teleported":!0},null,8,["src","preview-src-list"])])),_:1}),(0,t.Wm)(C,{fixed:"right",label:"操作",width:"120"},{default:(0,t.w5)((e=>[(0,t.Wm)(y,{link:"",type:"text",size:"mini",onClick:l=>k.handleEdit(e.row)},{default:(0,t.w5)((()=>[n])),_:2},1032,["onClick"]),1===w.user.role?((0,t.wg)(),(0,t.j4)(V,{key:0,title:"确定删除?",onConfirm:l=>k.handleDelete(e.row.id)},{reference:(0,t.w5)((()=>[(0,t.Wm)(y,{type:"text",size:"mini"},{default:(0,t.w5)((()=>[u])),_:1})])),default:(0,t.w5)((()=>[m])),_:2},1032,["onConfirm"])):(0,t.kq)("",!0)])),_:1})])),_:1},8,["data","row-class-name"]),(0,t._)("div",p,[(0,t.Wm)(z,{currentPage:w.currentPage,"onUpdate:currentPage":l[1]||(l[1]=e=>w.currentPage=e),"page-size":w.pageSize,"onUpdate:page-size":l[2]||(l[2]=e=>w.pageSize=e),"page-sizes":[5,10,15,20],small:e.small,disabled:e.disabled,background:e.background,layout:"total, sizes, prev, pager, next, jumper",total:w.total,onSizeChange:k.handleSizeChange,onCurrentChange:k.handleCurrentChange},null,8,["currentPage","page-size","small","disabled","background","total","onSizeChange","onCurrentChange"]),(0,t.Wm)(D,{modelValue:w.dialogVisible,"onUpdate:modelValue":l[8]||(l[8]=e=>w.dialogVisible=e),title:"输入",width:"30%","before-close":e.handleClose},{footer:(0,t.w5)((()=>[(0,t._)("span",h,[(0,t.Wm)(y,{onClick:l[7]||(l[7]=e=>w.dialogVisible=!1)},{default:(0,t.w5)((()=>[g])),_:1}),(0,t.Wm)(y,{type:"primary",onClick:k.save},{default:(0,t.w5)((()=>[f])),_:1},8,["onClick"])])])),default:(0,t.w5)((()=>[(0,t.Wm)($,{model:w.form,"label-width":"120px"},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{label:"名称"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{modelValue:w.form.name,"onUpdate:modelValue":l[3]||(l[3]=e=>w.form.name=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(U,{label:"价格"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{modelValue:w.form.price,"onUpdate:modelValue":l[4]||(l[4]=e=>w.form.price=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(U,{label:"作者"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{modelValue:w.form.author,"onUpdate:modelValue":l[5]||(l[5]=e=>w.form.author=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(U,{label:"出版时间"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{modelValue:w.form.createTime,"onUpdate:modelValue":l[6]||(l[6]=e=>w.form.createTime=e),"value-format":"YYYY-MM-DD",type:"date",style:{width:"80%"},clearable:""},null,8,["modelValue"])])),_:1}),(0,t.Wm)(U,{label:"封面"},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{ref:"upload",action:"/api/files/upload","on-success":k.filesUploadSuccess},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{type:"primary"},{default:(0,t.w5)((()=>[c])),_:1})])),_:1},8,["on-success"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","before-close"])])])}var w=a(4471),k={name:"Book",components:{},data(){return{user:{},form:{},dialogVisible:!1,search:"",currentPage:1,pageSize:10,total:0,tableData:[]}},created(){let e=sessionStorage.getItem("user")||"{}";this.user=JSON.parse(e),w.Z.get("/user/"+this.user.id).then((e=>{"0"===e.code&&(this.user=e.data)})),this.load()},methods:{filesUploadSuccess(e){console.log(e),this.form.cover=e.data},load(){w.Z.get("/book",{params:{pageNum:this.currentPage,pageSize:this.pageSize,search:this.search}}).then((e=>{console.log(e),this.tableData=e.data.records,this.total=e.data.total}))},add(){this.dialogVisible=!0,this.form={},this.$refs["upload"]&&this.$refs["upload"].clearFiles()},save(){this.form.id?w.Z.put("/book",this.form).then((e=>{console.log(e),"0"===e.code?this.$message({type:"success",message:"更新成功"}):this.$message({type:"error",message:e.msg}),this.load(),this.dialogVisible=!1})):w.Z.post("/book/save",this.form).then((e=>{console.log(e),"0"===e.code?this.$message({type:"success",message:"新增成功"}):this.$message({type:"error",message:e.msg}),this.load(),this.dialogVisible=!1})),w.Z.post("/book",this.form).then((e=>{console.log(e)}))},handleEdit(e){this.form=JSON.parse(JSON.stringify(e)),this.dialogVisible=!0,this.$nextTick((()=>{this.$refs["upload"].clearFiles()}))},handleDelete(e){console.log(e),w.Z["delete"]("/book/"+e).then((e=>{"0"===e.code?this.$message({type:"success",message:"删除成功"}):this.$message({type:"error",message:e.msg})})),this.load()},handleSizeChange(e){this.pageSize=e,this.load()},handleCurrentChange(e){this.currentPage=e,this.load()}}},y=a(3744);const W=(0,y.Z)(k,[["render",b]]);var C=W}}]);
//# sourceMappingURL=130.6cff9c8c.js.map