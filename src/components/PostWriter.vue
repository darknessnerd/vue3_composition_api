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
  <div class="columns">
    <div class="column is-one-half">
      <div contenteditable
           id="markdown"
           ref="contentEditable"
           @input="handleEdit"/>
    </div>
    <div class="column is-one-half">
      {{ markdown }}
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
    const markdown = ref(props.post.markdown);
    console.log(contentEditable);
    onMounted(() => {
      contentEditable.value.innerHTML = markdown.value;
    });

    const handleEdit = () => {
      markdown.value = contentEditable.value.innerText;
    };
    return {
      title,
      contentEditable,
      markdown,
      handleEdit,
    };
  },
});
</script>
