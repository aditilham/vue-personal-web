// import Vue from 'vue'
import { createApp } from 'vue'
// import { TimePicker } from 'ant-design-vue';
// import VueApexCharts from 'vue3-apexcharts'
import VueClickAway from "vue3-click-away";

import App from './App.vue'
import store from './store'
import i18n from '@/plugins/i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Parallax from 'vue-parallaxy'
// import axios from 'axios'
import router from './router'
// import './plugins/rules'
// import VCalendar from 'v-calendar';
// import './assets/css/style.css'
import './index.css'
// import './assets/css/style.css'

// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth && !store.getters.token) {
//         var token = ('; '+document.cookie).split(`; device_token=`).pop().split(';')[0]
//         if ( typeof token === 'undefined' || token === null || token == '' ) {
//             next({name: 'Login'})
//         }
//         else  {
//             store.dispatch('setTokenLogin', token)
//             sessionStorage.setItem('device_token', token)
//             next()
//         }
//     } else {
//         if (to.meta.menu != undefined) {
//             next()
//         } else if (to.meta.menu == undefined) {
//             next()
//         } else {
//             next({ name: 'errornotfound', params: { catchAll: 'not-found' } })
//         }
//     }
// })

// axios.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     var token = ('; '+document.cookie).split(`; device_token=`).pop().split(';')[0]
//     if (401 === error.response.status) {
//         if (error.response.data.message.includes('Invalid')) {
//             store.dispatch('getResponse', error.response)
//         }
//         if (error.response.data.message.includes('Unauthorized')) {
//             if(window.location.href.includes('history')) {
//                 router.push({ name: 'Login'})
//             } else {
//                 store.dispatch('getResponseCook', error.response)
//             }
//         }
//     } else if (403 === error.response.status) {
//         if ( token == 'undefined' || typeof token === 'undefined' || token === null || token == '' ) {
//             store.dispatch('getResponse', error.response)
//             router.push({ name: 'Login'})
//         } else {
//             router.push({ name: 'Home'})
//         }
//     } else if (404 === error.response.status) {
//         router.push({ name: 'Home'})
//         setTimeout(() => {
//             location.reload()
//         }, 100);
//     } else {
//         return Promise.reject(error.response);
//     }
// })

const options = {
    styles: [
    //   'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css',
      './assets/css/style.css'
    ],
  }


const app = createApp(App)
app.config.productionTip = false;
app.use(router)
app.use(AOS.init())
app.use(VueClickAway)
app.use(i18n)
// app.use(Parallax)
// app.use(VCalendar)
// app.use(VueApexCharts)
app.use(options)
app.use(store)
app.mount('#app')
