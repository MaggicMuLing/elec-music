import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../view/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // 可在此处添加更多路由
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
