<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(5)
</script>

<template>
  <div class="container">
    <router-link to="/home">首页</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
