<script setup>
  const canvas = ref(null)

  const Height = ref(document.documentElement.offsetHeight)
  const Width = ref(document.documentElement.offsetWidth)

  const Ball = function() {
    var o = {
      x: 60,
      y: 65,
      speedX: 5,
      speedY: 5,
      size: 8,
      angle:  Math.PI * 2,
      ballColor: 'rgb(127, 127, 127)'
    }

    o.update = function() {
      o.x += o.speedX
      o.y += o.speedY

      if (o.x + o.size < 0 || o.x + o.size > Width.value) {
        o.speedX = -o.speedX
      }
      if (o.y + o.size < 0 || o.y + o.size > Height.value) {
        o.speedY = -o.speedY
      }
    }

    return o
  }

  const ball = Ball()
  

  const DrawBall = function(ctx) {
    drawCircle(ball, ctx)
  }

  const drawCircle = function(o, ctx)  {
    ctx.beginPath()
    ball.update()
    ctx.arc(o.x, o.y, o.size, 0, Math.PI * 2, true);
    ctx.fillStyle = o.ballColor
    ctx.fill();
  }

  const clearCavas = function(canvas) {
    canvas.width = canvas.width
    canvas.height = canvas.height
  }

  const render = function(ctx) {
    clearCavas(ctx.canvas)
    DrawBall(ctx)
    requestAnimationFrame(() => {
      render(ctx)
    })
  }

  /* canvas 不能去通过 style 设置宽高, 影响绘制质量 */
  const setCanvas = function(o, canvas) {
    canvas.setAttribute("width", o.width + 'px')
    canvas.setAttribute("height", o.height + 'px')

  }

  onMounted(() => {
    const canvasDom = canvas.value
    const ctx = canvas.value.getContext('2d')
    canvas.value.style.width = Width.value
    setCanvas({
      width: Width.value, 
      height: Height.value
    }, canvasDom)
    DrawBall(ctx)
    render(ctx)
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