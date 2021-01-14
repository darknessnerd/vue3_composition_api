import { createApp } from 'vue';
import Store from '@/store';
import App from './App.vue';
import 'bulma/bulma.sass';

const store = new Store(
  {
    ids: [],
    all: {},
    loaded: false,
  },
);
console.log(store.getState());
createApp(App).mount('#app');
