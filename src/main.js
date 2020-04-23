import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import FastClick from 'fastclick'
import './assets/js/font'
import './assets/css/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/swoper.css'
import animate from 'animate.css'
import axios from 'axios'
Vue.use(animate)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )
FastClick.attach(document.body);
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')