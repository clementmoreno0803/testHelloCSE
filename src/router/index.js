import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from '../views/Admin.vue'
const routes = [
  {
    path: '/',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/nos-membres',
    name: 'membres',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NosMembres.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
