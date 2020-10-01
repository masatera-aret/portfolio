import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photos from '../views/Photos.vue'
import PhotoView from '../views/PhotoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/photos',
    name: 'photos',
    // route level code-splitting
    // this generates a separate chunk (photos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "photos" */ '../views/Photos.vue'),
    component:Photos
  },
  {
    path:'/photos/photo-view/:id',
    name: 'photo-view',
    component:PhotoView
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
