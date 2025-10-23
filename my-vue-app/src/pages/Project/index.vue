<script setup>
import Title from '@/layout/Title/index.vue'
import ListItem from './Components/ListItem.vue'
import Model from '@/model/PROJECT/index.js'
const Project = Model.readByKey('pro')

</script>

<template>
  <div class="max-full max-full-5 default-text mt-3">
    <Title title="Projects" />
    <div
      class="list-container max-full"
      :key="index"
      v-for="(pro, index) in Project"
    >
      <div class="catgory-name">
        {{ pro.capName }}
      </div>
      <div class="catgory-item">
        <ListItem
          :key="idx"
          v-for="(item, idx) in pro.capList"
          class="flex-1"
          :url="item.url"
          :icon="item.icon"
          :name="item.name"
          :desc="item.desc"
        />

      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

.list-container {
  position: relative;
  margin-top: 2.3em;
  padding: 0 0.3em;
  box-sizing: border-box;
}
.catgory-name {
  color: #eee;
  font-family: var(--inter-font-family);
  margin-bottom: .8em;
  position: absolute;
  top: -15px;
  left: -10px;
  z-index: -1;
  font-size: 50px;
  -webkit-text-stroke: 1px var(--stroke-text-color);
  white-space: nowrap;
  -webkit-text-fill-color: transparent;
}
.catgory-item {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
}

@media screen and (max-width: 768px) {
  .catgory-item {
    grid-template-columns: unset;
  }
}
</style>
