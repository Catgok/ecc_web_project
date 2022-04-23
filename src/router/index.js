import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import tmp from '../views/tmp.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path:'/tmp',
        component:tmp
    }
]

const router = new VueRouter({
    routes
})
export default router
