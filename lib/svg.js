const {Circle, Square, Triangle} = require('../lib/shapes')


class Svg{
    constructor(){
        this.builtText = ''
        this.builtShape = ''
    }
    structureText(text,color){
        this.builtText = `<text x="145" y="123" font-size="55" text-anchor="middle" fill="${color}>${text}</text>`
    }
    strcutureShape(shape){
        this.builtShape = shape.renderShape()
    }
};

module.exports = Svg