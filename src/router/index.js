import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Index from '../views/index'
import Study from '../views/study'

export default new Router({
  routes: [{
    path: '/',
    component: Index
  },
    {
      path: '/study',
      component: Study
    }
  ]
})
