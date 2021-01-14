<template>
  <nav class="is-primary panel">
    <p class="panel-tabs">
        <a v-for="period in periods"
           :key="period"
           :class="[ period === selectedPeriod ? 'is-active': '']"
           @click="setPeriod(period)"
           data-test="period">
          {{ period }}
        </a>
    </p>
  </nav>
</template>

<script>
import { defineComponent, ref } from 'vue';
// ref: reactive reference, reflect the latest information
export default defineComponent({
  name: 'TimeLineComponent',
  setup() {
    const periods = ['today', 'this week', 'this month'];
    const selectedPeriod = ref('today');
    const setPeriod = (period) => {
      selectedPeriod.value = period;
    };
    return {
      periods,
      selectedPeriod,
      setPeriod,
    };
  },
});
</script>
