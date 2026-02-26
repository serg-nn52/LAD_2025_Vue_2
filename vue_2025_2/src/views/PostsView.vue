<template>
  <div class="buttons">
    <button class="btn" @click="router.push({ name: 'home' })">На главную</button>
    <button class="btn" @click="router.back()">Назад</button>
    <button class="btn" @click="router.forward()">Вперед</button>
  </div>
  <div>Posts</div>
  <h2 v-if="isLoading">Loading...</h2>
  <h2 v-else-if="isError">Ошибка при получении списка постов!</h2>
  <ul v-else>
    <li @click="redirectToPost(post.id)" :key="post.id" v-for="post in posts">
      {{ `${post.id} ${post.title}` }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { $api } from '@/api';
import type { AxiosError } from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { IPost } from './types';

const router = useRouter();

const posts = ref<IPost[]>([]);
const isLoading = ref(false);
const isError = ref(false);

const fetchPosts = async () => {
  isLoading.value = true;
  isError.value = false;
  posts.value = [];
  try {
    const { data } = await $api.get<IPost[]>('/posts');
    posts.value = data;
  } catch (err: unknown) {
    console.error(err as AxiosError);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};

fetchPosts();

const redirectToPost = (id: number) => {
  router.push({
    path: `/posts/${id}`,
  });
};
</script>

<style scoped></style>
