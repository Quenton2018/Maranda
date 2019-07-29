<template>
	<div class="list">
		<img class="show-img" :alt="item.name_title" :src="item.sku_info[itemIndex].ali_image"/>
		<h5>{{item.name}}</h5>
		<h6>{{item.name_title}}</h6>
		<ul>
			<li v-for="(item,index) in item.sku_info">
				<a href="javaScript:;" @click="tab(index)"><img :src="'https://qiniuyun.quenton.cn/ceshivue/img/'+item.spec_json.image" :title="item.spec_json.show_name"/></a>
			</li>
		</ul>
		<div class="money">
			<span>&yen;</span>
			<span>{{item.price}}</span>
		</div>
		<div class="join">
			<button>查看详情</button>
			<button @click="addCarpanelData(item.sku_info[itemIndex])">加入购物车</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				itemIndex:0
			}
		},
		//接受父组件参数
		props:{
			item:Object
		},
		methods:{
			tab(index){
				this.itemIndex = index
			},
			addCarpanelData(data){
				this.$store.commit('addCarpanelData',data)
			}
		}
	}
</script>

<style>
</style>