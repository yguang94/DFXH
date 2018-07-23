<template>
  <div class="limit">
    <el-row :gutter="40" class="elrowwidth myrow">
      <el-col :span="4">
        <el-menu
          default-active="3"
          class="el-menu-vertical-demo mymenu">
          <el-menu-item index="1">
            <router-link tag="div" to="/MyCourse">
              <i class="fa fa-graduation-cap" aria-hidden="true"></i>
              我的课程
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link tag="div" to="/MyMessage">
              <i class="fa fa-commenting-o" aria-hidden="true"></i>
              我的消息
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link tag="div" to="/MyAccount">
              <i class="fa fa-user-circle" aria-hidden="true"></i>
              我的账号
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>账号管理</span>
          </div>
          <div class="text item">

          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: ''
      }
    },
    components: {}
  }
</script>
