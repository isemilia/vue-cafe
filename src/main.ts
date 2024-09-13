import { createApp } from 'vue';
import './main.scss';
import App from './app.vue';
import router from './router/router.ts';

const app = createApp(App);

app.use(router);

app.mount('#app');

