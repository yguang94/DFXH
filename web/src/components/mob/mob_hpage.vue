<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../assets/img/lb_01.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/img/lb_02.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/img/lb_03.png" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <h2>康复培训物理治疗方向主要课程</h2>
    <h3>心肺系统疾病物理治疗</h3>
    <p>心肺康复，作为现代呼吸病学不可分割的组成部分，针对性地采用个体化手段，旨在减轻患者症状、保持合适的肺功能状态、增强患者生活参与度、降低患者健康相关性费用，是基于循证医学、多学科和多方面治疗的有益于慢性肺疾病患者的临床活动。 肺康复的对象所涉极广，重可至术前准备的手术病人，轻可至稳定期慢性呼吸系统疾病患者。在肺康复中，其实有许多简便易行的物理治疗方法。
    </p>
  </div>
</template>

<script>
  import {
    Swipe,
    SwipeItem
  } from 'mint-ui';
  export default {
    components: {
      Swipe,
      SwipeItem
    },
    props: {},
    data() {
      return {}
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {}
  }

</script>
<style>
  .mint-swipe{
    height: 200px
  }
</style>
