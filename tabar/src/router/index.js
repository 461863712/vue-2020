import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("@/pages/home/Home")
const Category = () => import("@/pages/category/Category")
const Shopcart = () => import("@/pages/shopcart/Shopcart")
const Profile = () => import("@/pages/profile/Profile")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },{
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
  mode: 'history'
})
