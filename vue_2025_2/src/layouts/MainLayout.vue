<template>
  <div class="root">
    <header class="header">Header</header>
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
</style>
