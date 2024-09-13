<template>
  <aside class='sidebar'>
    <div class='sidebar-header'>
      <SidebarLogo />
    </div>

    <div class='sidebar-main'>
      <SidebarItem :icon='HomeIcon' :isActive='true' />
      <SidebarItem :icon='GraphIcon' />
      <SidebarItem :icon='SettingsIcon' />
    </div>

    <div class='sidebar-footer'>
      <div class='sidebar-button'>
        <div class='sidebar-button-icon'>
          <LogoutIcon />
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang='ts'>
import HomeIcon from './icons/home-icon.vue';
import SidebarItem from '../sidebar-item/sidebar-item.vue';
import SettingsIcon from './icons/settings-icon.vue';
import SidebarLogo from '../sidebar-logo/sidebar-logo.vue';
import LogoutIcon from './icons/logout-icon.vue';
import GraphIcon from './icons/graph-icon.vue';
</script>

<style scoped lang='scss'>
.sidebar {
  --sidebar-py: 24px;
  --sidebar-px: 12px;

  --sidebar-button-size: 56px;

  padding: var(--sidebar-py) var(--sidebar-px);
  width: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-surface-dark);
  border-radius: 0 16px 16px 0;

  &-button {
    cursor: pointer;
    display: grid;
    place-content: center;
    width: var(--sidebar-button-size);
    height: var(--sidebar-button-size);
    color: var(--clr-accent-primary);
    border-radius: 8px;
  }
}
</style>