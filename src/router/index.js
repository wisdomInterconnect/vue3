import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import WeatherApp from '@/views/WeatherApp.vue';
import CompositionApi from '@/views/CompositionApi'
import Event from '@/views/Event'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/weatherapp',
        name: 'WeatherApp',
        component: WeatherApp
    },
    {
        path: '/compositionapi',
        name: 'CompositionApi',
        component: CompositionApi
    },
    {
        path: '/event',
        name: 'Event',
        component: Event
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router