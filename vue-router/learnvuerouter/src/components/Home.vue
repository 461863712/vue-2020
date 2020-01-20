<template>
  <div>
    <h2>我是首页</h2>
    <p>哈哈哈</p>
    <router-link to="/home/News">新闻</router-link>
    <router-link to="/home/Message">消息</router-link>

    <router-view/>
    {{msg}} <input type="text" v-model="msg">
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        msg:"ss",
        path:"/home/news"//2.路径
      }
    },
    // created() {//组件被创建出来
    //   console.log("created")
    // },
    // mounted() {//组件挂载到dom
    //   console.log("mounted")
    // },
    // updated() {//界面发生更新
    //   console.log("updated")
    // },
    // destroyed() {//销毁
    //   console.log("destroyed")
    // },
    activated() {//活跃的
      this.$router.push(this.path)//3.跳转
    },
    beforeRouteLeave(to, from, next) {//4.保存原有

      this.path=this.$route.path;
      next()
    }
  }
</script>

<style scoped>

</style>
