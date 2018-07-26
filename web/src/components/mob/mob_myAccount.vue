<template>
  <div style="height: 100%">
    <ViewBox>
      <x-header slot="header" title="我的账号"></x-header>
      <group>
        <x-input title="用户名" value="yugang" text-align="right"></x-input>
        <x-input title="手机" value="15800001111" is-type="china-mobile" disabled text-align="right"></x-input>
        <x-input title="邮箱" value="123sdfs@126.com" type="email" disabled text-align="right"></x-input>
        <x-input title="密码" is-link type="password" value="123123" text-align="right"></x-input>
      </group>
      <div style="padding: 40px">
        <x-button type="primary">确认修改</x-button>
      </div>

    </ViewBox>
  </div>
</template>

<script>
  import {ViewBox, XHeader, Group, Cell, XInput, XButton} from 'vux'

  export default {
    components: {
      ViewBox,
      XHeader,
      Group,
      Cell,
      XInput,
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
