<template>
	<div class="content-wrap">
		<div class="content">
			<div class="inner">
				<!--<div>这里将会是我们的童话</div>-->
			</div>
		</div>
		<div class="mask-wrap" v-if="isShowNowMsk === 'LOVE'">
			<div class="mask">
				<div class="mask-content">
					<p v-for="(val, i) in goodsData.phrasebook.content" :class="val.indent?'indent':''">{{val.text}}</p>
				</div>
			</div>
			<h2 class="mask-title">
				{{goodsData.phrasebook.title}}
				<span>{{loveTime}}</span>
				天
			</h2>
			<img class="close-mask" @click="isShowNowMsk = null" src="https://qiniuyun.quenton.cn/Maranda/img/close.png" />
		</div>
	</div>
</template>

<script>
	import goodsData from '../lib/thankYou.js'
	export default {
		created() {
			this.init()
		},
		data() {
			return {
				goodsData,
				loveTime: '',
				isShowNowMsk: 'LOVE'
			}
		},
		methods: {
			init() {
				let late = Date.parse(new Date(2014, 6, 1))
				let now = Date.parse(new Date())
				let loveTime = Math.abs(parseInt((now - late) / 1000 / 3600 / 24))
				this.loveTime = loveTime
			}
		}
	}
</script>

<style scoped>
	.content-wrap {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 520;
		background-image: url(https://qiniuyun.quenton.cn/Maranda/img/pc-bg-mog181220170551.jpg);
		background-size: cover;
		padding-top: 42px;
	}
	
	.content {
		width: 1200px;
		margin: 0 auto;
		padding-top: 10px;
	}
	
	.inner {
		width: 100%;
	}
	
	.mask-wrap {
		width: 800px;
		height: 500px;
		background-image: url(https://qiniuyun.quenton.cn/Maranda/img/20181219154222_gWD6CS7bxN.jpg);
		background-size: cover;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		z-index: 521;
		padding: 50px 58px 85px;
		box-sizing: border-box;
		border-radius: 5px;
		color: #000;
		font-size: 16px;
	}
	
	.mask {
		width: 100%;
		height: 100%;
		overflow: hidden;
		margin-top: 35px;
		padding: 10px 0;
		box-sizing: border-box;
	}
	
	.mask-title {
		width: 100%;
		text-align: center;
		position: absolute;
		top: 50px;
		left: 0px;
	}
	
	.mask-title span {
		color: #2D8CF0;
	}
	
	.mask-content {
		width: 100%;
		height: 100%;
		padding: 0 10px;
		overflow-y: auto;
		position: relative;
		box-sizing: border-box;
	}
	
	.mask-content p {
		width: 100%;
		overflow: hidden;
		white-space: wrap;
	}
	
	.indent {
		text-indent: 2em;
	}
	
	.close-mask {
		width: 40px;
		height: 40px;
		position: absolute;
		top: -20px;
		right: -20px;
	}
	
	.close-mask:hover {
		cursor: pointer;
	}
</style>