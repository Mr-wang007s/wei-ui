import { createApp } from 'vue'
import App from './App.vue'
import Frank from './components/Frank.vue'
import Frank2 from './components/Frank2.vue'
import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Frank },
        { path: '/xxx', component: Frank2 }
    ]
})

createApp(App).use(router).mount('#app')
