import MainLayout from '@/layouts/MainLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainViewComposition.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/options',
      name: 'options',
      component: () => import('@/views/MainViewOptions.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsView.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: () => import('../views/PostView.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      meta: {
        layout: MainLayout,
      },
    },
  ],
});

const isAuth = true;

router.beforeEach((to) => {
  if (to.name === 'posts' && !isAuth) {
    alert('Авторизуйтесь!');
    return {
      name: 'home',
    };
  }
});

export default router;
