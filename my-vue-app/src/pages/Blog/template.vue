<script >
export default defineComponent({
  name: 'template',
  
  setup() {
    const route = useRoute()
    const str = ref()
    
    const unMdByRoute = async function(callback) {
      const mdhtml =  import(/* @vite-ignore */ `./${route.params.md}.md`)
      callback(await mdhtml)
    }
    unMdByRoute(target => {
      console.log(target.html)
      str.value = target.html
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
    background-color: #c7c7c7;
    padding: 15px 10px;
    border-radius: 4px;

    ::v-deep h1 {
    }
  }
</style>