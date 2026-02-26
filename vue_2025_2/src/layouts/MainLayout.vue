<template>
  <div class="root">
    <header class="header">Header</header>
    <nav class="nav-links">
      <router-link active-class="active-link" class="nav-link" :to="{name: 'home'}">Main</router-link>
      <router-link active-class="active-link" class="nav-link" :to="{name: 'options'}">Options</router-link>
      <router-link active-class="active-link" class="nav-link" :to="{name: 'posts'}">Posts</router-link>
    </nav>
    <div class="content">
      <slot />
    </div>
    <footer class="footer">Footer {{ new Date().getFullYear() }}</footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
})
</script>

<style scoped>
.root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


}
.header,
.footer {
  height: 100px;
  background-color: gray;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  flex-grow: 1;
  padding: 10px;
}
  .nav-links {
  background-color: green;
  font-size: 28px;
  color: black;
  display: flex;
  gap: 15px;
}
.nav-link {
  color: black;
  text-decoration: none;
}
.active-link {
  color: red;
}
</style>
