<template>
  <form class="form">
    <FormInput type="text"
               name="Username"
               v-model="username"
               :error="usernameStatus.message"></FormInput>
    <FormInput type="password"
               name="password"
               v-model="password"
               :error="passwordStatus.message"></FormInput>
  </form>
</template>

<script>
import { required, length, validate } from '@/./validator';
import { defineComponent, computed, ref } from 'vue';
import FormInput from '@/components/FormInput.vue';

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
    return {
      username,
      usernameStatus,
      password,
      passwordStatus,
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
