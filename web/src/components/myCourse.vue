<template>
  <div class="limit">
    <el-row :gutter="40" class="elrowwidth myrow">
      <el-col :span="4">
        <el-menu
          default-active="1"
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
            <span>我的课程</span>
          </div>
          <div class="text item">

            <!--<div style="text-align: center">
              <i class="fa fa-book fa-5x" aria-hidden="true"></i>
              <span style="display: block;margin-top: 20px">你还没有已购的课程</span>
            </div>-->
            <el-row :gutter="20">
              <el-col :span="6" v-for="o in 6" :key="o" >
                <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-bottom: 20px">
                  <img src="../assets/img/ke1.png" class="image">
                  <div style="padding: 14px;">
                    <span>心肺系统疾病物理治疗</span>
                    <div class="bottom clearfix">
                      <el-tag>已学20%</el-tag>
                      <router-link tag="div" to="/MyVideo" class="el-button el-button--default el-button--text" style="float: right">立即学习</router-link>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
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
