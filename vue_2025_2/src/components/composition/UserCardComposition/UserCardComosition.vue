<template>
  <div class="user-root">
    <div class="slot">
      <slot name="prepend" />
    </div>
    <div class="name">{{ user.name }}</div>
    <div class="age">Age: {{ user.age }}</div>
    <div class="role">{{ user.role }}</div>
    <img :src="user.img" alt="avatar" class="avatar" />
    <div class="slot">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defaultUser } from './constants';
import type { IUserCardProps } from '../types';

const props = withDefaults(defineProps<IUserCardProps>(), {
  user: () => defaultUser,
});

console.log(props);
</script>

<style scoped>
.user-root {
  width: 300px;
  height: 500px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  overflow: auto;
}
.avatar {
  width: 100%;
  height: auto;
}

.name {
  font-size: 32px;
}
.age,
.role {
  font-size: 20px;
}
.slot {
  min-height: 30px;
}
</style>
