import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//前置钩子:根据路由改变title(导航守卫)
router.beforeEach(function (to,form,next) {
  document.title = to.matched[0].name
  next()
})

//后置钩子
router.afterEach((to,form) => {
  document.title = to.matched[0].name
})
