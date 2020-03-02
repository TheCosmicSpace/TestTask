import Vue from 'vue'
import VueRouter from 'vue-router'
import Groups from '../views/Groups.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../views/Posts.vue')
  },
  {
    path: '/helps',
    name: 'Helps',
    component: () => import('../views/Helps.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
