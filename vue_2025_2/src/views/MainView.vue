<template>
  <MainLayout>
    <section class="counter">
      <h1 :style="{ color: isMainPageTitleGreen ? 'green' : 'black' }">Main Page</h1>
      <ClickCounter
        @decrement="decrementHandler"
        v-bind="$options.propsObj"
        :title="$options.title"
      />
    </section>
    <section class="users">
      <h2>Пользователи</h2>
      <div class="users-block">
        <UserCard
          :user="{
            name: 'Sergey',
            age: 40,
            role: 'Teacher',
            img: 'https://yt3.googleusercontent.com/ytc/AIdro_nDHzCtSxBD4VWB7aHFW4BiYQU9Kq3j-DXyl0hAVubSqQ=s900-c-k-c0x00ffffff-no-rj',
          }"
        >
          <template #append>
            <p>*Признан иноагентом</p>
          </template>
        </UserCard>
        <UserCard
          :user="{
            name: 'Ilya',
            age: 30,
            role: 'Student',
            img: 'https://yt3.googleusercontent.com/ytc/AIdro_la1tX4P9r22r3voyWGofqdcGcU5MBoM8h5Ken296cjBbU=s900-c-k-c0x00ffffff-no-rj',
          }"
        >
          <template #prepend>
            <h2>Title prepend</h2>
          </template>
        </UserCard>
      </div>
    </section>
  </MainLayout>
</template>

<script lang="ts">
import ClickCounter from '@/components/ClickCounter.vue'
import UserCard from '@/components/UserCard.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainPage',
  components: { ClickCounter, UserCard, MainLayout },
  data() {
    return {
      isMainPageTitleGreen: false,
    }
  },
  title: 'Our counter title',
  propsObj: {
    name: 'Sergey',
    year: 2026,
  },
  methods: {
    decrementHandler(event: number) {
      this.isMainPageTitleGreen = event < -5 ? true : false
      console.log('decrement-handler', event)
    },
  },
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
.users-block {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}
</style>
