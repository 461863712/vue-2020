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
const News=() => import('../components/home/News')
const Message=() => import('../components/home/Message')

const About=() => import('../components/About')
const User=() => import('../components/User')
const Profile=() => import('../components/Profile')

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
      component: Home,
      beforeEnter:(to,form,next) => {
        document.title="hahha"
        next()
      },
      children: [
        // {
        //   path:'/',
        //   name:"news",
        //   redirect: 'news'
        // },
        {
          path:'news',
          name:"news",
          component:News
        },
        {
          path:'message',
          name:"message",
          component:Message
        }
      ]
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
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
  //改变默认选中的class名字
  linkActiveClass:"active"
})
