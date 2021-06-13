<template>
    <div>検査番号: <input type="number" v-model="testNo">
    検査名: <input type="text" v-model="testName"></div>
    <button @click="addFunctionTest(testNo, testName)">Pipeline Test追加</button>
    <button @click="removeFunctionTest(testNo)">Pipeline Test削除</button>
    <table v-if="testList.funcList.length>0">
        <thead>
            <tr>
                <td>Pipeline No.</td>
                <td>Name</td>
                <td>Test Date</td>
                <td>Edit</td>
                <td>Testing</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in testList.funcList" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td >{{formatDate(item.testDate)}}</td>
                <td><router-link :to="{name: 'editor', params: {id: item.id}}">edit</router-link></td>
                <td><router-link :to="{name: 'testing', params: {id: item.id}}">testing</router-link></td>
            </tr>
        </tbody>
    </table>
</template>
<script>

import {inject} from "vue";
import moment from "moment";


export default {
    name: "FrontPage",
    setup() {

        const testNo = 0;
        const testName = "";

        const showDate = (date)=>{
            console.log(date);
            return date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();
        }

        const {testList} = inject("useTable");

        const {addFunctionTest} = inject("useTable");
        const {removeFunctionTest} = inject("useTable");

        return {testNo, testName, testList, addFunctionTest, removeFunctionTest, showDate};
    },
    methods: {
        formatDate(date){
            return moment(date).format("YYYY/MM/DD");
        }

    },
}
</script>

<style scoped>

</style>