<template>
    <div><router-link :to="{name: 'front'}">return to FrontPage</router-link></div>
    <br>
    <table class="sticky_table">
        <thead>
            <tr>
            <td class="fixed">No.</td>
            <td class="fixed">大項目</td>
            <td class="fixed">小項目</td>
            <td class="fixed">入力</td>
            <td class="fixed">期待値</td>
            <td class="fixed">試験結果</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in testList.funcList[getFuncItemArg(id)].testItem" :key="item.id">
                <td class="tablebody">{{item.pipeNo}}</td>
                <td class="tablebody">
                    {{item.primary}}
                </td>
                <td class="tablebody">
                    {{item.secondary}}
                </td>
                <td class="tablebody">
                    {{item.input}}
                </td>
                <td class="tablebody">
                    {{item.expect}}
                </td>
                <td />
            </tr>
        </tbody>
    </table>
</template>

<script>
import {inject, computed} from "vue";
import {useRoute} from "vue-router";


export default {
    name: "testComponent",
    setup() {
        const {testList} = inject('useTable');
        const {getFuncItemArg} = inject('useTable');

        const id = computed( ()=>{
            const route = useRoute();
            return route.params.id;
        });


        return {testList, id, getFuncItemArg};
    },
}
</script>

<style scoped>
</style>