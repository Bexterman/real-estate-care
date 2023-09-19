import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { supabase } from '../clients/supabase';

let localUser;

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/toegewezen',
    name: 'assigned',
    component: () => import('@/views/AssignedView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/actief',
    name: 'actief',
    component: () => import('@/views/ActiveTasksView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/uitgevoerd',
    name: 'completed',
    component: () => import('@/views/CompletedView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/zoeken',
    name: 'search',
    component: () => import('@/views/SearchReportView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/kennisbank',
    name: 'knowledgebase',
    component: () => import('@/views/KnowledgeBaseView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/instellingen',
    name: 'settings',
    component: () => import('@/views/SettingsView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/meldingen',
    name: 'notifications',
    component: () => import('@/views/NotificationsView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('@/views/InformationView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/animation',
    name: 'animation',
    component: () => import('@/views/LoginAnimationView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

async function getUser(next: any) {
  localUser = await supabase.auth.getSession();
  if (localUser.data.session === null) {
    next("/login");
  } else {
    next();
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next);
  } else {
    next();
  }
})

export default router
