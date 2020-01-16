<template>
  <div>
    <h2>我是用户</h2>
    <p>呃呃呃</p>
    <p>{{userId}}</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        //path: '/user/:userId'
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>
