<script setup lang="ts">
// https://dev.to/cn-2k/working-with-props-declaration-in-vue-3-ts-included-4o4f
interface SelectableOptions {
    label: string | number,
    value: string | number,
    class?: string,
    style?: string
}

const props = defineProps<{
    label: string,
    name: string,
    handleOnChange: (e: Event) => void
    options: SelectableOptions[]
}>()
</script>

<template>
    <label :for="name">
        <div>{{ label }}</div>
        <select :name="name" :id="name" @change="handleOnChange">
            <option v-for="option in options" :value="option.value" :class="option.class" :style="option.style">
                {{ option.label }}
            </option>
        </select>
    </label>
</template>
