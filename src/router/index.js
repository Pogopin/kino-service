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
      },
      children: [
        {
          name: 'default',
          path: '',
          component: () => import('../components/widgets/slogan/index.vue')
        },
        {
          name: 'top_20',
          path: 'top_20',
          component: () => import('../components/widgets/top20/index.vue')
        },

      ]
    },
    {
      path: '/about',
      name: 'about',

      // component: () => import('../views/AboutView.vue')
    }
  ]
})
router.beforeEach(loadLayoutMiddleware);
export default router
