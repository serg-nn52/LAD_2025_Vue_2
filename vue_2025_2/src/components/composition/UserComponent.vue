<template>
  <h2>Работа со стором</h2>
  <div>Счетчик в сторе: {{ count }}</div>
  <div>Двойной счетчик в сторе: {{ doubleCount }}</div>
  <hr :style="{ marginTop: '10px' }" />
  <div>Name: {{ user.name }}</div>
  <div>Age: {{ user.age }}</div>
  <div>Country: {{ user.country }}</div>
  <button @click="changeUser">Change user</button>
  <button @click="user.age++">Change user age</button>
  <div v-if="user.age < 18">{{ truncateString('Вы слишком молоды!', 10) }}</div>
  <div v-else-if="user.age < 60">Вы в самом расцвете сил!</div>
  <div v-else>Вам нужно больше отдыхать!</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { truncateString } from '@/utils/truncateString';
import { storeToRefs } from 'pinia';
import { reactive, ref, watch } from 'vue';

const counterStore = useCounterStore();

const { count, doubleCount } = storeToRefs(counterStore);

interface IUser {
  name: string;
  age: number;
  country: string;
}

// const age = ref(0);

//ref
const user = ref<IUser>({
  name: 'Sergey',
  age: 15,
  country: 'Russia',
});

//reactive
const user2 = reactive<IUser>({
  name: 'Ivan',
  age: 20,
  country: 'Russia',
});
console.log(user2, user);

// user.value.age = 25;
// console.log(user.value);

// watch(
//   user,
//   (newVal, oldVal) => {
//     console.log('newVal', newVal);
//     console.log('oldVal', oldVal);
//   },
//   {
//     deep: true,
//   },
// );

watch(
  () => user.value.age,
  (newVal, oldVal) => {
    console.log('newVal', newVal);
    console.log('oldVal', oldVal);
  },
  {
    deep: true,
    immediate: true,
  },
);

const changeUser = () => {
  user.value = {
    name: 'Ivan',
    age: 20,
    country: 'Russia',
  };
};
</script>

<style scoped>
div {
  font-size: 32px;
}
</style>
