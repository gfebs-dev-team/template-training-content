import './assets/sass/main.scss'
import SlideContent from './components/SlideContent.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.component('SlideContent', SlideContent)

app.use(createPinia())

app.mount('#app')
