<template>
  <div>
    <el-menu
        style="width: 200px; min-height: calc(100vh - 50px)"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="path"
        router
        :default-openeds='[1]'
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-sub-menu index="1" v-if="user.role === 1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/user">
          <el-icon><setting /></el-icon>
          <span>用户管理</span>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="/category">
        <el-icon><setting /></el-icon>
        <span>分类管理</span>
      </el-menu-item>

      <el-menu-item index="/book">
        <el-icon><setting /></el-icon>
        <span>书籍管理</span>
      </el-menu-item>

      <el-menu-item index="/news">
        <el-icon><setting /></el-icon>
        <span>新闻管理</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "Aside",
  data() {
    return {
      user: {},
      path: this.$route.path //设置默认高亮
    }
  },
  created() {
    let userStr = sessionStorage.getItem("user") || "{}" //获取用户的json串
    this.user = JSON.parse(userStr)

    //请求服务端，确认当前登陆用户的合法信息
    request.get("/user/" + this.user.id).then(res => {
      if (res.code === '0') {
        this.user = res.data
      }
    })
  }
}
</script>


<!--<script lang="ts" setup>-->
<!--import {-->
<!--  Document,-->
<!--  Menu as IconMenu,-->
<!--  Location,-->
<!--  Setting,-->
<!--} from '@element-plus/icons-vue'-->

<!--</script>-->

<style scoped>

</style>