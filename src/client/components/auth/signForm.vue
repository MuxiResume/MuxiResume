<template>
  <div>
    <div class="auth-container">
      <div class="header">
        <template v-if="mold === 'signIn'">
          <span class="back" @click="showSignUp">注册</span>
          <span class="title">登录</span>
        </template>
        <template v-else>
          <span class="back" @click="showSignIn">登录</span>
          <span class="title">注册</span>
        </template>
        <span class="cancel"></span>
      </div>
      <form @keyup.enter="submit">
        <input
          v-model="username"
          name="username"
          label="username"
        ></input>
        <input
          v-model="password"
          name="password"
          label="password"
          type="password"
        ></input>
        <button @click.native="submit">Submit</button>
      </form>
    </div>
    <div class="mask" @click="closeSignForm"></div>
  </div>
</template>

<script>
export default {
  name: 'sign-form',
  props: {
    mold: {
      type: String,
      default: 'signIn'
    }
  },
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('user/signIn', {
        username: this.username,
        password: this.password,
      }).then(() => {
        if (this.$store.state.notification.success) this.$router.replace(this.redirect)
        else {
          this.username = ''
          this.password = ''
        }
      })
    },
    closeSignForm() {
      this.$emit('closeSignForm')
    },
    showSignUp() {
      this.$emit('showSignUp')
    },
    showSignIn() {
      this.$emit('showSignIn')
    }
  }
}
</script>

<style lang="stylus" scoped>
.auth-container
  position: fixed
  left: 50vw
  top: 50vh
  transform: translate(-50%, -50%)
  width: 441px
  height: 296px
  background-color: #ffffff
  z-index: 100
  border-radius: 2px
  box-shadow: 0 2px 5px #00000050
  .header
    width: 100%
    height: 64px
    line-height: 64px
    color: #ffffff
    background-color: #5087EE
    border-radius: 2px 2px 0 0
    text-align: center
    position: relative
    span
      vertical-align: middle
    .back
      min-width: 64px
      background-color: #4474CF
      border-radius: 50px
      line-height: 27px
      left: 20px
      top: 50%
      transform: translateY(-50%)
      cursor: pointer
      position: absolute
      &:before
        content: ''
        width: 0
        height: 0
        border-right: 4px solid #fff
        border-top: 4px solid transparent
        border-bottom: 4px solid transparent
        position: absolute
        top: 50%
        left: 10px
        transform: translateY(-50%)

  form
    padding: 23px 16px
.mask
  position: fixed
  width: 100%
  height: 100%
  background: rgba(0, 0, 0, .55)
  top: 0
  left: 0
  z-index: 99
</style>