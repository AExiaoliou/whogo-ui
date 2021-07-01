<template>
  <el-card>
    <img class="fit-picture"
      src="@/assets/WhoGo.png"
      alt="Grapefruit slice atop a pile of other slices">
    <div slot="header" class="clearfix">
    <span >欢迎来到WhoGo！</span>
  </div>
  <div :key="o" class="text item">
    小组成员：谢宇杰、何天成、赵芝锴、杨翌、梁慧敏
  </div>
  </el-card>
</template>

<script>
export default {

}
</script>

<style>
  .fit-picture {
    width: 400px;
}
  .text {
    font-size: 20px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
