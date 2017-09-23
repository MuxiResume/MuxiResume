<template>
  <div>
    <sign-in-form/>
    <sign-up-form/>        
  </div>
</template>

<script>
import signInForm from '~/components/auth/sign-in-form.vue'
import signUpForm from '~/components/auth/sign-up-form.vue'
export default {
  components: { signInForm, signUpForm }
}
</script>

