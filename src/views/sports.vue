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
			    <div style="margin: 10px;overflow: hidden">
			    	<div style="float: left;">总比例：</div>
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
				tableColumns: [
					{
						title: '序号',
						key: 'seq'
					},
					{
						title: '目标俯卧撑（个）',
						key: 'targetFWC'
					},
					{
						title: '完成俯卧撑（个）',
						key: 'resultFWC'
					},
					{
						title: '目标仰卧起坐（个）',
						key: 'targetYWQZ'
					},
					{
						title: '完成仰卧起坐（个）',
						key: 'resultYWQZ'
					},
					{
						title: '目标深蹲（个）',
						key: 'targetSD'
					},
					{
						title: '完成深蹲（个）',
						key: 'resultSD'
					},
					{
						title: '周目标15（km）',
						key: 'targetPB'
					},
					{
						title: '锻炼日期',
						key: 'startTime'
					},
					{
						title: '是否达标',
						key: 'isOk',
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
				setTimeout(() => {
					this.loading = false
					this.showData = this.goodsData.cardList.filter((o, index) => index >= (e - 1 ) * 10 && index <= e * 10 - 1)
				}, 1000)
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
		}
	}
</style>