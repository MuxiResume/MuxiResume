<template>
  <div class="container">
    <div class="header"></div>
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position: absolute
  left: 50vw
  top: 50vh
  transform: translate(-50%, -50%)
  width: 441px
  height: 296px
  background-color: #ffffff
  z-index: 100 
</style>