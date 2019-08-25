<template>
	<div>
		<div class="topnav">
			{{member}}
			<span class="now-time" v-html="nowTime"></span>
			<div class="weather">
				<span>所在城市：{{city}}&nbsp;&nbsp;</span>
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
					<div v-if="LoginFlag" style="margin-left: 8px;" @click="isLogin=true">
						<Button type="primary" icon="md-person">请登录</Button>
					</div>
				</div>
			</div>
		</div>
		<div class="menu-wrap">
			<div class="menu">
				<div class="nav-list" v-for="(val,i) in navList" :key="i" v-if="val.isVip">
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
	    <Login v-if="isLogin" @isLogin="refresh" @closeLogin="isLogin=false"></Login>
	</div>
</template>

<script>
	import goodsData from '../lib/newGoodsData.js'
	import { request } from '../common_js/requestApi.js'
	import BMap from 'BaiduMap'
	import Login from '../views/login.vue'
	export default {
		created() {
			this.navList = this.goodsData.navList
			this.init()
		},
		name: 'refresh',
		inject: ['reload'],
		components: {
			Login
		},
		data() {
			return {
				goodsData,
				isLogin: false,
				LoginFlag: true,
				myFlag: false,
				member: '相见是缘，感谢您的光临！',
				index: 0,
				tagFixed: false,
				nowTime: null,
				weather: {},
				city: ''
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
				switch (week) {
					case 0:
						week = '天'
						break
					case 1:
						week = '一'
						break
					case 2:
						week = '二'
						break
					case 3:
						week = '三'
						break
					case 4:
						week = '四'
						break
					case 5:
						week = '五'
						break
					case 6:
						week = '六'
						break
				}
				this.nowTime = (year + '年' + mouth + '月' + da + '日  星期' + week + ' ' + h + ':' + m + ':' + s)
			}, 1000)
			this.getCity()
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
				this.checkLogin()
			},
			checkLogin () {
				let login = sessionStorage.getItem('isLogin')
				if (login) {
					login = login.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")
					this.member = '尊敬的'+login+'会员，欢迎回家！'
					this.LoginFlag = false
					console.log(login)
					if (login === '151****2690' || login === '183****8976') {
						this.myFlag = true
						this.showMy()
					}
				}
			},
			showMy () {
				for (let i = 0, len = this.navList.length; i < len; i++) {
					this.navList[7].isVip = true
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
			async getData (city) {
				let data = await request('https://www.apiopen.top/weatherApi?city='+city, 'get', {})
				console.log(data)
				this.city = data.data.city
				data.data.forecast[0].fengli = (data.data.forecast[0].fengli).substring(9, (data.data.forecast[0].fengli).length-3)
				this.weather = data.data.forecast[0]
			},
			getCity () {
				let self = this
				let geolocation = new BMap.Geolocation()
				geolocation.getCurrentPosition(function getinfo(position){
					let city = position.address.city
					self.city = city.substring(0, city.length-1)
					self.getData(self.city)
				}, function (e) {
					self.city = '定位失败'
				}, {provider: 'baidu'})
			},
			refresh () {
                this.reload()
                this.isLogin = false
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
		z-index: 900;
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
	
	.user-info {
		font-size: 20px;
		font-weight: bold;
		color: #000;
	}
	
	.user-info:hover {
		cursor: pointer;
	}
</style>