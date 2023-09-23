const { Circle, Square, Triangle } = require("../lib/shapes");

class Svg {
  constructor() {
    this.builtShape = '';
    this.builtText = '';
  }
  strcutureShape(shape) {
    this.builtShape = shape.renderShape();
  }
  structureText(text, color) {
    this.builtText = `<text x="145" y="123" font-size="55" text-anchor="middle" fill="${color}>${text}</text>`;
  }
  
  renderSvg() {
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${this.builtShape}
        ${this.builtText}
        </svg>`;
  }
}

module.exports = Svg;