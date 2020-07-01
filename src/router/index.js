import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/discography',
        name: 'Discography',

        component: () =>
            import ('../views/Discography.vue')
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: () =>
            import ('../views/Gallery.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ('../views/Contact.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/videos',
        name: 'Videos',
        component: () =>
            import ('../views/Videos.vue')
    },
    { path: '*', redirect: '/' }
]

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
})

export default router