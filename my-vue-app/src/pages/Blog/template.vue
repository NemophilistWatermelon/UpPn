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
  <div class="template-container" v-html="str">

  </div>
 
</template>