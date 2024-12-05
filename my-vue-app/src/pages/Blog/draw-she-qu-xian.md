# 这个页面这么画之
## 【蛇形曲线图带节点】

### 1. 图片

<img class="blog_img" src="./img/she-qu.jpg">

### html 结构
```html
 <div class="wrapper">
            <slot name="title"></slot>
            
            <div class="control_p_u">
            <main class="p_u">
               <template v-for="(item, index) in stepInfo">
                  <div class="dashe_line_box "
                  :class="getClassNameBy(item)"
                  >
                      <div class="node_txt">{{ item.name }} </div>
                      <div class="dashe_point"></div>
                      <div class="dashe_line"></div>
                      <div class="node_txt time">
                        <div class="l">处理人:</div>
                        <div class="r">{{ item.process_man }} </div>
                      </div>
                      <div class="node_txt time">
                         <div class="l">开始时间:</div>
                        <div class="r">{{ item.process_startTime }} </div>
                      </div>
                      <div class="node_txt time">
                         <div class="l">结束时间:</div>
                        <div class="r">{{ item.process_endTime }} </div>
                      </div>
                 </div>
               
                </template>
             </main>
            </div>
            
            
        </div>


```

### scss 结构 
```scss
@mixin flexStyle($align-items:unset, $justify-content:unset) {
  display: flex;
  align-items: $align-items;
  justify-content: $justify-content;
}


// U型流程信息组件样式
.control_p_u {
  margin-top: 10px;
  @include flexStyle(center, center)
}

.p_u {
  @include flexStyle();
  width: 602px;
  flex-wrap: wrap;

  .dashe_line_box {
    --activeColor: #11B254;
    --activeColorAlpha: rgba(17,178,84,0.2);

    &.noneHighlight {
      --activeColor: #A0ACAB;
      --activeColorAlpha: rgba(160,172,171,0.3);
    }

    &.stopList {
      &:before, &:after {
        content: unset !important
      }
      .dashe_line {
        border-color: transparent
      }
    }

    position: relative;
    width: 187px;
    height: 100%;
    &.assBorderLeft {
      &:before {
        position: absolute;
        content: '';
        width: 187px;
        height: 68px;
        left: -25px;
        top: -50%;
        border-left: 2px dashed var(--activeColor);
        border-radius: 35px 0px 35px 35px;
      }
    }


    &.assBorderRight {

      &:after {
        position: absolute;
        content: '';
        width: 187px;
        height: 77px;
        border-radius: 0 35px 35px 0;
        right: -25px;
        top: 50%;
        border-right: 2px dashed var(--activeColor);
      }
    }

    .dashe_line {
      width: 100%;
      height: 3px;
      border-top: 2px dashed var(--activeColor);
    }

    .node_txt {
      color: #454545;
      //margin-bottom: 5px;
      width: fit-content;
      padding: 6px;
      height: 30px;
      font-size: 14px;
      text-align: center;
      border-radius: var(--borderRadius);
      background-color: rgba(31,139,125,0.1);

      &.time {
        margin-top: 5px;
        text-align: left;
        width: 184px;
        background-color: unset;
      }
    }
    .dashe_point {
      --bR: 100%;
      --size: 12px;
      width: calc(var(--size) / 2);
      height: calc(var(--size) / 2);
      background-color: var(--activeColor);
      border-radius: var(--bR);
      position: relative;
      top: 4px;
      &:before {
        position: absolute;
        left: -50%;
        top: -50%;
        content: "";
        width: var(--size);
        height: var(--size);
        background: var(--activeColorAlpha);
        border-radius: var(--bR);
      }
    }
  }
} 

```
### vue
```js

let prop = {
  // props: {
  //   stepInfo: {
  //     type: Array,
  //     default: []
  //   }
  // },

  data() {
    return {
      stepInfo: [
        {
          name: 'xxxx',
          isActive: true, // 决定当前节点是否是高亮状态
          // OpeningDirection: false, // 开口方向
          process_man: 'xxxx',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
        },
        {
          name: 'xxxxx',
          process_man: '处理人',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // 决定当前节点是否是高亮状态
          // OpeningDirection: false, // 开口方向
        },


        {
          name: 'xxxxx',
          process_man: '处理人',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // 决定当前节点是否是高亮状态
          OpeningDirection: 'right', // 开口方向
        },

        {
          name: 'xxxx',
          process_man: '处理人',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // 决定当前节点是否是高亮状态
        },
        {
          name: 'xxxxx',
          process_man: '处理人',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // 决定当前节点是否是高亮状态
        },
        {
          name: '(xxxx)',
          process_man: '处理人',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // 决定当前节点是否是高亮状态
        },

        {
          name: '(xxxxx)',
          process_man: 'xxx',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // 决定当前节点是否是高亮状态
          OpeningDirection: 'left', // 开口方向
        },

        {
          name: 'xxxx',
          process_man: 'xxxx',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // 决定当前节点是否是高亮状态
          stopList: true,
        },



      ],
      OpeningDirection: {
        'left': 'assBorderLeft',
        'right': 'assBorderRight',
      }
    }
  },

  methods: {
    getClassNameBy(row) {
      let classNameArray = []
      if (!row.isActive) {
        classNameArray.push('noneHighlight')
      }

      if (row.OpeningDirection) {
        classNameArray.push(this.OpeningDirection[row.OpeningDirection])
      }

      if (row.stopList) {
        classNameArray.push('stopList')
      }


      return classNameArray
    }
  }
}




// 核心方法 TODO 待完善 (处理成想要的节点数据)

const nodeProcess = (arr) => {
  let jumpNum = 3;
  let jumpArray = [];
  // 开口方向
  let dir = ["right", "left"];
  let dirIndex = 0;

  for (let i = 0; i < arr.length; i += jumpNum) {
    jumpArray.push(arr.slice(i, i + jumpNum));
  }
  for (let i = 0; i < jumpArray.length; i++) {
    // 不够3个要前插入数据
    if (jumpArray[i].length < jumpNum) {
      for (let j = 0; j <= jumpNum - jumpArray[i].length; j++) {
        let o = Object.assign({}, {
          isOpacityZero: true,
        }, {
          // 拿有数据的内容进行填充
          ...jumpArray[i][jumpArray[i].length - 1],
        });
        jumpArray[i].push(o);
      }

      jumpArray[i].reverse();
    }

    let next = jumpArray[i + 1];
    if (next) {
      // 数组中的最后一个
      let last = jumpArray[i][jumpArray[i].length - 1];
      last.openDir = dir[dirIndex];

      dirIndex += 1;
      if (dirIndex > 1) {
        dirIndex = 0;
      }
    }
  }
  console.log(jumpArray);
};

let arr = [{
  node: "5",
},
  {
    node: "6",
  },
  {
    node: "7",
  },
  {
    node: "8",
  },
  {
    node: "9",
  },
  {
    node: "10",
  },
  {
    node: "11",
  },
  {
    node: "12",
  },
  {
    node: "13",
  },
  {
    node: "14",
  },
];
nodeProcess(arr);


```
