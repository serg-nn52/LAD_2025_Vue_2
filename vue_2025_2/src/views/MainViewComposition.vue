<template>
  <MainLayout class="main-layout">
    <ClickCounterComposition
      @decrement="
        (event) => {
          console.log(event);
        }
      "
    />
    <section :class="styles.users">
      <h2>Пользователи</h2>
      <div :class="styles['users-block']">
        <UserCardComposition
          :user="{
            name: 'Sergey',
            age: 40,
            role: 'Teacher',
            img: 'https://img.freepik.com/premium-photo/picture-boy-with-hoodie-that-says-hes_644690-179027.jpg',
          }"
        >
          <template #append>
            <p>*Признан иноагентом</p>
          </template>
        </UserCardComposition>
        <UserCardComposition
          :user="{
            name: 'Ilya',
            age: 30,
            role: 'Student',
            img: 'https://img.freepik.com/premium-photo/romantic-cartoonlike-3d-pixar-character-zhao-with-glasses_899449-139436.jpg',
          }"
        >
          <template #prepend>
            <h2>Title prepend</h2>
          </template>
        </UserCardComposition>
      </div>
    </section>
    <!-- <button :class="styles.button">Test button</button> -->
  </MainLayout>
</template>

<script setup lang="ts">
import ClickCounterComposition from '@/components/composition/ClickCounterComposition.vue';
import UserCardComposition from '@/components/composition/UserCardComposition/UserCardComosition.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { useCssModule } from 'vue';

const styles = useCssModule(); //this.$styles
</script>

<style lang="scss" module>
.button {
  display: block;
  background-color: green;
}
.title {
  color: red !important;
}
.counter {
  background-color: red;
}
.users-block {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}
</style>
