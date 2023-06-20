import { createRouter, createWebHistory } from 'vue-router'
import slides from './slides.json'

const slideRoutes: { path: string; component: () => Promise<any> }[] = []

slides.forEach((slide, index) => {
  slideRoutes.push({ path: ("/"+(1+index).toString()), component: () => import(/* @vite-ignore */slide.component) })
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: slideRoutes
})

router.addRoute({path: "/", redirect:"/1"});

export default router
