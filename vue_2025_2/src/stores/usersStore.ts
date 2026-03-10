import { $api } from '@/api';
import type { IUser } from '@/views/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('users', () => {
  const usersList = ref<IUser[]>([]);
  const user = ref<IUser>({} as IUser);
  const isLoading = ref(false);
  const isError = ref(false);

  const fetchUsers = async () => {
    try {
      isLoading.value = true;
      isError.value = false;
      const { data } = await $api.get('/users');
      usersList.value = data;
    } catch (err: unknown) {
      console.error(err);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  const fetchUser = async (id: number) => {
    try {
      isLoading.value = true;
      isError.value = false;
      const { data } = await $api.get(`/users/${id}`);
      user.value = data;
    } catch (err: unknown) {
      console.error(err);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    user,
    usersList,
    isLoading,
    isError,
    fetchUsers,
    fetchUser,
  };
});
