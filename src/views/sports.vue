<template>
	<div class="content-wrap">
		<div class="content">
			<div class="title" style="position: relative;">
				<img src="../assets/img/maintopbg.jpg" alt="学习英语" />
				<div class="title-text">
					<span>我的</span><span style="color: #fe5187;">运动</span>
				</div>
			</div>
			<div v-if="showData">
				<Table :loading="loading" :data="showData" :columns="tableColumns" stripe></Table>
			    <div style="margin: 10px 0;overflow: hidden">
			    	<div class="big-data" style="float: left;">
			    		<span>总天数：{{bigData.day}}天</span>
			    		<span>总俯卧撑：{{bigData.resultFWC}}个，占比{{(bigData.resultFWC/bigData.targetFWC*100).toFixed(1)}}%</span>
			    		<span>总仰卧起坐：{{bigData.resultYWQZ}}个，占比{{(bigData.resultYWQZ/bigData.targetYWQZ*100).toFixed(1)}}%</span>
			    		<span>总深蹲：{{bigData.resultSD}}个，占比{{(bigData.resultSD/bigData.targetSD*100).toFixed(1)}}%</span>
			    		<span>总跑步：{{bigData.resultPB}}千米</span>
			    	</div>
			        <div style="float: right;">
			            <Page :total="goodsData.cardList.length" :current="1" @on-change="changePage($event)"></Page>
			        </div>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
	import goodsData from '../lib/sportsData.js'
	export default {
		created () {
			this.init()
		},
		data () {
			return {
				goodsData,
				loading: true,
				showData: [],
				bigData: {},
				tableColumns: [
					{
						title: '序号',
						key: 'seq',
						width: 60
					},
					{
						title: '目标俯卧撑(个)',
						key: 'targetFWC',
						width: 120
					},
					{
						title: '完成俯卧撑(个)',
						key: 'resultFWC'
					},
					{
						title: '目标仰卧起坐(个)',
						key: 'targetYWQZ'
					},
					{
						title: '完成仰卧起坐(个)',
						key: 'resultYWQZ'
					},
					{
						title: '目标深蹲(个)',
						key: 'targetSD'
					},
					{
						title: '完成深蹲(个)',
						key: 'resultSD'
					},
					{
						title: '周目标10km',
						key: 'resultPB',
						width: 120
					},
					{
						title: '锻炼日期',
						key: 'startTime',
						width: 100,
					},
					{
						title: '是否达标',
						width: 100,
						fixed: 'right',
						render: (h, params) => {
							const row = params.row
							const flag = row.resultFWC>=row.targetFWC&&row.resultYWQZ>=row.targetYWQZ&&row.resultSD>=row.targetSD
							const color = flag ? '#0f0' : '#f00'
							return h ('span', {
								style: {
                                    color: color
                                }
							}, flag?'是':'否')
						}
					}
				]
			}
		},
		methods: {
			init (e = 1) {
				this.loading = true
				let obj = {
					targetFWC: 0,
					resultFWC: 0,
					targetYWQZ: 0,
					resultYWQZ: 0,
					targetSD: 0,
					resultSD: 0,
					resultPB: 0,
					day: 0
				}
				setTimeout(() => {
					this.loading = false
					this.showData = this.goodsData.cardList.filter((o, index) => index >= (e - 1 ) * 10 && index <= e * 10 - 1)
				}, 1000)
				this.goodsData.cardList.forEach(o => {
					obj.targetFWC += o.targetFWC
					obj.resultFWC += o.resultFWC
					obj.targetYWQZ += o.targetYWQZ
					obj.resultYWQZ += o.resultYWQZ,
					obj.targetSD += o.targetSD
					obj.resultSD += o.resultSD
					obj.resultPB += o.resultPB
				})
				obj.day = this.goodsData.cardList.length
				this.bigData = obj
			},
			changePage (e) {
				this.init(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content-wrap {
		width: 100%;
		.content {
			width: 1200px;
			margin: 0 auto;
			padding-top: 10px;
			.title {
				img {
					width: 100%;
				}
				.title-text {
					position: absolute;
					top: -3px;
					left: 16px;
				}
				span {
					font-size: 16px;
					font-weight: 600;
				}
			}
			.big-data {
				span {
					margin-left: 10px;
				}
			}
		}
	}
</style>