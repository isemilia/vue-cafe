<template>
  <div class='sidebar-item' :class='{"sidebar-item--active": props.isActive}'>
    <div class='sidebar-item-edge sidebar-item-edge--top' aria-hidden='true'></div>
    <div class='sidebar-item-edge sidebar-item-edge--bottom' aria-hidden='true'></div>

    <div class='sidebar-item-button'>
      <div class='sidebar-item-icon'>
        <component :is='props.icon' />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { Component } from 'vue';

const props = defineProps<{ icon: Component, isActive?: boolean }>();
</script>

<style lang='scss'>
.sidebar {
  &-item {
    --icon-color: var(--clr-accent-primary);
    --item-color: transparent;
    --button-color: transparent;

    --button-size: var(--sidebar-button-size);
    --item-size: 80px;

    position: relative;
    width: calc(var(--item-size) + 12px);
    height: var(--item-size);
    padding: 12px;
    border-radius: 12px 0 0 12px;
    margin-right: -12px;

    &--active {
      --icon-color: var(--clr-neutral-primary);
      --item-color: var(--bg-surface-primary);
      --button-color: var(--clr-accent-primary);

      background: var(--item-color);

      .sidebar-item {
        &-edge {
          position: absolute;
          width: 12px;
          height: 12px;
          background: var(--item-color);

          &::before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            background: var(--bg-surface-dark);
          }

          &--top {
            right: 0;
            top: -12px;

            &::before {
              border-radius: 0 0 12px 0;
            }
          }

          &--bottom {
            right: 0;
            bottom: -12px;

            &::before {
              border-radius: 0 12px 0 0;
            }
          }
        }
      }
    }

    &-button {
      cursor: pointer;
      width: var(--button-size);
      height: var(--button-size);
      display: grid;
      place-content: center;
      border-radius: 8px;
      background: var(--button-color);
    }

    &-icon {
      color: var(--icon-color) !important;
    }
  }
}
</style>