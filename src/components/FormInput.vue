<template>
  <div class="field">
    <label class="label" :for="name">{{name}}</label>
    <div class="control">
      <input class="input" :type="type" :id="name" @input="handleInput" :value="modelValue" />
    </div>
    <p class="help is-danger" v-if="error">{{ error }}</p>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    error: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      required: true,
      type: String,
    },
  },
  setup(props, ctx) {
    const handleInput = (event) => {
      ctx.emit('update:modelValue', event.target.value);
    };
    return {
      handleInput,
    };
  },
});
</script>
