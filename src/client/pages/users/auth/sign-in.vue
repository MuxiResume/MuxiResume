<template>
  <div class="sign-container">
    <div class="logo"></div>
    <sign-in-form :redirect="redirect"></sign-in-form>
  </div>
</template>

<script>
import signInForm from '~/components/auth/sign-in-form.vue'
export default {
  components: { signInForm },
  data() {
    return {
      redirect: { name: 'index' }
    }
  }
}
</script>


<style lang="stylus" scoped>
.sign-container
  background: url('~/assets/img/auth_background.png') no-repeat
  background-size: 100% 100%
  width: 100vw
  height: 100vh
  margin-top: -42px
  .logo
    background: url('~/assets/img/logo_auth.png') no-repeat
    background-size: 100% 100%
    width: 74px
    height: 108px
    position: absolute
    top: 80px
    left: 0
    right: 0
    margin: auto
</style>
