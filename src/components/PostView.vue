<template>
  <div class="columns">
    <div class="column is-two-thirds">
      <router-link
        data-test="canEdit"
        v-if="canEdit"
        :to="to"
        class="button is-rounded is-link is-pulled-right">
        Edit
      </router-link>
      <div>Post title is: {{post.title}}</div>
      <div v-html="post.html"></div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';

export default defineComponent({
  async setup() {
    const route = useRoute();
    const store = useStore();
    const id = route.params.id?.toString();
    if (!store.getState().posts.loaded) {
      await store.fetchPosts();
    }
    const post = store.getState().posts.all[id.toString()];
    const canEdit = post.authorId === store.getState().authors?.currentUserId;
    return {
      canEdit,
      post,
      to: `/posts/${post.id}/edit`,
    };
  },
});
</script>
