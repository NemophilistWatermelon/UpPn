# vue2 与 vue3 上手感觉
单说引入文件这一快 🐖
是真的不习惯

- vue2 + webpack
```js
  const xx = () => import('xxx)
```


- vue3 + vite
```js
  const xx = import.meta.glob('./某文件夹/*所有文件')
  // 得到的是一个对象
  const target = {
    './某文件夹/a.js': () => import('./某文件夹/a.js'),},
  }

  // 如何使用
  target['./某文件夹/a.js']

```