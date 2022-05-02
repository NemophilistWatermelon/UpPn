import AdsIcon from './iconComponent/Ads.vue'
import Copy from './iconComponent/Copy.vue'

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
    }
  ]
})


export default Projects