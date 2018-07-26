<template>
  <div style="height: 100%">
    <ViewBox>
      <x-header slot="header" title="登录"></x-header>
      <div>
        <card style="padding: 20px">
          <div slot="content">
            <group>
              <x-input title="手机" placeholder="请输入手机号" placeholder-align="right" type="number" text-align="right" class="mob_loginInput"></x-input>
              <x-input title="密码" placeholder="请输入密码" placeholder-align="right" type="password" text-align="right" class="mob_loginInput"></x-input>
            </group>
            <flexbox>
              <flexbox-item style="text-align: left">
                <x-button mini plain style="border: none">忘记密码</x-button>
              </flexbox-item>
              <flexbox-item style="text-align: right">
                <x-button mini plain style="border: none">注册账号</x-button>
              </flexbox-item>
            </flexbox>
            <div style="padding: 40px">
              <x-button type="primary">登录</x-button>
            </div>
          </div>
        </card>
      </div>

    </ViewBox>
  </div>
</template>

<script>
  import { ViewBox, XHeader, Group, XInput,Card, XButton, Flexbox, FlexboxItem } from 'vux'

  export default {
    components: {
      ViewBox,
      XHeader,
      Group,
      XInput,
      Card,
      XButton,
      Flexbox,
      FlexboxItem
    },
    props: {},
    data() {
      return {}
    },
    watch: {},
    computed: {},
    methods: {},
    created() {
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
