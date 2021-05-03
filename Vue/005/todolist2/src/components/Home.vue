<template>
	<div id="home">
		<h1>user: {{user}}</h1>
        {{msg}}
	</div>
</template>


<script>
export default {
    name: "Home", //组件名称

    //接收父组件的数据
    props: {
        user: String
    },

    //定义子组件
    components:{

    },

    data(){
        return{
            msg:"from Home.vue",
        }
    },


}
</script>


<style scoped>
	#home{border:1px solid #ddd; margin:10px; color:#ddd;}
</style>


