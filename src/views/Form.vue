<script lang="ts" setup="">
// import -------------------------
import {onMounted, onUnmounted} from "vue"
import {ModalsContainer} from "vue-final-modal"
// variabled ------------------------

// function --------------------------

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
