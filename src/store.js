import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// let url = 'http://13.211.11.32:5656'
let url = 'https://www.springapi.tk'
// let url = 'http://localhost:5656'

export default new Vuex.Store({
  state: {
    api: {
      baseUrl: url
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getApiUrl (state) {
      return state.api.baseUrl
    }
  }
})
