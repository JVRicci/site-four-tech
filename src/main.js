import { createApp } from 'vue'
import './bootstrap/css/bootstrap.css'
import App from './App.vue'
import VueScrollReveal from 'vue-scroll-reveal';

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

createApp(App).mount('#app')

import './bootstrap/js/bootstrap.js'
import './jquery/jquery.js'