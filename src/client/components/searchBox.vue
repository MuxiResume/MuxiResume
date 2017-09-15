<template>
  <div class="searchBox">
    <div class="header" v-if="position === 'header'">
      <input type="search" :class="{showInput: showInput}"/>
      <img src="~assets/img/search.svg" @click="showInput = !showInput"/>
    </div>
    <div class="footer" v-if="position === 'footer'">
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
  .searchBox
    position: absolute
    img
      vertical-align: middle
      margin-bottom: 3px
      cursor: pointer
    input[type=search]
      color: $text-color
      width: 116px
      height: 19px
      outline: 1px solid $text-color
      border: 0
      transition: width 0.5s ease-in-out
      background-color: transparent
      margin-right: 5px    
    .header
      input[type=search]
        width: 0px
        &.showInput
          width: 116px
          padding: 0 5px
</style>