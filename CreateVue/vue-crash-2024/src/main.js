import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router'
// didnt need to add /index.js because it was named index.
// it will automatically get picked up to use the router.
import { createApp } from 'vue'  // a function from Vue.
                                // takes in an object
import App from './App.vue'
// App is the object in this instance

const app = createApp(App);

app.use(router);

app.mount('#app');
// #app is the name of the id in the "index.html"
