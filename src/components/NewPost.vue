<template>
  <div class="is-primary panel">
    <PostWriter @save="save" :post="post"/>
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
      markdown: '## New Post\nEnter your post here...\n```\n'
        + 'axios.get = async (url) => {\n'
        + '  if (url === \'/posts\') {\n'
        + '    await delay(500);\n'
        + '    return Promise.resolve({\n'
        + '      data: [\n'
        + '        mockData.todayPost,\n'
        + '        mockData.thisWeekPost,\n'
        + '        mockData.thisMonthPost,\n'
        + '      ],\n'
        + '    });\n'
        + '  }\n'
        + '  return Promise.reject();\n'
        + '};'
        + '\n```',
      html: '',
      created: moment(),
      authorId: -1,
    };

    const save = (postToSave) => {
      console.log('save', postToSave);
    };
    return {
      post,
      save,
    };
  },
});
</script>
