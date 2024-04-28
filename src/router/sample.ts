import DefaultLayout from "@/layouts/DefaultLayout.vue";

export const sampleRoutes = [
  {
    path: '/sample',
    component: DefaultLayout,
    children: [
      {
        path: '/envSample',
        component: () => import('@/views/sample/EnvSample.vue'),
      }
    ],
  },
];
