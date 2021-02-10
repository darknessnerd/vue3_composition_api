import { ref, readonly } from 'vue';

const visible = ref(false);
const component = ref();
// eslint-disable-next-line import/prefer-default-export
export function useModal() {
  return {
    component,
    visible: readonly(visible),
    showModal: () => {
      visible.value = true;
    },
    hideModal: () => {
      visible.value = false;
    },
  };
}
