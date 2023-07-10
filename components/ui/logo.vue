<template>
  <img class="ui-logo" src="~/assets/logo/ap_logo.png" alt="Anna Papsueva Logo" />
</template>

<style lang="scss">
.ui-logo {
  height: 96px;

  @include tablets {
    height: 80px;
  }

  @include phones {
    height: 64px;
  }
}
</style>