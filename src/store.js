import { reactive, readonly } from 'vue';
import axios from 'axios';
import { todayPost, thisWeekPost, thisMonthPost } from '@/mocks';

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
    this.state.posts = {
      ids,
      all,
      loaded: true,
    };
  }
}
const store = new Store(
  {
    posts: {
      ids: [
        todayPost.id.toString(), thisWeekPost.id.toString(), thisMonthPost.id.toString(),
      ],
      all: {
        [todayPost.id]: todayPost,
        [thisWeekPost.id]: thisWeekPost,
        [thisMonthPost.id]: thisMonthPost,
      },
      loaded: false,
    },
  },
);

// eslint-disable-next-line import/prefer-default-export
export const useStore = () => store;
