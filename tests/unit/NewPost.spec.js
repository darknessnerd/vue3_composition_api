import { mount } from '@vue/test-utils';
import NewPost from '@/components/NewPost.vue';
import { createStore } from '@/store';

const createWrapper = (store) => mount(NewPost, {
  global: {
    provide: {
      store,
    },
  },
});
const mockRoutes = [];
jest.mock('vue-router', () => ({
  useRouter: () => ({
    push: (url) => {
      mockRoutes.push(url);
    },
  }),
}));

jest.mock('axios', () => ({
  post: (url, post) => ({ data: post }),
}));

describe('NewPost', () => {
  it('creates a post and routes', async () => {
    const store = createStore();
    const wrapper = createWrapper(store);
    expect(store.getState().posts.ids).toHaveLength(0);
    await wrapper.find('[data-test="submit-post"]')
      .trigger('click');
    await wrapper.vm.$nextTick();
    expect(store.getState().posts.ids).toHaveLength(1);
    expect(mockRoutes).toEqual(['/']);
  });
});
