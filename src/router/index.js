import { createRouter, createWebHistory } from 'vue-router'

import Main from '../components/Main.vue'
import AboutMe from '../components/AboutMe.vue'
import ContactMe from '../components/ContactMe.vue'
import Github from '../components/Github.vue'

// import Login from '../components/Login.vue'
// import Dashboard from '../components/Dashboard.vue'
// import Home from '../components/Home.vue'
// import Report from '../components/Report.vue'
// import Topup from '../components/TopupHistory.vue'
// import AccountDetail from '../components/AccountDetail.vue'
// import Inquiry from '../components/Inquiry.vue'
// import Detail from '../components/RecipeDetail.vue'
// import StartCooking from '../components/StartCooking.vue'
// import HistoryList from '../components/HistoryList.vue'
// import RateFood from '../components/RateFood.vue'

// import errornotfound from '../components/partials/errorPage/404.vue'

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
        path: '/github',
        name: 'Github',
        component: Github,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    },
    // {
    //     path: '/dashboard/',
    //     name: 'Dashboard',
    //     component: Dashboard,
    //     children: [
    //         {
    //             path: 'main',
    //             name: 'Home',
    //             component: Home,
    //         },
    //         {
    //             path: 'report',
    //             name: 'Report',
    //             component: Report,
    //         },
    //         {
    //             path: 'topup-history',
    //             name: 'Topup',
    //             component: Topup,
    //         },
    //         {
    //             path: 'inquiry',
    //             name: 'Inquiry',
    //             component: Inquiry,
    //         },
    //         {
    //             path: 'account-detail',
    //             name: 'AccountDetail',
    //             component: AccountDetail,
    //         },
    //     ]
    // },
    // {
    //     path: '/:catchAll(.*)',
    //     name: 'errornotfound',
    //     component: errornotfound,
    // },

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
