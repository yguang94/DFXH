<template>
  <div style="height: 100%">
    <x-header :left-options="{showBack: false}" slot="header">课程列表</x-header>
    <ViewBox>
      <card v-for="(o, index) in list" :key=index>
        <div slot="content">
          <flexbox>
            <flexbox-item>
              <div class="flex-demo"><img :src = o.CourseImg class="mob_image"></div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo">
                <flexbox orient="vertical">
                  <flexbox-item>
                    <div class="flex-demo">{{ o.CourseName }}</div>
                  </flexbox-item>
                  <flexbox-item>
                    <div class="flex-demo">
                      <badge :text= o.price></badge>
                      <x-button mini plain style="float: right;border: none" :link="{path:'/MobCourseDetails',query:{courseID:o.id,coursePrice:o.price,courseLength:o.CourseLength,courseState:o.state,courseImg:o.CourseImg}}">查看详情</x-button>
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
  import {XHeader, Card, Flexbox, FlexboxItem, Divider, Badge, XButton, ViewBox} from 'vux'
  import C from '../../service/PCCommon'

  function init() {
    load(this)
  }

  function load(vue) {
    let that = this
    C.call('CourseList', {}).then(function (d) {
      console.log(d);
      vue.list = d.Course
      for( let i of vue.list){
        i.price = "¥" + i.price
      }
    })
  }

  export default {
    components: {
      XHeader,
      Card,
      Flexbox,
      FlexboxItem,
      Divider,
      Badge,
      XButton,
      ViewBox
    },
    props: {},
    data() {
      return {
        list:[]
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

