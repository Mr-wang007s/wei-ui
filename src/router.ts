import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import MDbutton from './docs/button.md'
import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        { path: '/doc', component: Doc },
        { path: '/component',
          component: Doc,
          children: [
              {
                  path: 'installation',
                  component: () => import(/* webpackChunkName: "components" */ './components/demo/installation.vue') 
              },
              {
                path: 'quickstart',
                component: () => import(/* webpackChunkName: "components" */ './components/demo/quickstart.vue') 
              },
              {
                path: 'layout',
                component: () => import(/* webpackChunkName: "components" */ './components/demo/layout.vue') 
              },
              {
                path: 'container',
                component: () => import(/* webpackChunkName: "components" */ './components/demo/container.vue') 
              },
              {
                path: 'button',
                component: MDbutton
              },
              {
                path: 'radio',
                component: () => import(/* webpackChunkName: "components" */ './components/demo/radio.vue') 
              },
              {
                path: 'switch',
                component: () => import(/* webpackChunkName: "components" */ './components/demo/switch.vue') 
              }
          ]
        }
    ]
})
export default router