<template>
	<div class="content-wrap">
		<div class="content">
			<div class="title" style="position: relative;">
				<img src="../assets/img/maintopbg.jpg" alt="学习英语" />
				<div class="title-text">
					<span>我的</span><span style="color: #fe5187;">运动</span>
				</div>
			</div>
			<div>
				<Table :data="tableData" :columns="tableColumns" stripe></Table>
			    <div style="margin: 10px;overflow: hidden">
			        <div style="float: right;">
			            <Page :total="tableData.length" :current="1" @on-change="changePage($event)"></Page>
			        </div>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		created () {
			this.init()
		},
		data () {
			return {
				nowCurrent: 1,
				showData: [],
				tableData: [
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 1,
						date: '2019-10-16'
					},
					{
						seq: 2,
						date: '2019-10-16'
					},
				],
				tableColumns: [
					{
						title: '序号',
						key: 'seq'
					},
					{
						title: '日期',
						key: 'date'
					}
				]
			}
		},
		methods: {
			init () {
				
			},
			changePage (e) {
				console.log(e)
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