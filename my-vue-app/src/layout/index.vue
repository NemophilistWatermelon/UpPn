<script>
import Top from './Top/Top.vue'
import Nav from './Nav/index.vue'
export default defineComponent({
  name: 'TopHead',

  components: {
    Top,
    Nav
  }
})
</script>

<template>
  <div class="layout-container">
    <Top />
    <Nav />
    <router-view></router-view>
  </div>
</template>