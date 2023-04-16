export class Particle {
  constructor(effect) {
    this.effect = effect;
    this.x = Math.floor(Math.random() * 2);
    this.y = Math.floor(Math.random() * 2);
    this.height = Math.random() * 5;
    this.width = Math.random() * 5;
    this.speedX = Math.random() * 2;
    this.speedY = Math.random() * 2;
    this.speed = Math.floor(Math.random() * 10);
    this.path = [{ x: this.x, y: this.y }];
    this.max = Math.floor(Math.random() * 200);
    this.angle = 0;
    this.timer = this.max * 2;
  }
  update(delta) {
    this.timer--;
    if (this.timer >= 1) {
      let x = Math.floor(this.x / this.effect.cellSize);
      let y = Math.floor(this.y / this.effect.cellSize);
      let index = y * this.effect.cols + x;
      this.angle = this.effect.flow[index];

      this.speedX = Math.cos(this.angle) * this.speed;
      this.speedY = Math.sin(this.angle) * this.speed;

      this.x += this.speedX * delta * this.speed;
      this.y += this.speedY * delta * this.speed;
      this.path.push({ x: this.x, y: this.y });

      if (this.path.length > this.max) {
        this.path.shift();
      }
    } else if (this.path.length > 1) {
      this.path.shift();
    } else {
      this.reset();
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fill();
    ctx.moveTo(this.path[0].x, this.path[0].y);

    for (let i = 0; i < this.path.length; i++) {
      ctx.lineTo(this.path[i].x, this.path[i].y);
    }
    ctx.stroke();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.path = [{ x: this.x, y: this.y }];
    this.timer = this.max * 2;
  }
}
