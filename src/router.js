import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import NewPost from '@/components/NewPost.vue';
import { storeInternal } from '@/store';

// eslint-disable-next-line import/prefer-default-export
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'NewPost',
      path: '/posts/new',
      component: NewPost,
      meta: {
        requireAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth
      && !storeInternal.getState().authors.currentUserId) {
    next({
      name: 'home',
    });
  } else {
    next();
  }
});
