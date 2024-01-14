<script setup>
const { imageSrc, prompt } = defineProps({
    imageSrc: String,
    prompt: String,
});

</script>

<template>
    <Card class="image-card">
        <template #header class="image-container">
            <Image src="/test.png" alt="Vite logo" preview />
        </template>
        <template #content>
            <p class="m-0">
                {{ prompt }}
            </p>
        </template>
        <template #footer>
            <Button>Copy Prompt</Button>
        </template>
    </Card>
</template>

<style scoped>
.image-card {
    margin: 1em;
    width: 25em;
}

img {
    max-width: 100%; 
    height: auto;
    /* Maintain aspect ratio and cover the entire card */
}
</style>