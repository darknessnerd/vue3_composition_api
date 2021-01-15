import { createApp } from 'vue';
import axios from 'axios';
import * as mockData from './mocks';
import App from './App.vue';
import { router } from './router';

import 'bulma/bulma.sass';
import 'highlight.js/styles/solarized-dark.css';

const delay = (ms) => new Promise((res) => { setTimeout(res, ms); });

// Mock the be
axios.get = async (url) => {
  if (url === '/posts') {
    await delay(500);
    return Promise.resolve({
      data: [
        mockData.todayPost,
        mockData.thisWeekPost,
        mockData.thisMonthPost,
      ],
    });
  }
  return Promise.reject();
};

const app = createApp(App);
app.use(router);
app.mount('#app');
