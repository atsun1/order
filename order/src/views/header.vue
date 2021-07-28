<template>
  <div class="head">
      <div class="nav-top">
         <div class="left">
           <van-icon name="star" /><b>点餐系统</b>
           <router-link class="navlink" to="/">主页</router-link>
           <router-link class="navlink" to="/menu">菜单</router-link>
           <router-link class="navlink" to="/admin">管理</router-link>
           <router-link class="navlink" to="/about">关于我们</router-link>
         </div>
         <div class="right">
            <router-link to="/login">登录</router-link> |
            <router-link to="/register">注册</router-link>
         </div>
      </div>
  </div>
</template>

<script>
</script>

<style>
  .head{

  }
  .nav-top{
    background-color: #eee;
    display: flex;
    padding:20px;
    font-size: 20px;
    justify-content: space-between;
  }

  .navlink{
    margin:0 5px
  }
</style>
