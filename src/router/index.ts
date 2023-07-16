import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AssignedView from '@/views/AssignedView.vue';
import CompletedView from '@/views/CompletedView.vue';
import KnowledgeBaseView from '@/views/KnowledgeBaseView.vue';
import SettingsView from '@/views/SettingsView.vue';
import NotificationsView from '@/views/NotificationsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/assigned',
    name: 'Assigned',
    component: AssignedView
  },
  {
    path: '/completed',
    name: 'Completed',
    component: CompletedView
  },
  {
    path: '/knowledgebase',
    name: 'KnowledgeBase',
    component: KnowledgeBaseView
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsView
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: NotificationsView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
