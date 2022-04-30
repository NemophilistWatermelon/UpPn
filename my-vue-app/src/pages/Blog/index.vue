<script>
  import Clock from './IconCompoent/Clock.vue'

  export default defineComponent({
    name: 'BlogItem',

    components: {
      Clock
    },
  })
</script>

<template>
  <div class="max-full">
    <div class="post-item" v-for="item in 10">
      <RouterLink to="/Blog">惊呆!竟然还可以这样写</RouterLink>
      <div class="other"> 
        <span>Feb 19 · <span class="readTime">1min</span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-item {
  padding: 10px;
  .readTime {
    color: #7a7a7a;  
  }

  &:hover {
    * {
      opacity: .95;
    }
  }
  ::v-deep {
    a {
      font-size: 18px;
    }
  }
  * {
    opacity: .75;
    transition: all 1s;
    color: var(--half-gray-128);
    vertical-align: middle; 
  }
  .other {
    margin-top: 3px;
  }
}
</style>