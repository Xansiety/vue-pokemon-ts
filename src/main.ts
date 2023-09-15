import './assets/main.css'

import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(VueQueryPlugin)

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 120, // 2 minutes
        refetchOnReconnect: 'always' // always refetch on reconnect to prevent stale data on reconnect after losing internet
      }
    }
  }
})

app.use(router)

app.mount('#app')
