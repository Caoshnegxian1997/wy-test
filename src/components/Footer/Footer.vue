<template>
  <footer class="footer_box">
    <span class="guide_item" :class="{on: $route.path==='/home'}" @click="goTo('/home')">
     <span class="item_icon">
    <i class="iconfont iconindex1"></i>
  </span>
  <span>首页</span>
  </span>
  <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/classify'}"
       @click="goTo('/classify')">
    <span class="item_icon">
    <i class="iconfont iconfenlei"></i>
  </span>
  <span>分类</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/general'}"
  @click="goTo('/general')">
  <span class="item_icon">
  <i class="iconfont iconshiwu"></i>
  </span>
  <span>识物</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/shopcart'}"
  @click="goTo('/shopcart')">
  <span class="item_icon">
  <i class="iconfont icongouwuche"></i>
  </span>
  <span>购物车</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/myself'}"
  @click="goTo('/myself')">
  <span class="item_icon">
  <i class="iconfont icontubiaozhizuomoban"></i>
  </span>
  <span>个人</span>
  </a>
  </footer>
</template>
<script>
  export default {
        name: 'Footer',
    methods:{
      goTo(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_box
    position fixed
    bottom 0
    left 0
    display flex
    justify-content space-around
    height 100px
    width 100%
    background #fff
    margin-top -100px
    .guide_item
      display flex
      flex-direction column
      justify-content space-around
      align-items center

      &.on
        color: $red
      span
        font-size 24px
        margin-top 6px
        .iconfont
          font-size 40px











</style>
