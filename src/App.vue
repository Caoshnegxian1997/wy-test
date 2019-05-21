<template>
  <div id="app">
    <router-view/>
    <Footer/>
    </div>
</template>
<script>
  import Footer from "./components/Footer/Footer.vue"
  import Home from './pages/home/home.vue'
export default {
    name:'App',
    components:{
      Home,
      Footer,

    }
}
</script>

<style >
</style>
