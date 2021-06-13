<template>
    <div class="head">
        <div><router-link :to="{name: 'front'}">return to FrontPage</router-link></div>
        <button @click="addRow()">列追加</button>
        <button @click="removeRow()">列削除</button>
        <button @click="checkAll()">All Check</button>
        <button @click="uncheckAll()">All Uncheck</button>
    </div>
    
</template>

<script>
import {computed, inject} from "vue";
import {useRoute} from "vue-router";

export default {
    name: "PageSideView",
    setup(){

        const id = computed( ()=>{
            const route = useRoute();
            return route.params.id;
        });

        const {addRow} = inject("useTable", id);
        const {removeRow} = inject("useTable", id);
        const {checkAll} = inject("useTable", id);
        const {uncheckAll} = inject("useTable", id);

        return {addRow, removeRow, checkAll, uncheckAll};
    }
}
</script>

<style scoped>
header{
  width: 100%;
  height: auto;
  position: fixed;
  background-color: rgba(200, 200, 200, 100);
}

</style>