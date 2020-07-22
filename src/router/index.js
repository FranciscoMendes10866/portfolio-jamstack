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
    path: '/portfolio/glicemia',
    name: 'Glicemia',
    component: () => import('../views/portfolio/Glicemia.vue')
  },
  {
    path: '/portfolio/illery',
    name: 'Illery',
    component: () => import('../views/portfolio/Illery.vue')
  },
  {
    path: '/portfolio/noteit',
    name: 'Note it!',
    component: () => import('../views/portfolio/Noteit.vue')
  },
  {
    path: '/portfolio/docus',
    name: 'Docus',
    component: () => import('../views/portfolio/Docus.vue')
  },
  {
    path: '/portfolio/juliana',
    name: 'Juliana PT',
    component: () => import('../views/portfolio/Juliana.vue')
  },
  {
    path: '/portfolio/locise',
    name: 'Locise',
    component: () => import('../views/portfolio/Locise.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
