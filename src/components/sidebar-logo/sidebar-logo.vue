<template>
  <div class='sidebar-logo'>
    <div class='sidebar-logo-icon'>
      <Logo />
    </div>
  </div>
</template>

<script setup lang='ts'>
import Logo from './icons/logo.vue';
</script>

<style scoped lang='scss'>
.sidebar {
  &-logo {
    width: var(--sidebar-button-size);
    height: var(--sidebar-button-size);
    border-radius: 12px;
    background: color-mix(in srgb, var(--clr-accent-primary-light), transparent 74%);
    display: grid;
    place-content: center;
    margin: 0 0 26px 0;
  }
}
</style>