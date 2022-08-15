<template>
  <div class="header">
    <h2 class="title">智慧中台能力图谱</h2>
    <div class="tab">
      <div class="tabItem" @click="goto('/')">首页</div>
      <div class="tabItem" @click="goto('/map')">能力图谱</div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    goto(url){
      this.$router.push({path:url})
    }
  },
}
</script>

<style lang="scss" scoped>
.header{
  cursor: pointer;
  
  height: 64px;
  background-color: #313a5a;
  color: #fff;
  display: flex;
  align-items: center;
  .title{
    width: 27%;
    text-align: center;
    font-weight: normal;
  }
  .tab{
    width: 10%;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    .tabItem{
      display: flex;
      align-items: center;
    }
  }
}
</style>