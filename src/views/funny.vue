<template>
	<div>
		<div class="content-wrap" :style="{minHeight: clientHeight - 195 + 'px'}">
			<div class="content">
				<div class="title" style="position: relative;">
					<img src="../assets/img/maintopbg.jpg" alt="帘子" />
					<div class="title-text">
						<span>有趣</span><span style="color: #fe5187;">段子</span>
					</div>
				</div>
				<div class="inner">
					<ul>
						<li v-for="(val, i) in funnyList" :key="i" v-if="val.videouri !== ''">
							<div class="inner-info">
								<div class="info-img">
									<img :src="val.profile_image"/>
								</div>
								<div class="info-name">
									<div class="user-name">{{val.name}}</div>
									<div class="user-passtime">{{val.passtime}}</div>
								</div>
							</div>
							<div class="inner-content">
								<div>{{val.text}}</div>
								<div class="video-box">
							        <video width="50%" height="300" preload controls='controls'>
							        	<source :src="val.videouri" type="video/mp4">
							        </video>
							    </div>
							</div>
						</li>
					</ul>
					<Spin size="large" fix v-if="spinShow"></Spin>
					<div class="update" @click="update()">
						<Button type="primary" :loading="loading" long icon="ios-refresh-circle-outline">{{btnText}}</Button>
					</div>
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
			this.clientHeight = document.documentElement.clientHeight
		},
		data () {
			return {
				spinShow: false,
				clientHeight: null,
				btnText: '加载更多',
				loading: false,
				funnyList: []
			}
		},
		methods: {
			async init (type = 1, page = 1) {
				this.spinShow = true
				let data = await request('https://www.apiopen.top/satinApi?type='+type+'&page='+page, 'get', {})
				this.spinShow = false
				this.funnyList = data.data || []
			},
			async update (type = 1, page = 1) {
				this.loading = true
				this.btnText = '拼命加载中...'
				let data = await request('https://www.apiopen.top/satinApi?type='+type+'&page='+page, 'get', {})
				this.loading = false
				this.btnText = '加载更多'
				this.funnyList.push(...data.data)
				
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
	
	.inner-info {
		display: flex;
		justify-content: flex-start;
		color: #000;
	}
	
	.info-img {
		width: 50px;
		height: 50px;
		overflow: hidden;
		border-radius: 50%;
		margin-right: 8px;
	}
	
	.info-img img {
		width: 100%;
		height: 100%;
	}
	
	.info-name {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.user-name {
		font-size: 16px;
		font-weight: 700;
	}
	
	.user-passtime {
		color: #17233D;
	}
	
	.inner-content {
		margin: 8px 0;
		color: #000;
	}
	
	.video-box {
		margin: 15px 0;
	}
	.update {
		width: 100%;
		text-align: center;
		font-size: 14px;
	}
	
</style>