<script >
    import Editor from '../Editer.vue'
    export default {
        name: 'CreateCodeMapByJson',
        components: {
            Editor 
        },
        setup() {
            let inputVal = ref(`{
    "main": "批量撒点代码",
    "地图触发prop": "getMap",
    "批量遍历对象": "data",
    "坐标参数是": "coords",
    "撒点类型是": "point",
    "产生地图层级是": "point-level",
    "是否需要清除其他图层": "false"
}`)
            let outputVal = ref('23233')
                /**
                 *  {
                 *      main: '批量撒点代码',
                 *      地图触发prop: 'getMap',
                 *      批量遍历对象: 'data',
                 *      坐标参数是: 'coords',
                 *      撒点类型是: 'point'
                 *  }
                 */

            const codeMap = {
                '批量撒点代码': (args) => {
                    let mapProp = args.地图触发prop || 'getMap'

                   return  `
 let paramList = []

for (let i = 0; i < data; i++) {
    let item = data[i]
    let coords = item[coords]

    paramList.push({
        coords: coords,
    })
}

const param = {
    type: 'point',
    clearOld: 'false',
    operationLevel: 'point-level',
    symbol: {
        type: 'simple-fill',
        color: [255, 255, 0, 0.8],
        outline: {
            color: [0, 0, 255, 0.8],
            width: "3px"
        },
    },
    data: paramList,
}



this.$bus.$emit(getMap, (win) => {
    win._showGraphicsByDataJson(param)
})

                    `
                }
            }

            const onUpdate = function(val) {
                try {
                var code = JSON.parse(val)
                outputVal.value = codeMap[code.main](code)
                console.log(outputVal.value)
                } catch (error) {
                    throw Error('错误' + error)
                }
            }

            onUpdate(inputVal.value)

            return {
                inputVal,
                outputVal,
                onUpdate,
            }
        }
    }
</script>

<template>
<div class="flex-wrap">
    <Editor
        :language="'json'"
        @update:value="onUpdate"
        class="editor" 
        :value="inputVal" 
        />

    <Editor 
        :language="'javascript'"
        class="editor"  
        :value="outputVal" />
</div>
</template>


<style lang="scss" scoped>
.flex-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    gap: 10px;
    .editor {
        height: 80vh;
        flex-basis: 50%;
    }
}
</style>