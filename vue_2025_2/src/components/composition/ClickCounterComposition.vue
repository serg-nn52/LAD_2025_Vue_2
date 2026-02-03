<template>
  <div :class="styles.counter">
    <h2 :class="styles.title" :style="titleStyles">{{ title }}</h2>
    <div :class="countClasses">Count: {{ count }}</div>
    <div>Double count: {{ doubleCount }}</div>
    <button class="button" :class="styles.button" @click="count++">Increment++</button>
    <button class="button" :class="styles.button" @click="decrement">Decrement--</button>
    <button class="button" :class="styles.button" @click="reset">Reset</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useCssModule, watch, type CSSProperties } from 'vue';
import type { IClickCounterEmits, IClickCounterProps } from './types';

const styles = useCssModule();

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

const countClasses = computed(() => ({
  [styles.count]: true,
  [styles.count_big]: count.value >= 5,
}));

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

<style lang="scss" module>
@use 'sass:color';
.counter {
  .title {
    background-color: red;
    width: calc(100% - 250px);

    &:hover {
      background-color: color.adjust(red, $lightness: 20%);
    }
  }
}
.button {
  padding: 5px 10px;
  border: none;
  background-color: aqua;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: gray;
  }
}

.count {
  color: black;
}
.count_big {
  color: red;
  font-size: 22px;
}
</style>
