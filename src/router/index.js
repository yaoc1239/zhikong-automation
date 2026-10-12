import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cases from '../views/Cases.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: '首页' } },
  { path: '/cases', name: 'cases', component: Cases, meta: { title: '案例展示' } },
  { path: '/services', name: 'services', component: Services, meta: { title: '服务介绍' } },
  { path: '/contact', name: 'contact', component: Contact, meta: { title: '联系我们' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  // base 与 vite.config.js 的 base 保持一致（本地为 /，部署后为 /zhikong-automation/）
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} - 智控自动化工程`
    : '智控自动化工程'
})

export default router
