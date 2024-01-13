import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"

import 'primevue/resources/themes/lara-light-green/theme.css'


const app = createApp(App);
app.use(PrimeVue, { ripple: true });

app.component('Button', Button);

app.mount("#app");