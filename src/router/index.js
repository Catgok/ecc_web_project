import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/main',
        name: 'Main',
        component: () => import('../views/Main'),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../views/home/index'),
            },

            //clearing
            {
                path: '/clearing',
                name: 'clearingRuleManage',
                component: () => import('../views/clearing/rule/index'),
            },
            {
                path: '/clearing/rule/index',
                name: 'clearingRule',
                component: () => import('../views/clearing/rule/index'),
            },
            {
                path: '/clearing/process',
                name: 'clearingProcess',
                component: () => import('../views/clearing/process'),
            },

            //business
            {
                path: '/business/index',
                name: 'business',
                component: () => import('../views/business/index'),
            },
            {
                path: '/business/add',
                name: 'businessAdd',
                component: () => import('../views/business/add'),
            },
            {
                path: '/business/update',
                name: 'businessUpdate',
                component: () => import('../views/business/update'),
            },

            {
                path: 'account/index',
                name: 'account',
                component: () => import ('../views/account/index'),
            },

            {
                path: 'subject/index',
                name: 'subject',
                component: () => import ('../views/subject/index'),
            },
            //feedback
            {
                path: '/feedback',
                name: 'feedback',
                component: () => import('../views/feedback/index'),
            },
        ]
    },
    {
        path: '/tmp',
        name: 'tmp',
        component: () => import('../views/tmp'),
    },
    {
        path: '/',
        name: 'login',
        component: () => import('../views/login'),
    }
]

const router = new VueRouter({
    routes
})
export default router
