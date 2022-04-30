<script setup>
</script>

<template>
  <router-view></router-view>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body,
  #app {
    /* display: flex; */
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: auto;
    background-color: var(--bg-color);
  }
#nprogress .bar {
  height: var(--ngprogress-bar-height) !important;
  background: var(--ngprogress-bar-color) !important;
}
</style>
