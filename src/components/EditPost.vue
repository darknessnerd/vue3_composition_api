<template>
  Editor
  <div>Post title is: {{post.title}}</div>
</template>
<script>
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';

export default defineComponent({
  async setup() {
    const route = useRoute();
    const store = useStore();
    const id = route.params.id.toString();

    if (!store.getState().posts.loaded) {
      await store.fetchPosts();
    }
    const post = store.getState().posts.all[id];
    return {
      post,
      to: `/posts/${post.id}/edit`,
    };
  },
});
</script>
