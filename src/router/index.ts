import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/toegewezen',
    name: 'assigned',
    component: () => import('@/views/AssignedView.vue')
  },
  {
    path: '/actieve-taak',
    name: 'actieve-taak',
    component: () => import('@/views/ActiveTasksView.vue')
  },
  {
    path: '/uitgevoerd',
    name: 'completed',
    component: () => import('@/views/CompletedView.vue')
  },
  {
    path: '/zoeken',
    name: 'search',
    component: () => import('@/views/SearchReportView.vue')
  },
  {
    path: '/kennisbank',
    name: 'knowledgebase',
    component: () => import('@/views/KnowledgeBaseView.vue')
  },
  {
    path: '/instellingen',
    name: 'settings',
    component: () => import('@/views/SettingsView.vue')
  },
  {
    path: '/meldingen',
    name: 'notifications',
    component: () => import('@/views/NotificationsView.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('@/views/InformationView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
