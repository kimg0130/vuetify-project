/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// css
import './assets/css/default.css'


// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
