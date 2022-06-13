import { createRouter, createWebHistory } from 'vue-router'

import Main from '../components/Main.vue'
import AboutMe from '../components/AboutMe.vue'
import ContactMe from '../components/ContactMe.vue'
import Projects from '../components/Projects.vue'


const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
    },
    {
        path: '/about-me',
        name: 'AboutMe',
        component: AboutMe,
    },
    {
        path: '/contact',
        name: 'ContactMe',
        component: ContactMe,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    base: '/',
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    scrollBehavior (savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                selector: window.scrollTo(0, 0),
                behavior: 'smooth',
            }
        }
      }
})

export default router
