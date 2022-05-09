<script >

import { markdown } from './wordsReducer'
export default defineComponent({
  name: 'template',
  
  setup() {
    const route = useRoute()
    const str = ref()

    const unMdByRoute = async function(callback) {
      const allFile = import.meta.glob('./*')
      log({
        allFile,
        meta: import.meta
      })
      const mdFile = import.meta.glob('./*.md')
      const mdhtml = mdFile[`./${route.params.md}.md`]()
      callback(await mdhtml)
    }
    unMdByRoute(target => {
      var html = markdown(target.html)
      str.value = html
    })
    return {
      str
    }
  },
})
</script>

<template>
  <div class="template-container max-full" v-html="str">

  </div>
 
</template>



<style lang="scss" scoped>
  .template-container {
    padding: 15px 10px;

    ::v-deep  {
      h1 {
        font-size: 2.25em;
        font-weight: 800;
        color: var(--md-h1-color);
        font-family: var(--md-sytem-font);
      }
      
      li,
      p,
      h2, 
      h3,
      h4,
      h5,
      h6 {
        color: var(--half-gray-128);
      }


      code {
        overflow: auto;
        display: block;
        margin: 20px 0;
        // min-height: 13em;
        color: #fff;
        padding: 5px;
        background: var(--md-code-bg);
      }
    

  
    }
  }
</style>