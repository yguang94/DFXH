<template>
    <div style="height: 100%">
      <ViewBox>
        <x-header slot="header" title="播放视频"></x-header>
        <div  class="prism-player" id="J_prismPlayer" style="position: absolute"></div>
      </ViewBox>
    </div>
</template>

<script>
  import { ViewBox, XHeader, Card } from 'vux'

    export default {
        components: {
          ViewBox,
          XHeader,
          Card
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
        mounted: function () {
          let player = new Aliplayer({
            id: 'J_prismPlayer',
            width: '100%',
            autoplay: false,
            //支持播放地址播放,此播放优先级最高
            source : 'http://video.pearvideo.com/mp4/adshort/20180718/cont-1391234-12479661_adpkg-ad_hd.mp4'
          })
        }
    }
</script>

<style scoped>

</style>
