import { request } from './common_js/requestApi.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/css/common.css'

Vue.config.productionTip = false
Vue.use(iView)

request.setConfig({
	beforeError (_, reject) {
    	this.$Message.error('网络连接错误')
    	reject()
	},
	beforeSuccess (res, resolve, reject) {
	    if (res.data.code === 200) {
	    	console.log('------数据请求成功------')
//	    	Vue.prototype.$Message.error('网络连接错误')
	      	resolve(res.data)
	    } else if (res.data.code === 401) {
	//    	Vue.prototype.$Message.warning(res.data.message || '请登录')
	//    	router.push({ path: '/login' })
	      	reject()
	    } else if (res.data.code === 403) {
	//    	Vue.prototype.$Message.warning(res.data.message || '没有权限')
	      	reject(res)
	    } else if (res.data.code === 10001) {
	      	reject(res)
	    } else {
	//    	Vue.prototype.$Message.warning(res.data.message)
	      	reject(res)
	    }
	}
})

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
