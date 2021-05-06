<template>
  <div class="user">
    <h1>{{ title }}, <slot></slot> </h1>
    <p class=msg>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:"I am user msg, from User.vue"
    }
  },
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{color:#ddd; border:1px dashed #eee; margin:5px;}
.msg{color:orange; font-size: 10px; opacity: 0.5;}
</style>
