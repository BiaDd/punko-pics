import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';

// css resources
import './styles.css'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'

// components
import Button from 'primevue/button';
import Card from 'primevue/card';
import ContextMenu from 'primevue/contextmenu';
import Image from 'primevue/image';
import Menubar from 'primevue/menubar';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';

const app = createApp(App);
app.use(PrimeVue, { ripple: true });

app.component('Button', Button);
app.component('Card', Card);
app.component('ContextMenu', ContextMenu);
app.component('Image', Image);
app.component('Menubar', Menubar);
app.component('ScrollTop', ScrollTop);
app.component('Skeleton', Skeleton);

app.mount("#app");