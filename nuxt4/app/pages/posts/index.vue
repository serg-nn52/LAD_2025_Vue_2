<template>
    <h2>Posts Page</h2>
    <button @click="() => execute()">Обновить список постов</button>
    <h3 v-if="pending">Loading</h3>
    <ul v-if="posts?.length && !pending">
        <li :key="post.id" v-for="post in posts">{{ post?.title }}</li>
    </ul>
    <h3 v-if="error" class="error">Не удалось загрузить посты </h3>
</template>

<script setup lang="ts">
import { useCustomFetch } from '~/api'


interface IPost {
    id: number,
    title: string
}

// const { data: posts, pending, error, status, execute } = await useFetch<IPost[]>('/posts', {
//     baseURL: 'https://jsonplaceholder.typicode.com/',
//     server: false
// })
const { data: posts, pending, error, status, execute } = await useCustomFetch<IPost[]>('/posts')
console.log('data', posts.value)
console.log('error', error.value)
console.log('status', status.value)
</script>

<style scoped>
.error {
    color: red
}
</style>