import { createWebHashHistory } from 'vue-router'
import { createRouter } from 'vue-router'
import mainPage from '../pages/mainPage.vue'
import archive from '../pages/arhcive.vue'
import aboutPage from '../pages/aboutPage.vue'

const routes = [
    {
        path: '/main',
        component: mainPage
    },
    {
        path: '/',
        component: mainPage
    },
    {
        path: '/arhcive',
        component: archive
    },
    {
        path: '/about',
        component: aboutPage
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})


export default router;