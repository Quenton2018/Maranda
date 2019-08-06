<template>
  <div class="tag-wrap" :class="tagFixed?'tag-fixed':''">
    <div class="tag">
      <div class="link-img">
        <div @click="openQq">
          <img src="../assets/img/hover-qq.png" title="QQ聊天" />
        </div>
        <div class="weixin" style="position: relative;">
          <img src="../assets/img/wx.png" title="微信" />
          <div>
            <img class="img" src="../assets/img/weixin.png" title="微信" />
          </div>
        </div>
        <div>
          <a href="mailto:614360117@qq.com?" target="_blank">
            <img src="../assets/img/hover-email.png" title="发送邮件" />
          </a>
        </div>
        <div>
          <a href="https://github.com/Quenton2018" target="_blank">
            <img src="../assets/img/github.png" title="github" />
          </a>
        </div>
      </div>
    </div>
    <div class="newest-log">
      <div class="log-title">
        <img src="../assets/img/recommend.png" />
        <span>最新日志</span>
      </div>
    </div>
    <div class="log-list hover-log">
      <ul>
        <li v-for="(val,i) in goodsData.logList" :key="i">{{val.title}}</li>
      </ul>
    </div>
    <div class="newest-log">
      <div class="log-title">
        <img src="../assets/img/label.png" />
        <span>网站标签</span>
      </div>
    </div>
    <div class="log-list web-hot">
      <ul>
        <li v-for="(val,i) in goodsData.typeIdName" :key="i">
          <div>
            <span>【{{val.name}}】</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  data () {
    return {
      tagFixed: false
    }
  },
  methods: {
    openQq () {
      window.open('tencent://Message/?Uin=614360117&amp;websiteName=local.edu.com:8888=&amp;Menu=yes', '_brank')
    },
    handleScroll () {
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop >= 600) {
        this.tagFixed = true
      } else {
        this.tagFixed = false
      }
    }
  },
  props: ['goodsData']
}
</script>

<style>
  .tag-wrap {
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .tag-fixed {
    width: 400px;
    position: fixed;
    right: calc((100% - 1200px) / 2);
    top: 45px;
  }

  .tag {
    width: inherit;
    height: inherit;
    border: 1px dashed #BCBCBC;
  }

  .link-img {
    display: flex;
    justify-content: space-around;
  }

  .link-img img {
    width: 40px;
    height: 40px;
  }

  .link-img img:hover {
    cursor: pointer;
  }

  .weixin div {
    width: 100px;
    height: 100px;
    padding: 5px;
    box-sizing: border-box;
    position: absolute;
    top: -30px;
    left: -30px;
    background: #fff;
    display: none;
    border-radius: 5px;
  }

  .weixin .img {
    width: 100%;
    height: 100%;
  }

  .weixin:hover div {
    display: block;
  }

  .newest-log {
    margin: 15px 0 10px;
    border-bottom: 2px dashed #0E697E;
  }

  .log-title img {
    width: 20px;
    height: 20px;
    vertical-align: -5px;
  }

  .log-title span {
    font-size: 18px;
    color: #DE4861;
    font-weight: bold;
  }

  .log-list {
    padding: 5px 0 5px;
    border: 1px dashed #BCBCBC;
  }

  .log-list > ul > li {
    font-size: 14px;
    color: #000;
    margin-bottom: 5px;
  }

  .hover-log > ul > li {
    margin-left: 25px;
    transition: all 0.6s;
  }

  .hover-log > ul > li:hover {
    margin-left: 40px;
    transition: all 0.6s;
    color: #F40506;
    cursor: pointer;
  }

  .web-hot {
    padding: 5px 10px;
  }

  .web-hot > ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .web-hot > ul > li {
    list-style: none;
  }

  .web-hot > ul > li div {
    padding: 2px 5px;
    border: 1px solid #CACACA;
    border-radius: 3px;
    margin-right: 5px;
    transition: 1s;
  }

  .web-hot > ul > li div:hover {
    border-color: #FB004A;
    cursor: pointer;
  }

  .web-hot > ul > li div span {
    color: #000;
  }

  .web-hot > ul > li div:hover span {
    color: #FB004A;
  }
</style>
