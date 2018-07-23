<template>
  <el-container style="height: 100%;min-width: 1000px">
    <el-header class="header">
      <Header></Header>
    </el-header>
    <el-main class="main"><router-view></router-view></el-main>
    <el-footer class="footer"><span class="limit">© 2018   DFXH. All Rights Reserved.</span></el-footer>
  </el-container>
</template>

<script>
  import Header from './header.vue'

  export default {
    data() {
      return {

      }
    },
    components: {
      Header
    },
    methods:{
    
    },
    mounted() {
      this.$router.replace('/Home');
    }
  }
</script>
