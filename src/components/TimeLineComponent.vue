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
    <TimelinePost :post="post" v-for="post in posts" :key="post.id" />
  </nav>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { todayPost, thisWeekPost, thisMonthPost } from '@/mocks';
import TimelinePost from '@/components/TimelinePost.vue';
import moment from 'moment';
// ref: reactive reference, reflect the latest information

export default defineComponent({
  name: 'TimeLineComponent',
  components: {
    TimelinePost,
  },

  async setup() {
    const periods = ['today', 'this week', 'this month'];
    const selectedPeriod = ref('today');
    const setPeriod = (period) => {
      selectedPeriod.value = period;
    };
    const posts = computed(() => [todayPost, thisWeekPost, thisMonthPost].filter((post) => {
      if (selectedPeriod.value === 'today' && post.created.isAfter(moment().subtract(1, 'day'))) {
        return true;
      }
      if (selectedPeriod.value === 'this week' && post.created.isAfter(moment().subtract(7, 'day'))) {
        return true;
      }
      if (selectedPeriod.value === 'this month' && post.created.isAfter(moment().subtract(1, 'month'))) {
        return true;
      }
      return false;
    }));
    return {
      periods,
      selectedPeriod,
      setPeriod,
      posts,
    };
  },
});
</script>
