<template>
  <v-card>
    <v-card-title>env</v-card-title>
    <v-card-subtitle>개발 실행환경 정보</v-card-subtitle>
    <v-card-text>
      <v-icon>mdi-checkbox-marked-circle</v-icon> NODE.ENV : {{nodeEnv}} <br />
      <v-icon>mdi-checkbox-marked-circle</v-icon> env.MODE : {{envMode}}
    </v-card-text>
    <v-card-text>
      .env.local <br/>
      .env.dev <br/>
      .env.prod <br/>
      파일을 추가 <br/>
      <br/>
      package.json 파일에 빌드옵션에 NODE_ENV=local 추가<br/>
    </v-card-text>
  </v-card>




</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
const nodeEnv = ref('')
const envMode = ref('')


onMounted(()=>{
  nodeEnv.value = import.meta.env.VITE_ENV
  envMode.value = import.meta.env.MODE
  console.log('import.meta.env.MODE',import.meta.env.MODE)
})
</script>
