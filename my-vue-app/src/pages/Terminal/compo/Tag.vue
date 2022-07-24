<template>
  <div class="tag" :class="{
    [status]: status
  }">
    {{ info }}
  </div>
</template>

<script>
export default {
  name: "Tag.vue",

  props: {
    status: {
      type: String
    },
    info: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
$success-color: #09e309;
$error-color: #ff7979;
$common-color: #5e0202;

.tagPadding {
  padding: 2px;
  border-radius: 3px;
  font-size: 12px;
}

.success {
  color: $common-color;
  background-color: $success-color;
  outline: 1px solid $success-color;
  @extend .tagPadding;
}

.error {
  color: $common-color;
  background-color: $error-color;
  outline: 1px solid $error-color;
  @extend .tagPadding;
}

</style>