<template>
    <div id="myblog">
        <h2>{{title}} ({{count3}}) <button @click="count3 ++">Increment count</button></h2>
        <slot></slot>
        <p>[auther: {{firstName}}, age: {{age}}]</p>

    </div>
</template>>

<script>
import { onMounted, ref } from 'vue'
import { reactive, toRefs } from 'vue'
import { /*reactive,*/ readonly } from 'vue'


export default {
    name:"MyBlog",
    props: {
        title: String
    },



    setup() {
        // 响应式引用
        const auther=reactive({
            firstName:"Tom",
            lastName:"Smith",
            age: 50
        })
        let { firstName, age} = toRefs(auther);
        // change a value
        firstName.value="Tom2"
        console.log( 'auther.firstName=', auther.firstName)


        // 使用 readonly 防止更改响应式对象
        
        const original = reactive({ count2: 0 })
        const copy = readonly(original)
        // 通过 original 修改 count，将会触发依赖 copy 的侦听器
        original.count2++
        console.log('copy=', copy)
        // 通过 copy 修改 count，将导致失败并出现警告
        copy.count++; // 警告: "Set operation on key 'count' failed: target is readonly."


        // 生命周期钩子
        // mounted
        onMounted(() => {
            console.log('MyBlog::Component is mounted!')
        })




        const count3 = ref(0)

        //返回对象，可以像 props 一样使用
        return {
            count3,

            firstName,
            age,

            copy,
        }
    }


}
</script>


<style scoped>
#myblog{
    border:1px dotted #eee;
    margin:10px auto;
    background: #fee;
}
</style>