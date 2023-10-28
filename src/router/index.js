import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import admin from "./admin";
import frontend from "./frontend";

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes: [
        ...frontend,
        ...admin,
        {
            path: '/todo/:page',
            name: 'todo',
            component: () => import("../views/todo")
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: 'Login'
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresAuthSchool)) {
        if (!store.getters.loggedInSchool) {
            next({
                name: 'Login'
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.visitor)) {
        if (store.getters.loggedIn) {
            next({
                name: 'Mypage.Home'
            })
        } else if (store.getters.loggedInSchool) {
            next({
                name: 'Admin.MyPage'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = 'none'
    }
})

export default router
