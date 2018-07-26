<template>
  <div style="height: 100%">
    <ViewBox>
      <x-header slot="header" title="注册"></x-header>
      <div>
        <group>
          <x-input title="用户名" text-align="right" placeholder="请填入用户名"></x-input>
          <x-input title="手机"  is-type="china-mobile" text-align="right" placeholder="请填写手机号"></x-input>
          <x-input title="邮箱"  is-type="email" text-align="right" placeholder="请填写邮箱"></x-input>
          <x-input title="密码" type="password" text-align="right" placeholder="请设置密码"></x-input>
          <x-input title="确认密码" type="password" text-align="right" placeholder="请再次输入密码"></x-input>
        </group>
      </div>
      <div style="padding: 40px">
        <x-button type="primary">立即注册</x-button>
      </div>
    </ViewBox>
  </div>
</template>

<script>
  import {ViewBox, XHeader, XInput, Group, XButton} from 'vux'

  export default {
    components: {
      ViewBox,
      XHeader,
      XInput,
      Group,
      XButton
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

