import { createApp } from 'vue';
import { useStore } from '@/store';
import App from './App.vue';
import 'bulma/bulma.sass';

console.log(useStore().getState());
createApp(App).mount('#app');
