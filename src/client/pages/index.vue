<template>
  <div class="home">
    <div class="jumbotron">
      <div class="card">
        <h1>云端简历生成工具</h1>
        <h3>云简历，让简历制作更轻松</h3>
        <nuxt-link to="/" class="btn">制作简历</nuxt-link>
      </div>
    </div>
    <div class="banner-container">
      <div class="banner banner-model">
        <img src="~assets/img/home/resume.png" alt="resume" />
        <div class="content">
          <h1>丰富的模版选择</h1>
          <p>模版商城提供丰富的模版，每个模版都支持在线浏览，选择一款就可以开始个性化定制。</p>
        </div>
      </div>
      <div class="banner banner-make">
        <div class="content">
          <h1>个性化的制作</h1>
          <p>更清晰的模版分类，更简洁的排版，更个性化的背景选择，让做简历更加轻便、简约。</p>
        </div>
        <img src="~assets/img/home/resume_1.png" alt="resume" />
      </div>
      <div class="banner banner-share">
        <div class="content">
          <h1>一键导出</h1>
          <p>不仅可以直接导出PDF，也可以导出分享链接，随时随地的查看简历内容。</p>
        </div>
        <img src="~assets/img/home/link.png" alt="resume" />
        <img src="~assets/img/home/social.png" alt="resume" />
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Footer from '~/components/footer'
export default {
  data() {
    return {}
  },
  components: { Footer }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/variables.styl'
.jumbotron
  background: url('~assets/img/home/home_background.png') no-repeat 
  background-size: 100% 100%
  background-color: rgba(0,0,0,0)
  height: 485px
  margin-top: -42px
  position: relative
  color: #EBECED
  &::after
    position: absolute
    top: 0
    left: 0
    content: ''
    z-index: 1
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, .18)
  .card
    position: absolute
    z-index: 2
    top: 145px
    left: 60px
    background-color: rgba(0, 0, 0, .45)
    min-width: 401px
    min-height: 143px
    padding: 30px 60px
    border-radius: 2px
    h1
      font-size: 36px
      font-weight: normal
    h3
      font-size: 24px
      font-weight: 300
      margin-bottom: 34px
      margin-top: 27px
    .btn
      background-color: $primary
      padding: 4px 30px
      color: #ffffff
      border-radius: 2px
      margin-left: 157px
      &:hover
        background: $primary-deep
.banner-container
  padding: 48px 70px
  .banner
    margin: 48px 0 10px
    display: inline-block
  .content
    display: inline-block
    vertical-align: top
    h1
      font-size: 36px
      font-weight: normal 
      color: #4A4A4A
    p
      margin-top: 48px
      font-size: 18px
      color: #9B9B9B
      font-weight: 300
  .banner-model
    img
      width: 60%
    .content
      margin-left: 40px
      p
        width: 294px
  .banner-make
    img 
      width: 30%
    .content
      margin-right: 100px
      p
        width: 611px
  .banner-share
    img 
      width: 40%
      margin-top: 48px
      vertical-align: top
      box-shadow: 0px 1px 7px rgba(0,0,0,.25)
      &:first-of-type
        margin-right: 140px
    .content
      width: 100%
</style>
