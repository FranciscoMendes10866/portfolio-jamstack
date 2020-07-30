import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue')
  },
  {
    path: '/works/glicemia',
    name: 'Glicemia',
    component: () => import('../views/works/Glicemia.vue')
  },
  {
    path: '/works/illery',
    name: 'Illery',
    component: () => import('../views/works/Illery.vue')
  },
  {
    path: '/works/noteit',
    name: 'Note it!',
    component: () => import('../views/works/Noteit.vue')
  },
  {
    path: '/works/docus',
    name: 'Docus',
    component: () => import('../views/works/Docus.vue')
  },
  {
    path: '/works/juliana',
    name: 'Juliana PT',
    component: () => import('../views/works/Juliana.vue')
  },
  {
    path: '/works/locise',
    name: 'Locise',
    component: () => import('../views/works/Locise.vue')
  },
  {
    path: '/works/minary',
    name: 'Minary',
    component: () => import('../views/works/Minary.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
