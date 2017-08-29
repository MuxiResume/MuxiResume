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
      <router-link to="/lists">
        模版商城
      </router-link>
    </div>
    <div class="auth">
      <span class="searchBox"></span>
      <template v-if="$store.state.user.isAuthenticated">
      </template>
      <template v-else>
        <span @click="showSignIn">登录</span>
        <span @click="showSignUp">注册</span>
        <sign-form v-show="show" @closeSignForm="closeSignForm" mold="mold"></sign-form>
      </template>
    </div>
  </div>
</template>

<script>
import signForm from '~/components/signForm.vue'

export default {
  name: 'nav-bar',
  data() {
    return {
      show: false,
      mold: null
    }
  },
  components: {
    signForm
  },
  methods: {
    showSignIn: function() {
      this.show = true
      this.mold = 'signIn'
    },
    showSignUp: function() {
      this.show = true
      this.mold = 'signUp'
    },
    closeSignForm: function() {
      this.show = false
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
  .menu
    margin-left: 65px
    a
      margin: 0 4px
    .nuxt-link-active
      color: #FFFFFF
  .auth
    float: right

</style>