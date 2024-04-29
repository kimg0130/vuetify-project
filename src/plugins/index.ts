/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

// Types
import type { App } from 'vue'
const vfm = createVfm()

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(vfm)
}
