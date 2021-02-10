<template>
  <Suspense>
    <template #default>
      <EditPost></EditPost>
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
import Progress from '@/components/Progress.vue';
import EditPost from '@/components/EditPost.vue';

export default defineComponent({
  components: {
    Progress,
    EditPost,
  },
});
</script>
