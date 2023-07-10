<script setup>
useHead({
  title: 'Anna Papsueva - Art & Design',
  meta: [{ name: 'description', content: 'Anna Papsueva Portfolio' }],
})

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<template>
  <div class="layout">
    <ui-loader v-if="loading" />

    <div class="layout__content" v-show="!loading">
      <NuxtPage />
      <interface-footer />
    </div>
  </div>
</template>

<style lang="scss">
.layout {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 128px;
    background: var(--main-bg);
  }
}
</style>
