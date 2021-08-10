import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Weiui from '@wei/wei-ui'
// import demoBlock from './components/demo-block.vue'

const app = createApp(App)
// app.component('DemoBlock', demoBlock)
app.use(Weiui)
app.use(router)
app.mount('#app')
