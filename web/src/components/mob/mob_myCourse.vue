<template>
  <div style="height: 100%">
    <ViewBox>
      <x-header slot="header" title="我的课程"></x-header>
      <card v-for="(o, index) in list" :key="index">
        <div slot="content">
          <flexbox>
            <flexbox-item>
              <div class="flex-demo"><img :src=o.CourseImg class="mob_image"></div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo">
                <flexbox orient="vertical">
                  <flexbox-item>
                    <div class="flex-demo">{{ o.CourseName }}</div>
                  </flexbox-item>
                  <flexbox-item>
                    <div class="flex-demo">
                      <x-button mini type="primary" style="float: right;margin: 15px 15px 15px 0" link="/MobMyVideo">开始学习</x-button>
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
  import C from '../../service/PCCommon'

  function init() {
    load(this)
  }

  function load(vue) {
    let that = this
    C.call('userCourse', {}).then(function (d) {
      console.log(d);
      vue.list = d.Course
    })
  }


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
      return {
        list: []
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

<style scoped>

</style>
