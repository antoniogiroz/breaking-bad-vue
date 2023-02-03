import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import Vue3Toasity from 'vue3-toastify'
import App from './App.vue'
import router from './router'
import 'vue3-toastify/dist/index.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Toasity)

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 120,
        refetchOnReconnect: 'always',
      },
    },
  },
})

app.mount('#app')
