<template>
  <!-- <page-component /> -->
  <!-- <page-layout /> -->  
  <router-view></router-view>
</template>

<script>
// import PageHeader from './components/editor/PageHeader.vue'
// import PageLayout from './components/editor/pageLayout.vue'


import {provide} from "vue";

import {useTable} from "./table/table.js";

export default {
  name: 'App',

  setup(){
    provide("useTable", useTable());
  },

}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* header {
  width: 100%;
  height: auto;
  position: fixed;
  background-color: gray;
} */
</style>
