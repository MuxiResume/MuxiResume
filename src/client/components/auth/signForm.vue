<template>
  <div>
    <div class="auth-container">
      <template v-if="mold === 'signIn'">
        <div class="header">
            <span class="back" @click="showSignUp">注册</span>
            <span class="title">登录</span>
          <span class="cancel" @click="closeSignForm"></span>
        </div>
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
          <router-link to="/" class="forget">忘记密码?</router-link>
          <button @click.native="signInSubmit" class="submit">登录</button>
        </form>
      </template>
      <template v-else>
        <div class="header">       
            <span class="back" @click="showSignIn">登录</span>
            <span class="title">注册</span>        
          <span class="cancel" @click="closeSignForm"></span>
        </div>
        
        <form @keyup.enter="submit">
          <input
            @keyup.native="checkEmail"
            v-model="email"  
            name="email"
            label="Email"
            type="email"
            placeholder="登录邮箱: "
            required
          ></input>
          <input
            v-model="password"
            ref="input"
            name="password"
            label="password"
            type="password"
            placeholder="密码(6~20位字母或数字): "
            required
          ></input>
          <span class="showPassword" @click="togglePassword"></span>
          <button @click.native="signUpSubmit" class="submit" style="margin: 27px 0;">注册</button>
        </form>
      </template>
      <div class="errorlog">asdasd</div>
    </div>
    <div class="mask" @click="closeSignForm"></div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'


export default {
  name: 'sign-form',
  props: {
    mold: {
      type: String,
      default: 'signIn'
    },
  },
  data () {
    return {
      username: '',
      password: '',
      email: '',
      password: '',
      showPassword: false,
      emailExistsData: false
    }
  },
  computed: {
    emailExists() {
      return this.emailExistsData ? '用户邮箱已存在' : ''
    },
    isEmail() {
      
    }
  },
  methods: {
    signInSubmit() {
      this.$store.dispatch('user/signIn', {
        email: this.email,
        password: this.password,
      }).then(() => {
        if (this.$store.state.notification.success) this.$router.replace(this.redirect)
        else {
          this.reset()
        }
      })
    },
    signUpSubmit() {
      this.$store.dispatch('user/signUp', {
        email: this.email,
        password: this.password,
      }).then(() => {
        if (this.$store.state.notification.success) this.$router.replace(this.redirect)
      })
    },
    checkEmail() {
      clearTimeout(emailTimeout)
      emailTimeout = setTimeout(() => {
        let email = e.target.value
        axios.get(`/users/check`, {
          params: {
            check: 'email',
            data: email
          }
        }).then(data => {
          this.emailExistsData = data.data.exists
        }).catch(error => {
          console.error(error)
        })
      }, 500)
    },
    closeSignForm() {
      this.$emit('closeSignForm')
      this.reset()
    },
    showSignUp() {
      this.$emit('showSignUp')
      this.reset()
    },
    showSignIn() {
      this.$emit('showSignIn')
      this.reset()
    },
    togglePassword() {
      this.showPassword = !this.showPassword
      if (this.showPassword) {
        this.$refs.input.setAttribute('type', 'text')
      } else {
        this.$refs.input.setAttribute('type', 'password')
      }
    },
    reset() {
      this.username = ''
      this.password = ''
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
  height: 259px
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
    .cancel
      background: url('~/assets/img/popup/close.svg') no-repeat
      padding: 12px
      background-size: 9px
      background-position: 7px
      position: absolute
      border-radius: 50%
      background-color: #4474CF
      color: #fff
      right: 10px
      top: 50%
      transform: translateY(-50%)
      cursor: pointer
  form
    padding: 23px 16px
    input
      border: 1px solid #d2d2d2
      width: 100%
      padding: 9px 13px
      max-height: 37px
      float: left
      color: #000
      &:nth-child(2)
        border-top: none
      &:focus
        border-color: #5087EE
        border-top: 1px solid #5087EE
      &::placeholder
        font-size: 14px
        color: #BDBDBD
    .forget
      float: right
    .showPassword
      position: absolute
      width: 17px
      height: 8px
      background: url('~/assets/img/popup/showPass.svg') no-repeat
      background-size: 100%
      right: 30px
      top: 138px
      cursor: pointer
    .submit
      width: 100%
      border-radius: 0
      margin: 0
      font-size: 20px
      color: #ffffff
      background-color: #5087EE
      &:hover
        background-color: #4474CF
  .errorlog
    position: absolute
    font-size: 12px
    color: #EC6C78
    top: 55px
    left: 23px
.mask
  position: fixed
  width: 100%
  height: 100%
  background: rgba(0, 0, 0, .55)
  top: 0
  left: 0
  z-index: 99
</style>