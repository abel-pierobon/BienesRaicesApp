import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Firebase
import {VueFire,VueFireAuth} from 'vuefire'
import { firebaseApp} from './config/firebase'
import { palette } from './helpers'


import App from './App.vue'
import router from './router'

const app = createApp(App)

//firebase
app.use(VueFire,{
    firebaseApp,
    modules:[VueFireAuth()]
})

//Vuetify
const vuetify= createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'inmobiliaria',
      themes: {
        inmobiliaria: {
          dark: false,
          colors: {
            primary: palette.primary,
            secondary: palette.secondary,
            accent: palette.accent,
            info: palette.info,
            error: palette.error,
            success: '#3CB371',
            warning: '#F6C85F',
            background: palette.info,
            surface: '#fff',
          },
        },
      },
    },
})

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
