import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/assigned',
    name: 'assigned',
    component: () => import('@/views/AssignedView.vue')
  },
  {
    path: '/completed',
    name: 'completed',
    component: () => import('@/views/CompletedView.vue')
  },
  {
    path: '/knowledgebase',
    name: 'knowledgebase',
    component: () => import('@/views/KnowledgeBaseView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/SettingsView.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import('@/views/NotificationsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
