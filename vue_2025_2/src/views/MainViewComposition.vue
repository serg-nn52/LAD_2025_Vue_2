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
      <h2 v-if="users.length">Пользователи</h2>
      <h2 :class="styles['not-found']" v-else>Пользователи не найдены!</h2>
      <div :class="styles['users-block']">
        <template v-for="user in users" :key="user.id">
          <UserCardComposition v-if="device !== 'mobile'" :user="user">
            <template v-if="user.titleAppend" #append>
              <p>{{ user.titleAppend }}</p>
            </template>
            <template v-if="user.titlePrepend" #prepend>
              <h2>{{ user.titlePrepend }}</h2>
            </template>
          </UserCardComposition>
        </template>
      </div>
    </section>
    <UserComponent />
    <UserForm />
    <img src="/images/cats.png" alt="cats" />
    <img
      src="../assets/images/litle-strawberry-cartoon-commercial-use_54889-1126.avif"
      alt="fruit"
    />
    <img :src="fruitImg" alt="fruit" />
    <img src="../assets/icons/upload.svg" alt="upload" />
    <UploadIcon fill="red" />
    <!-- <button :class="styles.button">Test button</button> -->
  </MainLayout>
</template>

<script setup lang="ts">
import ClickCounterComposition from '@/components/composition/ClickCounterComposition.vue';
import UserCardComposition from '@/components/composition/UserCardComposition/UserCardComosition.vue';
import UserComponent from '@/components/composition/UserComponent.vue';
import UserForm from '@/components/composition/UserForm.vue';
import { useMedia } from '@/composables/useMedia';
import { users } from '@/data';
import MainLayout from '@/layouts/MainLayout.vue';
import { useCssModule } from 'vue';
import fruitImg from '@/assets/images/litle-strawberry-cartoon-commercial-use_54889-1126.avif';
import UploadIcon from '@/assets/icons/upload-icon.vue';

const styles = useCssModule(); //this.$styles

const { device } = useMedia();
</script>

<style lang="scss" module>
.button {
  display: block;
  background-color: green;
}
.title {
  color: red;
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
.not-found {
  color: red;
}
</style>
