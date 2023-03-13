import { createRouter, createWebHistory } from 'vue-router'

// Page views
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import Contribute from '../views/Contribute.vue'
import Submit from '../views/Submit.vue'
import FAQ from '../views/FAQ.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contribute',
      name: 'contribute',
      component: Contribute
    },
    {
      path: '/submit',
      name: 'submit',
      component: Submit
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    },










    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    */
  ]
})

export default router
