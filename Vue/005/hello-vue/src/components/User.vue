<template>
  <div class="user">
    <h1>{{ title }}, <slot></slot> </h1>

  </div>
</template>

<script>
export default {
  name: 'User3',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{color:#ddd;}
</style>
