<template>
  <div>
    <h2>我是Profile组件</h2>
    <p @click="aa">{{pople}}</p>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    methods:{
      aa(){
        console.log(this)
      }
    },
    computed: {
      pople() {
        return this.$route.query.name+":"+this.$route.query.age
      }
    }
  }
</script>

<style scoped>

</style>
