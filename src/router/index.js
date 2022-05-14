import Vue from 'vue'
import VueRouter from 'vue-router'

// import About from '../views/About.vue'
// import tmp from '../views/tmp.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home'),

            },


        ]
    },
]

const router = new VueRouter({
    routes
})
export default router
