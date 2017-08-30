<template>
  <div class="home">
    <div class="jumbotron">
      <div class="card">
        <h1>云端简历生成工具</h1>
        <h3>云简历，让简历制作更轻松</h3>
        <nuxt-link to="/" class="btn">制作简历</nuxt-link>
      </div>
    </div>
    <div class="banner">
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
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
      margin-top: 0
    h3
      font-size: 24px
      font-weight: 300
      margin-bottom: 34px
    .btn
      background-color: $primary
      padding: 4px 30px
      color: #ffffff
      border-radius: 2px
      margin-left: 157px
</style>
