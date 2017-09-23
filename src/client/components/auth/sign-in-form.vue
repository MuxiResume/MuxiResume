<template>
  <div class="auth-container">
    <div class="title">登录</div>
    <form @keyup.enter="submit">
      <input
        v-model="email"
        name="email"
        label="Email"
        type="email"
        placeholder="邮箱: "
        required
      ></input>
      <input
        v-model="password"
        ref="input"
        name="password"
        label="password"
        type="password"
        placeholder="密码: "
        required
      ></input>
      <span class="showPassword" @click="togglePassword"></span>
      <button @click.native="submit" class="submit">登录</button>
      <router-link to="/users/auth/sign-up">注册</router-link>
      <router-link to="/" class="forget">忘记密码?</router-link>
    </form>
  </div>
</template>

<script>
export default {
  props: [ 'redirect' ],
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
    togglePassword() {
      this.showPassword = !this.showPassword
      if (this.showPassword) {
        this.$refs.input.setAttribute('type', 'text')
      } else {
        this.$refs.input.setAttribute('type', 'password')
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
.auth-container
  left: 50vw
  top: 50vh
  transform: translate(-50%, -50%)
  width: 340px
  height: 315px
  background-color: #ffffff
  border-radius: 2px
  box-shadow: 2px 2px 2px rgba(0,0,0,.08)
  position: absolute
  .title
    text-align: center
    margin: 35px 0
    color: #474653
    font-size: 18px
  form
    padding: 0 22px
    input
      border: 1px solid #d2d2d2
      width: 100%
      padding: 9px 13px
      max-height: 37px
      float: left
      color: #000
      margin: 8px 0
      &:focus
        border-color: #5087EE
      &::placeholder
        font-size: 14px
        color: #BDBDBD
    .showPassword
      position: absolute
      width: 17px
      height: 8px
      background: url('~/assets/img/popup/showPass.svg') no-repeat
      background-size: 100%
      right: 30px
      top: 164px
      cursor: pointer
    .submit
      width: 100%
      border-radius: 0
      margin: 15px 0
      font-size: 13px
      line-height: 33px
      color: #ffffff
      background-color: #5087EE
      &:hover
        background-color: #4474CF
  .forget
    float: right
  .errorlog
    position: absolute
    font-size: 12px
    color: #EC6C78
    top: 55px
    left: 23px
</style>
