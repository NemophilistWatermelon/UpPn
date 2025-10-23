<script setup>
import { useRouter } from 'vue-router'

  const router = useRouter()

  const onExit = function() {
    router.go(-1)
  }
</script>

<template>
  <div
   class="cd-container max-full max-full-5"
    v-if="!(['/', '/index'].includes(router.currentRoute.value.fullPath))">
    <span @click="onExit">
      cd ../
    </span>
  </div>
</template>


<style lang="scss" scoped>
.cd-container {
  margin-top: 14px;
  span {
    display: inline-block;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 3px;
    color: var(--half-gray-128);
    font-family: var(--common-font-family);
    border-bottom: 2px solid transparent;
    transition: .3s all ease;

    &:hover {
      color: var(--intro-h1);
      border-bottom: 2px solid;
    }
  }



}
</style>
