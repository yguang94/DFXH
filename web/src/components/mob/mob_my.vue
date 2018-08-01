<template>
  <div class="wrapper" style="height: 100%">
    <x-header :left-options="{showBack: false}">我的</x-header>
    <ViewBox>
      <card>
        <div slot="content" style="padding: 20px;text-align: center">
          <img src="../../assets/img/user.png" class="mob_portrait" alt="">
          <div v-if="$store.state.loginState !== 0">
            <span>{{ $store.state.loginName }}</span>
          </div>
          <div v-if="$store.state.loginState === 0">
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
  import { mapMutations } from 'vuex'


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
    methods: {
      ...mapMutations([
        'loginName',
        'loginState'
      ])
    },
    created() {
    }
  }
</script>
