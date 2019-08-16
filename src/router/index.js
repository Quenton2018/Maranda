import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Index from '../views/index.vue'
import studyEnglish from '../views/studyEnglish.vue'
import Sports from '../views/sports.vue'
import Funny from '../views/funny.vue'

export default new Router({
  routes: [
	  {
	    path: '/',
	    component: Index
	  },
    {
      path: '/studyEnglish',
      component: studyEnglish
    },
    {
    	path: '/sprots',
    	component: Sports
    },
    {
    	path: '/funny',
    	component: Funny
    }
  ]
})
