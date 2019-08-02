<template>
  <div class="content-wrap">
    <div class="content">
      <div class="title" style="position: relative;">
        <img src="../assets/img/maintopbg.jpg" alt="最新推荐" />
        <div class="title-text">
          <span>最新</span><span style="color: #fe5187;">推荐</span>
        </div>
      </div>
      <div class="inner">
        <Row>
          <Col :xs="{ span: 24, offset: 0 }" :lg="{ span: 16, offset: 0 }">
            <div class="inner-left">
              <Banner></Banner>
              <Card :goodsData='goodsData'></Card>
            </div>
          </Col>
          <Col :xs="{ span: 24, offset: 0 }" :lg="{ span: 8, offset: 0 }">
            <PublicTag :goodsData='goodsData'></PublicTag>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import goodsData from '../lib/newGoodsData.js'
import { Grid } from 'iView'
import Banner from '../components/banner.vue'
import Card from '../components/card.vue'
import PublicTag from '../components/publicTag.vue'

export default {
  data () {
    return {
      goodsData
    }
  },
  components: {
    Banner,
    Card,
    PublicTag
  }
}
</script>

<style>
  .content-wrap {
    width: 100%;
  }

  .content {
    width: 1200px;
    margin: 0 auto;
    padding-top: 10px;
  }

  .title img {
    width: 100%;
  }

  .title .title-text {
    position: absolute;
    top: -3px;
    left: 16px;
  }

  .title-text span {
    font-size: 16px;
    font-weight: 600;
  }

  .inner {
    width: 100%;
    margin-top: 6px;
    margin-bottom: 30px;
  }

  .inner-left {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #BCBCBC;
    box-sizing: border-box;
  }
</style>
