<script setup lang="ts">
// 코드 스니핏 등록용 파일 - vueDefault
// import -------------------------
import {ref, onMounted, onUnmounted} from 'vue'
// 전역변수 -------------------------------
const foo = ref<string>('foo');
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
    <v-card-title>VConsole</v-card-title>
    <v-card-text>
      디바이스 inspect안할수있게 도와주는 vconsole 플러그인 <br />
      main.js에 추가하면 전역으로 관리가능
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>

