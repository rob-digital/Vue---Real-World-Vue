/* eslint-disable prettier/prettier */
import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCreate from '../views/EventCreate.vue'
import EventList from '../views/EventList.vue'
import EventShow from '../views/EventShow.vue'
import User from '@/views/User.vue'
import Home from '@/views/Home.vue'

/* eslint-disable */
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/events-list',
    name: 'events-list',
    component: EventList
  },
  // {
  //   path: '/event',
  //   name: 'event-show',
  //   // route level code-splitting
  //   // this generates a separate chunk (event-show.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "event-show" */ '../views/EventShow.vue')
  // },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  },
  {
    path: '/user/:username',
    name: 'user',
    component: User,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
