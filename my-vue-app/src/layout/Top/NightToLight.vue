<script>
import Light from './Light.vue'
import Night from './Night.vue'

export default defineComponent({
  name: 'SunCutNight',
  components: {
    Light,
    Night,
  },
  setup() {
    function addBodyClass(mode, removeClass) {
      document.documentElement.setAttribute(mode, mode)
      document.documentElement.removeAttribute(removeClass)
    }
    addBodyClass('light', 'night')

    let currentMode = ref('light')
    console.log(2323)
    function changeMode() {
      if (currentMode.value === 'light') {
        currentMode.value = 'night'
        addBodyClass('night', 'light')
      } else {
        currentMode.value = 'light'
        addBodyClass('light', 'night')
      }
    }

    return {
      currentMode,
      changeMode,
    }
  }
})
</script>

<template>
  <div class="s-c-n">
    <Light
      class="icon-size"
     @click="changeMode"
      v-if="currentMode === 'light'"
    />
    
    <Night
      class="icon-size"
     @click="changeMode" 
     v-if="currentMode === 'night'" 
    />
  </div>
</template>

<style scoped lang="scss">
.icon-size {
  font-size: 24px;
}
</style>