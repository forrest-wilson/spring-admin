import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Feedback from '@/views/Feedback.vue'
import Applications from '@/views/Applications.vue'
import Connections from '@/views/Connections.vue'
import PromoCode from '@/views/PromoCode.vue'
import Dream from '@/views/Dream.vue'
import Contact from '@/views/Contact.vue'
import Redeem from '@/views/Redeem.vue'
import Event from '@/views/Event.vue'
import Learning from '@/views/Learning.vue'

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
    },
    {
      path: '/promoCode',
      name: 'promoCode',
      component: PromoCode
    },
    {
      path: '/dream',
      name: 'dream',
      component: Dream
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/redeem',
      name: 'redeem',
      component: Redeem
    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/learning',
      name: 'learning',
      component: Learning
    }
  ]
})
