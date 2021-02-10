import { mount } from '@vue/test-utils';
import ShowPostComponent from '@/components/ShowPostComponent.vue';
import flushPromises from 'flush-promises';
import * as mockData from '@/mocks';
import { createStore } from '@/store';
import { makeRouter } from '@/router';

jest.mock('axios',
  () => ({
    get: () => ({
      data: [
        mockData.todayPost,
      ],
    }),
  }));
const createWrapper = (router, initialState) => mount(ShowPostComponent, {
  global: {
    provide: {
      store: createStore(initialState),
    },
    plugins: [router],
  },
});
describe('ShowPostComponent', () => {
  it('does not render edit link when no user is logged in', async () => {
    const router = makeRouter();
    router.push('/posts/1');
    await router.isReady();
    const wrapper = createWrapper(router, {});

    await flushPromises();
    expect(wrapper.find('[data-test="canEdit"').exists()).toBeFalsy();
  });

  it('does not render edit link when not authorized', async () => {
    const router = makeRouter();
    router.push('/posts/1');
    await router.isReady();
    const wrapper = createWrapper(router, {
      authors: {
        currentUserId: 101,
      },
    });
    await flushPromises();
    expect(wrapper.find('[data-test="canEdit"').exists()).toBeFalsy();
  });

  it('render edit link when authorized', async () => {
    const router = makeRouter();
    router.push('/posts/1');
    await router.isReady();
    const wrapper = createWrapper(router, {
      authors: {
        currentUserId: 1,
      },
    });
    await flushPromises();
    expect(wrapper.find('[data-test="canEdit"').exists()).toBeTruthy();
  });
});
