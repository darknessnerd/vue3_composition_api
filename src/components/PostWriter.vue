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
    <div class="columns">
      <div class="column is-one-half">
        <div contenteditable id="markdown" ref="contentEditable"/>
      </div>
      <div class="column is-one-half">
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'PostWriter',
  props: {
    post: {
      required: true,
    },
  },
  setup(props) {
    const title = ref(props.post.title);
    const contentEditable = ref(null);
    console.log(contentEditable);
    onMounted(() => {
      console.log(contentEditable);
    });
    return {
      title,
      contentEditable,
    };
  },
});
</script>
