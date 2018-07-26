<template>
  <div class="wrapper" style="height: 100%">
    <ViewBox>
      <router-view></router-view>
      <Tabbar  slot="bottom">
        <TabbarItem link="MobHome">
          <i class="fa fa-home" slot="icon" aria-hidden="true"></i>
          <span slot="label">首页</span>
        </TabbarItem>
        <TabbarItem link="/MobCourse">
          <i class="fa fa-graduation-cap" slot="icon" aria-hidden="true"></i>
          <span slot="label">全部课程</span>
        </TabbarItem>
        <TabbarItem link="/MobMy">
          <i class="fa fa-user-circle" slot="icon" aria-hidden="true"></i>
          <span slot="label">我的</span>
        </TabbarItem>
      </Tabbar>
    </ViewBox>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem, ViewBox} from 'vux'


  export default {
    components: {
      Tabbar,
      TabbarItem,
      ViewBox
    },
    props: {},
    data() {
      return {
        selected: "",
      };
    },
    watch: {},
    computed: {},
    methods: {},
    created() {
    },
    mounted() {
    }
  };

</script>
