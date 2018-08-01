<template>
  <div style="height: 100%">
    <ViewBox>
      <x-header slot="header" title="课程详情"></x-header>
      <card>
        <div slot="content">
          <img :src=courseImg alt="" class="mob_image">
        </div>
      </card>
      <card :header="{title: '课程详情' }">
        <div slot="content" style="padding: 15px">
          <p>
            心肺康复，作为现代呼吸病学不可分割的组成部分，针对性地采用个体化手段，旨在减轻患者症状、保持合适的肺功能状态、增强患者生活参与度、降低患者健康相关性费用，是基于循证医学、多学科和多方面治疗的有益于慢性肺疾病患者的临床活动。
            肺康复的对象所涉极广，重可至术前准备的手术病人，轻可至稳定期慢性呼吸系统疾病患者。在肺康复中，其实有许多简便易行的物理治疗方法。
          </p>
        </div>
        <div slot="footer" style="padding: 20px">
          <badge :text=coursePrice></badge>
          <badge :text=courseLength style="background: #31c3f7"></badge>
          <!--<badge text="240分钟" style="background: #31c3f7"></badge>-->
          <x-button mini type="primary" style="float: right" v-if="courseState === 0" link="/MobCourseDetails">购买课程</x-button>
          <x-button mini type="primary" style="float: right" v-if="courseState === 1" link="/MobMyVideo">立即学习</x-button>
        </div>
      </card>
      <divider>{{ courseID}}</divider>
    </ViewBox>
  </div>
</template>

<script>
  import {XHeader, ViewBox, Card, Divider, Badge, XButton} from 'vux'

  export default {
    components: {
      XHeader,
      ViewBox,
      Card,
      Divider,
      Badge,
      XButton
    },
    props: {},
    data() {
      return {
        courseID: this.$route.query.courseID,
        coursePrice: this.$route.query.coursePrice,
        courseLength: this.$route.query.courseLength + '课时',
        courseState: this.$route.query.courseState,
        courseImg: this.$route.query.courseImg
      }
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
