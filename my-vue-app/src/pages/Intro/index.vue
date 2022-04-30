
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
  ::v-deep {
    p {
      margin-top: 2em;
      color: var(--intro-h1);
    }

    .keyword {
      color: var(--half-gray-128);
    }

    ul {
      color: #fff;
      margin-top: 10px;
    }
    p {
        font-family: system-ui;
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