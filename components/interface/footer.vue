<template>
  <footer class="interface-footer">
    <ui-text type="small" class="interface-footer__created-by">
      Сделано с любовью
      <ui-icon
        name="heart-pulse"
        color="var(--pink)"
        size="lg"
        style="margin-left: 4px"
      />
    </ui-text>
    <ui-text type="small" color="caption"> 2023 </ui-text>
  </footer>
</template>

<style lang="scss" scoped>
.interface-footer {
  background: var(--dark-bg);
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 64px;
  gap: 4px;

  @include phones {
    padding: 24px 0;
  }

  &__created-by {
    margin-bottom: 8px;
  }
}
</style>
