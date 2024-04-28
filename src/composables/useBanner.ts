import {useBannerStore} from "@/store/banner";

const useBanner= () => {
  const store = useBannerStore()
  const updateBanner = (scrnId:string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(scrnId === "test2") {
          store.setShow(false)
        }else{
          store.setShow(true)
        }
        resolve(true)
      },500)
    })
  }

  return {updateBanner}
}

export default useBanner;
