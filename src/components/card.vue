<template>
	<div>
		<div class="card-wrap" v-for="(val,i) in goodsData.cardList" :key="i">
			<div class="card-title">{{val.title}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		created(){
			console.log(this.goodsData)
		},
		props:['goodsData']
	}
</script>

<style>
	.card-wrap{width: 100%;border: 1px dashed #C5C5C5;}
</style>