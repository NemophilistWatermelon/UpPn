<script setup>
import Git from './IconComponent/Git.vue'
import NightToLight from './NightToLight.vue'
</script>

<template>
  <a  href="https://github.com/NemophilistWatermelon" target="_brand">
    <Git class="icon" />
  </a>
  <NightToLight />

</template>


<style scoped lang="scss">
a {
  .icon {
    transition: color .3s ease;
      &:hover {
        color: var(--intro-h1);
      }
  }
}
</style>