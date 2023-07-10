<script setup>
defineProps({
  type: {
    type: String,
    validator: value => ['body', 'small'].includes(value),
    default: 'body'
  },
  color: {
    type: String,
    validator: value => ['text', 'caption', 'pink'].includes(value),
    default: 'text'
  }
})
</script>

<template>
  <div :class="`ui-text ${color} ${type}`">
    <slot />
  </div>
</template>

<style lang="scss">
.ui-text {
  &.body {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;

    @include phones {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &.small {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    @include phones {
      font-size: 14px;
      line-height: 18px;
    }
  }

  &.text {
    color: var(--text);
  }

  &.caption {
    color: var(--caption);
  }

  &.pink {
    color: var(--pink);
  }
}
</style>