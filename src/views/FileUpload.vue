<script setup lang="ts">
// import -------------------------
import {ref, onMounted, onUnmounted, watch, Ref} from "vue"
import Thumnail from "@/components/ui/Thumnail.vue"
// variable & function -------------------------------
const files: Ref<File[] | undefined> = ref(undefined)
const imgList: Ref<string[]> = ref([])
watch(files, newVal => {
  if (newVal) {
    for (let i = 0; i < newVal.length; i++) {
      const reader = new FileReader()
      reader.onload = e => {
        if (e.target) imgList.value.push(e.target.result as string)
      }
      reader.readAsDataURL(newVal[i])
    }
  }
})

function deleteThumnail(idx: number) {
  imgList.value.splice(idx, 1)
}
function deleteAll() {
  imgList.value = []
  files.value = undefined
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
    <v-card-title>fileUpload</v-card-title>
    <v-card-text> 파일업로드 테스트 </v-card-text>
  </v-card>

  <v-divider class="my-4"></v-divider>

  <v-row class="a-i-center py-2">
    <v-col cols="6"> 이미지만 첨부 </v-col>
    <v-col cols="6" class="t-a-right">
      <v-btn @click="deleteAll">
        <v-icon>mdi-trash-can-outline</v-icon>
        전체삭제
      </v-btn>
    </v-col>
  </v-row>

  <v-row no-gutters>
    <v-col
      cols="4"
      sm="3"
      md="3"
      lg="2"
      xl="2"
      v-for="(file, idx) in imgList"
      :key="idx"
      class="pa-1"
    >
      <Thumnail :src="file" @click-delete="deleteThumnail(idx)" width="100" height="100" />
    </v-col>
  </v-row>
  <!--  </v-card>-->
  <v-file-input
    v-model="files"
    label="파일선택"
    prepend-icon="mdi-paperclip"
    :multiple="true"
    accept="image/*"
  />
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start; /* 추가 */
}

.thumbnail-wrapper {
  flex: 1 0 auto;
  width: 100px; /* 썸네일 이미지의 너비를 원하는 비율로 설정하세요. */
  height: 100px; /* 썸네일 이미지의 너비를 원하는 비율로 설정하세요. */
}
</style>
