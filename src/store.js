import { reactive, readonly } from 'vue';
import axios from 'axios';

class Store {
  constructor(initialState) {
    this.state = reactive(initialState);
  }

  getState() {
    return readonly(this.state);
  }

  async fetchPosts() {
    const response = await axios.get('/post');
    const ids = [];
    const all = {};
    response.data.forEach((post) => {
      ids.push(post.id);
      all[post.id] = post;
    });
    this.state.post = {
      ids,
      all,
      loaded: true,
    };
  }
}

export default Store;
