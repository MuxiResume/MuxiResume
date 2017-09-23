<template>
  <footer>
    <div class="bar">
      <div class="left-bar">
        <div class="col">
          <router-link to="/">木犀云简历</router-link>
          <router-link to="/templates">模版商城</router-link>
          <router-link to="/edit">在线编辑</router-link>
        </div>
        <div class="col">
          <a href="#">微博</a>
          <a href="#">微信</a>
          <a href="#">知乎</a>
        </div>
        <div class="col">
          <a href="#">关于我们</a>
        </div>
      </div>
      <span class="logo"></span>
      <search-box position="footer"></search-box>
    </div>
    <div class="bottom-bar">
      <span>2017 华中师范大学木犀团队</span>
    </div>
  </footer>
</template>

<script>
import navBar from '~/components/nav-bar'
import searchBox from '~/components/search-box'

export default {
  name: 'footer',
  components: { navBar, searchBox }
}
</script>

<style lang="stylus" scoped>
footer
  width: 100%
  min-height: 180px
  background-color: #000000
  margin-top: 103px
  color: #959595
  font-size: 12px
  font-weight: 500
  a
    color: #959595
    line-height: 30px
    display: block
  .bar
    height: 130px
    width: 100%
    padding: 20px 70px
    .left-bar
      .col
       float: left
       max-width: 60px
       margin: 0 30px
    .logo
      background: url('~/assets/img/logo.png') no-repeat
      float: right
      padding: 17px
      margin-top: -5px
      background-size: 100%
      background-position-y: 1px
    .search-box
      position: inherit
      float: right
      margin-right: 46px
  .bottom-bar
    width: 100%
    height: 50px
    line-height: 50px
    text-align: center
    background-color: #262C34
</style>