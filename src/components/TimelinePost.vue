<template>
    <a data-test="post" class="panel-block" >
      <div>
        <a>{{post.title}}</a>
        <div>{{post.created.format('Do MMM')}}</div>
      </div>
    </a>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimelinePost',
  props: {
    post: {
      required: true,
    },
  },
});
</script>
