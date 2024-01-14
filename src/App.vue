<script setup>
import { ref } from "vue";
import ImageCard from './components/ImageCard.vue'

const menuItems = ref([
  {
    label: 'Contact',
    icon: 'pi pi-envelope'
  }
]);

const images = ref([{ imageLink: '../test.png', prompt: 'Buzz' }, { imageLink: './assets/image.png', prompt: 'Bar' }, { imageLink: './assets/image.png', prompt: 'Bar' }, { imageLink: './assets/image.png', prompt: 'Bar' }]);

</script>

<template>
  <Menubar class="header" :model="menuItems" />
  <div class="body">
    <ImageCard v-for="item in images" :imageSrc="item.imageLink" :prompt="item.prompt" />
  </div>
</template>

<style scoped>
.header {
  margin-bottom: 2rem;
}
.body {
  color: #888;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(33.333% - 10px), 1fr)); /* Adjust margin as needed */
  gap: 8px;
}
</style>
