<script>
  import { defineComponent, reactive, ref} from 'vue'
  export default defineComponent({
    name: 'UI',
    setup() {
      let BindText = ref('BindText')

      return {
        BindText
      }
    }
  })
</script>

<template>
  <div class="ui-item">
    <section>文字</section>
    <el-input v-model="BindText"></el-input>
  </div>
</template>


<style scoped lang="scss">
.ui-item {
    width: 100px;
    height: 100px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
}
</style>