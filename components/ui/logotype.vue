<template>
  <img class="ui-logotype" src="~/assets/logo/ap_logotype.png" alt="Anna Papsueva Logotype" />
</template>

<style lang="scss">
.ui-logotype {
  height: 48px;

  @include tablets {
    height: 40px;
  }

  @include phones {
    height: 32px;
  }
}
</style>