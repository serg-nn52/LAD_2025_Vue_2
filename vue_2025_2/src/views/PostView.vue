<template>
  <button @click="router.push({ name: 'posts' })">К списку постов</button>
  <h2>Post: {{ route.params.id }}</h2>
  <h2 v-if="isLoading">Loading...</h2>
  <h2 v-else-if="isError">Ошибка при получении списка постов!</h2>
  <template v-else>
    <h3>{{ post.title }}</h3>
    <div>{{ post.body }}</div>
  </template>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import type { IPost } from './types';
import { ref } from 'vue';
import { $api } from '@/api';
import type { AxiosError } from 'axios';

const router = useRouter();
const route = useRoute();

const post = ref<IPost>({} as IPost);
const isLoading = ref(false);
const isError = ref(false);

const fetchPost = async () => {
  isLoading.value = true;
  isError.value = false;
  post.value = {} as IPost;
  try {
    const { data } = await $api.get<IPost>(`/posts/${route.params.id}`);
    post.value = data;
  } catch (err: unknown) {
    console.error(err as AxiosError);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};

fetchPost();
</script>

<style scoped></style>
