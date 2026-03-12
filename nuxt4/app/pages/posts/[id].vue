<template>
    <div class="post">Post {{ route.params.id }}</div>
    <a href="#">Test link</a>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'new-layout'
})
const route = useRoute();

onMounted(() => {
    //window, document
    console.log(window.innerWidth);
})
</script>

<style scoped>
.post {
    font-size: 32px;
    font-weight: 500;
}
</style>