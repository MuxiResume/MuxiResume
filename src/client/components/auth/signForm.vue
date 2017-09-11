<template>
  <div class="container">
      <form @keyup.enter="submit">
        <v-text-field
          v-model="username"
          name="username"
          label="username"
        ></v-text-field>
        <v-text-field
          v-model="password"
          name="password"
          label="password"
          type="password"
        ></v-text-field>
        <button @click.native="submit">Submit</button>
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position: absolute
</style>