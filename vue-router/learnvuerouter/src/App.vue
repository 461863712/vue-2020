<template>
  <div id="app">
    <!--replace不让浏览器返回-->
    <!--active-class改变默认选中的class名字-->
    <!--<router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

    <!--<button @click="homeClick">首页</button>-->
    <!--<button @click="aboutClick">关于</button>-->
    <!--<button @click="userClick">用户</button>-->
    <!--<button @click="profileClick">档案</button>-->

    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="/user/+userId" tag="button">用户</router-link>
    <router-link :to="{path:'/profile',query:pople}" tag="button">档案</router-link>

    <!--exclude排除在外-->
    <keep-alive exclude="Profile,User"><!--1.keep-alive标签-->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId:"zhangshan",
      pople:{
        name:"ss",
        age:10
      }
    }
  },
  methods: {
    homeClick() {
      this.$router.push('/home',function () {})
    },
    aboutClick() {
      // this.$router.push('/about',function(){});
      this.$router.replace('/about',function () {});
    },
    userClick() {
      this.$router.push('/user/'+this.userId,function () {})
    },
    profileClick() {
      this.$router.push({
        path:'/profile',
        query:this.pople
      },function () {})
    },
  }
}
</script>

<style>
.active {
  color: white;
  background: #000;
}
</style>
