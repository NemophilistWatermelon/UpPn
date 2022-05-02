<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const onClickJump = function() {
    router.push({
      path: '/'
    })
  }
</script>

<template>
  <img @click="onClickJump" src="./img/self.png" alt="">
</template>

<style lang="scss" scoped>
img {
  cursor: pointer;
  width: 8em;
  height: 5em;
  filter: var(--logo-filter-color);
}

</style>