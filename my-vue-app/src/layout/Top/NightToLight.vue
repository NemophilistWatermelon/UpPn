<script>
import Light from './Light.vue'
import Night from './Night.vue'
import { usePreferredColorScheme } from '@vueuse/core'

export default defineComponent({
  name: 'SunCutNight',
  components: {
    Light,
    Night,
  },


  setup() {
    const preferredColor = usePreferredColorScheme()
    const currentTheme = ref(true)

    /* 设置根元素的换肤属性 */
    function addBodyAttr(mode, removeClass) {
      document.documentElement.setAttribute(mode, mode)
      document.documentElement.removeAttribute(removeClass)
    }


    function onThemeCut() {
      nextTick(_ => {
          setTimeout(() => {
            changeMode(preferredColor.value) 
            currentTheme.value = preferredColor.value            
          }, 100);
      })
      window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
        console.log('运行')
        nextTick(_ => {
          setTimeout(() => {
            changeMode(preferredColor.value)            
          }, 100);
        })
      })
    }

    /* 点击图标换肤 */
    function changeMode(mode) {
      const modeMap = {
        light: _ => {
          currentTheme.value = 'light'
          addBodyAttr('light', 'night')
        },
        dark: _ => {
          currentTheme.value = 'dark'
          addBodyAttr('night', 'light')
        },
        'no-preference': _ => {
          currentTheme.value = 'light'
          addBodyAttr('light', 'night')
        }
      }
      return modeMap[mode]()
    }


    function __main() {
      onThemeCut()
    }

    __main()

    return {
      preferredColor,
      changeMode,
      currentTheme,
    }
  }
})
</script>

<template>
  <div class="s-c-n">
    <Light
      class="icon-size half-gray-128"
     @click="changeMode('dark')"
      v-if="currentTheme === 'light'"
    />
    
    <Night
      class="icon-size half-gray-128"
     @click="changeMode('light')" 
     v-if="currentTheme === 'dark'" 
    />
  </div>
</template>

<style scoped lang="scss">
.icon-size {
  font-size: var(--cut-theme-font-icon-size);
  .half-gray-128 {
    color: var(--half-gray-128);
  }
}
</style>