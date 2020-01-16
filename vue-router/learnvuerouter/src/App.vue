<template>
  <div id="app">
    <!--replace不让浏览器返回-->
    <!--active-class改变默认选中的class名字-->
    <!--<router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

    <!--<button @click="homeClick">首页</button>-->
    <!--<button @click="aboutClick">关于</button>-->

    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="/user/+userId" tag="button">用户</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId:"zhangshan"
    }
  },
  methods: {
    homeClick() {
      this.$router.push('/home',function () {})
    },
    aboutClick() {
      // this.$router.push('/about',function(){});
      this.$router.replace('/about',function () {});
    }
  }
}
</script>

<style>
.active {
  color: white;
  background: #000;
}
</style>
