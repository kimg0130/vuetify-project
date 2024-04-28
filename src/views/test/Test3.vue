<template>
  3번입니다아아앙아
  <v-btn @click="onBack">back</v-btn>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const onBack = () => {
  router.go(-1);
}
</script>
