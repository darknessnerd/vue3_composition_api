import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';

// eslint-disable-next-line import/prefer-default-export
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
  ],
});
