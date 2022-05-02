<script setup>
import Title from '@/layout/Title/index.vue'
import ListItem from './Components/ListItem.vue'
import AdsIcon from './iconComponent/Ads.vue'

</script>

<template>
  <div class="max-full default-text">
    <Title title="Projects" />
    <div class="list-container max-full">
      <div class="catgory-name">分类 1</div>
      <div class="catgory-item">
        <ListItem 
        class="flex-1"
        :icon="AdsIcon"
          name="2323"
          desc="2323"
        />
        <ListItem 
        class="flex-1"
        :icon="AdsIcon"
          name="2323"
          desc="2323"
        />
         <ListItem 
        class="flex-1"
        :icon="AdsIcon"
          name="2323"
          desc="2323"
        />
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.list-container {
  margin: 1.8em;
}
.catgory-name {
  color: var(--half-gray-128);
  font-family: var(--inter-font-family);
  margin-bottom: .8em;
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