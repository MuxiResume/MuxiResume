<template>
  <div class="nav-bar">
    <div class="logo">
      <img src="~/assets/img/logo.png" alt="muxi-resume-logo" />
    </div>
    <div class="menu">
      <router-link to="/" exact>
        木犀云简历
      </router-link>
      <router-link to="/edit">
        在线制作
      </router-link>
      <router-link to="/templates">
        模版商城
      </router-link>
    </div>
    <div class="auth">
      <search-box class="search" position="header"></search-box>
      <template v-if="$store.state.user.isAuthenticated">
        <router-link to="/users/"> 个人中心 </router-link>
      </template>
      <template v-else>
        <router-link to="/users/auth/sign-in">登录</router-link>
        <router-link to="/users/auth/sign-up">注册</router-link>
      </template>
    </div>
  </div>
</template>

<script>
import searchBox from '~/components/search-box.vue'

export default {
  name: 'nav-bar',
  data() {
    return {}
  },
  components: {
    searchBox
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
  position: relative
  z-index: 100
  .logo
    position: absolute
    z-index: 1
    width: 48px
    height: 67px
    background: $main-background
    padding: 8px
    img
      width: 100%
      height: 100%
  .menu
    margin-left: 65px
    display: inline-block
    a
      margin: 0 4px
      color: #A6A6A6
      &:hover
        color: #FFFFFF
    .nuxt-link-active
      color: #FFFFFF
  .auth
    float: right
    color: $text-color
    a
      padding: 0 10px
      cursor: pointer
      color: #A6A6A6
      &:hover
        color: #FFFFFF
      &:nth-child(2)
        border-right: 1px solid $text-color
  .search
    right: 107px
</style>