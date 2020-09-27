import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PhotoList from '../views/PhotoList.vue'
import PhotoDisplay from '../views/PhotoDisplay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/photo_list',
    name: 'photo_list',
    // route level code-splitting
    // this generates a separate chunk (photo_list.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "photo_list" */ '../views/PhotoList.vue'),
    component:PhotoList
  },
  {
    path:'/photo_list/photo_display/:id',
    name: 'photo_display',
    component:PhotoDisplay
  },
  {
    path:'*',
    redirect:'/',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
