<script setup lang="ts">
// import -------------------------
import {onMounted, onUnmounted} from "vue"
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
</template>

<style scoped></style>
