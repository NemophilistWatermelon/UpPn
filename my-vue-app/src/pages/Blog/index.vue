<script>
  import Clock from './IconCompoent/Clock.vue'
  import Title from '@/layout/Title/index.vue'
  import NullMessage from './Components/NullMessage.vue'
  import ModelBolg from '@/model/BLOG/index.js'

  export default defineComponent({
    name: 'BlogItem',

    components: {
      Clock,
      Title,
      NullMessage
    },

    setup() {
      /* 定义 Blog 数据 */
      const Blog = reactive({
        // 标题
        blogCat: ModelBolg.readKey(),
        // 当前高亮
        currentTag: '',
        // 当前高亮对应的 blog 数据
        currentBlog: []
      })
      Blog.currentTag = Blog.blogCat[0]


      const readBlogDataByKey = function(key) {
        Blog.currentTag = key
        Blog.currentBlog = ModelBolg.readByKey(key)
      }

      readBlogDataByKey(Blog.currentTag)


      return {
        Blog,
        readBlogDataByKey
      }
    }
  })
</script>

<template>
  <div class="max-full mt-3">
    <Title title="Blogs"></Title>
    <div class="title-wrap">
      <Title 
        v-for="(item, index) in Blog.blogCat" 
        :key="index"
        @click="readBlogDataByKey(item)"
        class="title-item" 
        :class="Blog.currentTag === item ? 'active' : ''"
        :title="item" 
      />
    </div>

    <template v-if="Blog.currentBlog.length">
      <div class="post-item" v-for="item in Blog.currentBlog">
        <RouterLink :to="'/posts/' + item.path ">{{ item.name}}</RouterLink>
        <div class="other"> 
          <span>{{ item.time }} · <span class="readTime">{{ item.readTime }}</span></span>
        </div>
    </div>
    </template>

    <template v-else>
      <NullMessage />
    </template>
    
  </div>
</template>

<style lang="scss" scoped>
.title-wrap {
  display: flex;
  gap: 1em;
  margin: .5em 0;
  .title-item {
    cursor: pointer;
    font-size: 1em;
    color: var(--half-gray-128);
    transition: .3s color ease;
    &.active, 
    &:hover {
      color: var(--intro-h1)
    }
  }
}
.post-item {
  padding: 10px;
  margin-bottom: 15px;
  font-family: var(--common-font-family);
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
    font-family: var(--common-font-family);
  }
  .other {
    margin-top: 3px;
  }
}
</style>