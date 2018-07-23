<template>
  <el-row type="flex" class="row-bg limit" justify="center">
    <el-col :xs="12" :sm="12" :md="10" :lg="9" :xl="8">
      <el-card class="box-card" style="margin-top: 20%">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <div class="text item">
          <el-form ref="form"  label-width="80px">
            <el-form-item label="手机/邮箱" style="width: 90%">
              <el-input type="text" placeholder="请输入手机/邮箱" clearable>></el-input>
            </el-form-item>
            <el-form-item label="密码" style="width: 90%">
              <el-input type="password"  placeholder="请输入密码" clearable>></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
    export default{
        data(){
            return{
                msg:''
            }
        },
        components:{

        }
    }
</script>
