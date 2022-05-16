import Vue from 'vue'
import VueRouter from 'vue-router'

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
                component: () => import('../views/home/index'),
            },

            //clearing
            {
                path: '/clearing/RulerManage',
                name: 'clearingRulerManage',
                component: () => import('../views/clearing/rulerManage'),
            },
            {
                path: '/clearing/Process',
                name: 'clearingProcess',
                component: () => import('../views/clearing/process'),
            },

            //business
            {
                path: '/business',
                name: 'business',
                component: () => import('../views/business/add'),
            },
            {
                path: '/business/add',
                name: 'businessAdd',
                component: () => import('../views/business/add'),
            },
            {
                path: '/business/delete',
                name: 'businessDelete',
                component: () => import('../views/business/delete'),
            },
            {
                path: '/business/query',
                name: 'businessQuery',
                component: () => import('../views/business/query'),
            },
            {
                path: '/business/update',
                name: 'businessUpdate',
                component: () => import('../views/business/update'),
            },

            //feedback
            {
                path: '/feedback',
                name: 'feedback',
                component: () => import('../views/feedback/index'),
            },
        ]
    },
]

const router = new VueRouter({
    routes
})
export default router
