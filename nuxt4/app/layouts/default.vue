<template>
    <div class="layout-wrapper">
        <header class="header">Header</header>
        <nav class="nav">
            <NuxtLink active-class="active-link" to="/">Main</NuxtLink>
            <NuxtLink active-class="active-link" to="/posts">Posts</NuxtLink>
            <NuxtLink active-class="active-link" target="_blank" to="https://yandex.by/">Yandex</NuxtLink>
        </nav>
        <div class="content"><slot></slot></div>
        <footer class="footer">Footer</footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.layout-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
}
.header, .footer {
    font-size: 32px;
    display: flex;
    height: 150px;
    justify-content: center;
    align-items: center;
    background-color: grey;
}
.nav {
    display: flex;
    gap: 15px;
    background-color: darkgray;
    height: 30px;
    padding: 5px;
    align-items: center;
    font-size: 22px;
}
.content {
    flex-grow: 1;
}
.active-link {
    color: red;
}
</style>