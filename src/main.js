import { createApp } from 'vue';
import axios from 'axios';
import random from 'lodash/random';
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
axios.post = async (url, payload) => {
  if (url === '/posts') {
    await delay(500);
    const id = random(100, 1000000);
    return Promise.resolve({ data: { ...payload, id } });
  }
  if (url === '/users') {
    await delay(500);
    const id = random(100, 1000000);
    const { id: oldId, password, ...rest } = payload;
    return Promise.resolve({ data: { ...rest, id } });
  }
  return Promise.reject();
};

const app = createApp(App);
app.use(router);
app.mount('#app');
