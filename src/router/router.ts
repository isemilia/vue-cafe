import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/home.vue';
import Reports from '@/pages/reports/reports.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/reports',
      component: Reports
    },
    {
      path: '/settings',
      component: Reports
    }
  ]
});

export default router;