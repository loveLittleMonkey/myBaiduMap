import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main/main'
import message from '../components/message/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
