<template>
  <div class='main'>
    <Sidebar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang='ts'>
import Sidebar from './components/sidebar/sidebar.vue';

</script>

<style scoped>
.main {
  height: 100%;
  display: flex;
  column-gap: 24px;
}
</style>
