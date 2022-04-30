<script>
import Top from './Top/Top.vue'
import Nav from './Nav/index.vue'
import Bottom from './Bottom/index.vue'
import unoDirectionBall from './Background/unoDirectionBall.vue'
export default defineComponent({
  name: 'TopHead',

  components: {
    Top,
    Nav,
    Bottom,
    unoDirectionBall
  }
})
</script>

<template>
  <div class="layout-container">
    <Top />
    <Nav />
    <router-view></router-view>
    <Bottom />
    <unoDirectionBall />
  </div>
</template>