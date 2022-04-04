import PostInformation from "@/pages/PostInformation.vue";
import Main from "@/pages/Main.vue";
import About from "@/pages/About.vue";
import PostPages from "@/pages/PostPages.vue";
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPages
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostInformation
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;