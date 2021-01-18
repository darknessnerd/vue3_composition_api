<template>
  <div class="modal" :style="style">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div id="modal"></div>
    </div>
    <button class="modal-close is-large"
      @click="modal.hideModal"
    ></button>
  </div>
  <section class="section">
    <div class="container">
      <Navbar />
      <router-view />
    </div>
  </section>
</template>
<script>
import { defineComponent, computed } from 'vue';
import Navbar from '@/components/Navbar.vue';
import { useModal } from '@/useModal';
import { provideStore } from '@/store';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
  setup() {
    // Inject in all component the store
    provideStore();
    const modal = useModal();
    const style = computed(() => ({
      display: modal.visible.value ? 'block' : 'none',
    }));
    return {
      style,
      modal,
    };
  },
});
</script>
<style lang="scss">
</style>
