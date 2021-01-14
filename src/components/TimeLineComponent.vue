<template>
  <nav class="is-primary panel">
    <p class="panel-tabs">
        <a v-for="period in periods" :key="period" data-test="period">
          {{ period }}
        </a>
    </p>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimeLineComponent',
  setup() {
    const periods = ['today', 'this week', 'this month'];
    return {
      periods,
    };
  },
});
</script>
