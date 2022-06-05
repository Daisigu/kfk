import { createWebHashHistory } from 'vue-router'
import { createRouter } from 'vue-router'
import mainPage from '../pages/mainPage.vue'

const routes = [
    {
        path: '/',
        component: mainPage
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})


export default router;