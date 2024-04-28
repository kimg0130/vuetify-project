import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {utilRoutes} from "@/router/util";
import {sampleRoutes} from "@/router/sample";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultLayout,
      children: [
        {
          path: '/fileUpload',
          name: 'fileUpload',
          component: () => import('@/views/FileUpload.vue'),
        }
      ]
    },
    ...utilRoutes,
    ...sampleRoutes
    ]
})

router.beforeEach((to, from, next) => {
  console.log("beforeEach to", to, "from", from, typeof to.name)
  console.log("history", router)
  next()
})

export default router
