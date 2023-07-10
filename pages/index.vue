<template>
  <div class="main-page">
    <section-main />
    <section-contacts />
  </div>
</template>

<style lang="scss">
.main-page {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 128px;
  align-items: center;

  section {
    width: 100%;
  }

  @include phones {
    gap: 96px;
  }
}
</style>
