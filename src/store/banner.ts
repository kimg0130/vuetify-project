import {defineStore} from "pinia";
import {ref} from "vue";

export const useBannerStore = defineStore('banner', () => {
  const isShow = ref(true)
  const setShow = (value:boolean) => {
    isShow.value = value
  }

  return {
    isShow,
    setShow
  }
})
