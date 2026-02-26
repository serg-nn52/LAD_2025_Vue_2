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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostsView.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/posts/:id',
      name: 'post',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostView.vue'),
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
