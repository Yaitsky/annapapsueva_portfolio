<template>
  <img class="ui-avatar" src="~/assets/images/ap_avatar.png" alt="Anna Papsueva Avatar" />
</template>

<style lang="scss">
.ui-avatar {
  width: 480px;

  @include tablets {
    width: 360px;
  }

  @include phones {
    width: 280px;
  }
}
</style>