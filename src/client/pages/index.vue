<template>
  <div class="home">
    <div class="jumbotron">
      <div class="board">
        <h1>云端简历生成工具</h1>
        <h3>云简历，让简历制作更轻松</h3>
        <nuxt-link to="/" class="makeBtn">制作简历</nuxt-link>
      </div>
    </div>
    <v-container fluid class="banner-container">
      <v-layout class="banner banner-model">
        <v-flex xs8>
          <img src="~assets/img/home/resume.png" alt="resume" />
        </v-flex>
        <v-flex xs4>
          <h4>丰富的模版选择</h4>
          <p>模版商城提供丰富的模版，每个模版都支持在线浏览，选择一款就可以开始个性化定制。</p>
        </v-flex>
      </v-layout>
      <v-layout class="banner banner-make">
        <v-flex xs7>
          <h4>个性化的制作</h4>
          <p>更清晰的模版分类，更简洁的排版，更个性化的背景选择，让做简历更加轻便、简约、快捷。</p>
        </v-flex>
        <v-flex xs4 offset-xs1>
          <img src="~assets/img/home/resume_1.png" alt="resume" />
        </v-flex>
      </v-layout>
      <v-layout class="banner">
        <v-flex xs12>
          <h4>一键导出</h4>
          <p>不仅可以直接导出PDF，也可以导出分享链接，随时随地的查看简历内容。</p>
        </v-flex>
      </v-layout>
      <v-layout class="banner-share">
        <v-flex xs6>
          <img src="~assets/img/home/link.png" alt="resume" />
        </v-flex>
        <v-flex xs6 offset-xs1>
          <img src="~assets/img/home/social.png" alt="resume" />
        </v-flex>
      </v-layout>
    </v-container>
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
  &::after
    position: absolute
    top: 0
    left: 0
    content: ''
    z-index: 1
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, .18)
  .board
    position: absolute
    z-index: 2
    top: 145px
    left: 60px
    background-color: rgba(0, 0, 0, .45)
    min-width: 501px
    min-height: 143px
    padding: 30px 60px
    border-radius: 2px
    h1
      font-size: 36px
      color: #EBECED
      font-weight: normal
    h3
      font-size: 24px
      color: #EBECED
    .makeBtn
      background-color: $primary
      padding: 6px 30px
      color: #ffffff
      border-radius: 2px
      margin-left: 157px
      &:hover
        background: $primary-deep
.banner-container
  padding: 48px 70px
  img 
    width: 100%
  h4
    font-size: 36px
    font-weight: normal 
    color: #4A4A4A
  p
    margin-top: 48px
    font-size: 18px
    color: #9B9B9B
  .banner
    margin: 48px 0 
  .banner-share
    img 
      box-shadow: 0px 1px 7px rgba(0,0,0,.25)
</style>
