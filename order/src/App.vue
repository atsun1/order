<template>
  <div id="app">
    <navtop></navtop>
    <img src="./assets/logo.png">

    <router-view/>
  </div>
</template>

<script>
import navtop from '@/views/header.vue'
export default {
  components:{
    navtop
  }
}
</script>

<style>
  #app{
    width: 1200px;
    margin:0 auto;
  }
</style>
