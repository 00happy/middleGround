<template>
  <div class="mapWrap">
    <div class="search">
      <el-input
        placeholder="支持服务名称模糊搜索"
        prefix-icon="el-icon-search"
        v-model="input2"
      >
      </el-input>
      <el-button class="searchBtn">搜索</el-button>
    </div>
    <div class="sortContent">
      <div class="mapBar">
        <div
          class="tabItem"
          :class="index == tabIndex ? 'active' : ''"
          @click="swutchTabIndex(index)"
          v-for="(item, index) in tabArr"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
      <div class="sortWrap">
        <div class="left">
          <h3>业务域</h3>
          <p>客户</p>
          <p>订单</p>
          <p>产商品</p>
          <p>权益</p>
        </div>

        <div class="right">
          <sortItem v-for="item in 10" :key="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sortItem from "@/components/sortItem";
export default {
  data() {
    return {
      tabIndex: 0,
      tabArr: ["业务能力", "数据能力", "技术能力"],
    };
  },
  methods: {
    swutchTabIndex(e) {
      this.tabIndex = e;
    },
  },
  components: {
    sortItem,
  },
};
</script>

<style lang="scss" scoped>
.mapWrap {
  padding: 0 77px;
  .search {
    margin: 20px auto;
    display: flex;
    align-items: center;
    .searchBtn {
      border-color: #345feb;
      color: #345feb;
    }
  }
  .sortContent {
    .mapBar {
      cursor: pointer;
      margin-bottom: 40px;
      display: flex;
      position: relative;
      .tabItem {
        font-weight: bold;
        font-size: 18px;
        margin-right: 20px;
      }
    }
    .mapBar::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -10px;
      height: 1px;
      transform: scaleY(0.5);
      background-color: #ccc;
    }
    .active {
      position: relative;
      color: #345feb;
    }
    .active::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -11px;
      height: 3px;
      z-index: 99;
      background-color: #345feb;
    }
    .sortWrap {
      display: flex;
      align-items: flex-start;
      cursor: pointer;
      .left {
        width: 100%;
        position: relative;
        h3 {
          margin-bottom: 10px;
        }
        p {
          margin-left: 20px;
          height: 30px;
          line-height: 30px;
        }
      }
      .left::before {
        content: "";
        position: absolute;
        right: 0;
        width: 1px;
        top: 0;
        bottom: 0;
        background-color: #ccc;
      }
      .right {
        margin-left: 50px;
      }
    }
  }
}
</style>