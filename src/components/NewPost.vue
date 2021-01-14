<template>
  <div class="is-primary panel">
    <PostWriter :post="post"/>
    {{post}}
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import PostWriter from '@/components/PostWriter.vue';
import moment from 'moment';

export default defineComponent({
  name: 'NewPost',
  components: { PostWriter },
  setup() {
    const post = {
      id: -1,
      title: 'New post',
      markdown: '## New Post\nEnter your post here...',
      html: '',
      created: moment(),
      authorId: -1,
    };
    return {
      post,
    };
  },
});
</script>
