<template>
  <div style="padding: 10px">
    <div style="margin: 10px 0">
      <el-button type="primary" @click="add">新增</el-button>
    </div>

    <div style="margin: 10px 0">
      <el-input v-model="search" placeholder="请输入关键字" style="width: 20%" clearable></el-input>
      <el-button type="primary" style="margin-left: 5px" size="small" @click="load">查询</el-button>
    </div>

    <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%"
        :row-class-name="tableRowClassName"
    >
      <el-table-column prop="id" label="ID" sortable/>
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="password" label="密码" />
      <el-table-column prop="nickname" label="昵称" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="role" label="角色">
        <template #default="scope">
          <span v-if="scope.row.role === 1">管理员</span>
          <span v-if="scope.row.role === 2">普通用户</span>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button type="success" size="mini" plain @click="showBooks(scope.row.bookList)">查看图书列表</el-button>
          <el-button type="primary" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm title="确定删除?" @confirm="handleDelete(scope.row.id)">
            <template #reference>
              <el-button type="danger" size="mini">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    
    <div style="margin-left: 10px">
      <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />

      <el-dialog title="用户拥有的图书列表" v-model="bookVis" width="30%">
        <el-table :data="bookList" stripe border>
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="price" label="价格"></el-table-column>
        </el-table>
      </el-dialog>

      <el-dialog
          v-model="dialogVisible"
          title="Tips"
          width="30%"
          :before-close="handleClose"
      >
        <el-form :model="form" label-width="120px">

          <el-form-item label="用户名">
            <el-input v-model="form.username" style="width: 80%" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" style="width: 80%" />
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="form.nickname" style="width: 80%" />
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age" style="width: 80%" />
          </el-form-item>

          <el-form-item label="性别">
            <div class="my-2 flex items-center text-sm">
              <el-radio-group v-model="form.sex" class="ml-4" style="width: 80%">
                <el-radio label="男">男</el-radio>
                <el-radio label="女">女</el-radio>
                <el-radio label="非二元性别">非二元性别</el-radio>
                <el-radio label="未知">未知</el-radio>
              </el-radio-group>
            </div>
          </el-form-item>

          <el-form-item label="地址">
            <el-input type="textarea" v-model="form.address" style="width: 80%" />
          </el-form-item>

<!--          <el-form-item label="角色">-->
<!--            <el-input v-model="form.role" style="width: 80%" />-->
<!--          </el-form-item>-->
        </el-form>

        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="save">确定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>

import request from "@/utils/request";

export default {
  name: 'User',
  components: {
  },
  data() {
    return {
      form: {},
      dialogVisible: false,
      bookVis: false,
      search: '',
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableData: [
        // {
        //   date: '2016-05-03',
        //   name: 'Tom',
        //   address: 'No. 189, Grove St, Los Angeles',
        // },
        // {
        //   date: '2016-05-02',
        //   name: 'Tom',
        //   address: 'No. 189, Grove St, Los Angeles',
        // },
        // {
        //   date: '2016-05-04',
        //   name: 'Tom',
        //   address: 'No. 189, Grove St, Los Angeles',
        // },
        // {
        //   date: '2016-05-01',
        //   name: 'Tom',
        //   address: 'No. 189, Grove St, Los Angeles',
        // }
      ],
      bookList: []
    }
  },

  created() {
    this.load()
  },

  methods: {
    showBooks(books) {
      this.bookList = books
      this.bookVis = true
    },

    load() {
      request.get("/user", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search: this.search
        }
      }).then(res => {
        console.log(res)
        this.tableData = res.data.records
        this.total = res.data.total
      })
    },
    add() {
      this.dialogVisible = true
      this.form = {}
    },
    save() {
      if (this.form.id) { //update
        request.put("/user", this.form).then(res => {
          console.log(res)
          if (res.code === '0') {
            this.$message({
              type: "success",
              message: "更新成功"
            })
          } else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.load() //刷新表格的数据
          this.dialogVisible = false //关闭弹窗
        })
      }
      else { //add a new one
        request.post("/user", this.form).then(res => {
          console.log(res)
          if(res.code === '0') {
            this.$message({
              type: "success",
              message: "新增成功"
            })
          } else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.load() //刷新表格的数据
          this.dialogVisible = false //关闭弹窗
        })
      }
      request.post("/user", this.form).then(res => {
        console.log(res)
      })
    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
    },
    handleDelete(id) {
      console.log(id)
      request.delete("/user/" + id).then(res => {
        if(res.code === '0') {
          this.$message({
            type: "success",
            message: "删除成功"
          })
        } else {
          this.$message({
            type: "error",
            message: res.msg
          })
        }
      })
      this.load()
    },
    handleSizeChange(pageSize) { //改变每页个数触发
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) { //改变页码触发
      this.currentPage = pageNum
      this.load()
    },
  }
}

</script>

