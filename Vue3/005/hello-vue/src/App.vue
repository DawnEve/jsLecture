<template>
  <div class=content>
    <User2 title="Manager">Tom</User2>
    <User2 title="Worker">Smith</User2>
    <User2 title="Worker">某某</User2>

    <hr>
  <!--
    <img alt="Vue logo" src="./assets/logo.png">
  -->
    <HelloWorld msg="First Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import User from './components/User.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    'User2':User,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
