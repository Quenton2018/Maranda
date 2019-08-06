import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Index from '../views/index'
import studyEnglish from '../views/studyEnglish'

export default new Router({
  routes: [
	  {
	    path: '/',
	    component: Index
	  },
    {
      path: '/study/studyEnglish',
      component: studyEnglish
    }
  ]
})
