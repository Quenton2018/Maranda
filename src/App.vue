<template>
  <div id="app">
		<headerNav></headerNav>
    <router-view/>
  </div>
</template>

<script>
import headerNav from './components/header-nav'
export default {
  name: 'App',
  components:{
  	headerNav
  }
}
</script>

<style>

</style>
