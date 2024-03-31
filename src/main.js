import { createApp } from 'vue'
import App from './App.vue'
import{createRouter, createWebHashHistory} from 'vue-router'
import AppHome from './pages/AppHome.vue'

import RestaurantPage from './pages/RestaurantPage.vue'

const routes = [
    {path:'/', component: AppHome},
    {name: 'RestaurantPage', path: '/RestaurantPage/:name', component: RestaurantPage},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const VueApp = createApp(App)

VueApp.use(router)
VueApp.mount('#app')


