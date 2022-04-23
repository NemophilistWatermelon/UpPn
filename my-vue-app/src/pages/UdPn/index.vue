<template>
  <div>
    <Top />
    <Botom />
  </div>
</template>


<script>
import { defineComponent } from 'vue'
import Top from './Top/index.vue'
import Botom from './Botom/index.vue'

export default defineComponent({
  name: 'udpn',
  components: {
    Top,
    Botom
  },
  setup() {
    console.log(1212121)
  }
})
</script>