<template>
  <div style="height: 100%">
    <ViewBox>
      <x-header slot="header" title="我的课程"></x-header>
      <card v-for="o in 6" :key="o">
        <div slot="content">
          <flexbox>
            <flexbox-item>
              <div class="flex-demo"><img src="../../assets/img/ke1.png" class="mob_image"></div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo">
                <flexbox orient="vertical">
                  <flexbox-item>
                    <div class="flex-demo">心肺系统疾病物理治疗</div>
                  </flexbox-item>
                  <flexbox-item>
                    <div class="flex-demo">
                      <x-button mini type="primary" style="float: right;margin: 0 15px 15px 0" link="/MobMyVideo">开始学习</x-button>
                    </div>
                  </flexbox-item>
                </flexbox>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </card>
      <divider>到底啦</divider>
    </ViewBox>
  </div>
</template>

<script>
  import {ViewBox, XHeader, Card, Flexbox, FlexboxItem, Divider, XButton} from 'vux'

  export default {
    components: {
      ViewBox,
      XHeader,
      Card,
      Flexbox,
      FlexboxItem,
      Divider,
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
