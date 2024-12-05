const n={},t=`<h1>\u8FD9\u4E2A\u9875\u9762\u8FD9\u4E48\u753B\u4E4B</h1>
<h2>\u3010\u86C7\u5F62\u66F2\u7EBF\u56FE\u5E26\u8282\u70B9\u3011</h2>
<h3>1. \u56FE\u7247</h3>
<img class="blog_img" src="./img/she-qu.jpg">
<h3>html \u7ED3\u6784</h3>
<pre><code class="language-html"> &lt;div class=&quot;wrapper&quot;&gt;
            &lt;slot name=&quot;title&quot;&gt;&lt;/slot&gt;
            
            &lt;div class=&quot;control_p_u&quot;&gt;
            &lt;main class=&quot;p_u&quot;&gt;
               &lt;template v-for=&quot;(item, index) in stepInfo&quot;&gt;
                  &lt;div class=&quot;dashe_line_box &quot;
                  :class=&quot;getClassNameBy(item)&quot;
                  &gt;
                      &lt;div class=&quot;node_txt&quot;&gt;{{ item.name }} &lt;/div&gt;
                      &lt;div class=&quot;dashe_point&quot;&gt;&lt;/div&gt;
                      &lt;div class=&quot;dashe_line&quot;&gt;&lt;/div&gt;
                      &lt;div class=&quot;node_txt time&quot;&gt;
                        &lt;div class=&quot;l&quot;&gt;\u5904\u7406\u4EBA:&lt;/div&gt;
                        &lt;div class=&quot;r&quot;&gt;{{ item.process_man }} &lt;/div&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;node_txt time&quot;&gt;
                         &lt;div class=&quot;l&quot;&gt;\u5F00\u59CB\u65F6\u95F4:&lt;/div&gt;
                        &lt;div class=&quot;r&quot;&gt;{{ item.process_startTime }} &lt;/div&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;node_txt time&quot;&gt;
                         &lt;div class=&quot;l&quot;&gt;\u7ED3\u675F\u65F6\u95F4:&lt;/div&gt;
                        &lt;div class=&quot;r&quot;&gt;{{ item.process_endTime }} &lt;/div&gt;
                      &lt;/div&gt;
                 &lt;/div&gt;
               
                &lt;/template&gt;
             &lt;/main&gt;
            &lt;/div&gt;
            
            
        &lt;/div&gt;


</code></pre>
<h3>scss \u7ED3\u6784</h3>
<pre><code class="language-scss">@mixin flexStyle($align-items:unset, $justify-content:unset) {
  display: flex;
  align-items: $align-items;
  justify-content: $justify-content;
}


// U\u578B\u6D41\u7A0B\u4FE1\u606F\u7EC4\u4EF6\u6837\u5F0F
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

    &amp;.noneHighlight {
      --activeColor: #A0ACAB;
      --activeColorAlpha: rgba(160,172,171,0.3);
    }

    &amp;.stopList {
      &amp;:before, &amp;:after {
        content: unset !important
      }
      .dashe_line {
        border-color: transparent
      }
    }

    position: relative;
    width: 187px;
    height: 100%;
    &amp;.assBorderLeft {
      &amp;:before {
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


    &amp;.assBorderRight {

      &amp;:after {
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

      &amp;.time {
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
      &amp;:before {
        position: absolute;
        left: -50%;
        top: -50%;
        content: &quot;&quot;;
        width: var(--size);
        height: var(--size);
        background: var(--activeColorAlpha);
        border-radius: var(--bR);
      }
    }
  }
} 

</code></pre>
<h3>vue</h3>
<pre><code class="language-js">
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
          isActive: true, // \u51B3\u5B9A\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u9AD8\u4EAE\u72B6\u6001
          // OpeningDirection: false, // \u5F00\u53E3\u65B9\u5411
          process_man: 'xxxx',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
        },
        {
          name: 'xxxxx',
          process_man: '\u5904\u7406\u4EBA',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // \u51B3\u5B9A\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u9AD8\u4EAE\u72B6\u6001
          // OpeningDirection: false, // \u5F00\u53E3\u65B9\u5411
        },


        {
          name: 'xxxxx',
          process_man: '\u5904\u7406\u4EBA',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // \u51B3\u5B9A\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u9AD8\u4EAE\u72B6\u6001
          OpeningDirection: 'right', // \u5F00\u53E3\u65B9\u5411
        },

        {
          name: 'xxxx',
          process_man: '\u5904\u7406\u4EBA',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // \u51B3\u5B9A\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u9AD8\u4EAE\u72B6\u6001
        },
        {
          name: 'xxxxx',
          process_man: '\u5904\u7406\u4EBA',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // \u51B3\u5B9A\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u9AD8\u4EAE\u72B6\u6001
        },
        {
          name: '(xxxx)',
          process_man: '\u5904\u7406\u4EBA',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // \u51B3\u5B9A\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u9AD8\u4EAE\u72B6\u6001
        },

        {
          name: '(xxxxx)',
          process_man: 'xxx',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // \u51B3\u5B9A\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u9AD8\u4EAE\u72B6\u6001
          OpeningDirection: 'left', // \u5F00\u53E3\u65B9\u5411
        },

        {
          name: 'xxxx',
          process_man: 'xxxx',
          process_startTime: '2024-09-14 06:00:00',
          process_endTime: '2024-09-14 06:00:00',
          isActive: true, // \u51B3\u5B9A\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u9AD8\u4EAE\u72B6\u6001
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




// \u6838\u5FC3\u65B9\u6CD5 TODO \u5F85\u5B8C\u5584 (\u5904\u7406\u6210\u60F3\u8981\u7684\u8282\u70B9\u6570\u636E)

const nodeProcess = (arr) =&gt; {
  let jumpNum = 3;
  let jumpArray = [];
  // \u5F00\u53E3\u65B9\u5411
  let dir = [&quot;right&quot;, &quot;left&quot;];
  let dirIndex = 0;

  for (let i = 0; i &lt; arr.length; i += jumpNum) {
    jumpArray.push(arr.slice(i, i + jumpNum));
  }
  for (let i = 0; i &lt; jumpArray.length; i++) {
    // \u4E0D\u591F3\u4E2A\u8981\u524D\u63D2\u5165\u6570\u636E
    if (jumpArray[i].length &lt; jumpNum) {
      for (let j = 0; j &lt;= jumpNum - jumpArray[i].length; j++) {
        let o = Object.assign({}, {
          isOpacityZero: true,
        }, {
          // \u62FF\u6709\u6570\u636E\u7684\u5185\u5BB9\u8FDB\u884C\u586B\u5145
          ...jumpArray[i][jumpArray[i].length - 1],
        });
        jumpArray[i].push(o);
      }

      jumpArray[i].reverse();
    }

    let next = jumpArray[i + 1];
    if (next) {
      // \u6570\u7EC4\u4E2D\u7684\u6700\u540E\u4E00\u4E2A
      let last = jumpArray[i][jumpArray[i].length - 1];
      last.openDir = dir[dirIndex];

      dirIndex += 1;
      if (dirIndex &gt; 1) {
        dirIndex = 0;
      }
    }
  }
  console.log(jumpArray);
};

let arr = [{
  node: &quot;5&quot;,
},
  {
    node: &quot;6&quot;,
  },
  {
    node: &quot;7&quot;,
  },
  {
    node: &quot;8&quot;,
  },
  {
    node: &quot;9&quot;,
  },
  {
    node: &quot;10&quot;,
  },
  {
    node: &quot;11&quot;,
  },
  {
    node: &quot;12&quot;,
  },
  {
    node: &quot;13&quot;,
  },
  {
    node: &quot;14&quot;,
  },
];
nodeProcess(arr);


</code></pre>
`;export{n as attributes,t as html};
