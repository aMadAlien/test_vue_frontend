import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import { store } from './storage'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(BootstrapVue3)

app.mount('#app')
