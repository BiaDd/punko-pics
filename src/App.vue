<script setup>
import { ref } from "vue";
import ImageCard from './components/ImageCard.vue'

const menuItems = ref([
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    command: () => {
      window.open("mailto: dannxd3@gmail.com", '_blank');
    }
  },
  {
    label: 'GitHub',
    icon: 'pi pi-github',
    command: () => {
      window.open("https://github.com/BiaDd", '_blank');
    }
  }
]);

const images = ref([
  { imageLink: '/test.png', prompt: 'draw doodoobia as a robot' },
  { imageLink: '/test2.png', prompt: 'you are safe now my child' },
  { imageLink: '/test3.png', prompt: 'draw bia waving' },
  { imageLink: '/test4.png', prompt: 'draw big muscles big arms bia' },
  { imageLink: '/test5.png', prompt: 'draw bia as an old man' },
  { imageLink: '/test6.png', prompt: 'draw bia as a cat' }]);

</script>

<template>
  <Menubar class="header" :model="menuItems" />
  <h1 class="title">Punko Pics 💩</h1>
  <div class="body">
    <div class="images">
      <ImageCard v-for="item in images" :imageSrc="item.imageLink" :prompt="item.prompt" />
    </div>
  </div>
  <ScrollTop />
</template>

<style scoped>
.header {
  margin-bottom: 2rem;
}

.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media only screen and (max-width: 768px) {
  .images {
    justify-content: center;
  }
}
</style>
