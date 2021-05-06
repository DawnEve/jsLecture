<template>
  <div>
    <p>todolist2</p>
    <Home user="Tom"></Home>
    <Home user="Smith"></Home>

    <my-book title="How to use XX?" @click="onClick">new Book [click me] from MyBlog.vue</my-book>

    <my-blog title="blog title 1">The content of blog 1</my-blog>
    <my-blog title="blog title 2">The content of blog 2</my-blog>

    <hr> user info<br>
    <my-map></my-map>

    <my-fruits></my-fruits>
    <pre>
    <br>
    <br>
    <br>
    <br>
    <br>




    </pre>


    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import MyBook from './components/MyBook.vue'
import MyBlog from './components/MyBlog.vue'
import MyMap from './components/MyMap.vue'
import MyFruits from './components/MyFruits.vue'



import { provide } from 'vue'
import { /*provide, ref, */ reactive } from 'vue'

// test ref
import { ref, computed } from 'vue'
const counter = ref(15)

console.log(counter) // { value: 0 }
console.log(counter.value) // 0

counter.value++
console.log(counter.value) // 1


// 计算属性 API
const counter2 = ref(1024)
const twiceTheCounter2 = computed(() => counter2.value * 2)

counter2.value++
console.log('counter2=',counter2.value) // 1
console.log('twiceTheCounter2=',twiceTheCounter2.value) // 2


export default {
  name: 'App',

  //子组件
  components: {
    HelloWorld,
    Home,
    MyBook,
    MyBlog,
    MyMap,
    MyFruits,
  },

  methods:{
      onClick(e){
          alert("you clicked me! from " + e.target.tagName)
      }
  },

  //提供一套登录口令
  provide: {
    userInfo:{
      url: 'z.xx.com',
      user: 'x12',
      pass:"key_fd45!"
    }
  },

  setup(){
    provide('userInfo2', {
      url: 'z.xx.com',
      user: 'Y1200',
      pass:"key_!wjefo"
    })


    // 增加响应性的版本
    const location = ref('North Pole')
    const geolocation = reactive({
      longitude: 90,
      latitude: 135
    })
    provide('location', location)
    provide('geolocation', geolocation)
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
