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
    <FormInput type="text" name="Username" v-model="username" error="aaaa"></FormInput>
    {{ username }}
    <div class="container">
      <Navbar />
      <router-view />
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import FormInput from '@/components/FormInput.vue';
import { useModal } from '@/./useModal';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    FormInput,
  },
  setup() {
    const modal = useModal();
    const username = ref('username');
    const style = computed(() => ({
      display: modal.visible.value ? 'block' : 'none',
    }));

    return {
      style,
      modal,
      username,
    };
  },
});
</script>
<style lang="scss">
</style>
