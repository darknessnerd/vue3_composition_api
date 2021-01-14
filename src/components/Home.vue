<template>
      <Suspense>
        <template #default>
          <TimeLineComponent />
        </template>

        <template #fallback>
          <div class="columns">
            <div class="column is-one-third"/>
            <div class="column is-one-third">
              <Progress />
            </div>
            <div class="column is-one-third"/>
          </div>
        </template>
      </Suspense>
</template>

<script>
import { defineComponent } from 'vue';
import TimeLineComponent from '@/components/TimeLineComponent.vue';
import Progress from '@/components/Progress.vue';

export default defineComponent({
  name: 'Home',
  components: {
    TimeLineComponent,
    Progress,
  },
});
</script>
<style lang="scss">
</style>
