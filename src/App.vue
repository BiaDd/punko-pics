<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { fetchPictures } from "./api/PunkoPicsAPI";

import ImageCard from './components/ImageCard.vue'
// toast
const toast = useToast();
const images = ref([]);
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
