import MainPage from '@/pages/MainPage.vue'
import ConverterPage from '@/pages/ConverterPage.vue'
import CurrenciesList from '@/pages/CurrenciesList.vue'
import ResultPage from '@/pages/ResultPage.vue'
import Login from '@/pages/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainPage,
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/login',
        component: Login,
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/converter',
        component: ConverterPage,
        name: 'converterPage',
        meta: {
            layout: 'currency',
        },
    },
    {
        path: '/converter/currencies',
        component: CurrenciesList,
        name: 'currenciesList',
        meta: {
            layout: 'currency',
        },
    },
    {
        path: '/converter/result',
        component: ResultPage,
        name: 'resultPage',
        meta: {
            layout: 'currency',
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
