import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
   
    component: () => import('../views/About.vue')
  },
  // 订单
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  // 用户中心
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
