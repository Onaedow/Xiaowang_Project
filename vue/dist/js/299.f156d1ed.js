"use strict";(self["webpackChunkspringboot_vue_demo"]=self["webpackChunkspringboot_vue_demo"]||[]).push([[299],{6299:function(e,l,a){a.r(l),a.d(l,{default:function(){return c}});var s=a(6252);const o=["src"],t={key:1,class:"el-icon-plus avatar-uploader-icon"},m={style:{"text-align":"center"}},u=(0,s.Uk)("保存");function r(e,l,a,r,d,n){const i=(0,s.up)("el-upload"),f=(0,s.up)("el-form-item"),c=(0,s.up)("el-input"),p=(0,s.up)("el-form"),w=(0,s.up)("el-button"),g=(0,s.up)("el-card");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(g,{style:{width:"40%",margin:"10px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{ref:"form",model:d.form,"label-width":"80px"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{style:{"text-align":"center"},"label-width":"0"},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{class:"avatar-uploader",action:"http://localhost:9090/files/upload","show-file-list":!1,"on-success":n.handleAvatarSuccess},{default:(0,s.w5)((()=>[d.form.avatar?((0,s.wg)(),(0,s.iD)("img",{key:0,src:d.form.avatar,class:"avatar"},null,8,o)):((0,s.wg)(),(0,s.iD)("i",t))])),_:1},8,["on-success"])])),_:1}),(0,s.Wm)(f,{label:"用户名"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:d.form.username,"onUpdate:modelValue":l[0]||(l[0]=e=>d.form.username=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(f,{label:"昵称"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:d.form.nickname,"onUpdate:modelValue":l[1]||(l[1]=e=>d.form.nickname=e)},null,8,["modelValue"])])),_:1}),(0,s.Wm)(f,{label:"年龄"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:d.form.age,"onUpdate:modelValue":l[2]||(l[2]=e=>d.form.age=e)},null,8,["modelValue"])])),_:1}),(0,s.Wm)(f,{label:"性别"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:d.form.sex,"onUpdate:modelValue":l[3]||(l[3]=e=>d.form.sex=e)},null,8,["modelValue"])])),_:1}),(0,s.Wm)(f,{label:"地址"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:d.form.address,"onUpdate:modelValue":l[4]||(l[4]=e=>d.form.address=e)},null,8,["modelValue"])])),_:1}),(0,s.Wm)(f,{label:"密码"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:d.form.password,"onUpdate:modelValue":l[5]||(l[5]=e=>d.form.password=e),"show-password":""},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),(0,s._)("div",m,[(0,s.Wm)(w,{type:"primary",onClick:n.update},{default:(0,s.w5)((()=>[u])),_:1},8,["onClick"])])])),_:1})])}var d=a(4471),n={name:"Person",data(){return{form:{}}},created(){let e=sessionStorage.getItem("user")||"{}";this.form=JSON.parse(e)},methods:{handleAvatarSuccess(e){this.form.avatar=e.data,this.$message.success("上传成功")},update(){d.Z.put("/user",this.form).then((e=>{console.log(e),"0"===e.code?(this.$message({type:"success",message:"更新成功"}),sessionStorage.setItem("user",JSON.stringify(this.form)),this.$emit("userInfo")):this.$message({type:"error",message:e.msg})}))}}},i=a(3744);const f=(0,i.Z)(n,[["render",r]]);var c=f}}]);
//# sourceMappingURL=299.f156d1ed.js.map