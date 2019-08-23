<template>
  <div id="app">
    <Header v-if="isRouterAlive"></Header>
    <router-view />
  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function() {
         this.isRouterAlive = true
      })
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  }
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    background: url(assets/img/body_bg.jpg) center center repeat;
    background-size: 100px 100px;
    padding-top: 42px;
  }
</style>
