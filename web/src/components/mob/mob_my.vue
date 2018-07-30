<template>
  <div class="wrapper" style="height: 100%">
    <x-header :left-options="{showBack: false}">我的</x-header>
    <ViewBox>
      <card>
        <div slot="content" style="padding: 20px;text-align: center">
          <img src="../../assets/img/user.png" class="mob_portrait" alt="">
          <div v-if="status == 1">
            <span>{{ userName }}</span>
          </div>
          <div v-if="status == 0">
            <flexbox>
              <flexbox-item>
                <x-button type="primary" link="/MobLogin">登录</x-button>
              </flexbox-item>
              <flexbox-item>
                <x-button type="default" link="/MobRegister">注册</x-button>
              </flexbox-item>
            </flexbox>
          </div>
        </div>
      </card>
      <group>
        <cell title="我的课程" is-link link="/MobMyCourse"></cell>
        <cell title="我的消息" is-link link="/MobMyMessage">
          <div class="badge-value">
            <badge></badge>
          </div>
        </cell>
        <cell title="我的账号" is-link link="/MobMyAccount"></cell>
      </group>
    </ViewBox>
  </div>
</template>

<script>
  import {XHeader, ViewBox, Group, Cell, Card, Flexbox, FlexboxItem, XButton,Badge} from 'vux'
  import C from '../../service/PCCommon'

  function init() {
    load(this)
  }

  function load(vue) {
    let that = this
    C.call('getUserInfo', {}).then(function (d) {
      console.log(d);
      vue.userName = d.userName;
      vue.status = d.status;
    })
  }

  export default {
    components: {
      XHeader,
      ViewBox,
      Group,
      Cell,
      Card,
      Flexbox,
      FlexboxItem,
      XButton,
      Badge
    },
    props: {},
    data() {
      return {
        userName: '',
        status: 0
      }
    },
    watch: {},
    computed: {},
    methods: {},
    created() {
    },
    mounted: init
  }
</script>
