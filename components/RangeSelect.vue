<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      label: string;
      name: string;
      min: number;
      max: number;
      step: number;
      disabled?: boolean;
      defaultValue: number;
      handleOnChange: (e: Event) => void;
    }>(),
    {
      disabled: false,
    }
  );
</script>
<template>
  <label :for="name">
    <div>{{ label }}: [{{ defaultValue }}]</div>
    <input
      type="range"
      :name="name"
      :id="name"
      :value="defaultValue"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      @change="handleOnChange"
    />
  </label>
</template>
