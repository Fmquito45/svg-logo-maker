class Svg {
  constructor() {
    this.builtShape = '';
    this.builtText = '';
  }
  structureShape(shape) {
    this.builtShape = shape.renderShape();
  }
  structureText(text, textColor) {
    this.builtText = `<text x="150" y="120" font-size="65" text-anchor="middle" fill="${textColor}">${text}</text>`;
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