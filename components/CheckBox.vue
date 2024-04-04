<script setup lang="ts">
const props = defineProps<{
    inlineStyle?: string
    label: string,
    name: string,
    defaultValue: boolean,
    handleOnChange: (e: Event) => void
}>()
</script>
<template>
    <label :for="name" :style="inlineStyle">
        <input type="checkbox" :name="name" :id="name" @change="handleOnChange"> {{ label }}
    </label>
</template>