<template>
    <div style="height: 100%">
      <ViewBox>
        <x-header slot="header" title="我的消息"></x-header>
        <div>
          <card :header="{title: '2018.7.22 13:21' }" v-for="o in 6" :key="o">
            <div slot="content" style="padding: 5px 25px">
              获得5元优惠券!
            </div>
          </card>
        </div>
        <divider>没有啦</divider>
      </ViewBox>
    </div>
</template>

<script>
  import { ViewBox, XHeader, Card, Divider } from 'vux'

    export default {
        components: {
          ViewBox,
          XHeader,
          Card,
          Divider
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
