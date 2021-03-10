import Vue from 'vue'
import VueRouter from 'vue-router'

import register from '@/views/register.vue'
import profile from '@/views/profile.vue'
import test from '@/views/test.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
