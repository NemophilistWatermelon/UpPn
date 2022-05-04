const Template = function (o) {
  this.template = `<span class="${o.name}">${o.name}</span>`
}

const Tesu = function (o) {
  this.template = `<span class="${o.orginClass}">${o.orginTxt}</span>`
}


const getTemplateBy = function (obj) { 
  var o = {
    name: obj.name
  }

  if (obj?.teshu) { 
    return new Tesu(obj).template
  }
  return new Template(obj).template
}

const matchArray = function () {
  var match = [
    'switch',
    'Vue',
    'prototype',
    'import',
    'from',
    'case', 'log', 'function', 'console', 'let', 'const', 'if', 'else']
  var list = []
  match.forEach(item => { 
    list.push({
      key: item,
      reg: new RegExp(`${item}`, 'g'),
      template: getTemplateBy({
        name: item
      })
    })
  })
  list.push({
    key: '(',
    reg: /\(/g,
    template: getTemplateBy({
      name: '(',
      teshu: true,
      orginTxt: '(',
      orginClass: 'zkh'
    })
  },
    {
      key: ')',
      reg: /\)/g,
      template: getTemplateBy({
        name: ')',
        teshu: true,
        orginTxt: ')',
        orginClass: 'ykh'
      })
    },
    {
      key: '{',
      reg: /\{/g,
      template: getTemplateBy({
        name: '{',
        teshu: true,
        orginTxt: '{',
        orginClass: 'fun_zkh'
      })
    },
    {
      key: '}',
      reg: /\}/g,
      template: getTemplateBy({
        name: '}',
        teshu: true,
        orginTxt: '}',
        orginClass: 'fun_zkh'
      })
    },
    {
      key: '}',
      reg: /\}/g,
      template: getTemplateBy({
        name: '}',
        teshu: true,
        orginTxt: '}',
        orginClass: 'fun_zkh'
      })
    },
    {
      key: '.',
      reg: /([\.])/g,
      template: getTemplateBy({
        name: '.',
        teshu: true,
        orginTxt: '.'.match(/([\.])/g),
        orginClass: 'dot'
      })
    }
  ) 
  return list
}

export const markdown = function (html) {
  const keyword = matchArray()
  console.log(keyword)
  var s = html
  keyword.forEach(item => { 
    console.log(item)
    s = s.replace(item.reg, item.template)
  })
  console.log(s)
  
  return s
}