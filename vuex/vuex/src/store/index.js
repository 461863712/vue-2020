import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id:1, name:"a", age:32},
      {id:2, name:"b", age:21},
      {id:3, name:"c", age:12},
      {id:4, name:"d", age:15}
    ]
  },
  //同步操作
  mutations: {
    add(state) {
      state.counter++
    },
    reduce(state) {
      state.counter--
    },
    addCounter(state,count) {
      //两种写法
      // state.counter+=count.
      state.counter+=count.count
    }
  },
  //异步操作
  actions: {},
  //过滤
  getters: {
    //平方
    pfCounter(status){
      return status.counter * status.counter
    },
    more20stu(status) {
      return status.students.filter(s => {
        return s.age > 20
      })
    },
    more20stuLength(status, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(status) {
      return function (age) {
        return status.students.filter(s => {
          return s.age > age
        })
      }
    }
  },
  //模块
  modules: {}
})

export  default store
