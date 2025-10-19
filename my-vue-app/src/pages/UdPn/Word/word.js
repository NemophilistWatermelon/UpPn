
let keyMap = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
]
let exp_wordsMap = {
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
}
let wordsMap = {
  rule: {
    自然码: {}
  }
}

keyMap.forEach(item => {
  wordsMap.rule.自然码[item] = exp_wordsMap.rule.自然码[item]
})

console.log(wordsMap)

export default {
  wordsMap
}
