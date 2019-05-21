<template>
  <div class="page">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in virtualData.slides" :key="index"
             :style="{left: `${virtualData.offset}px`}">
          <img src="https://yanxuan.nosdn.127.net/a87b813ceb6e4bc4d853f8fac30d7ef2.jpg" alt="初夏穿搭">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper';
  export default {
    data() {
      return {
        // dummy slides data
        slides: (function () {
          var slides = [];
          for (var i = 0; i < 600; i += 1) {
            slides.push('Slide ' + (i + 1));
          }
          return slides;
        }()),
        // virtual data
        virtualData: {
          slides: [],
        },
      }
    },
    mounted() {
      const self = this;
      const swiper = new Swiper('.swiper-container', {
        // ...
        autoplay:{
          delay:2000,
        },
        virtual: {
          slides: self.slides,
          renderExternal(data) {
            // assign virtual slides data
            self.virtualData = data;
          },
        },
      });
    },
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl"
  .page
    .swiper-container
      width 750px
      height 370px
      img
        width 100%
        height 100%






</style>
