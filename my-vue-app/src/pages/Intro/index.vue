
<script setup>

  const mineRef = ref()
  const readmd = async function(callback) {
    callback(await import('./mine.md'))
  }

  readmd(target => {
    mineRef.value = target.html
  })
  

</script>
<template>
  <div class="max-full intro-container" >
    <div v-html="mineRef"></div>
  </div>
</template>


<style lang="scss" scoped>
.intro-container {
  padding: 1.2em;
  box-sizing: border-box;
  font-family: var(--inter-font-family);
  ::v-deep {
    p {
      margin-top: 2em;
      color: var(--half-gray-128);
    }
    
    a {
      color: var(--md-h1-color);
    }

    .keyword {
      color: var(--md-h1-color);
    }

    ul {
      color: var(--half-gray-128);
      margin-top: 10px;
      font-family: var(--common-font-family);
      margin-left: 1.5em;
    }
    p {
        font-family: 'inter var', 'sans-serif';
        line-height: 1.6;
        letter-spacing: 1px;
      }
    h1 {
      font-size: var(--intro-h1-size);
      color: var(--intro-h1);
    }
  }
  
}
</style>