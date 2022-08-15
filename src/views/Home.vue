<template>
  <div class="home">
    <img src="@/assets/homePic.png" class="homePic" />
    <p class="caseTitle">全部案例</p>
    <div class="caseWrap">
      <div class="caseItem" v-for="(item, index) in 6" :key="index">
        <div class="top">
          <img src="@/assets/itemPic.jpg" alt="" />
        </div>
        <div class="bottom">
          <h3 class="title">中国移动简勤：推动“5G+全体育”，打造“体育元宇宙”</h3>
          <div class="desc">
            活动上，中国自行车运动协会与中国移动共同宣布就自行车电竞化项目数智骑行赛达成深度合作，以动感单车为切入点
          </div>
          <el-popover
            placement="bottom"
            trigger="hover"
            popper-class="itemPopover"
            width="330"
          >
            <div class="popContent">
              <div class="top">
                <h3 class="hTitle">

                  案例简介
                </h3>
                <div class="briefDesc">
                  活动上，中国自行车运动协会与中国移动共同宣布就自行车电竞化项目数智骑行赛达成深度合作，以动感单车为切入点
                </div>
              </div>
              <!-- <div class="numDesc">
                <span>提效87.79%</span>
                <span>降本1104人天</span>
              </div> -->
              <div class="popSpan"><span>应用单位:</span>天津公司</div>
              <div class="popSpan"><span>服务条线:</span>市场</div>
              <div class="popSpan">
                <span>调用能力:</span>无埋点数据采集与营销运营能力
              </div>
            </div>
            <el-button class="caseBtn" slot="reference">查看案例</el-button>
          </el-popover>
        </div>
      </div>
      <div class="pageWrap">
        <el-pagination
          :background="true"
          layout="prev, pager, next"
          :total="1000"
          class="pagin"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// import Slider from '@/components/Slider'
export default {
  components: {},
};
</script>

<style  lang="scss" scoped>
.homePic {
  width: 100%;
}
.caseTitle {
  text-align: center;
  height: 100px;
  line-height: 100px;
}
.caseWrap {
  border: 1px solid #ccc;
  margin: 0 70px;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .caseItem {
    margin-bottom: 20px;
    width: 30%;
    background-color: #f5f7fa;
    img {
      width: 100%;
    }
    .bottom {
      padding: 20px;
      width: 100%;
      box-sizing: border-box;
      .title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
      }
      .desc {
        margin: 10px 0;
        font-size: 14px;
        color: #6a6e71;
      }
      .caseBtn {
        display: block;
        margin: 10px auto;
        width: 100%;
        border-color: #345feb;
        color: #345feb;
        background-color: #f5f7fa;
      }
    }
  }
  .pageWrap {
    width: 100%;
    margin: 20px 0;
    .pagin {
      float: right;
    }
  }
  ::v-deep {
    .btn-prev,
    .btn-next {
      background-color: #fff;
      border: 1px solid #eeee;
    }
    .el-pagination.is-background .el-pager li:not(.disabled) {
      background-color: #fff; // 进行修改未选中背景和字体
      // color: #fff;
      border: 1px solid #eeee;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active {
      // background-color: #4f75ff; // 进行修改选中项背景和字体
      color: #345feb;
      border: 1px solid #345feb;
    }
  }
}
.popContent {
  // box-sizing: border-box;
  padding-left: 9px;
  .top {
    .briefDesc {
      margin: 10px 0;
    }
    h3{
      padding-left: 25px;
    }
    .hTitle::before{
      content: '';
      position: absolute;
      left: 18px;
      top: 17px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #3b74f9;
    }
    .hTitle::after{
      content: '';
      position: absolute;
      left: 26px;
      top: 17px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #4ac1ff;
    }
  }
  .numDesc {
    margin: 10px 0;
    span{
      background-image: linear-gradient(to right, #3b73f9 , #4ac4ff);
      color: #fff;
      display: inline-block;
      margin-right: 15px;
      padding: 5px;
    }
    
  }
  .popSpan {
    height: 25px;
    line-height: 25px;
    span {
      font-weight: bold;
      margin-right: 5px;
    }
  }
}
</style>