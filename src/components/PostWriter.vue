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
    <div class="column is-one-half" >
      <div v-html="html"></div>
    </div>
  </div>
</template>
<script>
import {
  defineComponent, ref, onMounted, watch,
} from 'vue';
import marked from 'marked';
import { highlightAuto } from 'highlight.js';
import debounce from 'lodash/debounce';

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
    const html = ref('');
    const options = {
      highlight: (code) => highlightAuto(code).value,
    };
    const update = (value) => { html.value = marked.parse(value, options); };
    watch(
      () => markdown.value,
      debounce(update, 500), { immediate: true },
    );
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
      html,
    };
  },
});
</script>
