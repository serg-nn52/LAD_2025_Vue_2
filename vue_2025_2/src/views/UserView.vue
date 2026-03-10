<template>
  <h2 v-if="isLoading">Loading...</h2>
  <h2 v-else-if="isError">Ошибка при получении списка юзеров!</h2>
  <template v-else>
    <h2>{{ user.name }}</h2>
    <div>Username: {{ user.username }}</div>
    <div>User email: {{ user.email }}</div>
  </template>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/usersStore';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const route = useRoute();
const userStore = useUserStore();
const { isError, isLoading, user } = storeToRefs(userStore);

userStore.fetchUser(Number(route.params.id));
</script>

<style scoped></style>
