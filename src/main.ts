/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from "@/router";

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import logger from "@/plugins/logger";
import '@mdi/font/css/materialdesignicons.css'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(logger)

registerPlugins(app)

app.mount('#app')
