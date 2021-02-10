import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import NewPost from '@/components/NewPost.vue';
import ShowPostComponent from '@/components/ShowPostComponent.vue';
import { storeInternal } from '@/store';
import EditPostView from '@/components/EditPostView.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'showPost',
    path: '/posts/:id',
    component: ShowPostComponent,
  },
  {
    name: 'NewPost',
    path: '/posts/new',
    component: NewPost,
    meta: {
      requireAuth: true,
    },
  },
  {
    name: 'EditPost',
    path: '/posts/:id/edit',
    component: EditPostView,
    meta: {
      requireAuth: true,
    },
  },
];
// eslint-disable-next-line import/prefer-default-export
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
export const makeRouter = () => createRouter({
  history: createWebHistory(),
  routes,
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
