<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbar-item :path="home" activeColor="#333">
        <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="首页">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.png" alt="首页">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item :path="category" activeColor="#333">
        <img slot="item-icon" src="@/assets/img/tabbar/category.png" alt="分类">
        <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.png" alt="分类">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item :path="shopcart" activeColor="#333">
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.png" alt="购物车">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopacrt_active.png" alt="购物车">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item :path="profile" activeColor="#333">
        <img slot="item-icon" src="@/assets/img/tabbar/profile.png" alt="我的">
        <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.png" alt="我的">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import Tabbar from '@/components/tabbar/Tabbar'
  import TabbarItem from '@/components/tabbar/TabbarItem'
export default {
  name: 'App',
  data() {
    return {
      home:'/home',
      category:'/category',
      shopcart:'/shopcart',
      profile:'/profile',
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style src="@/assets/css/base.css">
  /*@import "./assets/css/base.css";*/
</style>
