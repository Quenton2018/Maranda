<template>
	<div>
		<div class="topnav">
			相见是缘，感谢您的光临！
			<span class="now-time" v-html="nowTime"></span>
			<div class="weather">
				<span>所在城市：{{city}}, </span>
				<span>{{weather.type}} {{weather.high}} {{weather.low}} {{weather.fengxiang}} {{weather.fengli}}</span>
			</div>
		</div>
		<div class="logo-wrap">
			<div class="logo">
				<div class="logo-left">
					<img src="../assets/img/logo_03.png" />
				</div>
				<div class="logo-right">
					<div>
						<Input placeholder="请输入关键字"></Input>
					</div>
					<div style="margin-left: 8px;">
						<Button type="primary" icon="ios-search">搜索</Button>
					</div>
				</div>
			</div>
		</div>
		<div class="menu-wrap">
			<div class="menu">
				<div class="nav-list" v-for="(val,i) in navList" :key="i">
					<router-link :to='{path:val.path}'>
						<div class="list-fa">
							<span :class="i===index?'nav-active':''" @click='goPage(i)'>{{val.title}}</span>
							<div class="cl-wrap">
								<div class="list-ch" v-for="(child,s) in val.children" :key='s' @click='goPage(i)'>
									<i @click="toRouter(child.path)">{{child.title}}</i>
								</div>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<BackTop :height="100" :bottom="200">
	        <div class="back-top"></div>
	    </BackTop>
	</div>
</template>

<script>
	import { request } from '../common_js/requestApi.js'
	export default {
		created() {
			this.init()
			this.getData()
		},
		data() {
			return {
				index: 0,
				tagFixed: false,
				nowTime: null,
				weather: {},
				city: '',
				navList: [{
						title: '首页',
						path: '/',
						children: [{
							title: '',
							path: ''
						}]
					},
					{
						title: '学无止境',
						path: '',
						children: [{
							title: '学习英语',
							path: './studyEnglish'
						}]
					},
					{
						title: '随笔',
						path: '',
						children: [{
							title: '听心语',
							path: ''
						}]
					},
					{
						title: '发现生活',
						path: '',
						children: [{
							title: '我的运动',
							path: './sprots'
						}]
					},
					{
						title: '心灵聆听',
						path: '',
						children: [{
							title: '听风吟',
							path: ''
						}]
					},
					{
						title: '技术支持',
						path: '',
						children: [{
							title: 'html',
							path: ''
						}]
					}
				]
			}
		},
		mounted() {
			let self = this
			setInterval(() => {
				let date = new Date();
				let year = date.getFullYear()
				let mouth = parseInt(date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)
				let da = parseInt(date.getDate()) < 10 ? ('0' + date.getDate()) : date.getDate()
				let week = date.getDay()
				let h = parseInt(date.getHours()) < 10 ? ('0' + date.getHours()) : date.getHours()
				let m = parseInt(date.getMinutes()) < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
				let s = parseInt(date.getSeconds()) < 10 ? ('0' + date.getSeconds()) : date.getSeconds()
				this.nowTime = (year + '年' + mouth + '月' + da + '日  星期' + week + ' ' + h + ':' + m + ':' + s)
			}, 1000)
		},
		methods: {
			init() {
				let path = this.$route.path
				let pathRouter = path.split('/')
				let showPath = ('./' + pathRouter[pathRouter.length - 1])
				for(let i = 0, len = this.navList.length; i < len; i++) {
					for(let j = 0, lens = this.navList[i].children.length; j < lens; j++) {
						if(showPath === this.navList[i].children[j].path) {
							this.index = i
						}
					}
				}
			},
			goPage(i) {
				this.index = i
			},
			toRouter(path) {
				if(('.' + this.$route.path) !== path) {
					this.$router.push(path)
				}
			},
			async getData () {
				let data = await request('https://www.apiopen.top/weatherApi?city=上海 ', 'get', {})
				console.log(data)
				this.city = data.data.city
				this.weather = data.data.forecast[0]
			}
		},
		beforeDestroy() {
			if(this.timer) {
				clearInterval(this.timer);
			}
		}
	}
</script>

<style>
	.topnav {
		width: 100%;
		height: 40px;
		line-height: 40px;
		color: #000;
		background: rgba(255, 255, 255, 0.7);
		position: fixed;
		top: 0;
		z-index: 999;
		box-shadow: #333 0 2px 2px;
		text-align: center;
		font-size: 14px;
		font-weight: 600;
	}
	
	.topnav .now-time, .topnav .weather {
		position: absolute;
		top: 0;
		color: #333;
		font-weight: 400;
	}
	
	.topnav .now-time {
		left: 20px;
	}
	
	.topnav .weather {
		right: 20px;
	}
	
	.logo-wrap {
		width: 100%;
		height: 100px;
	}
	
	.logo {
		width: 1200px;
		margin: 0 auto;
		height: inherit;
		display: flex;
		justify-content: space-between;
	}
	
	.logo-left img {
		width: 260px;
	}
	
	.logo-right {
		display: flex;
		justify-content: flex-start;
		padding-top: 15px;
	}
	
	.menu-wrap {
		width: 100%;
	}
	
	.menu {
		width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
	}
	
	.nav-list {
		padding: 5px 15px;
		position: relative;
	}
	
	.nav-list a {
		color: #000;
		font-weight: bold;
		font-size: 20px;
	}
	
	.nav-list:hover span {
		color: #F96A20;
		transition: all 0.3s;
	}
	
	.cl-wrap {
		display: none;
		position: absolute;
		background: #E8E8E8;
		box-sizing: border-box;
		padding-left: 8px;
		z-index: 888;
	}
	
	.list-fa:hover .cl-wrap {
		display: block;
	}
	
	.cl-wrap .list-ch {
		width: 100px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.list-ch i {
		font-size: 16px;
		color: #515151;
		font-style: normal;
	}
	
	.cl-wrap .list-ch:hover i {
		margin-left: 6px;
		color: #F96A20;
		transition: all 0.3s;
	}
	
	.back-top {
		width: 70px;
		height: 110px;
		background: url(../assets/img/backTop.png) no-repeat;
		background-size: 137px 100%;
		background-position-x: 0;
		background-position-y: 0;
		position: fixed;
		right: 15px;
		bottom: 60px;
		transition: 0.5s linear;
	}
	
	.back-top:hover {
		cursor: pointer;
	}
</style>