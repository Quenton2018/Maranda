<template>
	<div>
		<div class="card-wrap" v-for="(val,i) in goodsData.cardList" :key="i">
			<div class="card-title">
				<div class="card-top"><span>{{val.title}}</span></div>
				<div class="card-bott">
					<div class="card-left">
						<img :src="val.src" alt="" />
					</div>
					<div class="card-right">
						<div class="card-text">{{val.text}}</div>
						<div class="icon-wrap">
							<div title="查看">
								<Icon type="ios-eye" size="20" color="#8B8B8B"/><span>{{val.eye}}</span>
							</div>
							<div title="评论">
								<Icon type="md-open" size="16" color="#8B8B8B"/><span>{{val.edit}}</span>
							</div>
						</div>
						<div class="reader">阅读全文 <Icon type="md-send" /></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Icon } from 'iView'
	export default{
		created(){
			console.log(this.goodsData)
		},
		props:['goodsData']
	}
</script>

<style>
	.card-wrap{width: 100%;border-bottom: 1px dashed #C5C5C5;padding: 10px 0 5px;}
	.card-top span{font-size: 16px;font-weight: 600;color: #000;transition: 0.6s;}
	.card-top span:hover{color: #f00;transition: 0.6s;cursor: pointer;}
	.card-bott{width: 100%;margin: 5px 0;display: flex;justify-content: flex-start;position: relative;}
	.card-left{width: 160px;height: 120px;overflow: hidden;}
	.card-left img{width: 100%;height: 100%;}
	.card-right{margin-left: 20px;width: calc(100% - 180px);}
	.card-right .card-text{color: #515151;}
	.icon-wrap{display: flex;justify-content: flex-start;}
	.icon-wrap div{border: 1px solid #D3D3D3;padding: 0 8px;border-radius: 12px;}
	.icon-wrap div:hover{cursor: pointer;}
	.icon-wrap div:nth-child(1){margin-right: 10px;}
	.icon-wrap div span{font-size: 14px;vertical-align: middle;margin: 0 2px;}
	.reader{width: 84px;height: 29px;color: #fff;background: #333;text-align: center;line-height: 29px;position: absolute;right: 0;bottom: 0;}
	.reader:hover{cursor: pointer;}
</style>