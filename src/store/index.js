import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
let store = new Vuex.Store({
	state:{
		carPanelData:[],
		//是否为最大值
		maxOff:false
	},
	//计算
	getters:{
		//计算数量
		totleCount(state){
			let count=0
			state.carPanelData.forEach( goods => {
				count += goods.count
			})
			return count
		},
		//计算价格
		totlePrice(state){
			let price=0
			state.carPanelData.forEach( goods => {
				price += goods.count * goods.price
			})
			return price
		}
	},
	mutations:{
		addCarpanelData(state,data){
			//bOff是否添加过
			let bOff = true;
			state.carPanelData.forEach(goods => {
				if(goods.sku_id === data.sku_id){
					goods.count ++
					if(goods.count>goods.limit_num){
						goods.count --
						state.maxOff = true
					}
					bOff = false;
				}
			})
			if(bOff){
				let goodsData = data
				Vue.set(goodsData,"count",1)
				state.carPanelData.push(goodsData)
			}
		},
		delCarpanelData(state,id){
			state.carPanelData.forEach((goods,index) => {
				if(goods.sku_id === id){
					state.carPanelData.splice(index,1)
					return 
				}
			})
		},
		closePrompt(state){
			state.maxOff = false
		}
	}
})

export default store
