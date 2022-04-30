<script setup>
import { useRouter } from 'vue-router'

  const router = useRouter()

  const onExit = function() {
    router.go(-1)
  }
</script>

<template>
  <div
   class="cd-container max-full" 
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
    font-family: var(--sytem-font);
    border-bottom: 1px solid transparent;
    transition: .3s all ease-in;

    &:hover {
      border-bottom: 1px solid;
    }
  }
  

  
}
</style>