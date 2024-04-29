<script setup lang="ts">
// import -------------------------
import {onBeforeUnmount} from 'vue'
import VConsole from "vconsole";
// -------------------------------
const vconsole =  new VConsole();
// -------------------------------
onBeforeUnmount(()=>{
    vconsole.destroy();
});
</script>

<template>
  <v-card>
    <v-card-title>VConsole</v-card-title>
    <v-card-text>
      디바이스 inspect안할수있게 도와주는 vconsole 플러그인 <br />
      main.js에 추가하면 전역으로 관리가능
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>

