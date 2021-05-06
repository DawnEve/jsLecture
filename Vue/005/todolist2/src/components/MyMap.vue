<template>
    <div ref="root">
        <p class=light>userInfo: {{userInfo}}
            <br>> ssh {{userInfo.user}}@{{userInfo.url}}   //{{userInfo.pass}}
            <br>> ssh {{userInfo2.user}}@{{userInfo2.url}}  //{{userInfo2.pass}}</p>
        <p>location: {{location}}, location: {{geolocation}}</p>
        <button @click="location='South pole'">change location</button>
    </div>
</template>


<script>
import { inject } from 'vue'
import { ref, onMounted } from 'vue'

export default {
    inject: ["userInfo", ],

    setup(){
        // 使用 远程传过来的值
        const userInfo2 = inject('userInfo2')

        const location = inject('location')
        const geolocation = inject('geolocation')

        //对模板的引用
        const root = ref(null)

        onMounted(() => {
            // DOM元素将在初始渲染后分配给ref
            console.log('root.value=',root.value) // <div>这是根元素</div>
        })


        return {
            userInfo2,

            location,
            geolocation,

            root,
        }
    },



}
</script>

<style scoped>
.light{color:#ccc;}
</style>