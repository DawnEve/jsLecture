<template>
	<div id="a1">
		<p>book title: {{title}} | <slot></slot></p>
        {{name}} || Read_{{readersNumber}} || Title_{{book.title}}
	</div>
</template>


<script>
import { ref, reactive } from 'vue'
var log=console.log;

export default {
    name: "MyBook", //组件名称

    //接收父组件的数据
    props: {
        title: String
    },

    //定义子组件
    components:{

    },

    data(){
        return{
            msg:"from MyBook.vue",
        }
    },

    setup(props, context) {
        const readersNumber = ref(15)
        const book = reactive({ title: 'Vue 3 Guide' })





        //传入的参数
        log("\n---> setup(props, cxt)传入的参数")
        console.log(props, props.title) // { user: 'Lily' }

        // Attribute (非响应式对象)
        console.log('attrs: ', context.attrs)

        // 插槽 (非响应式对象)
        console.log('slots', context.slots)

        // 触发事件 (方法)
        console.log('emit', context.emit)
        log("<----end\n\n")


        return {
            name: "Book_"+props.title,
            readersNumber,
            book,

        } // 这里返回的任何内容都可以用于组件的其余部分
    },



}
</script>


<style scoped>
	#a1{color:#ddd;}
</style>


