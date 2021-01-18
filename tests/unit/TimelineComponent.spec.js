import { mount } from '@vue/test-utils';
import Home from '@/components/Home.vue';
import flushPromises from 'flush-promises';
import * as mockData from '@/mocks';
import { createStore } from '@/store';

jest.mock('axios',
  () => ({
    get: () => ({
      data: [
        mockData.todayPost,
        mockData.thisWeekPost,
        mockData.thisMonthPost,
      ],
    }),
  }));
const createWrapper = () => mount(Home, {
  global: {
    provide: {
      store: createStore(),
    },
  },
});
describe('Home', () => {
  it('renders a loader', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('[data-test="progress"]').exists()).toBeTruthy();
  });

  it('renders 3 times periods', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    expect(wrapper.findAll('[data-test="period"]'))
      .toHaveLength(3);
  });

  it('updates the period when clicked', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    const $today = wrapper.findAll('[data-test="period"]')[0];
    expect($today.classes()).toContain('is-active');

    const $thisWeek = wrapper.findAll('[data-test="period"]')[1];
    await $thisWeek.trigger('click');
    expect($today.classes()).not.toContain('is-active');
    expect($thisWeek.classes()).toContain('is-active');

    const $thisMonth = wrapper.findAll('[data-test="period"]')[2];
    await $thisMonth.trigger('click');
    expect($thisWeek.classes()).not.toContain('is-active');
    expect($thisMonth.classes()).toContain('is-active');
  });

  it('renders todays post by default', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    expect(wrapper.findAll('[data-test="post"]'))
      .toHaveLength(1);
  });

  it('renders change posts', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    expect(wrapper.findAll('[data-test="post"]'))
      .toHaveLength(1);

    const $thisWeek = wrapper.findAll('[data-test="period"]')[1];
    await $thisWeek.trigger('click');

    expect(wrapper.findAll('[data-test="post"]'))
      .toHaveLength(2);

    const $thisMonth = wrapper.findAll('[data-test="period"]')[2];
    await $thisMonth.trigger('click');

    expect(wrapper.findAll('[data-test="post"]'))
      .toHaveLength(3);
  });
});
