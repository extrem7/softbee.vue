import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './providers/router'

import App from './App.vue'

import './index.css'

export const app = createApp(App)

app.use(createPinia())
app.use(router)
