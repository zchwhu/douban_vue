import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index/index'
import Mine from '../pages/Mine/Mine'
import BookMovieMusic from '../pages/BookMovieMusic/BookMovieMusic'
import Group from '../pages/Group/Group'
import Broadcast from '../pages/Broadcast/Broadcast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: '/Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/bookmoviemusic',
      name: 'BookMovieMusic',
      component: BookMovieMusic
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

