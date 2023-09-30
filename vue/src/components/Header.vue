<template>
  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex">
    <div style="width: 200px; padding-left: 30px; font-style: italic;font-weight: bold; color: midnightblue">后台管理</div>
    <div style="flex: 1"></div>
    <div style="width: 100px">
      <el-dropdown>
        <span class="el-dropdown-link">
<!--          {{JSON.parse(sessionStorage.getItem("user")).nickname}}-->
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="$router.push('/person')">个人信息</el-dropdown-item>
          <el-dropdown-item @click="$router.push('/login')">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown></div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script><!---->

<style scoped>

</style>