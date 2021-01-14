<template>
  <section class="section">
    <div class="container">
      <TimeLineComponent />
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import TimeLineComponent from '@/components/TimeLineComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    TimeLineComponent,
  },
});
</script>
<style lang="scss">
</style>
