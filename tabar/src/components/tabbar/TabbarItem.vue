<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="isActive"><slot name="item-icon-active"></slot></div>
      <div v-else><slot name="item-icon"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props: {
      path: String,
      activeColor:{
        type:String,
        default:"#1afa29"
      }
    },
    data() {
      return {

      }
    },
    computed: {
      //判断活跃
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods: {
      itemClick(){
        //解决多次点击同一路由报错问题
        if(this.$route.path === this.path) {
          return
        }
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #ccc;
  }
  .tab-bar-item img{
    width: 22px;
    height: 22px;
    margin: 2px auto;
  }
</style>
