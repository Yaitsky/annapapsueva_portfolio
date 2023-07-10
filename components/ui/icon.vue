<script setup>
defineProps({
  collection: {
    type: String,
    default: 'fas'
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'sm'
  },
  color: {
    type: String,
    default: 'var(--text)'
  }
})
</script>

<template>
  <font-awesome-icon
    class="ui-icon"
    :icon="[collection, name]"
    :style="{ color: `${color}` }"
    :size="size"
  />
</template>