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
      path: 'bar',
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
  }
}


const data = {
  // 技能篇
  技能篇: [
    skill.bar,
    skill.前端开发套路,
    skill.Vue2vs3,
  ],
  // 生活小记
  生活小记: [
    life.上海疫情,
  ],
  // 心灵鸡汤
  心灵鸡汤: {},
}


export default data