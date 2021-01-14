<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">Post Title</div>
        <div class="control">
          <input v-model="title" type="text" class="input" />
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PostWriter',
  props: {
    post: {
      required: true,
    },
  },
  setup(props) {
    const title = ref(props.post.title);
    return {
      title,
    };
  },
});
</script>
