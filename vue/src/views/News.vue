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
      <el-table-column prop="title" label="标题" />
<!--      <el-table-column prop="content" label="内容" />-->
      <el-table-column prop="author" label="作者" />
      <el-table-column prop="time" label="时间" />

      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="text" size="mini" @click="showDetail(scope.row)">详情</el-button>
          <el-button link type="text" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm title="确定删除?" @confirm="handleDelete(scope.row.id)">
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
          width="60%"
          :before-close="handleClose"
      >
        <el-form :model="form" label-width="160px">

          <el-form-item label="标题">
            <el-input v-model="form.title" style="width: 50%" />
          </el-form-item>

          <div id="toolbar-container"></div>
          <div id="editor-container"></div>

<!--          <el-form-item label="内容">-->
<!--            <el-input v-model="form.content" style="width: 80%" />-->
<!--          </el-form-item>-->
        </el-form>

        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="save">确定</el-button>
          </span>
        </template>
      </el-dialog>

      <el-dialog
          v-model="vis"
          title="详情"
          width="60%"
          :before-close="handleClose"
      >
        <el-card>
          <div v-html="detail.content" style="min-height: 100px"></div>
        </el-card>
      </el-dialog>

    </div>
  </div>
</template>

<!--&lt;!&ndash; 引入 css &ndash;&gt;-->
<!--<link href="https://unpkg.com/@wangeditor/editor@latest/dist/css/style.css" rel="stylesheet">-->


<script>

import request from "@/utils/request";
import '@wangeditor/editor/dist/css/style.css'
import { createEditor, createToolbar, IEditorConfig, IDomEditor } from '@wangeditor/editor'

let editor;
let editorConfig;
const E = window.wangEditor; // 全局变量

export default {
  name: 'News',
  components: {
  },
  data() {
    return {
      form: {},
      dialogVisible: false,
      search: '',
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
      vis: false,
      detail: {}
    }
  },

  created() {
    this.load()
  },

  mounted() {

  },

  methods: {
    showDetail(row) {
      this.detail = row
      this.vis = true
    },

    filesUploadSuccess(res) {
      console.log(res)
      this.form.cover = res.data
    },

    load() {
      request.get("/news", {
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

      if (!editor) {
        this.$nextTick(() => {
          // 编辑器配置
          editorConfig = {MENU_CONF: {}}
          editorConfig.placeholder = '请输入内容'
          editorConfig.onChange = (editor) => {
            // 当编辑器选区、内容变化时，即触发
            console.log('content', editor.children)
            console.log('html', editor.getHtml())
          }
          // 工具栏配置
          const toolbarConfig = {}

          editorConfig.MENU_CONF['uploadImage'] = {
            server: 'http://localhost:9090/files/editor/upload',
            fieldName: 'file', //设置上传参数名称
          }

          //关联弹窗里面的div,new一个editor对象
          editor = createEditor({
            selector: '#editor-container',
            html: '<p></p>', // 从 editor.getHtml() 获取的 html 内容
            config: editorConfig,
            mode: 'default' // 或 'simple' 参考下文
          })
          const toolbar = createToolbar({
            editor,
            selector: '#toolbar-container',
            config: toolbarConfig,
            mode: 'default' // 或 'simple' 参考下文
          })
        })
      } else {
        this.$nextTick(() => {
          editor.setHtml('<p></p>')
          editorConfig.MENU_CONF['uploadImage'] = {
            server: 'http://localhost:9090/files/editor/upload',
            fieldName: 'file',
          }
        })
      }

    },

    save() {
      this.form.content = editor.getHtml()//获取编辑器里面的值，然后赋予到实体

      if (this.form.id) { //update
        request.put("/news", this.form).then(res => {
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
        let userStr = sessionStorage.getItem("user") || "{}"
        let user = JSON.parse(userStr)
        this.form.author = user.nickname

        request.post("/news/save", this.form).then(res => {
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
      request.post("/news", this.form).then(res => {
        console.log(res)
      })
    },

    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true

      if (!editor) {
        this.$nextTick(() => {
          // 编辑器配置
          const editorConfig = {}
          editorConfig.placeholder = '请输入内容'
          editorConfig.onChange = (editor) => {
            // 当编辑器选区、内容变化时，即触发
            console.log('content', editor.children)
            console.log('html', editor.getHtml())
          }
          // 工具栏配置
          const toolbarConfig = {}

          editorConfig.MENU_CONF['uploadImage'] = {
            server: 'http://localhost:9090/files/editor/upload',
            fieldName: 'file', //设置上传参数名称
          }

          editor = createEditor({
            selector: '#editor-container',
            html: '<p></p>', // 从 editor.getHtml() 获取的 html 内容
            config: editorConfig,
            mode: 'default' // 或 'simple' 参考下文
          })

          const toolbar = createToolbar({
            editor,
            selector: '#toolbar-container',
            config: toolbarConfig,
            mode: 'default' // 或 'simple' 参考下文
          })
        })
      } else {
        this.$nextTick(() => {
          editor.setHtml('<p></p>')
          editorConfig.MENU_CONF['uploadImage'] = {
            server: 'http://localhost:9090/files/editor/upload',
            fieldName: 'file',
          }
        })
      }

      editor.getHtml(row.content)
    },

    handleDelete(id) {
      console.log(id)
      request.delete("/news/" + id).then(res => {
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
    }

  }
}

</script>

