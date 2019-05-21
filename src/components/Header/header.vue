<template>
  <header class="header-box">
    <div class="header-search-login">
      <h1 class="logo"></h1>
      <div class="searchInput">
        <i class="iconfont iconfangdajing-copy"></i>
        <span class="search-com">搜索商品，共22893款好物</span>
      </div>
      <button>登录</button>
    </div>
    <div class="header-nav" >
      <ul class="header-nav-left">
        <li><a href="javascript:void(0);">推荐</a></li>
        <li>
          <a href="javascript:void(0);"></a>
        </li>
      </ul>
      <div class="iconfont iconxiabiao header-nav-arrow"></div>
    </div>
    <div class="navbox-wrapper">
      <div  class="nav-box">
        <div class="all-category">
          <span>全部频道</span>
          <i class="iconfont iconarrow-up"></i>
        </div>
        <ul class="ulNode">
          <li><a href="javascript:void(0);">推荐</a></li>
          <li>
            <a href="javascript:void(0);"></a>
          </li>
        </ul>
        <div class="mask"></div>
      </div>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  import {mapState}from 'vuex';

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header-box
    position relative
    width 100%
    height 148px
    background #fff
    .header-search-login
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 88px
      font-size: 28px
      box-sizing border-box
      h1
        width  138px
        height 40px
        background-image url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        margin-right 20px
        background-repeat no-repeat
        background-position center
      .searchInput
        height 56px
        border-radius 10px
        border none
        background-color rgba(0,0,0,.1)
        text-align center
        line-height 56px
        i
          font-size 30px
        .search-com
          font-size 30px
          color #666
      button
        height 40px
        margin-left 10px
        font-size 24px
        border-radius 10px
        outline none
        color $red
        border 1px solid $red
        background-color #fff
    .header-nav
      position relative
      width 100%
      height 60px
      overflow hidden
      .header-nav-left
        width 1650px
        height 60px
        font-size 28px
        li
          float left
          height 50px
          margin 5px 20px
          padding 0 10px
          text-align center
      .header-nav-arrow
        position absolute
        right 0
        top 0
        width 100px
        height 60px
        font-size 30px
        text-align center
        line-height 60px
        background-color #fff
    .navbox-wrapper
      .nav-box
        position absolute
        left 0
        top 90px
        width 100%
        z-index 10
        background-color pink
        .all-category
          display flex
          justify-content space-around
          font-size 28px



</style>
