<script setup lang="ts">
// import -------------------------
import {ref, onMounted, onUnmounted, defineModel, useAttrs, defineEmits} from 'vue'
// props -------------------------
const $model = defineModel();
const $props = defineProps({
  src: String
})
const $attrs = useAttrs();
const $emit = defineEmits(['clickDelete']);
// variabled ------------------------
const foo = ref<string>('foo');
// function --------------------------
function onClickDelete(){
  $emit('clickDelete');
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
  <v-img
    :src="$props.src as string"
    v-bind="$attrs"
    class="img-fit t-a-right"
  >
    <v-btn icon class="rounded-button mr-1" size="20px" @click="onClickDelete">
      <v-icon size="10px">mdi-close</v-icon>
    </v-btn>
  </v-img>
</template>

<style scoped>

</style>


