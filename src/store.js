import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let url = 'http://springapi.wlg.cloudapp.goapollo.nz'
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
