<template>
  <div class="user-root">
    <slot name="prepend" />
    <div class="name">{{ $props.user?.name }}</div>
    <div class="age">Age: {{ $props.user?.age }}</div>
    <div class="role">{{ $props.user?.role }}</div>
    <img :src="$props.user?.img" alt="avatar" class="avatar" />
    <slot name="append" />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

interface IUser {
  name: string
  age: number
  role: string
  img: string
}

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<IUser>,
      default: () =>
        ({
          age: 18,
          name: 'No Name',
          role: 'No Role',
          img: 'https://static.bntu.by/bntu/new/staffs/photo_2163_8bd01886c446fc213afa7792f8f8e859.jpg',
        }) as IUser,
      //required: true,
    },
  },
})
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
</style>
