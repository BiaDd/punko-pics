<script setup>
import { useToast } from "primevue/usetoast";
import { ref } from 'vue';

const toast = useToast();
const { imageSrc, prompt } = defineProps({
    imageSrc: String,
    prompt: String,
});

const contextMenu = ref();
const menuItems = ref([
    {
        label: 'Try on Huggingface 🤗',
        icon: 'pi pi-angle-double-right',
        command: () => {
            navigator.clipboard.writeText(prompt);
            window.open("https://huggingface.co/BiaDd/Dreambooth-Punko", '_blank');
        }
    },
]);

const onPromptRightClick = (event) => {
    contextMenu.value.show(event);
};

// copy to clipboard
const copyToClipboard = () => {
    // Copy the text inside the text field
    navigator.clipboard.writeText(prompt);
    toast.add({ severity: 'success', summary: 'Copied', detail: 'Prompt copied to clipboard', life: 3000 });
};

</script>

<template>
    <div class="image-card">
        <Card>
            <template #header>
                <Image :src="imageSrc" :alt="prompt" class="header-image" preview />
            </template>
            <template #content>
                <p class="prompt" @contextmenu="onPromptRightClick" aria-haspopup="true">
                    {{ prompt }}
                    <ContextMenu ref="contextMenu" :model="menuItems" />
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-copy" label="Copy Prompt" aria-label="Copy Prompt" rounded @click="copyToClipboard" />
            </template>
        </Card>
    </div>
</template>

<style scoped>
.image-card {
    margin: 1em;
    width: 20em;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

.header-image {
    display: flex;
    justify-content: center;
    height: 20em;
}

.prompt {
    padding: 0;
}
</style>