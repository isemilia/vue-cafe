<template>
  <aside class='sidebar'>
    <div class='sidebar-logo'>
      <div class='sidebar-logo-icon'>
        <Logo />
      </div>
    </div>
    <SidebarItem :icon='HomeIcon' :isActive='true' />
    <SidebarItem :icon='SettingsIcon' />
  </aside>
</template>

<script setup lang='ts'>
import HomeIcon from './img/home-icon.vue';
import Logo from './img/logo.vue';
import SidebarItem from '../sidebar-item/sidebar-item.vue';
import SettingsIcon from './img/settings-icon.vue';
</script>

<style scoped lang='scss'>
@use 'sass:color';

.sidebar {
  --sidebar-py: 24px;
  --sidebar-px: 12px;

  padding: var(--sidebar-py) var(--sidebar-px);
  width: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-surface-dark);
  border-radius: 0 16px 16px 0;

  &-logo {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    background: color-mix(in srgb, var(--clr-accent-primary-light), transparent 74%);
    display: grid;
    place-content: center;
    margin: 0 0 26px 0;

    &-icon {

    }
  }
}
</style>