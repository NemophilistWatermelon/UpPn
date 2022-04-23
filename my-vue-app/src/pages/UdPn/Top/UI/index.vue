<script lang="ts" setup>
  import {ref, defineProps, withDefaults} from 'vue'
  const prop = defineProps({
    normalText: String
  })
  let bool = ref(false)
  let BindText = ref('')
  console.log(prop)

  function onInputChange(e) {
    if (e !== prop.normalText) {
      bool.value = true
      return
    }
    return bool.value = false
  }

</script>

<template>
  <div class="ui-item">
    <section>文字</section>
    <el-input @input="onInputChange" v-model="BindText"></el-input>
    <span v-if="bool">输错了</span>
    <span v-else>Yep! you win</span>
  </div>
</template>


<style scoped lang="scss">
.ui-item {
  width: 100px;
  height: 100px;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  outline: 1px solid red;
}
</style>