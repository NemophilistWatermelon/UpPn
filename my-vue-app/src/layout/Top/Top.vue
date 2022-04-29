
<script>
import Logo from './Logo.vue'
import NightToLight from './NightToLight.vue'

export default defineComponent({
  name: 'Top',
  components: {
    Logo,
    NightToLight,
  }
})
</script>

<template>
  <div class="top-container">
    <div class="l">
      <Logo class="Logo"></Logo>
    </div>
    <div class="r">
      <NightToLight class='icon-size'/>
    </div>
  </div>
</template>



<style lang="scss">
.top-container {
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 3px 0 #eee;
  box-sizing: border-box;
  background-color: var(--nav-bg-color);
  .l {
    padding-left: 55px;

    .Logo {
      font-size: 36px;
    }
  }
  .r {
    padding-right: 15px;
  }
}
</style>