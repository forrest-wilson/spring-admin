import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'

import '../node_modules/vuetify/dist/vuetify.min.css'
import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
