import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import GameView from '../views/GameView.vue'
import WikiView from '../views/WikiView.vue'
import RecordsView from '../views/RecordsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView,
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: WikiView
    },
    {
      path: '/records',
      name: 'Records',
      component: RecordsView
    }
  ],
})

export default router
