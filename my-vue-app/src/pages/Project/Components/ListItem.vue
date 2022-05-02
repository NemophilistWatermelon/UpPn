<template>
  <div class="list-item default-text">
    <component class="default-text fz-12" :is="$attrs.icon"></component>
    <div class="box-item">
      <p class="name"> {{ $attrs.name }}</p>
      <p class="desc">{{ $attrs.desc }}</p>
    </div>
  </div>

</template>


<style scoped lang="scss">
.list-item {
  display: flex;
  align-items: center;
  padding: 0.8em 1em;
  transition: all 1s;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: var(--hover-bg-color);
  }
  .fz-12 {
    font-size: 3.8em;
  }
  .box-item {
    margin-left: 1em;
    .name {
      font-size: 1.3em;
      display: inline-block;
      margin-bottom: 0.3em;
      color: var(--item-name-color);
    }
    .desc {
      opacity: .65;
    }
  }
}
</style>