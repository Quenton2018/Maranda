import { request } from './common_js/requestApi.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import 'iview/dist/styles/iview.css'
import './assets/css/common.css'

Vue.config.productionTip = false
Vue.use(iView)

Vue.prototype.$video = Video

request.setConfig({
	beforeError (_, reject) {
		iView.Message.error('网络连接错误')
    	reject()
    	iView.LoadingBar.finish()
	},
	beforeSuccess (res, resolve, reject) {
		iView.LoadingBar.start()
	    if (res.data.code === 200) {
	      	resolve(res.data)
	    } else if (res.data.code === 401) {
	    	iView.Message.warning(res.data.msg || '请登录')
	    	router.push({ path: '/login' })
	      	reject()
	    } else if (res.data.code === 202) {
	    	iView.Message.warning(res.data.msg || '已注册')
	      	reject(res)
	    } else if (res.data.code === 10001) {
	      	reject(res)
	    } else {
	    	iView.Message.warning(res.data.message)
	      	reject(res)
	    }
	    iView.LoadingBar.finish()
	}
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
