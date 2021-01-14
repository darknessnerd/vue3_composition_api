<template>
  <section class="section">
    <div class="container">
      <Navbar />
      <router-view />
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
});
</script>
<style lang="scss">
</style>
