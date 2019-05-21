<template>
  <div class="home-box">
    <Header/>
    <div class="home-main">
      <div >
        <Swiper/>

      </div>


    </div>
  </div>
</template>

<script >
  import Header from '../../components/Header/header.vue'
  import Swiper from './components/Swiper/Swiper.vue'

  export default {
    components:{
      Header,
      Swiper,
    },
    mounted(){
      this.$store.dispatch('getHomeData')
    }

  }
</script>

<style >

</style>
