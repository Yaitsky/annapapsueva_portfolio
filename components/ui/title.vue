<script setup>
defineProps({
  type: {
    type: String,
    validator: value => ['title', 'subtitle', 'section'].includes(value),
    default: 'subtitle'
  },
  color: {
    type: String,
    validator: value => ['text', 'caption'].includes(value),
    default: 'text'
  },
  centered: {
    type: Boolean,
    default: false
  },
  underline: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="`ui-title ${color} ${centered ? 'centered' : ''} ${underline ? 'underline' : ''}`">
    <h1 v-if="type === 'title'">
      <slot />
    </h1>
    <h2 v-else-if="type === 'subtitle'">
      <slot />
    </h2>
  </div>
</template>

<style lang="scss">
.ui-title {
  position: relative;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 64px;
    margin: 0;

    @include tablets {
      font-size: 40px;
      line-height: 56px;
    }

    @include phones {
      font-size: 28px;
      line-height: 42px;
    }
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    margin: 0;

    @include tablets {
      font-size: 28px;
      line-height: 42px;
    }

    @include phones {
      font-size: 24px;
      line-height: 36px;
    }
  }

  &.text {
    color: var(--text);
  }

  &.caption {
    color: var(--caption);
  }

  span.pink {
    color: var(--pink);
  }

  &.centered {
    text-align: center;
  }

  &.underline {
    &:after {
      content: '';
      display: block;
      height: 4px;
      position: absolute;
      background-color: var(--pink);
      bottom: -8px;
      width: 100%;
    }
  }
}
</style>