// it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes

class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color= (color);
    }
};


class Circle extends Shape {
    renderShape() {
        return `<circle cx="50%" cy="50%" r="50"  fill="green" />`
    }
};


class Square extends Shape {
    renderShape() {
        return `<rect x="50" height="200" width="200" fill="green" />`
    }
};


class Triangle extends Shape {
    renderShape() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="green" />`
    }
};


module.experts = {Circle, Square, Triangle}