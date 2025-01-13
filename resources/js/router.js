import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    meta: {},
    component: () => import('./src/components/Layout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('./src/components/Index.vue') }
    ]
  },

  // 404 route
  { name: 'err404', path: '/:pathMatch(.*)*', component: import('./src/components/NotFound.vue')}
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
