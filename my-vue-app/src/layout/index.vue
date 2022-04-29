<script>
import Top from './Top/Top.vue'
export default defineComponent({
  name: 'TopHead',

  components: {
    Top
  }
})
</script>

<template>
  <div class="layout-container">
    <Top />
    <router-view></router-view>
  </div>
</template>