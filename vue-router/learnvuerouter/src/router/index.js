import Vue from 'vue'
import Router from 'vue-router'
// import About from '../components/About'
// import Home from '../components/Home'
// import User from '../components/User'
/**
 * ES6路由懒加载
 * component: () => import('../components/Home')
 */
const Home=() => import('../components/Home')
const About=() => import('../components/About')
const User=() => import('../components/User')

Vue.use(Router)

export default new Router({
  mode:'history',//去除地址栏#的harh。使用history
  routes: [
    {
      path: '/',
      name: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User
    }
  ],
  //改变默认选中的class名字
  linkActiveClass:"active"
})
