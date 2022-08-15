<template>
  <div class="sotrWrap">
    <div class="head">客户</div>
    <div class="itemWrap">
      <div class="item" v-for="(item, index) in 10" :key="index">
        <p>集团客户管理能力</p>
        <p>A612312873678</p>
        <p class="desc">
          活动上，中国自行车运动协会与中国移动共同宣布就自行车电竞化项目数智骑行赛达成深度合作，以动感单车为切入点
        </p>
        <p>提供方: <span>集团公司</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.head {
  font-size: 15px;
  font-weight: bold;
}
.itemWrap {
  margin-top: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .item {
    width: 30%;
    margin-bottom: 50px;
    p {
      margin: 5px 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;

      span {
        color: #837e7e;
      }
    }
    p:nth-child(2) {
      display: inline-block;
      margin: 2px 0;
      padding: 2px 6px;
      background-color: #e6edfe;
      color: #6b92fa;
    }
    p:nth-child(3) {
      line-height: 23px;
      margin-bottom: 10px;
    }
  }
}
</style>