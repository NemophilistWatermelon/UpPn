
<script>
// import Logo from './Logo.vue'
import Nav from '@/layout/Nav/index.vue'
import LogoV2 from './LogoV2.vue'
export default defineComponent({
  name: 'Top',
  components: {
    // Logo,
    Nav,
    LogoV2,
  }
})
</script>

<template>
  <div class="top-container">
    <div class="l">
      <!-- <Logo class="Logo"></Logo> -->
      <LogoV2 />
    </div>
    <div class="r">
      <Nav />
    </div>
  </div>
</template>



<style lang="scss">
.top-container {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  box-sizing: border-box;
  // background-color: var(--bg-color);
  .l {
    padding-left: .3em;

    .Logo {
      font-size: 36px;
      color: var(--half-gray-128);
    }
  }
}
</style>