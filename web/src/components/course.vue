<template>
  <div class="limit" v-loading="loading">
    <el-row :gutter="20" style="margin: 40px">
      <el-col :span="8" v-for="(o, index) in list" :key="index" style="margin-bottom: 40px">
        <el-card :body-style="{ padding: '0px'}" shadow="hover">
          <img :src = o.CourseImg class="image">
          <div style="padding: 14px;">
            <span>{{ o.CourseName }}</span>
            <div class="bottom clearfix">
              <el-tag type="danger">¥{{ o.price }}</el-tag>
              <el-tag>{{ o.CourseLength }}课时</el-tag>
              <el-button v-if="o.state == 0" type="text" class="button" style="float: right">购买课程</el-button>
              <el-button v-if="o.state == 1" type="text" disabled class="button" style="float: right">课程已购</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import C from '../service/PCCommon'

  function init() {
    load(this)
  }

  function load(vue) {
    let that = this
    C.call('CourseList', {}).then(function (d) {
      console.log(d);
      vue.list = d.Course
      vue.loading = false
    })
  }

  export default {
    data() {
      return {
        list: [],
        loading: true
      }
    },
    components: {},
    mounted: init
  }
</script>
