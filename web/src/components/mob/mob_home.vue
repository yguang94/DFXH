<template>
  <div class="wrapper" style="height: 100%">
    <ViewBox>
      <router-view></router-view>
      <Tabbar  slot="bottom">
        <TabbarItem selected link="MobHome">
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
  import C from '../../service/PCCommon'
  import { mapActions } from 'vuex'

  function init() {
    load(this)
  }

  function load(vue) {
    let that = this
    C.call('getUserInfo', {}).then(function (d) {
      vue.userName = d.userName;
      vue.status = d.status;
      vue.updLoginName(vue.userName);
      vue.loginAction(vue.status)
    })
  }

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
        userName: '',
        status: 0
      };
    },
    watch: {},
    computed: {},
    methods: {
      ...mapActions([
        'updLoginName',
        'loginAction'
      ])
    },
    created() {
    },
    mounted: init

  };

</script>
