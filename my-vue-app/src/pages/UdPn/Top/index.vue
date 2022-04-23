
<script>
import { defineComponent } from 'vue'
import UI from './UI/index.vue'  
console.log(UI)
export default defineComponent({
  name: 'Top',
  
  components: {
    UI,
  },

  setup() {
  }
})
</script>

<template>
  <div class="top-container">
    <div class="item">
      <UI normalText="ddddd"></UI>
    </div>
  </div>
</template>
