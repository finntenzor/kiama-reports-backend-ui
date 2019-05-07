import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List'
import Report from './views/Report'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/:id',
      name: 'Report',
      component: Report
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
