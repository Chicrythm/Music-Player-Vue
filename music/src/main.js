/*
 * @Description: 
 * @Autor: yzq
 * @Date: 2022-04-02 15:58:36
 * @LastEditors: yzq
 */
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';

createApp(App).use(store).use(router).mount('#app');
