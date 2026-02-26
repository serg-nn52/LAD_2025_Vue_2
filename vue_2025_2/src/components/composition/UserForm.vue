<template>
  <hr :style="{ marginTop: '10px' }" />
  <form @submit.prevent="sendForm">
    <input ref="inputOther" @input="inputName" type="text" placeholder="name" :value="name" />
    <input v-model="age" type="text" placeholder="age" />
    <button :disabled="isSendFormButtonDisable">Send user form</button>
  </form>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@/composables/useLocalStorage';
import { onBeforeUnmount, onMounted, onUpdated, ref, watch } from 'vue';

const name = ref('Ivan');
// const age = ref('18');
const age = useLocalStorage('age', '18')
const isSendFormButtonDisable = ref(false);

const inputOther = ref<HTMLInputElement | null>(null);

const inputName = (event: InputEvent) => {
  name.value = (event.target as HTMLInputElement).value;
  console.log((event.target as HTMLInputElement).value);
};

const sendForm = () => {
  console.log('Форма отправлена', {
    name: name.value,
    age: age.value,
  });
  name.value = '';
  age.value = '';
};

watch(name, (nameValue) => {
  isSendFormButtonDisable.value = nameValue.length < 4;
});

console.log('created');

onMounted(() => {
  if (!inputOther.value) return;
  console.log('input', inputOther.value.value);
  inputOther.value.focus();
});

onUpdated(() => {
  console.log('updated');
});
onBeforeUnmount(() => {
  console.log('unmounted');
});
</script>

<style scoped></style>
