<script>
import Top from './Top/Top.vue'
import Nav from './Nav/index.vue'
import Bottom from './Bottom/index.vue'
export default defineComponent({
  name: 'TopHead',

  components: {
    Top,
    Nav,
    Bottom
  }
})
</script>

<template>
  <div class="layout-container">
    <Top />
    <Nav />
    <router-view></router-view>
    <Bottom />
  </div>
</template>