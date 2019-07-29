<template>
	<div class="header-wrap">
		<div class="header">
			<div class="header-content">
				<ul>
					<li>在线商城</li>
					<li>坚果Pro</li>
					<li>双喜云</li>
					<li>应用下载</li>
					<li>官方论坛</li>
					<li>客服</li>
					<li class="car-wrap">
						<span>购物车</span>
						<carPanel></carPanel>
					</li>
				</ul>
			</div>
		</div>
		<div class="header-list">
			<ul>
				<li>首页</li>
				<li>手机</li>
				<li>足迹系列</li>
				<li>官方配件</li>
				<li>周边产品</li>
				<li>第三方配件</li>
				<li>全部产品</li>
				<li>服务</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import carPanel from './car-panel'
	export default {
		components:{
			carPanel
		}
	}
</script>

<style>
</style>