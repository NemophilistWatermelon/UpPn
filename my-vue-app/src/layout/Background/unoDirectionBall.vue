<script setup>
  const canvas = ref(null)

  const Height = ref(document.documentElement.offsetHeight)
  const Width = ref(document.documentElement.offsetWidth)

  const Game = function() {
    var o = {
      state: {},
      canvas: null,
      ctx: null,
    }
    const canvasDom = canvas.value
    const ctx = canvas.value.getContext('2d')
    o.ctx = ctx
    o.init = function() {
      o.canvas.width = Width.value
      o.canvas.height = Height.value
    }
    o.canvas = canvasDom
    /* 注册舞台对象, 数组 */
    o.regisState = function(state) {
      state.forEach(item => {
        o.state[item.name] = [item]
      })
    }
    /* 初始化舞台 */
    o.clearState = function() {
      o.canvas.width = o.canvas.width
      o.canvas.height = o.canvas.height
    }

    /* 画圆函数 */
    o.loadCircle = function(ball) {
      var ctx = o.ctx
      o.ctx.beginPath()
      ctx.arc(ball.x, ball.y, ball.size, 0, ball.angle, true);
      ctx.fillStyle = ball.color
      ctx.fill();
    }

    /* 渲染舞台 */
    o.render = function() {
      setInterval(() => {
        o.clearState()
        for (const key in o.state) {
          var item = o.state[key]
          item.forEach(state => {
            if (state.type === 'ball') {
              o.loadCircle(state)
              state.update()
            }
          
        })
        }
      }, 1000 / 60);
    }

    return o
  }

  const Ball = function() {
    var o = {
      x: 60,
      y: 65,
      type: 'ball',
      name: 'ball',
      speedX: 5,
      speedY: 5,
      size: 8,
      angle:  Math.PI * 2,
      color: 'rgb(127, 127, 127)'
    }

    o.move = function() {
      o.x += o.speedX
      o.y += o.speedY
    }

    o.update = function() {
      o.move()
      if (o.x + o.size < 0 || o.x + o.size > Width.value) {
        o.speedX = -o.speedX  
      }
      if (o.y + o.size < 0 || o.y + o.size > Height.value) {
        o.speedY = -o.speedY
      }
    }

    return o
  }


  onMounted(() => {
    canvas.value.style.width = Width.value
    const ball = Ball()
    const game = Game()
    game.init()
    game.regisState([ball])
    game.render()
  })
</script>


<template>
  <canvas ref="canvas" id="canvas"></canvas>
  <div ref="dic"></div>
</template>

<style scoped lang="scss">
  #canvas {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
</style>