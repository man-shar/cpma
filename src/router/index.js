import Router from 'vue-router'
import Home from '@/components/Home'
import General from '@/components/General'
import Photos from '@/components/Photos'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/general',
      name: 'General',
      component: General
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    }
  ]
})
