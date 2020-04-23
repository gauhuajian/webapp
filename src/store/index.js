import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCityName = '北京'
defaultCityName = localStorage.cityName ? localStorage.cityName : '北京'
export default new Vuex.Store({
  state: {
    cityName: defaultCityName
  },
  mutations: {
    updata(state, upName) {
      localStorage.cityName = upName
      state.cityName = upName
    }
  },
  actions: {},
  modules: {}
})