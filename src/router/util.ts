import DefaultLayout from "@/layouts/DefaultLayout.vue";

export const utilRoutes = [
  {
    path: '/util',
    component: DefaultLayout,
    children: [
      {
        path: 'vconsole',
        component: () => import('@/views/utils/VConsole.vue'),
      }
    ],
  },
];
