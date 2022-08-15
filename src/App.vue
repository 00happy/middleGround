<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '@/components/Header'

export default {
  components:{
    Header
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.headerSpace{
  width: 100%;
  height: 64px;
}
</style>
