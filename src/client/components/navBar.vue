<template>
  <div class="nav-bar">
    <div class="logo">
      <img :src="logo" alt="muxi-resume-logo" />
    </div>
    <div class="menu">
      
    </div>
    <div class="auth"></div>
  </div>
</template>

<script>
import logo from '~/assets/img/logo.png'
export default {
  data() {
    return {
      logo
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/variables.styl'
.nav-bar
  background: $main-background
  line-height: 42px
  height: 42px
  padding: 0px 15px
  position: fixed
  width: 100%
  .logo
    position: absolute
    z-index: 1
    width: 32px
    height: 51px
    background: $main-background
    padding: 8px
    img
      width: 100%
      height: 100%
</style>