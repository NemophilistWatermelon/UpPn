<script>
  import Clock from './IconCompoent/Clock.vue'

  export default defineComponent({
    name: 'BlogItem',

    components: {
      Clock
    },

    setup() {
      const mdRouter = reactive({
        BlogRoute: [
          {
            path: 'bar',
            name: 'self',
            text: '惊呆! ',
            time: 'Feb 19',
            readTime: '1min'
          }
        ]
      })

      return {
        mdRouter
      }
    }
  })
</script>

<template>
  <div class="max-full">
    <div class="post-item" v-for="item in mdRouter.BlogRoute">
      <RouterLink :to="'/posts/' + item.path ">{{ item.text}}</RouterLink>
      <div class="other"> 
        <span>{{ item.time }} · <span class="readTime">{{ item.readTime }}</span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-item {
  padding: 10px;
  margin-bottom: 15px;
  
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