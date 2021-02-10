<template>
    <router-link :to="to" data-test="post" class="panel-block" >
      <div>
        <a>{{post.title}}</a>
        <div>{{post.id}}</div>
        <div>{{post.created.format('Do MMM')}}</div>
      </div>
    </router-link>
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
  setup(props) {
    return {
      to: `/posts/${props.post.id}`,
    };
  },
});
</script>
