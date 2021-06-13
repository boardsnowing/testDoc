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
            <td colspan="3" class="fixed">試験結果</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in testList.funcList[getFuncItemArg(id)].testItem" :key="item.id">
                <td class="tablebody">{{item.pipeNo}}</td>
                <td class="tablebody" v-html="toMarkDown(item.primary)"></td>
                <td class="tablebody" v-html="toMarkDown(item.secondary)"></td>
                <td class="tablebody" v-html="toMarkDown(item.input)"></td>
                <td class="tablebody" v-html="toMarkDown(item.expect)"></td>
                <td class="tablebody">
                     <textarea v-model="item.reason"></textarea>
                </td>
                <td class="tablebody"><button @click="setTestResult(id, true, '')">OK</button></td>
                <td class="tablebody"><button @click="setTestResult(id, false, item.reason)">NG</button></td>
                <td class="tablebody">{{formatDate(item.testDate)}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {inject, computed} from "vue";
import {useRoute} from "vue-router";
import moment from "moment";
import marked from "marked";

export default {
    name: "testComponent",
    setup() {
        const {testList} = inject('useTable');
        const {getFuncItemArg} = inject('useTable');
        const {setTestResult} = inject('useTable');

        const id = computed( ()=>{
            const route = useRoute();
            return route.params.id;
        });

        return {testList, id, getFuncItemArg, setTestResult};
    },
    methods: {
        formatDate(date){
            return moment(date).format("YYYY/MM/DD");
        },
        toMarkDown(plain_text){
            return marked(plain_text);
        }
    }
}
</script>

<style scoped>
</style>