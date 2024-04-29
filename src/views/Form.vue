<script lang="ts" setup="">
// import -------------------------
import {ref, onMounted, onUnmounted} from "vue"
import {ModalsContainer} from "vue-final-modal"
// variabled ------------------------
const foo = ref<string>("foo")
// function --------------------------
function bar() {
  console.log("bar")
}
// hook -------------------------------
onMounted(() => {
  console.log("mounted")
})
onUnmounted(() => {
  console.log("unmounted")
})
</script>

<template>
  <v-card>
    <v-card-title>타이틀</v-card-title>
    <v-card-text> 설명 블라블라 </v-card-text>
  </v-card>
  <ModalsContainer />
</template>

<style scoped></style>
