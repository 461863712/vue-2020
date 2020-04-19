<template>
  <div id="app">
    <h2>{{counter}}</h2>
    <!------------mutations---------------->
    <button @click="addApp">+</button>
    <button @click="addCounterApp(10)">+10</button>
    <button @click="reduceApp">-</button>
    <hello-world></hello-world>

    <!------------getters------------------>
    <h2>{{$store.getters.pfCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>

    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{more20stuLength}}</h2>

    <h2>{{$store.getters.moreAgeStu(30)}}</h2>

  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  data() {
    return {
      msg: "hello",
    }
  },
  components: {
    HelloWorld
  },
  computed:{
    counter(){
      return this.$store.state.counter
    },
    more20stuLength() {
      return this.$store.getters.more20stuLength
    }
  },
  methods: {
    addApp(){
      this.$store.commit('add');
    },
    reduceApp(){
      this.$store.commit('reduce');
    },
    addCounterApp(count){
      //两种写法
      // this.$store.commit('addCounter',count);
      this.$store.commit({
        type:'addCounter',
        count:count
      })
    }
  }
}
</script>

<style>

</style>
