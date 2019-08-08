<template>
	<div>
		<div class="content-wrap">
			<div class="content">
				<div class="title" style="position: relative;">
					<img src="../assets/img/maintopbg.jpg" alt="学习英语" />
					<div class="title-text">
						<span>已学</span><span style="color: #fe5187;">单词</span>
					</div>
				</div>
				<div class="inner">
					<ul>
						<li v-for="(val,i) in goodsData.wordList" :key="i">
							<div v-if="index===i" @click="index=null" class="word-ch">
								<span>{{val.ch}}</span>
							</div>
							<div v-else @click="translate(i)" class="word-en">
								<span>{{val.en}}</span>
							</div>
						</li>
					</ul>
					<div class="total">你真厉害，已经学习了{{goodsData.wordList.length}}个单词了，继续加油吧！^ε^</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import goodsData from '../lib/studyEnglish.js'
	export default {
		data() {
			return {
				goodsData,
				index: null
			}
		},
		methods: {
			translate(i) {
				this.index = i
			}
		}
	}
</script>

<style scoped>
	.content-wrap {
		width: 100%;
	}
	
	.content {
		width: 1200px;
		margin: 0 auto;
		padding-top: 10px;
	}
	
	.title img {
		width: 100%;
	}
	
	.title .title-text {
		position: absolute;
		top: -3px;
		left: 16px;
	}
	
	.title-text span {
		font-size: 16px;
		font-weight: 600;
	}
	
	.inner {
		width: 100%;
		margin-top: 6px;
		margin-bottom: 30px;
		border: 1px dashed #BCBCBC;
		padding: 10px 15px 30px;
		position: relative;
	}
	
	.total {
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		color: #fff;
		padding-left: 15px;
	}
	
	.inner>ul,
	.inner>ul>li {
		list-style: none;
	}
	
	.inner>ul {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	
	.inner>ul>li {
		font-size: 14px;
		font-weight: 600;
		margin-right: 10px;
		transition: 1s;
		box-sizing: border-box;
		margin-top: 5px;
		margin-bottom: 5px;
	}
	
	.inner>ul>li div {
		padding: 3px 8px;
		border: 1px solid #BCBCBC;
		border-radius: 5px;
	}
	
	.inner>ul>li:hover {
		cursor: pointer;
	}
	
	.word-en {
		transition: 1s;
	}
	
	.word-en:hover {
		border-color: #F96A20;
		transition: 1s;
	}
	
	.word-en:hover span {
		color: #F96A20;
	}
	
	.word-ch {
		background: #F96A20;
		color: #fff;
	}
</style>