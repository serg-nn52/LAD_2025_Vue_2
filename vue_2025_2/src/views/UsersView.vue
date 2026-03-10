<template>
  <div>Users Page</div>
  <h2 v-if="isLoading">Loading...</h2>
  <h2 v-else-if="isError">Ошибка при получении списка юзеров!</h2>
  <ul v-else>
    <li @click="redirectToUser(user.id)" :key="user.id" v-for="user in usersList">
      {{ `${user.id} ${user.name}` }}
    </li>
  </ul>
  <button @click="fetchUsers">Обновить список пользователей</button>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/usersStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
const { isError, isLoading, usersList } = storeToRefs(userStore);
const { fetchUsers } = userStore;

const redirectToUser = (id: number) => {
  router.push(`/users/${id}`);
};

fetchUsers();
</script>

<style scoped></style>
