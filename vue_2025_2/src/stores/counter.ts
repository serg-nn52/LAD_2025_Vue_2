import { computed } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@/composables/useLocalStorage';

export const useCounterStore = defineStore('counter', () => {
  const count = useLocalStorage('count', 0);
  const doubleCount = computed(() => count.value * 2);

  const increment = () => {
    count.value++;
  };

  return { count, doubleCount, increment };
});
