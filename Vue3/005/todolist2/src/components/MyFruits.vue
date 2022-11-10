<template>
    <div id='my-fruit'>
        <div v-for="(item, i) in list" :key="i" :ref="el => { if (el) divs[i] = el }">
            {{ item }}
        </div>
    </div>
</template>

<script>
import { ref, reactive, onBeforeUpdate } from 'vue'

export default {
    setup(){
        const list=reactive(['apple', 'orange', 'pear', 'peach'])
        const divs=ref([])

        //确保每次更新之前重置ref
        onBeforeUpdate(()=>{
            divs.value=[]
        })

        return{
            list, divs
        }
    }

}
</script>

<style scoped>
#my-fruit{
    background: blueviolet;
    color:white;
}
</style>