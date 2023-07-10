<template>
  <section class="main-section">
    <ui-container>
        <interface-header />

        <div class="hello-block">
          <div class="hello-block__text">
            <ui-title type="title">
              Меня зовут Аня 🤗
            </ui-title>
            <ui-title class="hello-block__subtitle">
              Я <span class="pink">художник</span> и <br>
              графический <span class="pink">дизайнер</span>
            </ui-title>
          </div>
          <ui-avatar />
        </div>
    </ui-container>
  </section>
</template>

<style lang="scss">
.main-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url("~/assets/images/header_bg.png");
  background-size: cover;
  background-position: center;

  .hello-block {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 64px;
    padding-bottom: 64px;

    @include tablets {
      gap: 32px;
    }

    @include phones {
      flex-direction: column-reverse;
      gap: 16px;
    }

    &__text {
      text-align: right;

      @include phones {
        text-align: center;
      }
    }

    &__subtitle {
      margin-top: 32px;

      @include phones {
        margin-top: 16px;
      }
    }
  }
}
</style>