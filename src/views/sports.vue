<template>
	<div>121</div>
</template>

<script>
	import { request } from '../common_js/requestApi.js'
	export default {
		created () {
			this.getData()
		},
		methods: {
			async getData () {
				let data = await request('https://api.apiopen.top/musicRankings', 'get', {})
				console.log(data)
			}
		}
	}
</script>

<style>
</style>