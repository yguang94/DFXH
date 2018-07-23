<template>
    <div class="limit">
      <el-row :gutter="20" style="margin: 40px">
        <el-col :span="8" v-for="o in 6" :key="o" style="margin-bottom: 40px">
          <el-card :body-style="{ padding: '0px'}" shadow="hover">
            <img src="../assets/img/ke1.png" class="image">
            <div style="padding: 14px;">
              <span>心肺系统疾病物理治疗</span>
              <div class="bottom clearfix">
                <el-tag type="danger">¥6499</el-tag>
                <el-tag>12课时</el-tag>
                <el-tag>480分钟</el-tag>
                <el-button type="text" class="button" style="float: right">购买课程</el-button>
                <!--<el-button type="text" disabled class="button" style="float: right">课程已购</el-button>-->
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
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
