const wordsMap = {
  rule: {
    自然码: {
      a: 'a | ',
      b: 'b |',
      c: 'c | iao',
      d: 'd | uang',
      e: 'e |',
      f: 'f | en',
      g: 'g | eng',
      h: 'h | ang',
      i: 'i | ch',
      j: 'j | an',
      k: 'k | ao',
      l: 'l | ai',
      m: 'm | ian',
      n: 'n | in',
      o: 'o | uo',
      p: 'p | un',
      q: 'q | iu',
      r: 'r | uan',
      s: 's | ong | iong',
      t: 't | ue',
      u: 'u | sh',
      v: 'zh | v | ui',
      w: 'w | ia | ua',
      x: 'x | ie',
      y: 'y | uai | ing',
      z:  'z | ei'
    }
  },
  // 简单模式
  EASYMODE: {
    秦: 'qn',
    孟: 'mg',
    孙: 'sp',
    李: 'li',
    周: 'vb',
    武: 'wu',
    郑: 'vg',
    王: 'wh',
  },
  组词: {
    赵钱: 'vkqm',
    熊猫: 'xsmk',
    盒子: 'hezi',
    海绵: 'hlmm',
    理想: 'lixd',
    爬虫: 'pais',
    小猫: 'xcmk',
  },
  单字母练习: {
    额: 'ee',
    啊: 'aa'
  }
}

export { 
  wordsMap
}