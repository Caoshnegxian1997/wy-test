import classify from "../pages/classify/classify.vue"
import general from "../pages/General things/general.vue"
import home from "../pages/home/home.vue"
import myself from "../pages/mySelf/myself.vue"
import shopcart from "../pages/shopCart/shopcart.vue"

export default [
  {
    path:'/home',
    component:home
  },
  {
    path:'/classify',
    component:classify
  },
  {
    path:'/general',
    component:general
  },
  {
    path:'/shopcart',
    component:shopcart
  },
  {
    path:'/myself',
    component:myself
  },
  {
    path:'/',
    redirect:'/home'
  }

]
