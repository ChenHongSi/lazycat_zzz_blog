import Blog_view from '@/views/blog_view.vue'
import Home_view from '@/views/home_view.vue'
import Jabber_view from '@/views/Jabber_view.vue'
import Programme_view from '@/views/programme_view.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home_view,
        },
        {
            path: '/Jabber',
            component: Jabber_view,
        },
        {
            path: '/blog',
            component: Blog_view,
        },
        {
            path: '/programme',
            component: Programme_view,
        },
    ],
})

router.afterEach(() => {
  const progressBar = document.getElementById('scroll_progress')
  if (progressBar) progressBar.style.width = '0%'
})

export default router
