<script  lang="ts" setup="">
// import -------------------------
import {ref, onMounted, onUnmounted} from 'vue'
import { ModalsContainer, useModal } from 'vue-final-modal'
import ModalConfrim from '@/components/ui/ModalConfrim.vue'
// variabled ------------------------
const foo = ref<string>('foo');
const $modal = useModal({
  component: ModalConfrim,
  attrs: {
    title: 'Hello World!',
    onConfirm() {
      close()
    },
  },
  slots: {
    default: '<p>UseModal: The content of the modal</p>',
  },
});
// function --------------------------
function bar(){
  console.log('bar')
}
function openModal(){
  $modal.open()
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
  <v-row class="h-100 a-i-center">
    <v-col>ddsfe
      <v-btn @click="openModal">모달열기</v-btn>
      <ModalsContainer /></v-col>

  </v-row>


</template>

<style scoped>

</style>

