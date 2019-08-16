<template>
	<div>
		<div class="content-wrap">
			<div class="content">
				<div class="title" style="position: relative;">
					<img src="../assets/img/maintopbg.jpg" alt="帘子" />
					<div class="title-text">
						<span>有趣</span><span style="color: #fe5187;">段子</span>
					</div>
				</div>
				<div class="inner">
					<ul>
						<li v-for="(val,i) in funnyList" :key="i">
							<span>{{i+1}}, {{val.text}}</span>
						</li>
					</ul>
					<Spin size="large" fix v-if="spinShow"></Spin>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { request } from '../common_js/requestApi.js'
	export default {
		created () {
			this.init()
		},
		data () {
			return {
				spinShow: false,
				funnyList: []
			}
		},
		methods: {
			async init (type = 1, page = 1) {
				this.spinShow = true
				let data = await request('https://www.apiopen.top/satinApi?type='+type+'&page='+page, 'get', {})
				this.spinShow = false
				this.funnyList = data.data || []
				console.log(data)
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
	
	.inner ul,.inner li {
		list-style: none;
	}
	
	.inner>ul>li {
		width: 100%;
		padding: 5px 15px;
		background: #fff;
		margin-bottom: 15px;
	}
</style>