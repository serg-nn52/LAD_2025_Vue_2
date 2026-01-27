<template>
  <MainLayout>
    <ClickCounterComposition
      @decrement="
        (event) => {
          console.log(event);
        }
      "
    />
  </MainLayout>
</template>

<script setup lang="ts">
import ClickCounterComposition from '@/components/composition/ClickCounterComposition.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<style scoped></style>
