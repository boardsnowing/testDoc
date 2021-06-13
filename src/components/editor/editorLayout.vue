<template>
    <div id="doc_title"></div>
    <br>
    <table class="sticky_table">
        <thead>
            <tr>
            <td class="fixed"></td>
            <td class="fixed">No.</td>
            <td class="fixed">大項目</td>
            <td class="fixed">小項目</td>
            <td class="fixed">入力</td>
            <td class="fixed">期待値</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in testList.funcList[getFuncItemArg(id)].testItem" :key="item.id">
                <td class="tablebody">
                    <input type="checkbox" v-model="item.checked">
                </td>
                <td class="tablebody">{{item.pipeNo}}</td>
                <td class="tablebody">
                    <textarea v-model="item.primary"></textarea>
                </td>
                <td class="tablebody">
                    <textarea v-model="item.secondary"></textarea>
                </td>
                <td class="tablebody">
                    <textarea v-model="item.input"></textarea>
                </td>
                <td class="tablebody">
                    <textarea v-model="item.expect"></textarea>
                </td>
            </tr>
        </tbody>
    </table>

</template>

<script>
import {inject, computed} from "vue";
import {useRoute} from "vue-router";

export default {
    name: "editorLayout",
    setup(){
        const {testList} = inject('useTable');
        const {getFuncItemArg} = inject('useTable');

        const id = computed( ()=>{
            const route = useRoute();
            return route.params.id;
        });


        return {testList, id, getFuncItemArg};
    }


}
</script>

<style scoped>
/* .sticky_table thead{
    
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
} */

.fixed {
    position: sticky;
    top: 0;

}


.tablebody{
    padding-top: 10px;
    padding-bottom: 10px;
}

textarea{
    width: auto;
    height: 50px;
}
</style>