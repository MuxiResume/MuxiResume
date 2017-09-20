<template>
  <div class="search-box">
    <div class="header-search" v-if="position === 'header'">
      <input type="search" :class="{showInput: showInput}"/>
      <img src="~assets/img/search.svg" @click="showInput = !showInput"/>
    </div>
    <div class="footer-search" v-if="position === 'footer'">
      <input type="search" />
      <img src="~assets/img/search.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-box',
  props: {
    position: {
      type: String,
      default: 'header'
    }
  },
  data() {
    return {
      showInput: false
    }
  }
}
</script>

<style lang="stylus" scpoed>
@import '~assets/style/variables.styl'
  .search-box
    position: absolute
    img
      vertical-align: middle
      margin-bottom: 1px
      cursor: pointer
    input[type=search]
      color: $text-color
      outline: 1px solid $text-color
      border: 0
      transition: width 0.5s ease-in-out
      background-color: transparent
      margin-right: -20px    
    .header-search
      input[type=search]
        width: 0px
        height: 19px
        &.showInput
          width: 116px    
    .footer-search
      input[type=search]
        width: 193px
        height: 23px
</style>