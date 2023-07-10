<template>
  <div class="contact-links">
    <a href="mailto:anpapsueva@gmail.com" target="_blank">
      <ui-text color="caption">
        anpapsueva@gmail.com
      </ui-text>
    </a>
    <a href="tel:+7(916)477-58-08" target="_blank">
      <ui-text color="caption">
        +7(916)477-58-08
      </ui-text>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @include phones {
    gap: 8px;
  }
}
</style>
