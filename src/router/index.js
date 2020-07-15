import Vue from 'vue'
import Router from 'vue-router'
import Call from '@/views/call'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Call',
      component: Call
    }
  ]
})
