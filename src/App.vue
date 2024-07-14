<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { fetchPictures,generatePicture } from "./api/PunkoPicsAPI";

import ImageCard from './components/ImageCard.vue'
// toast
const toast = useToast();
const images = ref([]);
const visible = ref(false);
const loading = ref(false);
const showUploadButton = ref(false);
const generateImageSuccess = ref(false);
const generatedImageSrc = ref('');
const imagePrompt = ref('');


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
      window.open("https://github.com/BiaDd/punko-pics", '_blank');
    }
  }
]);

onMounted(async () => {
  images.value = await getImages();
});

const openPromptWindow = () => {
  showUploadButton.value =  false;
  visible.value = true;
}

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

const generateImage = async (prompt) => {
  if (!prompt || prompt.trim().length === 0) {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Please enter a prompt', life: 3000 });
  }
  loading.value = true;
  showUploadButton.value = false;
  const newImageSrc = await generatePicture(prompt);
  if (newImageSrc) {
    generatedImageSrc.value = newImageSrc;
    generateImageSuccess.value = true;
    loading.value = false;
    showUploadButton.value = true;
  }
  else {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Error generating image from.', life: 3000 });
    return ''
  }
}

</script>

<template>
  <Menubar class="header" :model="menuItems" />
  <h1 class="title">Punko Pics 💩</h1>
  <Toast />
  <div class="button-container">
    <Button class="generate-button" label="Generate Image" aria-label="Generate AI Image" @click="openPromptWindow()" />
  </div>
  <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50em' }">
    <div class="image-container">
      <Image v-if="generateImageSuccess" :src="generatedImageSrc" :alt="imagePrompt"/>
      <Button  v-if="showUploadButton" type="button" label="Upload Image" icon="pi pi-palette" />
    </div>
    <div class="input-container">
      <InputText type="text" v-model="imagePrompt" size="large" placeholder="type in your prompt..."/>
      <Button type="button" label="Generate" icon="pi pi-palette" :loading="loading" @click="generateImage(imagePrompt)" />
    </div>
  </Dialog>
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
}</style>
