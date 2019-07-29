<template>
	<div class="prompt" v-if="maxOff">
		<div class="hint-wrap">
			<div class="hint-top">
				<span>提示</span>
				<span class="close" @click="closePrompt">×</span>
			</div>
			<div class="hint-middle">
				商品已达到最大可购买数量，无法继续添加
			</div>
			<div class="hint-bottom">
				<button @click="closePrompt">确认</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		computed:{
			maxOff(){
				return this.$store.state.maxOff
			}
		},
		methods:{
			closePrompt(){
				this.$store.commit('closePrompt')
			}
		}
	}
</script>

<style>
	.prompt{width: 100%;height: 100%;background-color: rgba(0,0,0,0.5);position: fixed;top: 0;left: 0;z-index: 901;}
	.hint-wrap{width: 300px;height: 205px;background: #fff;border: 1px solid #E0E0E0;border-radius: 6px;position: fixed;top: 0;
		right: 0;bottom: 0;left: 0;margin: auto;z-index: 902;padding: 5px 0;box-sizing: border-box;}
	.hint-top{border-bottom: 1px solid #E0E0E0;display: flex;justify-content: space-between;}
	.hint-top span:last-child{font-size: 22px;color: #C0C0C0;}
	.hint-middle{padding: 35px;text-align: center;color: #515151;}
	.hint-bottom{border-top: 1px solid #E0E0E0;text-align: right;}
	.hint-top,.hint-bottom{height: 40px;line-height: 40px;padding: 0px 20px;box-sizing: border-box;}
	.hint-bottom button{padding: 2px 10px;background: #00f;border-color: #00f;color: #fff;margin-top: 8px;border-radius: 5px;}
	.hint-top .close:hover{cursor: pointer;}
</style>