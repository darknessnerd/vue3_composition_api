<template>
  Editor
  <PostWriter :post="post" @save="save"/>
</template>
<script>
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { useRoute, useRouter } from 'vue-router';
import PostWriter from '@/components/PostWriter.vue';

export default defineComponent({
  components: { PostWriter },
  async setup() {
    const route = useRoute();
    const store = useStore();
    const id = route.params.id.toString();

    if (!store.getState().posts.loaded) {
      await store.fetchPosts();
    }
    const post = store.getState().posts.all[id];
    const canEdit = post.authorId === store.getState().authors.currentUserId;
    const router = useRouter();
    if (!canEdit) {
      await router.push('/');
    }
    const save = async () => {
      await store.updatePost(post);
      await router.push('/');
    };
    return {
      post,
      to: `/posts/${post.id}/edit`,
      canEdit,
      save,
    };
  },
});
</script>
