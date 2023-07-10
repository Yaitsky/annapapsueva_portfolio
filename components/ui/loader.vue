<template>
  <div class="ui-loader">
    <ui-logo />
  </div>
</template>

<style lang="scss">
.ui-loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: var(--gradient-bg);
  display: flex;
  align-items: center;
  justify-content: center;

  .ui-logo {
    img {
      height: 80px;
    }
  }
}
</style>