<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },
  components:{
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style lang="less">
@import 'styles/public.less';
#app{
  width: 100%;
  height: 100%;
}
</style>
