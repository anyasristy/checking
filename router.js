import { createRouter, createWebHistory } from 'vue-router'
import StartPage from './views/StartPage.vue'
import ResultsPage from './views/ResultsPage.vue'
import MealsPage from './views/MealsPage.vue'
const routes = [
  { path: '/', component: StartPage },
  { path: '/results', component: ResultsPage },
  { path: '/meals', component: MealsPage },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
