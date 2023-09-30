<template>
  <div style="padding: 10px">
    <div style="margin: 10px 0">
      <el-button type="primary" @click="add" v-if="user.role === 1">新增</el-button>
      <el-popconfirm title="确定删除吗？" @confirm="deleteBatch">
        <template #reference>
          <el-button type="danger" v-if="user.role === 1">批量删除</el-button>
        </template>
      </el-popconfirm>
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
        @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="id" label="ID" sortable/>
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="price" label="价格" />
      <el-table-column prop="author" label="作者" />
      <el-table-column prop="createTime" label="出版时间" />
      <el-table-column prop="cover" label="封面">
        <template #default="scope">
          <el-image
              style="width: 100px; height: 100px"
              :src="'http://localhost:9090/files' + scope.row.cover"
              :preview-src-list="[scope.row.cover]"
              :preview-teleported="true"/>
<!--              :initial-index="4"-->
<!--              fit="cover"-->
<!--          />-->
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="text" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm title="确定删除?" @confirm="handleDelete(scope.row.id)" v-if="user.role === 1">>
            <template #reference>
              <el-button type="text" size="mini">删除</el-button>
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

      <el-dialog
          v-model="dialogVisible"
          title="输入"
          width="30%"
          :before-close="handleClose"
      >
        <el-form :model="form" label-width="120px">

          <el-form-item label="名称">
            <el-input v-model="form.name" style="width: 80%" />
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="form.price" style="width: 80%" />
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="form.author" style="width: 80%" />
          </el-form-item>
          <el-form-item label="出版时间">
            <el-date-picker v-model="form.createTime" value-format="YYYY-MM-DD" type="date" style="width: 80%" clearable />
          </el-form-item>
          <el-form-item label="封面">
            <el-upload ref="upload" action="http://localhost:9090/files/upload" :on-success="filesUploadSuccess">
              <el-button type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>

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
  name: 'Book',
  components: {
  },
  data() {
    return {
      user: {},
      form: {},
      dialogVisible: false,
      search: '',
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
      ids: []
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
    this.load()
  },

  methods: {
    deleteBatch() {
      if (!this.ids.length) {
        this.$message.warning("请选择数据：")
        return
      }
      request.post("/book/deleteBatch", this.ids).then(res => {
        if (res.code === '0') {
          this.$message.success("批量删除成功")
          this.load()
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    handleSelectionChange(val) {
      this.ids = val.map(v => v.id) // [{id,name}, {id,name}] => [id,id]
    },
    filesUploadSuccess(res) {
      console.log(res)
      this.form.cover = res.data
    },
    load() {
      request.get("/book", {
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
      if (this.$refs['upload']) {
        this.$refs['upload'].clearFiles() //清除上传文件历史列表
      }
    },
    save() {
      if (this.form.id) { //update
        request.put("/book", this.form).then(res => {
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
        request.post("/book/save", this.form).then(res => {
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
      request.post("/book", this.form).then(res => {
        console.log(res)
      })
    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
      this.$nextTick( () => {
        this.$refs['upload'].clearFiles() //清除上传文件历史列表
      })
    },
    handleDelete(id) {
      console.log(id)
      request.delete("/book/" + id).then(res => {
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

