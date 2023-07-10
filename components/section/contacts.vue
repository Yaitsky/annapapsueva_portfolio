<template>
  <section id="about" class="contacts-section">
    <ui-title centered underline>
      Контакты
    </ui-title>
    <div class="contacts-section__content">
      <interface-contacts />

      <interface-social class="contacts-section__social" />
    </div>
  </section>
</template>

<style lang="scss">
.contacts-section {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__content {
    max-width: 560px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin-top: 64px;

    @include phones {
      max-width: 100%;
      gap: 32px;
      margin-top: 48px;
    }
  }

  &__social {
    justify-content: center;
  }
}
</style>