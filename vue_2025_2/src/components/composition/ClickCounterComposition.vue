<template>
  <div class="counter">
    <h2 :style="titleStyles">{{ title }}</h2>
    <div>Count: {{ count }}</div>
    <div>Double count: {{ doubleCount }}</div>
    <button @click="count++">Increment++</button>
    <button @click="decrement">Decrement--</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, type CSSProperties } from 'vue';
import type { IClickCounterEmits, IClickCounterProps } from './types';

//required
//const props = defineProps<IClickCounterProps>()

//default
const props = withDefaults(defineProps<IClickCounterProps>(), {
  title: 'Default title',
});

const emits = defineEmits<IClickCounterEmits>();

const count = ref<number>(0);

const doubleCount = computed(() => {
  return count.value * 2;
});

const titleStyles = computed<CSSProperties>(() => {
  return {
    color: count.value < 5 ? 'black' : 'red',
  };
});

watch(
  count,
  (newValue, oldValue) => {
    console.log('newValue', newValue);
    console.log('oldValue', oldValue);
  },
  {
    immediate: true,
  },
);

const decrement = () => {
  count.value--;
  emits('decrement', count.value);
};

const reset = () => {
  count.value = 0;
};

console.log(count.value);
console.log(props);
</script>

<style scoped>
button {
  padding: 5px 10px;
  border: none;
  background-color: aqua;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
}
</style>
