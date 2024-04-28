<script setup lang="ts">
// import -------------------------
import {ref, onMounted, onUnmounted} from 'vue'
// variabled ------------------------
const foo = ref<string>('foo');
// function --------------------------
function bar(){
  console.log('bar')
}
// hook -------------------------------
onMounted(()=>{
  console.log('mounted')
});
onUnmounted(()=>{
  console.log('unmounted')
});
</script>

<template>
  <v-card>
    <v-card-title>타이틀</v-card-title>
    <v-card-text>
      설명 블라블라
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>

