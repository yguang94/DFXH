<template>
  <el-row class="limit">
    <el-col :span="6">
      <img src="../assets/img/ipfs-logo.svg" class="logo" alt="">
    </el-col>
    <el-col :span="14" class="header_menu">
      <div class=header_menu>
        <router-link tag="div" to="/Home" class="el-button el-button--default ">首页</router-link>
        <router-link tag="div" to="/Course" class="el-button el-button--default">全部课程</router-link>
        <router-link tag="div" to="/About" class="el-button el-button--default">关于我们</router-link>
        <el-popover
          placement="top-start"
          width="150"
          trigger="hover">
          <img src="../assets/img/qr.png" style="width: 150px" alt="">
          <el-button slot="reference">关注微信</el-button>
        </el-popover>
      </div>

    </el-col>
    <el-col :span="4">
      <div v-if="status == 0">
        <router-link tag="button" to="/Login" class="el-button el-button--default el-button--small"
                     style="border: 1px solid #dcdfe6">登录
        </router-link>
        <router-link tag="button" to="/Register" class="el-button el-button--default el-button--small"
                     style="border: 1px solid #dcdfe6">注册
        </router-link>
      </div>
      <div v-if="status == 1" class="header_user">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="fa fa-user-circle-o fa-1.5x"></i> {{ userName }}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link tag="span" to="/MyCourse">我的课程</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link tag="span" to="/MyMessage">我的消息</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link tag="span" to="/MyAccount">我的账号</router-link>
            </el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  import C from '../service/PCCommon'
  import { mapActions } from 'vuex'

  function init() {
    load(this)
  }

  function load(vue) {
    let that = this
    C.call('getUserInfo', {}).then(function (d) {
      console.log(d);
      vue.userName = d.userName;
      vue.status = d.status;
      vue.updLoginName(d.userName)
      vue.loginAction(vue.status)
    })
  }

  export default {
    data() {
      return {
        userName: '',
        status: 0
      }
    },
    components: {},
    methods: {
      ...mapActions([
        'updLoginName',
        'loginAction'
      ])
    },
    mounted: init
  }
</script>
