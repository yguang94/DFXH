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
            <el-tabs type="border-card" style="margin-top: 30px">
              <el-tab-pane label="用户信息">
                <el-form ref="form" label-width="80px">
                  <el-form-item label="昵称">
                    <el-input disabled></el-input>
                  </el-form-item>
                  <el-form-item label="Email">
                    <el-input type="email" disabled></el-input>
                  </el-form-item>
                  <el-form-item label="手机">
                    <el-input type="Tel" disabled></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" disabled >确认</el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="重置密码">
                <el-form ref="form" label-width="80px">
                  <el-form-item label="原密码">
                    <el-row :gutter="20">
                      <el-col :span="16"><el-input  type="password" placeholder="必填"></el-input></el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item label="新密码">
                    <el-row :gutter="20">
                      <el-col :span="16">
                        <el-input type="password" placeholder="必填"></el-input>
                        <span class="demonstration" style="font-size: 12px;color: #CCCCCC">为保证安全性，长度至少六位</span>
                        <!--<el-progress  :stroke-width="15" :percentage="pwdStrength.len" status="exception"></el-progress>-->
                        <!--<span style="color: #CCCCCC">密码强度:{{pwdStrength.txt}}</span>-->
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item label="确认密码">
                    <el-row :gutter="20">
                      <el-col :span="16"><el-input type="password" placeholder="必填"></el-input></el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary">确认</el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
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
