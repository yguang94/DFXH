<template>
  <el-row class="elrowwidth limit">
    <el-col :span="6">
      <el-card class="box-card">
        <div class="text item">
          123
        </div>
      </el-card>
    </el-col>
    <el-col :span="18">
      <div  class="prism-player myvideodiv" id="J_prismPlayer" style="position: absolute"></div>
    </el-col>
  </el-row>
</template>

<script>

  export default {
    name: "video",
    mounted: function () {
      let player = new Aliplayer({
        id: 'J_prismPlayer',
        width: '65%',
        height: '70vh',
        autoplay: false,
        //支持播放地址播放,此播放优先级最高
        source : 'http://video.pearvideo.com/mp4/adshort/20180718/cont-1391234-12479661_adpkg-ad_hd.mp4'
      })
    }
  }
</script>

<style scoped>

</style>
