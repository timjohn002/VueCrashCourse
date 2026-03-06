import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'  // a function from Vue.
                                // takes in an object
import App from './App.vue'
// App is the object in this instance

createApp(App).mount('#app')
// #app is the name of the id in the "index.html"
