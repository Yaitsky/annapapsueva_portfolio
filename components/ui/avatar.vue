<template>
  <img class="ui-avatar" src="~/assets/images/ap_avatar.png" alt="Anna Papsueva Avatar" />
</template>

<style lang="scss">
.ui-avatar {
  width: 560px;

  @include tablets {
    width: 400px;
  }

  @include phones {
    width: 280px;
  }
}
</style>