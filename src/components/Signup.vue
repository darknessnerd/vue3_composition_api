<template>
  <form class="form" @submit.prevent="submit">
    <FormInput type="text"
               name="Username"
               v-model="username"
               :error="usernameStatus.message">
    </FormInput>
    <FormInput type="password"
               name="password"
               v-model="password"
               :error="passwordStatus.message">
    </FormInput>
    <button class="button is-primary"
      :disabled="!usernameStatus.valid || !passwordStatus.valid"
    >Submit</button>
  </form>
</template>
<script>
import { required, length, validate } from '@/validator';
import { defineComponent, computed, ref } from 'vue';
import FormInput from '@/components/FormInput.vue';
import { useStore } from '@/store';
import { useModal } from '@/useModal';

export default defineComponent({
  name: 'Signup',
  components: {
    FormInput,
  },
  setup() {
    const username = ref('username');
    const usernameStatus = computed(
      () => validate(username.value, [required(), length(5, 10)]),
    );
    const password = ref('password');
    const passwordStatus = computed(
      () => validate(password.value, [required(), length(5, 10)]),
    );
    const store = useStore();
    const modal = useModal();
    const submit = async () => {
      if (!usernameStatus.value.valid || !passwordStatus.value.valid) {
        return;
      }
      const user = {
        id: -1,
        username: username.value,
        password: password.value,
      };
      await store.createUser(user);
      modal.hideModal();
    };
    return {
      username,
      usernameStatus,
      password,
      passwordStatus,
      submit,
    };
  },
});
</script>
<style lang="scss">
form {
  background-color: white;
  padding: 15px
}

</style>
