<template>
  <div class="ui-container">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.ui-container {
  padding: 0 32px;
  width: 1280px;
  box-sizing: border-box;

  @include tablets {
    width: 100%;
    padding: 0 24px;
  }

  @include phones {
    width: 100%;
    padding: 0 16px;
  }
}
</style>
