import { Particle } from "./particle.js";

export class Effect {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.particleArray = [];
    this.particle = new Particle();
    this.particleNumber = 100;
    this.cellSize = 20;
    this.rows;
    this.cols;
    this.flow = [];
    this.init();

    window.addEventListener("resize", (e) => {
      this.resizeBy(e.target.innerWidth, e.target.innerHeight);
    });
  }
  init() {
    this.rows = Math.floor(this.height / this.cellSize);
    this.cols = Math.floor(this.width / this.cellSize);
    this.flow = [];

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let angle = (Math.cos(x) + Math.sin(y)) * (Math.random() * 5);
        this.flow.push(angle);
      }
    }

    for (let i = 0; i < this.particleNumber; i++) {
      this.particleArray.push(new Particle(this));
    }
  }
  resizeBy(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = canvas.width;
    this.height = canvas.height;
  }
  update(delta) {
    this.particleArray.forEach((particle) => {
      particle.update(delta);
    });
  }
  draw(ctx) {
    this.particleArray.forEach((particle) => {
      particle.draw(ctx);
    });
    this.particle.draw(ctx);
  }
}
