import { createRouter, createWebHistory } from 'vue-router'
import { AppLayouts, loadLayoutMiddleware } from "./loadLayoutMiddleware";

import index from '@/views/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: index,
      meta: {
        layout: AppLayouts.default,
      }
    },
  ]
})
router.beforeEach(loadLayoutMiddleware);
export default router
