<template>
  <div class="wrapper">
    <mt-header title="IPFS">
      <img src="../../assets/img/ipfs-logo.svg" slot="left" alt="">
      <mt-button slot="right">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
      </mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <router-link to="/MobHPage">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="2">
        <router-link to="/MobCourse">全部课程</router-link>
      </mt-tab-item>
      <mt-tab-item id="3">
        <router-link to="MobAbout">关于我们</router-link>
      </mt-tab-item>
      <mt-tab-item id="4">我的</mt-tab-item>
    </mt-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
  import {
    Header,
    Navbar,
    TabItem,
    Cell
  } from "mint-ui";

  export default {
    components: {
      Header,
      Navbar,
      TabItem,
      Cell
    },
    props: {},
    data() {
      return {
        selected: ""
      };
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {
      this.$router.replace('/MobHPage');
    }
  };

</script>
