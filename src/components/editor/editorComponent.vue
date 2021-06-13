<template>
  <editor-side-view />
  <editor-layout />
</template>

<script>
import EditorLayout from './editorLayout.vue'
import EditorSideView  from './editorSideView'


export default {
  name: 'PageMain',
  components: {
    EditorLayout,
    EditorSideView
  },
  setup(){
  }
}
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

/* header {
  width: 100%;
  height: auto;
  position: fixed;
  background-color: gray;
} */
</style>
