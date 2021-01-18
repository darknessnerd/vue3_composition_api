import { ref, readonly } from 'vue';

const visible = ref(false);

// eslint-disable-next-line import/prefer-default-export
export function useModal() {
  return {
    visible: readonly(visible),
    showModal: () => {
      visible.value = true;
    },
    hideModal: () => {
      visible.value = false;
    },
  };
}
