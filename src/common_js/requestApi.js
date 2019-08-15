import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

let config = {
  baseUrl: '',
  beforeSuccess: (res, resolve) => {
    resolve(res)
  },
  beforeError: (res, reject) => {
    reject(res)
  }
}

export const request = (url, method = 'post', param = {}) => {
	return new Promise((resolve, reject) => {
		for (let key of Object.keys(param)) {
			let newUrl = url.replace(new RegExp('\\{' + key + '}', 'g'), param[key])
			if (url !== newUrl) {
		        delete param[key]
		    }
			url = newUrl
		}
		if (method === 'get') {
	    	url += `${qs.stringify(param)}`
	   }
		axios({
				url,
				method,
				param
			})
			.then((res) => {
				config.beforeSuccess(res, resolve, reject)
			}, res => {
				config.beforeError(res, reject)
			})
	})
}

request.setConfig = (conf = {}) => {
  config = { ...config, ...conf }
}

