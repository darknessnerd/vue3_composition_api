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
  <div class="columns">
    <div class="column is-one-half">
      <button @click="submit" class="button is-primary is-pulled-right">
        save
      </button>
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
  emits: ['save'],
  setup(props, context) {
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

    const submit = () => {
      const post = {
        ...props.post,
        title: title.value,
        markdown: markdown.value,
        html: html.value,
      };
      context.emit('save', post);
    };

    return {
      title,
      contentEditable,
      markdown,
      handleEdit,
      html,
      submit,
    };
  },
});
</script>
