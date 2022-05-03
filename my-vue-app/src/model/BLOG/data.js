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
      time: 'Feb 19',
      readTime: '3 min'
    })
  }
}


const data = {
  // 技能篇
  技能篇: [
    skill.bar
  ],
  // 生活小记
  生活小记: {},
  // 心灵鸡汤
  心灵鸡汤: {},
}


export default data