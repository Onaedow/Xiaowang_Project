<template>
  <div style="width: 100%; height: 100vh; background-color: blanchedalmond; overflow: hidden">
    <div style="width: 400px; margin: 150px auto">
      <div style="color: darkcyan; font-size: 30px; text-align: center; padding: 30px 0">欢迎登陆</div>
      <el-form :model="form" size="normal" :rules="rules" ref="form">
        <el-form-item prop="username">
          <el-input prefix-icon="UserFilled" v-model="form.username" placeholder="请输入账号"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="Lock" v-model="form.password" show-password placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item>
          <div style="display: flex">
            <el-input prefix-icon="Key" v-model="form.validCode" style="width: 50%;" placeholder="请输入验证码"></el-input>
            <ValidCode @input="createValidCode"></ValidCode>
          </div>
        </el-form-item>
        <el-form-item>
          <el-radio v-model="form.role" :label="1" >管理员</el-radio>
          <el-radio v-model="form.role" :label="2" >普通用户</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import ValidCode from "@/components/ValidCode";

export default {
  name: "Login",
  components: {
    ValidCode
  },
  data() {
    return {
      form: {role: 1},
      rules : {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      validCode: ''
    }
  },
  created() {
    sessionStorage.removeItem("user")
  },
  methods: {
    //接收验证码组件提交的4位的验证码
    createValidCode(data) {
      this.validCode = data
    },
    login () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (!this.form.validCode) {
            this.$message.error("请填写验证码")
            return
          }
          if(this.form.validCode.toLowerCase() !== this.validCode.toLowerCase()) {
            this.$message.error("验证码错误")
            return
          }
          request.post("/user/login", this.form).then(res => {
            if (res.code === '0') {
              this.$message({
                type: "success",
                message: "登陆成功"
              })
              sessionStorage.setItem("user", JSON.stringify(res.data)) //缓存用户信息
              this.$router.push("/") //登陆成功以后跳转主页
            } else {
              this.$message({
                type: "error",
                message: res.msg
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>