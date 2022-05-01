class Game {
  constructor() {

  }

  static new() {
    return new this()
  }

  regisGameObject(o) { 
    o.update()
  }

  render() { 
    this.regisGameObject()
    
    requestAnimationFrame(_ => {
      this.render()
    })
  }
}