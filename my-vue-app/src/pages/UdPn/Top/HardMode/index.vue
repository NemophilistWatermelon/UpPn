<script>
export default defineComponent({
  name: 'HardMode',
  setup() {
    var rightInput = reactive({
      setArr: []
    })
    var leftInput = ref([])
    var equalInputIndex = ref(new Set())
    var unoEqualInputIndex = ref(new Set())

    function resetData() {
      if (!leftInput && !rightInput.setArr.length) {
        equalInputIndex.value = []
        return false
      }
      return true
    }

    function resetEqualInputIndex() {
      equalInputIndex.value = new Set()
      unoEqualInputIndex.value = new Set()
    }

    /* 赋值框中大段文字切割 */
    function onRightInput(event) {
      const value = event.target.value
      rightInput.setArr = value.split('')
    }

    /* 比较输入文字与复制文字是否相同 */
    function onLeftInputEqual() {
      resetEqualInputIndex()
      if (resetData()) {
        var splitInputText = leftInput.value.split('')
        splitInputText.forEach((text, index) => {
          if (rightInput.setArr[index] == text) {
            equalInputIndex.value.add(index)
          } else {
            unoEqualInputIndex.value.add(index)
          }
        })
      }
      
    }

    return {
      onRightInput,
      rightInput,
      leftInput,
      equalInputIndex,
      unoEqualInputIndex,
      onLeftInputEqual,
    }
  }
})
</script>


<template>
    输入正确的下标 {{ equalInputIndex }}
    <hr/>
   输入错误的下标 {{ unoEqualInputIndex }}
   {{ unoEqualInputIndex.size ? '😢 you are wrong' : '😁 you are right' }}
     <hr/>
    <div class="container" >
       <div class="right">
        <span>一段话</span>
        <textarea @input="onRightInput" name="" id="" cols="30" rows="10"></textarea>
        <div class="item" v-if="rightInput.setArr.length">
          <span 
          :class="[equalInputIndex.has(index) ? 'curTxt-active' : '', unoEqualInputIndex.has(index) ? 'curTxt-wrong' : '']"
          class="idx-item"
           v-for="(item, index) in rightInput.setArr">
            {{item}}
          </span>
        </div>
      </div>
      <div class="left">
        <span>追上一段话</span>
        <el-input 
        type="textarea"
        rows="5"
        v-model="leftInput"
        @input="onLeftInputEqual"
        >
        </el-input>
      </div>
    </div>
</template>


<style lang="scss" scoped>
.container {
  display: flex;
  width: 600px;
  margin: auto;
  .left, .right {
    width: 300px;
    outline: 1px solid;
  }
  .right {
    .idx-item {
      display: inline-block;
      padding: 5px;
      margin: 5px;
      background-color: #fafafa;
      &.curTxt-active {
        color: green
      }
      &.curTxt-wrong {
        color: red;
      }
    }
  }
}
</style>