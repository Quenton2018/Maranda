<template>
	<div>
		<div class="topnav">相见是缘，感谢您的光临！</div>
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
								<div v-if="val.children" class="list-ch" v-for="(child,s) in val.children" @click='goPage(i)'>
									<router-link :to='{path:child.path}'><i>{{child.title}}</i></router-link>
								</div>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Input, Button } from 'iView'
	export default {
		data() {
			return {
				index: 0,
				navList: [{
						title: '首页',
						path: '/',
						children: []
					},
					{
						title: '学无止境',
						path: '',
						children: [{
								title: '122',
								path: './study'
							},
							{
								title: 'www',
								path: ''
							}
						]
					},
					{
						title: '随笔',
						path: '',
						children: [{
								title: 'fads',
								path: ''
							},
							{
								title: 'zzzz',
								path: ''
							}
						]
					},
					{
						title: '发现生活',
						path: '',
						children: [{
								title: '555',
								path: ''
							},
							{
								title: '666',
								path: ''
							}
						]
					},
					{
						title: '心灵聆听',
						path: '',
						children: [{
								title: '777',
								path: ''
							},
							{
								title: '8888',
								path: ''
							}
						]
					},
					{
						title: '技术支持',
						path: '',
						children: [{
								title: 'e3e3',
								path: ''
							},
							{
								title: '1t4t4',
								path: ''
							}
						]
					}
				]
			}
		},
		methods: {
			goPage(i) {
				this.index = i
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
	
	.list-ch a {
		font-size: 18px;
		color: #515151;
	}
	
	.list-ch i {
		font-style: normal;
	}
	
	.cl-wrap .list-ch:hover i {
		margin-left: 6px;
		color: #F96A20;
		transition: all 0.3s;
	}
</style>