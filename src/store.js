import {
  reactive, readonly, provide, inject,
} from 'vue';
import axios from 'axios';

class Store {
  constructor(initialState) {
    this.state = reactive(initialState);
  }

  getState() {
    return readonly(this.state);
  }

  async fetchPosts() {
    const response = await axios.get('/posts');
    response.data.forEach((post) => {
      if (!this.state.posts.ids.includes(post.id.toString())) {
        this.state.posts.ids.push(post.id.toString());
      }
      this.state.posts.all[post.id] = post;
    });
    this.state.posts.loaded = true;
  }

  // eslint-disable-next-line class-methods-use-this
  createUser(user) {
    console.log(user);
    // const response = await axios.post('/users', user);
  }

  async createPost(post) {
    const response = await axios.post('/posts', post);
    this.state.posts.all[response.data.id] = response.data;
    this.state.posts.ids.push(response.data.id.toString());
  }
}
const storeInternal = new Store(
  {
    posts: {
      ids: [
      ],
      all: {
      },
      loaded: false,
    },
  },
);
export const provideStore = () => {
  provide('store', storeInternal);
};
export const createStore = () => new Store(
  {
    posts: {
      ids: [
      ],
      all: {
      },
      loaded: false,
    },
  },
);
// eslint-disable-next-line import/prefer-default-export
export const useStore = () => {
  const store = inject('store');
  return store;
};
