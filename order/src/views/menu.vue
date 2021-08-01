<template>
  <van-row class="menu">
    <van-col class="left"  span="16">
      <div class="leftlist">
        <h5><b>尺寸</b></h5>
        <h5><b>价格</b></h5>
        <h5><b>加入</b></h5>
      </div>

    </van-col>

    <van-col class="right"  span="8">

        <p>没有任何商品</p>
    </van-col>

  </van-row>
</template>

<script>
</script>

<style>
  .menu{
    font-size: 16px;
  }
  .left{

  }
  .leftlist{
    display: flex;

  }
  .leftlist h5:first-child{
    flex:2
  }
  .leftlist h5{
    flex:1
  }
</style>
