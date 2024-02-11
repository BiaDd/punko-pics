<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { fetchPictures } from "./api/PunkoPicsAPI";

import ImageCard from './components/ImageCard.vue'
// toast
const toast = useToast();
const images = ref([
  { url: '/test.png', key: 'draw doodoobia as a robot', labels: ['robot'] },
  { url: '/test2.png', key: 'you are safe now my child', labels: ['weird'] },
  { url: '/test3.png', key: 'draw bia waving', labels: [] },
  { url: '/test4.png', key: 'draw big muscles big arms', labels: ['muscles'] },
  { url: '/test5.png', key: 'draw bia as an old man', labels: ['old'] },
  { url: '/test6.png', key: 'draw bia as a cat', labels: ['cat', 'animal'] }]);
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

onMounted(async () => {
  images.value = await getImages();
});

const getImages = async () => {
  const resImages = await fetchPictures();
  if (resImages.status === 'Success') {
    return resImages.pictures;
  }
  else {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Error loading images from bucket.', life: 3000 });
    return images.value
  }
}

</script>

<template>
  <Menubar class="header" :model="menuItems" />
  <h1 class="title">Punko Pics 💩</h1>
  <Toast />
  <div class="body">
    <div class="images">
      <ImageCard v-for="item in images" :imageSrc="item.url" :prompt="item.key" />
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
