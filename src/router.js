import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Feedback from '@/views/Feedback.vue'
import Applications from '@/views/Applications.vue'
import Connections from '@/views/Connections.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/applications',
      name: 'applications',
      component: Applications
    },
    {
      path: '/connect',
      name: 'connect',
      component: Connections
    }
  ]
})
