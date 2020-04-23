import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../components/home/Home.vue'
const city = () => import('../components/city/City.vue')
const dateils = () => import('../components/details/Dateils.vue')
const routes = [

  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/city',
    name: 'city',
    component: city
  },
  {
    path: '/dateils',
    name: 'dateils',
    component: dateils
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router