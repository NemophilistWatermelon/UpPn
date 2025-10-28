<script >
import {ElMessage} from "element-plus";
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'template',

  setup() {
    const route = useRoute()
    const str = ref()
    const reactive_store = reactive({
      isFull: false,
    })

    if (route.query.maxFull) {
      reactive_store.isFull = true
    }

    const delay = async ms => {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    }

    const unMdByRoute = async function(callback) {
      // const allFile = import.meta.glob('./*')
      let mdFile = import.meta.glob('./*.md')
      let mdPath = route.params.md
      // 多层级嵌套
      if (route.params.md.length > 1) {
        mdPath = route.params.md.join('/')
      }
      // 多层级嵌套
      if (!mdFile[`./${mdPath}.md`]) {
        mdFile = import.meta.glob('./**')
      }
      const mdhtml = mdFile[`./${mdPath}.md`]()
      callback(await mdhtml)
    }

    const expJSON = {
      '````加粗文本': {
        start: '',
        end: '',
      },
    }

    // 解析md内容 替换特定html
    const pluginExp = (html1, startStr, endStr1) => {
      if (!expJSON[startStr]) return html1
      let str = `<p>${startStr}`
      let endStr = `${endStr1}</p>`
      html1 = html1.replace(new RegExp(str, 'gm'), expJSON[startStr].start)
      html1 = html1.replace(new RegExp(endStr, 'gm'), expJSON[startStr].end)
      return html1
    }

    unMdByRoute(async target => {
      // var html = markdown(target.html)
      str.value = pluginExp(target.html, 'bbb加粗文本', 'bbb')
      await delay(1000)
      addCopy()
    })

    /**
     * 给模板添加复制方法
     */
    const addCopy = () => {
      let cp_btns = document.querySelectorAll('.template-container .cp_btn')
      Array.from(cp_btns).forEach(item => {
        item.onclick = (ev) => {
          ev.stopPropagation()
          ev.preventDefault()

          let codeNum = item.dataset.code
          let parentEle = item.parentElement
          let code = parentEle.querySelector(`code[js-code-block="${codeNum}"]`)
          navigator.clipboard.writeText(code.innerText)

          ElMessage.success('复制成功☺️')
        }
      })
    }

    return {
      str,
      reactive_store
    }
  },
})
</script>

<template>
  <div class="template-container"
       :class="[
           {'max-full': reactive_store.isFull},
           {'max-full-5': !reactive_store.isFull}
       ]"
       v-html="str"
       v-highlight
  >
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
        //background: var(--md-code-bg);
      }



    }
  }
</style>
