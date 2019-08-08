<template>
  <div class="banner-wrap">
    <div class="banner-inner" @mouseenter="autoplay=false" @mouseleave="autoplay=true">
      <Carousel :autoplay="autoplay" :autoplay-speed="3000">
        <Carousel-item>
          <div class="img-wrap">
            <a href="#"><img src="../assets/img/banner1.jpg" alt=""></a>
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="img-wrap">
            <a href="#"><img src="../assets/img/banner2.jpg" alt=""></a>
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="img-wrap">
            <a href="#"><img src="../assets/img/banner3.jpg" alt=""></a>
          </div>
        </Carousel-item>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel } from 'iView'

export default {
  data () {
    return {
      autoplay: true
    }
  }
}
</script>

<style scoped>
  .banner-wrap {
    width: 100%;
    height: 300px;
    margin: 0 auto;
  }

  .banner-inner {
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
  }

  .banner-inner img {
    width: 100%;
    height: 300px;
    vertical-align: top
  }

  .img-wrap {
    width: 100%;
    height: 300px
  }

  .img-wrap img {
    width: 100%;
    height: 100%;
  }
</style>
