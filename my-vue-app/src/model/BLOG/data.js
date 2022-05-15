/**
 *  WebSite: {
 *    SubTitle
 *  }
 * 
 */

const Template = function (o) {
  this.path = o.path
  this.name = o.name
  this.text = o.text
  this.time = o.time
  this.readTime = o.readTime
}

const skill = {
  bar: {
    ...new Template({
      path: 'playground',
      name: '惊呆!',
      text: '12313',
      time: 'Apr 31',
      readTime: '3 min'
    })
  },
  前端开发套路: {
    ...new Template({
      path: 'qian-duan-kai-fa',
      name: '前端开发套路',
      text: '前端开发套路',
      time: 'May 03',
      readTime: '15 min'
    })
  },
  Vue2vs3: {
    ...new Template({
      path: 'vue2-vs-vue3',
      name: 'vue2 与 vue3 上手感觉',
      text: 'vue2 vue3 上手感觉',
      time: 'May 03',
      readTime: '1 min'
    })
  },
  土发造炮: {
    ...new Template({
      path: 'JS-Async',
      name: '土发造炮-异步',
      text: '土发造炮-异步',
      time: 'May 09',
      readTime: '30 min'
    })
  }
}

const life = {
  上海疫情: {
    ...new Template({
      path: 'shang-hai-yi-qing',
      name: '上海疫情😢!',
      text: '上海疫情😢',
      time: 'Apr 31',
      readTime: '3 min'
    })
  },
  前端之路: {
    ...new Template({
      path: 'qian-duan-zhi-lu',
      name: '如何踏上这条前端路!',
      text: '如何踏上这条前端路',
      time: 'May 03',
      readTime: '未知'
    })
  },
  周日日记: {
    ...new Template({
      path: 'zhou-ri-ri-ji',
      name: '周日日记 🤷🏻‍♀️',
      text: '周日日记',
      time: 'May 08',
      readTime: '未知'
    })
  },

}


const data = {
  // 技能篇
  技能篇: [
    skill.土发造炮,
    skill.Vue2vs3,
    skill.前端开发套路,
    skill.bar,
  ],
  // 生活小记
  生活小记: [
    life.前端之路,
    life.上海疫情,
    life.周日日记,
  ],
  // 心灵鸡汤
  心灵鸡汤: {},
}


export default data