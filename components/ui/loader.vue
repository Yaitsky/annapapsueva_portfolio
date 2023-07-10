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
    animation: loader 3s ease-in-out 0s infinite normal backwards;
  }

  @keyframes loader {
    0%,
    100% {
      transform: rotate(0deg);
      transform-origin: 50% 100%;
    }

    10% {
      transform: rotate(2deg);
    }

    20%,
    40%,
    60% {
      transform: rotate(-4deg);
    }

    30%,
    50%,
    70% {
      transform: rotate(4deg);
    }

    80% {
      transform: rotate(-2deg);
    }

    90% {
      transform: rotate(2deg);
    }
  }
}
</style>
