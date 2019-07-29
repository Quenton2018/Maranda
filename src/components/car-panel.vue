<template>
	<div class="car">
		<span class="diamonds"></span>
		<div class="car-null" v-if="count<=0">
			<img src="../assets/img/car.jpg"/>
			<h6>您的购物车空空如也</h6>
		</div>
		<div v-else>
			<div class="car-full"  v-for="(item,index) in carPanelData">
				<ul>
					<li class="car-list">
						<div class="full-left">
							<img :src="item.ali_image"/>
						</div>
						<div class="full-right">
							<h6>{{item.title}}</h6>
							<p>{{item.spec_json.show_name}}</p>
							<div class="count">
								<span>&yen;</span>
								<span>{{item.price}}</span>
								<span>*{{item.count}}</span>
							</div>
						</div>
					</li>
				</ul>
				<span class="close" @click="delCarpanelData(item.sku_id)">×</span>
			</div>
			<div class="car-details">
				<div class="details-left">
					<p class="details-top">
						共<span>{{count}}</span>件商品
					</p>
					<p class="details-bottom">
						合计：<span>&yen;</span><span>{{totle}}</span>
					</p>
				</div>
				<div class="details-right">
					<button>去购物</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed:{
			carPanelData(){
				return this.$store.state.carPanelData
			},
			count(){
				return this.$store.getters.totleCount
			},
			totle(){
				return this.$store.getters.totlePrice
			}
		},
		methods:{
			delCarpanelData(id){
				this.$store.commit('delCarpanelData',id)
			}
		}
	}
</script>

<style>
</style>