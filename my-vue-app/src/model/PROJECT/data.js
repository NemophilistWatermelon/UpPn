import AdsIcon from './iconComponent/Ads.vue'
import Copy from './iconComponent/Copy.vue'
import Spider from './iconComponent/Spider.vue'
import Player from './iconComponent/Player.vue'
import PainStr from './iconComponent/PainStr.vue'

const Projects = reactive({
  pro: [
    {
      capName: 'Extions 插件:',
      capList: [
        {
          icon: AdsIcon,
          name: 'Chrome-Ads',
          desc: '一个百度搜索过滤广告插件',
          url: 'https://github.com/NemophilistWatermelon/chrome-ads'
        },
        {
          icon: Copy,
          name: 'Dscn-Web-Copy',
          desc: 'Dscn 网无登录拷贝内容',
          url: 'https://github.com/NemophilistWatermelon/DSCN-COPY-CODE'
        }
      ]
    },
    {
      capName: 'Spider for NodeJS:',
      capList: [
        {
          icon: Spider,
          name: '58 房产信息',
          desc: '用 Node.js 实现 爬取 58 房产信息',
          url: 'https://github.com/NemophilistWatermelon/58-Node-'
        },
        {
          icon: Player,
          name: 'Musicer',
          desc: '纯 ECMAScript 实现的音乐播放器',
          url: 'https://github.com/NemophilistWatermelon/music_player'
        }
      ]
    },
    {
    capName: 'Cool CSS:',
    capList: [
      {
        icon: PainStr,
        name: 'PainStr',
        desc: '封装的动态插入 CSS 样式, 通过循环插入样式, 慢慢插入 CSS 出现效果',
        url: 'https://github.com/NemophilistWatermelon/PaintStr'
      }
    ]
    },
  ]
})


export default Projects