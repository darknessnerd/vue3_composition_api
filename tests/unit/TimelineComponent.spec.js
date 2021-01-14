import { mount } from '@vue/test-utils';
import TimeLineComponent from '@/components/TimeLineComponent.vue';

describe('TimeLineComponent', () => {
  it('renders 3 time periods', () => {
    const wrapper = mount(TimeLineComponent);
    expect(wrapper.findAll('[data-test="period"]'))
      .toHaveLength(3);
  });
});
