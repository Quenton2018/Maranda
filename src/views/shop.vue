<template>
	<div class="shop">
		<div class="shop-top">
			<ul>
				<li>综合排序</li>
				<li>销量排序</li>
				<li>价格低到高</li>
				<li>价格高到低</li>
			</ul>
		</div>
		<div class="shop-content">
			<shopItem v-for="(item,index) in goodsData" :key="index" :item="item"></shopItem>
		</div>
		<prompt></prompt>
	</div>
</template>

<script>
	import goodsData from '../lib/newGoodsData.js'
	import shopItem from '../components/shop-item'
	import prompt from '../components/prompt'
	
	export default {
		data(){
			return {
				goodsData
			}
		},
		components:{
			shopItem,
			prompt
		}
	}
</script>

<style>
	.shop{width: 1200px;margin: 0 auto;margin-top: 5px;}
	.shop-top ul{display: flex;justify-content: flex-start;padding: 10px 0;}
	.shop-top ul li{margin-right: 20px;}
	.shop-content{background: #fff;display: flex;justify-content: flex-start;flex-wrap: wrap;}
	.shop-content .list{flex: 0 0 20%;padding: 5px;box-sizing: border-box;border: 1px solid #E0E0E0;text-align: center;position: relative;}
	.shop-content .list .show-img{width: 85px;height: 170px;margin: 30px 0 10px;}
	.list h6{width: 220px;margin: 0 auto;color: #C0C0C0;margin-top: 3px;margin-bottom: 3px;overflow: hidden;white-space: nowrap;
		text-overflow: ellipsis;}
	.list ul{display: flex;justify-content: center;margin: 10px 0;}
	.list ul li{width: 12px;height: 12px;border: 1px solid #E0E0E0;border-radius: 50%;margin-right: 5px;line-height: 12px;overflow: hidden;}
	.list ul li img{width: 12px;height: 12px;}
	.list .money{color: #f00;margin-bottom: 40px;}
	.list .join{width: 160px;position: absolute;bottom: 8px;left: 50%;margin-left: -80px;display: none;}
	.list .join button{font-size: 14px;padding: 1px 5px;}
	.list .join button:last-child{color: #00f;}
	.shop-content .list:hover .join{display: block;}
</style>