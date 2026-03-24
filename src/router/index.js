import Vue from 'vue'
import VueRouter from 'vue-router'
import Postitlist from '../views/postitlist.vue'
import PostitZoom from '../views/postitZoom.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'postitlist',
    component: Postitlist
  },
  {
    path:'/postit/:id',
    component: PostitZoom
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
