import { mount } from '@vue/test-utils';
import PostWriter from '@/components/PostWriter.vue';
import { basePost } from '@/mocks';

describe('PostWriter', () => {
  it('composes a post and emits the new data', (done) => {
    const wrapper = mount(PostWriter, {
      props: {
        post: {
          ...basePost,
        },
      },
    });
    wrapper.find('[data-test="post-title"]')
      .setValue('New post title test');
    wrapper.find('[data-test="markdown"]')
      .element.innerText = '### Content text test';
    wrapper.find('[data-test="markdown"]')
      .trigger('input');

    setTimeout(() => {
      wrapper.find('[data-test="submit-post"]').trigger('click');
      expect(wrapper.emitted().save[0][0].title)
        .toBe('New post title test');
      expect(wrapper.emitted().save[0][0].markdown)
        .toBe('### Content text test');
      expect(wrapper.emitted().save[0][0].html)
        .toBe('<h3 id="content-text-test">Content text test</h3>\n');
      console.log(wrapper.emitted().save);
      done();
    }, 550);
  });
});
