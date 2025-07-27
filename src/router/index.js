import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Education from '../views/Education.vue'
import Skills from '../views/Skills.vue'
import Experience from '../views/Experience.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import('../views/Achievements.vue')
    },
    {
      path: '/certifications',
      name: 'certifications',
      component: () => import('../views/Certifications.vue')
    },
    {
      path: '/publications',
      name: 'publications',
      component: () => import('../views/Publications.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
