<template>
  <div class="counter-wrapper">
    <div class="counter">
      <h2 :style="counterTitleColor">{{ title }}</h2>
      <div>Count: {{ count }}</div>
      <div>Double count: {{ doubleCount }}</div>
    </div>
    <button @click="count++">Increment++</button>
    <button @click="decrement">Decrement--</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  props: {
    title: {
      type: String,
      default: 'Default counter title',
    },
  },
  emits: ['decrement'],
  computed: {
    doubleCount() {
      return 2 * this.count;
    },
    counterTitleColor() {
      return { color: this.count > 5 ? 'red' : 'black' };
    },
  },
  methods: {
    showDecrement() {
      console.log('decrement');
    },
    decrement() {
      // this.showDecrement()
      this.count--;
      this.$emit('decrement', this.count);
    },
    reset() {
      this.count = 0;
    },
  },
  watch: {
    count: {
      handler(newValue, oldValue) {
        console.log('newValue', newValue);
        console.log('oldValue', oldValue);
        // if (newValue === 0) alert('Значение равно 0!')
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    console.log('created'); //можем делать запросы
  },
  beforeMount() {
    console.log('before mount');
  },
  mounted() {
    console.log('mounted'); //можем работать с DOM
  },
  updated() {
    console.log('updated'); //изменилось состояние
  },
  beforeUnmount() {
    console.log('beforeUnmount'); //отписки от слушателей событий, уничтожение таймеров и интервалов
  },
});
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
