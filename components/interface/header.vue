<template>
  <header class="interface-header">
    <ui-logotype />
  </header>
</template>

<style lang="scss">
.interface-header {
  padding: 32px 0;
  display: flex;
  justify-content: space-between;

  @include tablets {
    padding: 24px 0;
  }

  @include phones {
    padding: 16px 0;
  }
}
</style>