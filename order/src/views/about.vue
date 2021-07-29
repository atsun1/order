<template>
  <div>

    <van-row>
      <van-col span="12">
        <div ><router-link class="ab-link" to="/contact">联系我们</router-link></div>
        <div ><router-link class="ab-link" to="/news">新闻</router-link></div>
        <div ><router-link class="ab-link" to="/orderlist">订单记录</router-link></div>
      </van-col>

      <van-col span="12">
        <router-view></router-view>
      </van-col>
    </van-row>

  </div>
</template>

<script>
</script>

<style>
  .ab-link:hover{
    background-color: #eee;
  }
  .ab-link{
    display: block;
    width: 400px;
    border:1px solid #999;
    border-radius: 10px;
    padding:10px;
    margin:15px 0px;
  }
  .router-link-active{
    background-color: #eee;
  }
</style>
